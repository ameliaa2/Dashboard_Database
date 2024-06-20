"use client"
import React, { useState } from 'react';
import Modal from 'react-modal';

const DataProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const handleOpenPdf = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownloadPdf = () => {
    window.open(pdfUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="container flex justify-center items-center h-screen bg-[#A0937D]">
      <div className="classnya-container flex bg-white rounded-lg shadow-md h-full w-3/4">
        <div className="data-profile-container p-6 bg-[#E7D4B5] rounded-lg border-r border-gray-300 w-1/4">
          
          <div className="data-profile flex flex-col items-center">
            <div className="photo w-48 h-48 bg-[#B6C7AA] rounded-md flex justify-center items-start mb-2">
              <div className="foto text-lg font-bold">FOTO</div>
            </div>
            <div className="name text-lg font-bold">Nama</div>
            <div className="name-id text-lg font-bold">ID</div>
          </div>
        </div>
        <div className="buat-berkas-container flex-grow bg-[#F6E6CB] rounded-r-lg rounded-bl-lg flex justify-center items-start text-white text-xl font-bold rounded-bl-lg p-6">
        <div className="flex justify-center mb-4">
            <button
              className="text-base font-semibold leading-7 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4"
              onClick={() => handleOpenPdf('/ktp.pdf')}
            >
              KTP
            </button>
            <button
              className="text-base font-semibold leading-7 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4"
              onClick={() => handleOpenPdf('/ijazah.pdf')}
            >
              IJAZAH
            </button>
            <button
              className="text-base font-semibold leading-7 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              onClick={() => handleOpenPdf('/lisensi.pdf')}
            >
              LISENSI
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="PDF Viewer"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex flex-col items-start justify-center h-full">
          <h2 className="text-2xl font-bold mb-4">View PDF</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleDownloadPdf}
          >
            Open in New Tab
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  )
};

export default DataProfile;

