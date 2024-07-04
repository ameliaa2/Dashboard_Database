"use client"
import { useState, useEffect } from "react"
import { Users, Files, Images, GraduationCap } from "lucide-react"
import Card from "@/components/Card"
import PieChart from "@/components/PieChart"
import { fetchCountUsers, fetchCountIjazah, fetchCountKtp, fetchCountLicense, fetchGetLabel } from "@/helpers/api"
const ContentDashboard = () => {
    const [userValue, setUserValue] = useState(0)
    const [licenseValue, setLicenseValue] = useState(0)
    const [ijazahValue, setIjazahValue] = useState(0)
    const [ktpValue, setKtpValue] = useState(0)
    const [label, setLabel] = useState([])
    const [value, setValue] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const dataUsers = await fetchCountUsers()
            const dataLicense = await fetchCountLicense()
            const dataIjazah = await fetchCountIjazah()
            const dataKtp = await fetchCountKtp()
            const response = await fetchGetLabel()
            if (response.ok){
                const data =await response.json()
                console.log('ini data:' + data)
                setLabel(data.label)
                setValue(data.values)
            }
            setUserValue(dataUsers)
            setIjazahValue(dataIjazah)
            setLicenseValue(dataLicense)
            setKtpValue(dataKtp)
        }
        fetchData()
    }, [])
    return (
        <main className=" bg-gray-300 p-5 m-0">
            <div className="grid lg:grid-cols-4 gap-x-3 gap-y-3 md:grid-cols-2 sm:grid-cols-1">
                <Card color={"bg-blue-500"} icons={<Users size={32} />} value={userValue} label={"Users"} />
                <Card color={"bg-green-500"} icons={<GraduationCap size={32} />} value={ijazahValue} label={"Ijazah"} />
                <Card color={"bg-yellow-500"} icons={<Images size={32} />} value={ktpValue} label={"KTP"} />
                <Card color={"bg-red-500"} icons={<Files size={32} />} value={licenseValue} label={"License"} />
            </div>
            <div className="bg-white min-h-[450px] shadow-xl mt-5 rounded-lg">
                <h1 className="w-full px-5 py-3 bg-gray-500 rounded-t-lg text-white">Statistik Karyawan</h1>
                <div className="py-5 flex items-center justify-center">
                    <PieChart label={label} value={value} />
                </div>
            </div>
        </main>
    )
}
export default ContentDashboard