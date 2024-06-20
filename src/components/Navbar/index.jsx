const Navbar = async ()=>{
    return(
        <div className="w-full bg-[#A0937D] shadow-md z-10">
            <div className="container mx-auto flex items-center justify-center py-4">
                <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}
export default Navbar