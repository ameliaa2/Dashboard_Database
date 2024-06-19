//import Image from "next/image";


//Export default tuh cuman boleh sekali doang
//export default function Admin() {
  //return (
  //<div>
  //  Ini Halaman Admin
  //</div>
 // );
//}
'use client';
import React, { useState } from 'react';

const AddProfil = () => {
  const [formData, setFormData] = useState({
    ktp: null, 
    foto: null,
    ijazah: null,
    lisensi: null,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('/api/addProfil', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log('Profile created successfully!');
        // Handle success (e.g., show message, redirect)
      } else {
        console.error('Error creating profile:', response.status);
        // Handle errors
      }
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <div>
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (other input fields) */}
        <div>
          <label htmlFor="lisensi">Lisensi (PDF):</label> 
          <input type="file" id="lisensi" name="lisensi" accept=".pdf" onChange={handleChange} />
        </div> {/* Close the div here */}
        {/* Add a submit button */}
        <button type="submit">Submit</button> 
      </form> {/* Close the form */}
    </div> 
  );
};
export default AddProfil;