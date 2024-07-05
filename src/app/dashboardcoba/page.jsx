"use client"
// import Image from "next/image";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Tableameng from "@/components/Tableameng";
import AddProfil from "@/components/AddProfil"
import Aside from "@/components/Aside"
import NavbarZaky from "@/components/NavbarZaky"
import SearchFilter from "@/components/SearchFilter";
import { Pagination } from "@nextui-org/react";
import { useState, useEffect } from "react"
import { fetchDataNoFilter } from "@/helpers/api";
import { Search } from "lucide-react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const [dataTable, setDataTable] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Halaman saat ini:', page);
    // Anda bisa melakukan sesuatu dengan nilai halaman, seperti memuat data baru.
  };
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetchDataNoFilter(currentPage)
      // console.log(response)
      setTotalPages(response.data.totalPage)
      setDataTable(response.data.totalData)
    }
    fetchData()
  },[currentPage])
  useEffect(()=>{
    console.log(currentPage)
    console.log(totalPages)
    console.log(dataTable)
  },[currentPage, totalPages, dataTable])
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
          <div className="p-5 flex flex-col gap-y-5">
            <AddProfil />
            <SearchFilter />
            <div>
              <Tableameng data={dataTable}/>
              <div className='w-full flex justify-center py-5'>
                <Pagination isCompact showControls total={totalPages} initialPage={1} size="lg" onChange={(page)=>{
                  handlePageChange(page)
                  }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}