'use client';
import React, { useState } from 'react';
import { UploadSimple } from '@phosphor-icons/react';
import Button from '@nextui-org/react';

const FileUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json
          ();
        onUpload(data.filePath); // Pass the file path to the parent component
      } else {
        console.error('Error uploading file:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  return (
    <div className='mb-3 flex flex-row justify-end'>
      <label
        htmlFor="file"
        className='rounded-md bg-gray-500 hover:bg-gray-700 w-fit shadow-lg'
      >
        <div className='flex flex-row gap-x-2 p-2 hover:cursor-pointer'>
          Select File
          <UploadSimple size={24} color='white' />
        </div>
      </label>
      <input id="file" type="file" accept=".pdf" className=' hidden' onChange={handleFileChange} />
    </div>
  );
};
export default FileUpload;