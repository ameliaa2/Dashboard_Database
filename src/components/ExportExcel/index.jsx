//import * as FileSaver from "file-saver"
//import { Printer } from "lucide-react"
//import XLSX from "sheetjs-style"
//const ExportExcel = ({ excelData, fileName }) => {
//    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8'
//    const fileExtension = '.xlsx'
//    const exportToExcel = async () => {
//        const ws = XLSX.utils.json_to_sheet(excelData)
//        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
//        const excelBuffer = XLSX.write(wb, { BookType: 'xlsx', type: 'array' })
//        const data = new Blob([excelBuffer], { type: fileType })
//        FileSaver.saveAs(data, fileName + fileExtension)
//    }
//    return (
//        <>
//            <button
//                className="text-base font-semibold leading-7 mb-3 bg-green-500 hover:bg-green-700 text-white  py-2 px-4 rounded flex flex-row gap-x-1"
//                onClick={(e) => exportToExcel(fileName)}
//            >
//                <Printer size={24} />
//                <span>Export Excel</span>
//            </button>
//        </>
//    )
//}
//export default ExportExcel

import * as FileSaver from "file-saver";
import { Printer } from "lucide-react";
import * as XLSX from "xlsx";

const ExportExcel = ({ excelData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = () => {
    try {
      if (!excelData || excelData.length === 0) {
        console.error("excelData is undefined or empty");
        return;
      }

      const worksheet = XLSX.utils.json_to_sheet(excelData);
      const workbook = { Sheets: { "data": worksheet }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, `${fileName}${fileExtension}`);
    } catch (error) {
      console.error("Error exporting to Excel:", error);
    }
  };

  return (
    <>
      <button
        className="text-base font-semibold leading-7 mb-3 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded flex flex-row gap-x-1"
        onClick={exportToExcel}
      >
        <Printer size={24} />
        <span>Export Excel</span>
      </button>
    </>
  );
};

export default ExportExcel;