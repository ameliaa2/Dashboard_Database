"use client"

// import Link from "next/link"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalContent, Input, useDisclosure } from "@nextui-org/react";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { uploadLicenseDB } from "@/helpers/api";
const ItemLicense = ({ userData, license, type }) => {
    const [isOpenLicense, setIsOpenLicense] = useState(false)
    // const [pathLicense, setPathLicense] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState(null)
    const [dataUser, setDataUser] = useState({})
    const { isOpen, onOpen, onOpenChange, onDelete } = useDisclosure();
    useEffect(() => {
        setDataUser
    }, [userData])
    const openLicense = () => {
        setIsOpenLicense(!isOpenLicense)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsOpenLicense(false)
        // Reset the form fields when closing the modal
        setFileName('')
        setFile(null)
    }
    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }
    const handleSubmit = async () => {
        if (!file) return; // Pastikan file telah dipilih

        var formdata = new FormData();
        formdata.append("files", file);

        const getFileName = file.name;
        const excludeExtension = getFileName.split('.');
        const date = new Date();
        // const formattedName = `${excludeExtension[0]}_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.pdf`;
                const formattedName = `${excludeExtension[0]}.pdf`;

        var requestOptions = { method: 'POST', body: formdata };

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uploadLicense`, requestOptions);
        if (response.ok) {
            const result = await response.text();
            const pathLicense = `/assets/pdf/lisensi/${formattedName}`;
            const responseLicense = await uploadLicenseDB(dataUser.id, license.name, fileName, pathLicense);
            if (responseLicense) {
                setDataUser(responseLicense);
                console.log('Response license: ', responseLicense);
            }
            console.log(result);
        }

        closeModal();
    }
    // const handleUpdateFile = (event)=>{
    //     const updateDb = async()=>{
    //         await uploadLicense(dataUser.id,license.name,fileName,pathLicense)
    //     }
    //     updateDb()
    //     handleUploadFileLicense(event.target)
    // }

    // const handleSubmit = () => {
    //     // Handle the file upload and name change logic here
    //     console.log('File Name:', fileName)
    //     console.log('Uploaded File:', file)

    //     // Close the modal after submission
    //     closeModal()
    // }

    console.log('ini license di itemLicense', license)

    return (
        <>
            {/* {type === 'profile' &&
                <div className="w-full flex flex-row justify-between">
                    <p>{license.name}</p>
                    <button onClick={openLicense}>
                        {isOpenLicense ? (<ChevronUp />) : (<ChevronDown />)}
                    </button>
                </div >
            } */}

            {type === 'update' &&
                <div className="w-full flex flex-row items-center justify-between">
                    <p>{license.name}</p>
                    <Dropdown className=" bg-gray-100">
                        <DropdownTrigger>
                            <Button variant="bordered">
                                <DotsThreeVertical size={24} />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Link Actions">
                            {isOpenLicense ? (
                                <DropdownItem onClick={openLicense}>
                                    Close Document
                                </DropdownItem>
                            ) : (
                                <DropdownItem onClick={openLicense}>
                                    View Document
                                </DropdownItem>
                            )}
                            <DropdownItem onPress={onOpen}>
                                Update Document
                            </DropdownItem>
                            <DropdownItem onPress={onDelete}>
                                Delete Document
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div >
            }
            {isOpenLicense &&
                <>
                    <div className="z-20 pt-3">
                        {license.pathlicense ? (
                            // <iframe src="/assets/pdf/lisensi/117960_2017_FATHUDDIEN ARIEF_OSH Confined Space Officer_Utama_KEMENAKER.pdf" frameBorder="0" height="400" width="100%" className='rounded' />
                            <iframe src={`${license.pathlicense}`} frameBorder="0" height="400" width="100%" className='rounded' />
                        ) : (<>
                            <div className='w-full h-[30vh] flex items-center justify-center bg-gray-500 rounded-lg'>
                                <h3 className='font-xl font-sans font-semibold text-white' >NO DATA</h3>
                            </div>
                        </>)}
                    </div>
                </>
            }
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <div className="text-2xl font-bold text-gray-800">Update Document</div>
                            </ModalHeader>
                            <ModalBody>
                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="fileName">
                                        Ganti Nama File
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                        type="text"
                                        id="fileName"
                                        placeholder="Masukkan nama file baru"
                                        value={fileName}
                                        onChange={(e) => setFileName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="fileUpload">
                                        Upload File Baru
                                    </label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                        type="file"
                                        id="fileUpload"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                        onClick={onClose}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                        onClick={handleSubmit}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ItemLicense