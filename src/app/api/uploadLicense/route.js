import { NextResponse } from "next/server";
import fs from "fs"
import { pipeline } from 'stream'
import {promisify} from 'util'
const pump = promisify(pipeline);
// import multer, { diskStorage } from "multer"
export const POST=async(request)=>{
    // const upload = multer({storage:multer.diskStorage()})
    try {
        console.log('ini request', request)
        const formData = await request.formData();
        const file = formData.getAll('files')[0]
        const getFileName = file.name
        const excludeExtension = getFileName.split('.')
        const date = new Date()
        // const formattedName = `${excludeExtension[0]}_${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.pdf`
        const formattedName = `${excludeExtension[0]}.pdf`;
        const filePath = `./public/assets/pdf/lisensi/${formattedName}`;
        await pump(file.stream(), fs.createWriteStream(filePath));
        return NextResponse.json({status:"success",data:file.size})
    } catch (error) {
        return NextResponse.json({message:"Internal Server Error"}, {status:500})
    }
}