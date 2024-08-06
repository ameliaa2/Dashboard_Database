"use client"
//import Image from "next/image";
import NavbarZaky from "@/components/NavbarZaky";
import Aside from "@/components/Aside";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
// import DataProfile from '@/components/DataProfile';
import UpdateProfile from '@/components/UpdateProfile';
// import DataProfile from '@/app/profile/[iduser]/DataProfile';
import { getDetailUser } from "@/helpers/api";

const Home = () => {
    // const router = useRouter()
    const cek = usePathname()
    const id = cek.split('/').pop()
    // setIdUser(id)
    const fetchData = async () => {
        const data = await getDetailUser(id)
        setDataUser(data)
    }
    // const iduser = searchParams.query 

    // const [idUser, setIdUser] = useState('')
    const [dataUser, setDataUser] = useState([])
    const [isAsideVisible, setAsideVisible] = useState(false)

    const handleVisibleAside = () => {
        setAsideVisible(true)
        if (isAsideVisible) {
            setAsideVisible(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        console.log(dataUser)
    }, [dataUser])
    return (
        <>
            <div className=" flex flex-row min-h-screen bg-gray-300">
                <Aside isVisible={isAsideVisible} />
                <div className="w-full">
                    <NavbarZaky handleVisibleAside={handleVisibleAside} />
                    <UpdateProfile data={dataUser} updateUserData={fetchData}/>
                </div>
            </div>
            {/* <ContentDashboard /> */}
            {/* <div>{dataUser.name}</div> */}
            {/* <Navbar /> */}
            {/* <div className="2xl:container">
            <div className="container">
            </div>
            <div className="classnya-container">
            <div className="data-profile-container">
            </div>
            <div className="buat-berkas-container">
                <div className="buat-berkas"></div>
            </div>
            </div>
        </div> */}
        </>
    );
};

export default Home;