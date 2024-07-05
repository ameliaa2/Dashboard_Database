import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';

const SearchFilter = () => {
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    department: '',
    team: '',
    license: '',
  });

  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showLicenseDropdown, setShowLicenseDropdown] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const departmentOptions = ['Department A', 'Department B', 'Department C', 'Department D', 'Department E', 'Department F'];
  const licenseOptions = ['License A', 'License B', 'License C', 'License D', 'License E', 'License F'];
  const teamOptions = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6'];

  const handleFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDepartmentDropdown = () => {
    setShowDepartmentDropdown((prevState) => !prevState);
    setShowTeamDropdown(false);
    setShowLicenseDropdown(false);
  };

  const handleDepartmentSelect = (department) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      department: department,
    }));
    setShowDepartmentDropdown(false);
  };

  const handleLicenseDropdown = () => {
    setShowLicenseDropdown((prevState) => !prevState);
    setShowDepartmentDropdown(false);
    setShowTeamDropdown(false);
  };

  const handleLicenseSelect = (license) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      license: license,
    }));
    setShowLicenseDropdown(false);
  };

  const handleTeamDropdown = () => {
    setShowTeamDropdown((prevState) => !prevState);
    setShowDepartmentDropdown(false);
    setShowLicenseDropdown(false);
  };

  const handleTeamSelect = (team) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      team: team,
    }));
    setShowTeamDropdown(false);
  };

  return (
    <div className="bg-gray-300">
      <h2 className="text-xl font-bold py-3 px-5 text-white bg-gray-500 rounded-t-lg">Search by</h2>
      <div className="bg-white shadow-md rounded-b-lg p-6 w-full">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label htmlFor="id" className="block font-medium mb-2">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={filters.id}
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
          {/* <div>
            <label htmlFor="department" className="block font-medium mb-2">
              Department
            </label>
            <div className="relative">
              <div
                className="border border-gray-300 rounded-md px-3 py-2 w-full cursor-pointer flex justify-between items-center"
                onClick={handleDepartmentDropdown}
              >
                {filters.department || 'Select Department'}
                <CaretDown size={12} />
              </div>
              {showDepartmentDropdown && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md w-full max-h-48 overflow-y-auto">
                  {departmentOptions.map((option) => (
                    <li
                      key={option}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDepartmentSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div> */}
          {/* placeholder='Select Departement' */}
          {/* INI contohnya mengg */}
          <div>
            <label htmlFor="options" className='block mb-2 font-medium'>Select Departement</label>
            <div >
              <select id="options" name="options"
                className="px-2 w-full bg-white border border-gray-300 rounded-md h-[42px] overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option >Select Departement</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="team" className="block font-medium mb-2">
              Team
            </label>
            <div className="relative">
              <div
                className="border border-gray-300 rounded-md px-3 py-2 w-full cursor-pointer flex justify-between items-center"
                onClick={handleTeamDropdown}
              >
                {filters.team || 'Select Team'}
                <CaretDown size={12} />
              </div>
              {showTeamDropdown && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md w-full max-h-48 overflow-y-auto">
                  {teamOptions.map((option) => (
                    <li
                      key={option}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleTeamSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="license" className="block font-medium mb-2">
              License
            </label>
            <div className="relative">
              <div
                className="border border-gray-300 rounded-md px-3 py-2 w-full cursor-pointer flex justify-between items-center"
                onClick={handleLicenseDropdown}
              >
                {filters.license || 'Select License'}
                <CaretDown size={12} />
              </div>
              {showLicenseDropdown && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md w-full max-h-48 overflow-y-auto">
                  {licenseOptions.map((option) => (
                    <li
                      key={option}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLicenseSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;