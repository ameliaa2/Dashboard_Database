import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Table from "@/components/Table";
// import Dashboard from "@/components/Dashboard"
import Tableameng from "@/components/Tableameng";
import AddProfil from "@/components/AddProfil"
//Export default tuh cuman boleh sekali doang // oh emg iya?
export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
      {/* <Table/> */}
      {/* <Dashboard/> */}
      <div className="container mx-auto ">
        <AddProfil/>
        <Tableameng />
      </div>
    </div>
  );
}