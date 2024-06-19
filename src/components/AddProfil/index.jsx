'use client';
import React, { useState } from 'react';
import Button from '@nextui-org/react';

const AddAdmin = () => {
  const [formData
    , setFormData] = useState({
      ktp: null,
      foto: null,
      ijazah: null,
      lisensi: null,
    });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e
        .target.files[0]
    });
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
        console.log('Admin created successfully!');
        // Handle success (e.g., show message, redirect)
        setFormData({ // Reset form setelah berhasil
          ktp: null,
          foto: null,
          ijazah: null,
          lisensi: null,
        });
      } else {
        console.error('Error creating admin:', response.status);
        // Handle errors
      }
    } catch (error) {
      console.error('Error creating admin:', error);
    }
  };

  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">Add New Profile</h2>
      <div class="flex items-center justify-center min-h-fit">
        <div class="addprofil-form bg-white p-6 rounded-lg shadow-md">
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
            <button class="bg-indigo-500 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium" type="submit">Submit</button>
          </form>
          {showMessage && <p> halo</p>}
        </div>
      </div>
    </div>
  );
}
export default AddAdmin;