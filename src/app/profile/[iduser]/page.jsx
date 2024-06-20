//import Image from "next/image";
import Navbar from "@/components/Navbar";

//Export default tuh cuman boleh sekali doang
//export default function User() {
//  return (
//  <div>
//    <Navbar />
//    Ini Halaman User
//  </div>
//  );
// }
import React from 'react';
import DataProfile from '@/app/profile/[iduser]/DataProfile';

const Home = () => {
  return (
    <div className="2xl:container"> {/* ... */}
      <div className="container">
        <Navbar/> 
      </div>
      <div className="classnya-container">
        <div className="data-profile-container">
          <DataProfile />
        </div>
        <div className="buat-berkas-container">
          <div className="buat-berkas"></div>
        </div>
      </div>
    </div> 
  );
};

export default Home;