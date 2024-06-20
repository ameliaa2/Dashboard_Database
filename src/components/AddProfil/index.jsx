'use client';
import React, { useState } from 'react';
import Button from '@nextui-org/react';
import { XCircle } from 'lucide-react';


const AddAdmin = () => {
  const [formData
    , setFormData] = useState({
      ktp: null,
      foto: null,
      ijazah: null,
      lisensi: null,
    });
  const [showMessage, setShowMessage] = useState(false);
  const [responseMessage, setResponseMessage] = useState('')

  const [openModal, setOpenModal] = useState(false); // State untuk mengontrol modal
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e
        .target.files[0]
    });
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowMessage(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('/api/addAdmin', { // Ganti endpoint sesuai kebutuhan
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        console.log('Admin created successfully!');
        // Handle success (e.g., show message, redirect)
        setFormData({ // Reset form setelah berhasil
          ktp: null,
          foto: null,
          ijazah: null,
          lisensi: null,
        });
        handleCloseModal(); // Tutup modal setelah berhasil
      } else {
        setResponseMessage('Error creating profile: ' + response.status);
        console.error('Error creating admin:', response.status);
        // Handle errors
        setShowMessage(true);
      }
    } catch (error) {
      setResponseMessage('Error creating profile: ' + error.message);
      setShowMessage(true);
      console.error('Error creating admin:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-end pr-4">
        <button onClick={handleOpenModal} className="text-base font-semibold leading-7  bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">
          Add New Profile
        </button>
      </div>
      {openModal && ( // Tampilkan modal jika openModal true
        <div className="z-20 min-w-[100vw] fixed top-0 left-0 right-0 min-h-screen flex items-center justify-center  bg-white/50 backdrop-blur-md">
          <div className="addprofil-form bg-white p-6 rounded-lg shadow-xl">
            <div className="flex justify-end">
              <button onClick={handleCloseModal}>
                <XCircle size={24} className='text-gray-500' />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="ktp" className="block text-sm font-medium leading-6 text-gray-700">KTP (.pdf):</label>
                <input type="file" id="ktp" name="ktp" accept=".pdf" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="foto" className="block text-sm font-medium leading-6 text-gray-700">Pass Foto (.pdf):</label>
                <input type="file" id="foto" name="foto" accept=".pdf" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="ijazah" className="block text-sm font-medium leading-6 text-gray-700">Ijazah (.pdf):</label>
                <input type="file" id="ijazah" name="ijazah" accept=".pdf" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="lisensi" className="block text-sm font-medium leading-6 text-gray-700">Lisensi (.pdf):</label>
                <input type="file" id="lisensi" name="lisensi" accept=" .pdf" onChange={handleChange} />
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium text-white" type="submit">Submit</button>
            </form>
            {showMessage && <p>{responseMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
export default AddAdmin;