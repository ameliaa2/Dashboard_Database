"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tableameng from "@/components/Tableameng";
import AddProfil from "@/components/AddProfil"
import Aside from "@/components/Aside"
import NavbarZaky from "@/components/NavbarZaky"
import SearchFilter from "@/components/SearchFilter";
import { useState } from "react"
import { Search } from "lucide-react";

export default function Home() {
  const [isAsideVisible, setAsideVisible] = useState(false)
  const handleVisibleAside = () => {
    setAsideVisible(true)
    if (isAsideVisible) {
      setAsideVisible(false)
    }
  }
  return (
    <>
      <div className=" flex flex-row min-h-screen bg-gray-300">
        <Aside isVisible={isAsideVisible} />
        <div className="w-full">
          <NavbarZaky handleVisibleAside={handleVisibleAside} />
          <div className="p-5">
            <AddProfil />
          {/*  <Tableameng /> */}
            <SearchFilter />
          </div>
        </div>
      </div>
    </>
  )
}