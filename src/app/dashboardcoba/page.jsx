"use client"
import Tableameng from "@/components/Tableameng";
import AddProfil from "@/components/AddProfil";
import Aside from "@/components/Aside";
import NavbarZaky from "@/components/NavbarZaky";
import SearchFilter from "@/components/SearchFilter";
import { Pagination } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { fetchFilterSearch } from "@/helpers/api";
import ExportExcel from "@/components/ExportExcel";
export default function Home() {
  const [filters, setFilters] = useState({
    iduser: '',
    name: '',
    iddepartemen: '',
    idteam: '',
    idlicense: '',
    issuedyear: '',
    expiredyear: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const [refresh, setRefresh] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [exportData, setExportData] = useState([]);
  const handleRefresh = ()=>{
    setRefresh(!refresh)
  }
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetchFilterSearch(currentPage, filters)
      console.log(response)
      setTotalPages(response.data.totalPage)
      setDataTable(response.data.totalData)
      setExportData(response.data.dataForExcel)
    }
    fetchData()
  },[currentPage, filters, refresh])
  useEffect(()=>{
    console.log(filters)
  },[filters])
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
            <AddProfil onRefresh={handleRefresh}/>
            <SearchFilter onFiltersChange={handleFiltersChange}/>
            <div>
              <ExportExcel excelData={exportData} fileName={'Export Excel'}/>
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