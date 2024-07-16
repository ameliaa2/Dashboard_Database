import { NextRequest, NextResponse } from "next/server";
export const POST=async(request)=>{
    const body = await request.json()
    console.log(body)
    return NextResponse.json({message:body}, {status:200})
    // return res.status(200).json({message:"TES ANJ"})
}