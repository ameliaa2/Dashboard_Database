"use client"
import { House, Users, LayoutDashboard } from "lucide-react"
import Link from "next/link"
const Aside = ({ isVisible }) => {
    return (
        <aside
            className= {`bg-gray-700 ${isVisible? 'w-[20vw]':'w-[68px]'}`}
        >
            <div className="h-[10vh] flex justify-center items-center bg-gray-300 font-semibold sticky top-0 text-gray-700">
                {!isVisible && <h1>ALT</h1>}
                {isVisible && <h1>Training DB</h1>}
            </div>
            <ul className="fixed top-[10vh] left-0 p-2 flex flex-col text-white ">
                {/* <li className="p-3 flex flex-row gap-x-2 rounded-md items-center hover:bg-gray-600">
                    <House size={24} color="white" />
                    {isVisible &&
                        <a href="/" className="text-gray-300 hover:text-white w-[10vw]">Beranda</a>
                    }
                </li> */}
                <li >
                    <Link href="/" className="p-3 flex flex-row gap-x-2 rounded-md items-center hover:bg-gray-600">
                        <House size={24} color="white" />
                        {isVisible &&
                            <span className="text-gray-300 hover:text-white w-[10vw]">Beranda</span>
                        }
                    </Link>
                </li>
                <li >
                    <Link href="/dashboardcoba" className="p-3 flex flex-row gap-x-2 rounded-md items-center hover:bg-gray-600">
                        <LayoutDashboard size={24} color="white" />
                        {isVisible &&
                            <span className="text-gray-300 hover:text-white w-[10vw]">Dashboard</span>
                        }
                    </Link>
                </li>
                {/* <li >
                    <Link href="/profile" className="p-3 flex flex-row gap-x-2 rounded-md items-center hover:bg-gray-600">
                        <Users size={24} color="white" />
                        {isVisible &&
                            <span className="text-gray-300 hover:text-white w-[10vw]">Users</span>
                        }
                    </Link>
                </li> */}
                {/* <li className="p-3 flex flex-row gap-x-2 rounded-md items-center hover:bg-gray-600">
                    <LayoutDashboard size={24} color="white" />
                    {isVisible &&
                        <a href="/dashboardcoba" className="text-gray-300 hover:text-white w-[10vw]">Dashboard</a>
                    }
                </li>
                <li className="p-3 flex flex-row gap-x-2 rounded-md items-center hover:bg-gray-600">
                    <Users size={24} color="white" />
                    {isVisible &&
                        <a href="/profile" className="text-gray-300 hover:text-white w-[10vw]">Profile</a>
                    }
                </li> */}
            </ul>
        </aside>
    )
}
export default Aside