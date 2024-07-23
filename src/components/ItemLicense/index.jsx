"use client"
// import Link from "next/link"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { DotsThreeVertical } from "@phosphor-icons/react";
const ItemLicense = ({ license, type }) => {
    const [isOpenLicense, setIsOpenLicense] = useState(false)
    const openLicense = () => {
        setIsOpenLicense(!isOpenLicense)
    }
    console.log('ini license di itemLicense', license)
    return (
        <>
            {type === 'profile' &&
                <div className="w-full flex flex-row justify-between">
                    <p>{license.name}</p>
                    <button onClick={openLicense}>
                        {isOpenLicense ? (<ChevronUp />) : (<ChevronDown />)}
                    </button>
                </div >
            }
            {type === 'update' &&
                <div className="w-full flex flex-row items-center justify-between">
                    <p>{license.name}</p>
                    <Dropdown className=" bg-gray-100">
                        <DropdownTrigger>
                            <Button variant="bordered">
                                <DotsThreeVertical size={24} />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Link Actions">
                            {isOpenLicense ? (
                                <DropdownItem onClick={openLicense}>
                                    Close Document
                                </DropdownItem>
                            ) : (
                                <DropdownItem onClick={openLicense}>
                                    View Document
                                </DropdownItem>
                            )}
                            <DropdownItem>
                                Update Document
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div >
            }
            {isOpenLicense &&
                <>
                    {/* <iframe src="/assets/pdf/lisensi/117960_2017_FATHUDDIEN ARIEF_OSH Confined Space Officer_Utama_KEMENAKER.pdf" frameborder="0"></iframe> */}
                    <div className="z-20 pt-3">
                        {license.pathlicense ? (
                            <iframe src="/assets/pdf/lisensi/117960_2017_FATHUDDIEN ARIEF_OSH Confined Space Officer_Utama_KEMENAKER.pdf" frameBorder="0" height="400" width="100%" className='rounded' />
                        ) : (<>
                            <div className='w-full h-[30vh] flex items-center justify-center bg-gray-500 rounded-lg'>
                                <h3 className='font-xl font-sans font-semibold text-white' >NO DATA</h3>
                            </div>
                        </>)}
                        {/* <iframe src="/assets/pdf/ktp/KTP - Fathuddien Arief.pdf" height="400" width="100%" className='rounded' /> */}
                    </div>
                </>
            }
        </>
    )
}
export default ItemLicense 