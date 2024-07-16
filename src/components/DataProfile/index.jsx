"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { FileUp } from "lucide-react"
import { uploadKtp, uploadIjazah } from '@/helpers/api';
// import Modal from 'react-modal';

const DataProfile = ({ data }) => {
    console.log('ini data dari page', data)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isKtpOpen, setIsKtpOpen] = useState(true);
    const [isIjazahOpen, setIsIjazahOpen] = useState(false);
    const [isLicenseOpen, setIsLicenseOpen] = useState(false);
    const [dataUserLicense, setDataUserLicense] = useState(null);
    // const [fileName, setFileName] = useState(null);
    const [dataUser, setDataUser] = useState({});
    useEffect(() => {
        if (data) {
            setDataUser(data);
        }
    }, [data]);
    useEffect(() => {
        setDataUserLicense(dataUser.license)
    }, [dataUser])
    console.log('ini daatauser', dataUser)
    const [docs, setDocs] = useState([]);
    const handleKtpOpen = () => {
        setIsKtpOpen(true)
        setIsIjazahOpen(false)
        setIsLicenseOpen(false)
    }
    const handleIjazahOpen = () => {
        setIsKtpOpen(false)
        setIsIjazahOpen(true)
        setIsLicenseOpen(false)
    }
    const handleLicenseOpen = () => {
        setIsKtpOpen(false)
        setIsIjazahOpen(false)
        setIsLicenseOpen(true)
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDoc(null); // Clear selected document
    };
    const handleOpenInNewTab = () => {
        if (selectedDoc) {
            window.open(selectedDoc.uri, '_blank');
        } else {
            console.error('No document selected to open.'); // Handle no selected document
        }
    };
    const handleUploadFileKtp = async (fileInput) => {
        var formdata = new FormData();
        formdata.append("files", fileInput.files[0]);
        console.log('ini form data ', fileInput.files[0])
        const getFileName = fileInput.files[0].name
        const excludeExtension = getFileName.split('.')
        const date = new Date()
        const formattedName = `${excludeExtension[0]}_${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.pdf`
        // setFileName(formattedName)
        var requestOptions = { method: 'POST', body: formdata };
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uploadKtp`, requestOptions);
        if (response.ok) {
            const result = await response.text();
            const pathktp = `/assets/pdf/ktp/${formattedName}`
            const responseKtp = await uploadKtp(dataUser.id, pathktp)
            if (responseKtp) {
                setDataUser(responseKtp)
                console.log('ini response ktp ', responseKtp)
            }
            console.log(result);
        }
    }
    const handleUploadFileIjazah = async (fileInput) => {
        var formdata = new FormData();
        formdata.append("files", fileInput.files[0]);
        console.log('ini form data ', fileInput.files[0])
        const getFileName = fileInput.files[0].name
        const excludeExtension = getFileName.split('.')
        const date = new Date()
        const formattedName = `${excludeExtension[0]}_${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.pdf`
        // setFileName(formattedName)
        var requestOptions = { method: 'POST', body: formdata };
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uploadIjazah`, requestOptions);
        if (response.ok) {
            const result = await response.text();
            const pathijazah = `/assets/pdf/ijazah/${formattedName}`
            const responseIjazah = await uploadIjazah(dataUser.id, pathijazah)
            if (responseIjazah) {
                setDataUser(responseIjazah)
                console.log('ini response ktp ', responseIjazah)
            }
            console.log(result);
        }
    }

    return (
        <div className="w-full flex justify-center min-h-[90vh] py-10">
            <div className="flex flex-row flex-wrap rounded-lg w-3/4 gap-x-3 gap-y-3">
                <div className="shadow-md flex flex-col items-center p-6 bg-gray-200 rounded border-r border-gray-300 lg:w-1/4 md:w-4/4">
                    <div className="photo w-48 h-48 bg-[#B6C7AA] rounded flex justify-center items-center mb-2">
                        <div className="foto text-lg font-bold">FOTO</div>
                    </div>
                    <p className="name text-lg font-bold">{dataUser.name}</p>
                    <p className="name-id text-lg font-bold">{dataUser.id}</p>
                </div>
                <div className="shadow-md flex-grow bg-gray-200 rounded text-white text-xl font-bold rounded-bl-lg p-6">
                    <div className="flex justify-start gap-x-1 mb-2">
                        <button
                            className={`font-semibold text-sm ${isKtpOpen ? 'bg-gray-700 px-3' : 'bg-gray-500 px-2'} text-gray-100 p-1 hover:shadow-xl`}
                            onClick={handleKtpOpen}
                        >
                            KTP
                        </button>
                        <button
                            className={`font-semibold text-sm ${isIjazahOpen ? 'bg-gray-700 px-3' : 'bg-gray-500 px-2'} text-gray-100 p-1 hover:shadow-xl`}
                            onClick={handleIjazahOpen}
                        >
                            IJAZAH
                        </button>
                        <button
                            className={`font-semibold text-sm ${isLicenseOpen ? 'bg-gray-700 px-3' : 'bg-gray-500 px-2'} text-gray-100 p-1 hover:shadow-xl`}
                            onClick={handleLicenseOpen}
                        >
                            LISENSI
                        </button>
                    </div>
                    {isKtpOpen && (
                        <>
                            {dataUser.pathktp && dataUser.pathktp !== "" ?
                                (<>
                                    <div classnaame="z-20">
                                        <iframe src={dataUser.pathktp} height="400" width="100%" className='rounded' />
                                        {/* <iframe src="/assets/pdf/ktp/KTP - Fathuddien Arief.pdf" height="400" width="100%" className='rounded' /> */}
                                    </div>
                                </>) : (<>
                                    <div className='flex flex-col items-center h-full gap-y-1 justify-center'>
                                        <label
                                            htmlFor="file"
                                            onClick={() => document.getElementById('file').click()}
                                        // onClick={(e)=>{handleUploadFileKtp(e.target)}}
                                        // className='rounded-md bg-gray-500 hover:bg-gray-700 w-fit shadow-lg'
                                        >
                                            <div className='flex flex-col items-center gap-y-1 p-2 hover:cursor-pointer'>
                                                <FileUp size={50} className='text-gray-500' />
                                                <p className='text-center text-gray-500 text-sm'>Upload File</p>
                                            </div>
                                        </label>
                                        <input id="file" type="file" accept=".pdf" className=' hidden'
                                            onChange={(e) => { handleUploadFileKtp(e.target) }} />
                                    </div>
                                </>)
                            }
                        </>
                    )}
                    {isIjazahOpen && (
                        <>
                            {dataUser.pathijazah ?
                                (
                                    <div classnaame="z-20">
                                        <iframe src={dataUser.pathijazah} height="400" width="100%" className='rounded' />
                                    </div>
                                ) : (
                                    <div className='flex flex-col items-center h-full gap-y-1 justify-center'>
                                        <label
                                            htmlFor="file"
                                            onClick={() => document.getElementById('file').click()}
                                        // className='rounded-md bg-gray-500 hover:bg-gray-700 w-fit shadow-lg'
                                        >
                                            <div className='flex flex-col items-center gap-y-1 p-2 hover:cursor-pointer'>
                                                <FileUp size={50} className='text-gray-500' />
                                                <p className='text-center text-gray-500 text-sm'>Upload File</p>
                                            </div>
                                        </label>
                                        <input id="file" type="file" accept=".pdf" className=' hidden'
                                            onChange={(e) => { handleUploadFileIjazah(e.target) }} />
                                    </div>
                                )
                            }
                        </>
                    )}
                    {/* {isKtpOpen &&
            <div classnaame="z-20">
              <iframe src="/assets/pdf/ktp/KTP - Fathuddien Arief.pdf" height="400" width="100%" className='rounded' />
            </div>
          } */}
                    {/* {data.ijazah ?
            (
              <>
                {isIjazahOpen &&
                  <div classnaame="z-20">
                    <iframe src="/assets/pdf/ijazah/Ijazah-FathuddienArief.pdf" height="400" width="100%" className='rounded' />
                  </div>
                }
              </>
            ) : (<></>)
          } */}
                    {/* {isIjazahOpen &&
            <div classnaame="z-20">
                <iframe src="/assets/pdf/ijazah/Ijazah-FathuddienArief.pdf" height="400" width="100%" className='rounded' />
            </div>
          } */}
                    {isLicenseOpen && (
                        <>
                            {dataUser.license.length >= 0 ? (
                                <div className='text-black'>
                                    <ol className='list-decimal'>
                                        {dataUserLicense.map((license, index) => (
                                            <li key={index} className='flex justify-between'>
                                                <p>{license.name}</p>
                                                <Link href={`/profile/${dataUser.id}/license`}>View License</Link>
                                            </li>
                                        ))}
                                        {/* <li className='flex justify-between'>
                                        <p>{dataUser.license[0].name}</p>
                                        <Link href="/profile/sadfasd/license">View License</Link>
                                    </li> */}
                                        {/* <li className='flex justify-between'>
                                        <p>Mobile Developer</p>
                                        <Link href="/profile/sadfasd/license">View License</Link>
                                    </li> */}
                                    </ol>
                                </div>
                            ) : (
                                <>NO DATA</>
                            )}
                        </>
                    )}
                    {/* {isLicenseOpen &&
                        <div className='text-black'>
                            <ol className='list-decimal'>
                                <li className='flex justify-between'>
                                    <p>Web Developer</p>
                                    <Link href="/profile/sadfasd/license">View License</Link>
                                </li>
                                <li className='flex justify-between'>
                                    <p>Mobile Developer</p>
                                    <Link href="/profile/sadfasd/license">View License</Link>
                                </li>
                            </ol>
                        </div>
                    } */}
                    {isModalOpen && selectedDoc && ( // Only render modal if open and document is selected
                        <div className="modal">
                            <div className="modal-content">
                                <iframe src={selectedDoc.uri} height="400" width="100%" className="rounded-lg" />
                                <div className="modal-actions">
                                    <button className="btn btn-secondary" onClick={handleCloseModal}>
                                        Close
                                    </button>
                                    <button className="btn btn-primary" onClick={handleOpenInNewTab}>
                                        Open in New Tab
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DataProfile;
{/* <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="PDF Viewer"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleOpenInNewTab}
              >
                Open in New Tab
              </button>
            </div>
          </Modal> */}
{/* Modal for displaying PDF */ }
//const DataProfile = () => {
//  const [isModalOpen, setIsModalOpen] = useState(false);
//  const [pdfUrl, setPdfUrl] = useState('');
// const [docs, setDocs] = useState([]);
//  const docs = [
// { uri: "https://url-to-my-pdf.pdf" }, // Remote file
//    { uri: require("@/assets/pdf/ijazah/Ijazah-FathuddienArief.pdf")} // Local File
// { uri: require("./Ijazah-FathuddienArief.pdf")} // Local File
//  ];
// const handleOpenPdf = (url) => {
//   if (url.startsWith('http')) {
//     setDocs([{ uri: url }]);
//   } else {
//     setDocs([{ uri: `/pdf/${url}` }]);
//   }
//   setIsModalOpen(true);
// };

// const handleCloseModal = () => {
//   setIsModalOpen(false);
// };

// const handleDownloadPdf = () => {
//   window.open(pdfUrl, '_blank');
//   setIsModalOpen(false);
// };