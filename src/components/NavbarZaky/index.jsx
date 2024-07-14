import {Menu} from "lucide-react"
const NavbarZaky = ({handleVisibleAside})=>{
    return(
        <nav className="w-full px-3 h-[10vh] bg-gray-200 flex justify-between items-center sticky top-0 text-gray-700 z-30">
            <button 
            className="hover:p-1 hover:bg-gray-500 hover:rounded-md hover:text-white"
            onClick={handleVisibleAside}
            >
                <Menu size={24}/>
            </button>
            <h1 className="font-semibold">PTKP</h1>
        </nav>
    )
}
export default NavbarZaky