"use client"
import { DotsThreeVertical } from "@phosphor-icons/react"
import { useState } from "react";
const Table = () => {
  const [selectedValue, onValueChange]=('')
  return (
    <div className="flex justify-center"> {/* Center the table */}
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Positiion</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Create 5 rows */}
          {/* Nanti program dibawah ini tinggap di map aja klo udah bisa copnnect API */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Amel</td>
            <td className="border border-gray-300 px-4 py-2">Intern</td>
            <td className="border border-gray-300 px-4 py-2">
              {/* <DotsThreeVertical size={32} /> */}
              <select value={selectedValue} onChange={handleChange}>
                <option value="" disabled>Pilih salah satu...</option>
                <option value="option1">Opsi 1</option>
                <option value="option2">Opsi 2</option>
                <option value="option3">Opsi 3</option>
              </select>
            </td>
          </tr>

          {/* Repeat the above <tr> element 4 more times to create 5 rows in total */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
