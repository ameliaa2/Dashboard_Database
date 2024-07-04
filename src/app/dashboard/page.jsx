"use client"
import Aside from "@/components/Aside"
import NavbarZaky from "@/components/NavbarZaky" 
import ContentDashboard from "@/components/ContentDashboard"
import { useState } from "react"
const Dashboard = ()=>{
    const [isAsideVisible, setAsideVisible]= useState(false)
    const handleVisibleAside= ()=>{
        setAsideVisible(true)
        if(isAsideVisible){
            setAsideVisible(false)            
        }
    }
    return(
        <>
            <div className=" flex flex-row min-h-screen bg-gray-300">
                <Aside isVisible={isAsideVisible}/>
                <div className="w-full">
                    <NavbarZaky handleVisibleAside={handleVisibleAside}/>
                    <ContentDashboard/>
                </div>
            </div>
        </>
    )
} 
export default Dashboard