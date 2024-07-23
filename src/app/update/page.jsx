"use client"
import React, { useState } from 'react';
import Link from "next/link"
// import Modal from 'react-modal';
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3153789399.
import UpdateFile from '@/components/UpdateFile'
import Navbar from '@/components/Navbar'

const UpdateProfile = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isKtpOpen, setIsKtpOpen] = useState(true);
  const [isIjazahOpen, setIsIjazahOpen] = useState(false);
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);
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
  const handleOpenPdf = (docType) => {
    let pdfUrl;
    switch (docType) {
      case 'ktp':
        pdfUrl = KTP; // Replace with your actual KTP URL
        break;
      case 'ijazah':
        pdfUrl = Ijazah; // Replace with your actual Ijazah URL
        break;
      case 'lisensi':
        pdfUrl = Lisensi; // Replace with your actual Lisensi URL
        break;
      default:
        pdfUrl = '';
    } if (pdfUrl) {
      setSelectedDoc({ uri: pdfUrl }); // Set selected document for modal
      setIsModalOpen(true);
    } else {
      console.error('PDF URL not found for document type:', docType); // Handle missing URL
    }
  };

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
  return (
    <div className="w-full flex justify-center min-h-[90vh] py-10 bg-[#A0937D]">
      <div className="flex flex-row flex-wrap rounded-lg shadow-md w-3/4 gap-x-3 gap-y-3">
        <div className="data-profile flex flex-col items-center p-6 bg-[#E7D4B5] rounded-lg border-r border-gray-300 lg:w-1/4 md:w-4/4">
          <div className="photo w-48 h-48 bg-[#B6C7AA] rounded-md flex justify-center items-center mb-2">
            {/* <img scr ="/assets/pdf/foto/Pas Foto - Fathuddien Arief.pdf" alt="foto" width="100%" /> */}
            <iframe src="/assets/pdf/foto/Pas Foto - Fathuddien Arief.pdf" className=" overflow-y-hidden" frameborder="0" width="100%"></iframe>
          {/* <div className="foto text-lg font-bold">FOTO</div> */}
          </div>
          <div className="name text-lg font-bold">Nama</div>
          <div className="name-id text-lg font-bold">ID</div>
        </div>
        <div className="buat-berkas-container flex-grow bg-[#F6E6CB] rounded-lg text-white text-xl font-bold rounded-bl-lg p-6">
          <div className="flex justify-center mb-4">
            <button
              className="text-base font-semibold leading-7 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4"
              onClick={() => handleKtpOpen()}
            >
              KTP
            </button>
            <button
              className="text-base font-semibold leading-7 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4"
              onClick={() => handleIjazahOpen()}
            >
              IJAZAH
            </button>
            <button
              className="text-base font-semibold leading-7 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              onClick={() => handleLicenseOpen()}
            >
              LISENSI
            </button>
          </div>
          {isKtpOpen &&
            <div classnaame="z-20">
              <UpdateFile />
              <iframe src="/assets/pdf/ktp/KTP - Fathuddien Arief.pdf" height="400" width="100%" className='rounded-lg' />
            </div>
          }
          {isIjazahOpen &&
            <div classnaame="z-20">
              <UpdateFile />
              <iframe src="/assets/pdf/ijazah/Ijazah-FathuddienArief.pdf" height="400" width="100%" className='rounded-lg' />
            </div>
          }
          {isLicenseOpen &&
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
          }
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

export default UpdateProfile;    