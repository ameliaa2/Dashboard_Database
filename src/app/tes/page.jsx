"use client"
import {useState, useEffect} from "react"
const tes = ()=>{
    const [value, setvalue] = useState('')
    const [result, setresult] = useState('')
    const handleInput = (e)=>{
        setvalue(e.target.value)
    }
    useEffect(()=>{
        const fetchData = async ()=>{
            const dataRequest = {
                isitext:value
            }
            // console.log('ini data request insert data',dataRequest)
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tespost`, {
                method: 'POST', // Metode request
                headers: {
                    'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
                },
                body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
            })
            if (response.ok) {
                const data = await response.json()
                setresult(data)
            }
        }
        fetchData()
    },[value])
    useEffect(()=>{
        console.log(value)
        console.log('ini result ',result)
    },[value, result])
    return(
        <>
            <label htmlFor="input">ini input</label>
            <input type="text"
            id='input'
            name='input'
            value={value} 
            onChange={(e)=>handleInput(e)}/>
        </>
    )
}
export default tes