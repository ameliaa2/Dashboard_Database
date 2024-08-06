'use client';
import React, { useState, useEffect } from 'react';
import * as XLSX from "xlsx"
import { validateDepartemen, validateTeam, validateLicense, insertData } from '@/helpers/api';
const AddData = ({uploadDone}) => {
  const typeFiles = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'text/csv']
  const [excelFile, setExcelFile] = useState(null)
  const [typeError, setTypeError] = useState(null)
  const [excelData, setExcelData] = useState(null)

  const handleFile = (e) => {
    e.preventDefault()
    const selectedFile = e.target.files[0]
    if (selectedFile && typeFiles.includes(selectedFile.type)) {
      setTypeError(null)
      let reader = new FileReader()
      reader.readAsArrayBuffer(selectedFile)
      reader.onload = (e) => { setExcelFile(e.target.result) }
    } else {
      setTypeError('Please only select excel type')
      setExcelFile(null)
    }
  }
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      // setExcelData(data);
      setExcelData(data);
    }
  }
  const validateDepartemenTeamLicense = async (dataForCreateDepartemen, dataForCreateTeam, dataForCreateLicense)=>{
    await validateDepartemen(dataForCreateDepartemen)
    await validateTeam(dataForCreateTeam)
    await validateLicense(dataForCreateLicense)
  }
  const insertDataFromExcel = async(excelData)=>{
    await insertData(excelData)
  }
  useEffect(() => {
    console.log(excelData)
    if(excelData !== null){
      let dataForCreateDepartemen = []
      excelData.forEach((item)=>{
        const dept = item.Dept ? item.Dept : '';
        if(!dataForCreateDepartemen.includes(dept)){
          dataForCreateDepartemen.push(dept)
        }        
      })
      let dataForCreateTeam =[] 
      excelData.forEach((item)=>{
        if(!dataForCreateTeam.includes(item.Team)){
          dataForCreateTeam.push(item.Team)
        }        
      })
      let dataForCreateLicense =[] 
      excelData.forEach((item)=>{
        if(!dataForCreateLicense.includes(item.CertificationName)){
          dataForCreateLicense.push(item.CertificationName)
        }        
      })
      validateDepartemenTeamLicense(dataForCreateDepartemen, dataForCreateTeam, dataForCreateLicense)
      insertDataFromExcel(excelData)
      uploadDone()
      console.log('ini Departemen',dataForCreateDepartemen)
      console.log('ini Team',dataForCreateTeam)
      console.log('ini License',dataForCreateLicense)
    }
  }, [excelData])
  console.log('ini excel data',excelData)
  return (
    <>
      <form action="" onSubmit={handleSubmitFile} className='flex flex-col space-y-4'>
        <input type="file" onChange={handleFile} />
        <div className='flex'>
          {typeError ?(<></>):(
            <button type="submit" className='w-full p-3 bg-green-500 rounded-lg text-white hover:shadow-xl hover:bg-green-700'>Submit</button>
          )}
        </div>
      </form>
      {typeError ? (<div>{typeError}</div>):(<></>)  
      }
    </>
  );
}
export default AddData;