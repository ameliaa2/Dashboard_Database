"use client"
import { useState, useEffect } from "react"
import { Users, Files, Images, GraduationCap } from "lucide-react"
import Select from "react-select"
import Card from "@/components/Card"
import PieChart from "@/components/PieChart"
import BarChart from "@/components/BarChart"
import { fetchCountUsers, fetchCountIjazah, fetchCountKtp, fetchCountLicense, fetchGetGrafik, fetchListLicense } from "@/helpers/api"
const ContentDashboard = () => {
    const [userValue, setUserValue] = useState(0)
    const [licenseValue, setLicenseValue] = useState(0)
    const [ijazahValue, setIjazahValue] = useState(0)
    const [ktpValue, setKtpValue] = useState(0)
    const [label, setLabel] = useState([])
    const [value, setValue] = useState([])
    const [listLicense, setListLicense] = useState([])
    const [selectedLicense, setSelectedLicense] = useState(null)
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
        const fetchData = async () => {
            const dataUsers = await fetchCountUsers()
            const dataLicense = await fetchCountLicense()
            const dataIjazah = await fetchCountIjazah()
            const dataKtp = await fetchCountKtp()
            // const dataPieChart = await fetchGetLabel()
            const fetchLicense = await fetchListLicense()
            // setLabel(dataPieChart.label)
            // setValue(dataPieChart.values)
            setUserValue(dataUsers)
            setIjazahValue(dataIjazah)
            setLicenseValue(dataLicense)
            setKtpValue(dataKtp)
            setListLicense(fetchLicense)
        }
        fetchData()
    }, [])
    useEffect(() => {
        console.log('ini selectedLicense ', selectedLicense)
    }, [selectedLicense])
    useEffect(() => {
        console.log('ini list License ', listLicense)
    }, [listLicense])
    useEffect(() => {
        const fetchData = async () => {
            const fetchDataGrafik = await fetchGetGrafik(selectedLicense)
            setLabel(fetchDataGrafik.label)
            setValue(fetchDataGrafik.values)
        }
        fetchData()
    },[selectedLicense])
    const handleSelectChange = (e) => {
        setSelectedLicense(e.value)
    }
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            minHeight: '42px',  // Atur tinggi minimum
            height: '42px',     // Atur tinggi
            width: '250px',
            boxShadow: state.isFocused ? null : null,
        })
    };
    return (
        <main className=" bg-gray-300 p-5 m-0">
            <div className="grid lg:grid-cols-4 gap-x-3 gap-y-3 md:grid-cols-2 sm:grid-cols-1">
                <Card color={"bg-blue-500"} icons={<Users size={32} />} value={userValue} label={"Users"} />
                <Card color={"bg-green-500"} icons={<GraduationCap size={32} />} value={ijazahValue} label={"Ijazah"} />
                <Card color={"bg-yellow-500"} icons={<Images size={32} />} value={ktpValue} label={"KTP"} />
                <Card color={"bg-red-500"} icons={<Files size={32} />} value={licenseValue} label={"License"} />
            </div>
            <div className="bg-white min-h-[450px] shadow-xl mt-5 rounded-lg">
                <div className="flex flex-row justify-between items-center w-full px-5 py-3 bg-gray-500 rounded-t-lg text-white">
                    <h1 className="">Statistik Karyawan</h1>
                    {isClient && <Select
                        name='idlicense'
                        className='h-[42px] text-black'
                        onChange={(selectedOption) => { handleSelectChange({ value: selectedOption ? selectedOption.value : '' }) }}
                        options={listLicense}
                        isClearable={true}
                        isSearchable={true}
                        // defaultValue={{value: 1, label: 'Welding Inspector'}}
                        styles={customStyles}
                    />}
                </div>
                <div className="py-5">
                    {/* <PieChart label={label} value={value} /> */}
                    <BarChart label={label} value={value} />
                </div>
            </div>
        </main>
    )
}
export default ContentDashboard