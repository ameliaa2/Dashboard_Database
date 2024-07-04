"use client"

import { MagnifyingGlass} from '@phosphor-icons/react';
import { useRef } from 'react';

const Navbar = ()=>{
    const searchRef = useRef()
    const handleSearch =  (event) => {
        event.preventDefault()
        alert(searchRef.current.value)
    }
    return (
        <div className="w-full bg-[#A0937D] shadow-md z-10 h-[12vh] flex items-center">
          <div className="container mx-auto flex items-center justify-center">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ref={searchRef}
              />
              <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={handleSearch}>
                <MagnifyingGlass size={24} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      );
}
export default Navbar