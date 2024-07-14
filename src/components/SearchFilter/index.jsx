"use client"
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { fetchListDepartemen, fetchListLicense, fetchListTeam } from '@/helpers/api';

const SearchFilter = ({ onFiltersChange }) => {
  const [isClient, setIsClient] = useState(false);
  const [listDepartemen, setListDepartemen] = useState([]);
  const [listLicense, setListLicense] = useState([]);
  const [listTeam, setListTeam] = useState([]);
  const listCategory=[
    { value: 'Certification', label: 'Certification' },
    { value: 'Re-Certification', label: 'Re-Certification' }
  ];

  useEffect(() => {
    setIsClient(true);
    const fetchData = async () => {
      const fetchDepartemen = await fetchListDepartemen()
      const fetchLicense = await fetchListLicense()
      const fetchTeam = await fetchListTeam()
      setListTeam(fetchTeam)
      setListDepartemen(fetchDepartemen)
      setListLicense(fetchLicense)
    }
    fetchData()
  }, []);
  useEffect(()=>{
    console.log('list departemen', listDepartemen)
  },[listDepartemen])
  const [filters, setFilters] = useState({
    iduser: '',
    name: '',
    iddepartemen: '',
    idteam: '',
    idlicense: '',
    issuedyear: '',
    expiredyear: '',
    category: '',  //baru ditambahin
  });
  const handleFilterChange = (e) => {
    const { name, value } = e.target || e;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };
  const handleSubmit = () => {
    onFiltersChange(filters);
  }
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '42px',  // Atur tinggi minimum
      height: '42px',     // Atur tinggi
      boxShadow: state.isFocused ? null : null,
    })
  };
  return (
    <>
      {isClient && (
        <div className="bg-gray-300">
          <h2 className="text-xl font-bold py-3 px-5 text-white bg-gray-500 rounded-t-lg">Search by</h2>
          <div className="bg-white shadow-md rounded-b-lg p-6 w-full">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label htmlFor="iduser" className="block font-medium mb-2">
                  ID
                </label>
                <input
                  type="text"
                  id="iduser"
                  name="iduser"
                  value={filters.iduser}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <p className="font-medium mb-2">Select Departemen:</p>
                <Select
                  name='iddepartemen'
                  className='h-[42px]'
                  options={listDepartemen}
                  isClearable={true}
                  isSearchable={true}
                  styles={customStyles}
                  placeholder={"Select Departemen"}
                  onChange={(selectedOption) => { handleFilterChange({ name: 'iddepartemen', value: selectedOption ? selectedOption.value : '' }) }}
                />
              </div>
              <div>
                <p className="font-medium mb-2">Select Team:</p>
                <Select
                  name='idteam'
                  className='h-[42px]'
                  onChange={(selectedOption) => { handleFilterChange({ name: 'idteam', value: selectedOption ? selectedOption.value : '' }) }}
                  options={listTeam}
                  isClearable={true}
                  isSearchable={true}
                  styles={customStyles}
                />
              </div>
              <div>
                <p className="font-medium mb-2">Select License:</p>
                <Select
                  name='idlicense'
                  className='h-[42px]'
                  onChange={(selectedOption) => { handleFilterChange({ name: 'idlicense', value: selectedOption ? selectedOption.value : '' }) }}
                  options={listLicense}
                  isClearable={true}
                  isSearchable={true}
                  styles={customStyles}
                />
              </div>
              <div>
                <label htmlFor="issuedyear" className="block font-medium mb-2">
                  Issued Year
                </label>
                <input
                  type="text"
                  id="issuedyear"
                  name="issuedyear"
                  value={filters.issuedyear}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="expiredyear" className="block font-medium mb-2">
                  Expired Year
                </label>
                <input
                  type="text"
                  id="expiredyear"
                  name="expiredyear"
                  value={filters.expiredyear}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <p className="font-medium mb-2">Select Category:</p>
                <Select
                  name="category"
                  className="h-[42px]"
                  onChange={(selectedOption) => {
                    handleFilterChange({ name: 'category', value: selectedOption ? selectedOption.value : '' });
                  }}
                  options={listCategory}
                  isClearable={true}
                  isSearchable={true}
                  styles={customStyles}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchFilter;