export const fetchCountUsers = async () => {
    try {
        const response = await fetch('http://localhost:5000/users')
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchCountLicense = async () => {
    try {
        const response = await fetch('http://localhost:5000/license')
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchCountIjazah = async () => {
    try {
        const response = await fetch('http://localhost:5000/ijazah')
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchCountKtp = async () => {
    try {
        const response = await fetch('http://localhost:5000/ktp')
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchGetGrafik = async (idlicense) => {
    try {
        const bodyRequest={
            idlicense:idlicense
        }
        const response = await fetch('http://localhost:5000/getgrafik',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(bodyRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchFilterSearch = async (page, filters) => {
    try {
        const dataRequest = {
            currentPage: page,
            filters:filters
        }
        console.log(dataRequest)
        const response = await fetch('http://localhost:5000/filterSearch', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchListDepartemen = async () => {
    try {
        const response = await fetch('http://localhost:5000/listdepartemen', {
            method: 'GET'
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchListTeam = async () => {
    try {
        const response = await fetch('http://localhost:5000/listteam', {
            method: 'GET'
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const fetchListLicense = async () => {
    try {
        const response = await fetch('http://localhost:5000/listlicense', {
            method: 'GET'
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const validateDepartemen = async (data) => {
    try {
        const dataRequest = {
            datadepartemen:data
        }
        console.log('ini data request validate departemen ',dataRequest)
        const response = await fetch('http://localhost:5000/excel/validatedepartemen', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const validateTeam = async (data) => {
    try {
        const dataRequest = {
            datateam:data
        }
        console.log('ini data request validate team ',dataRequest)
        const response = await fetch('http://localhost:5000/excel/validateteam', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const validateLicense = async (data) => {
    try {
        const dataRequest = {
            datalicense:data
        }
        console.log('ini data request validate license',dataRequest)
        const response = await fetch('http://localhost:5000/excel/validatelicense', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const insertData = async (data) => {
    try {
        const dataRequest = {
            datafromexcel:data
        }
        console.log('ini data request insert data',dataRequest)
        const response = await fetch('http://localhost:5000/excel/insertdata', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
// export const getDetailUser = async (data) => {
//     try {
//         const dataRequest = {
//             iduser:data
//         }
//         console.log('ini data request insert data',dataRequest)
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/get`, {
//             method: 'POST', // Metode request
//             headers: {
//                 'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
//             },
//             body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
//         })
//         if (response.ok) {
//             const data = await response.json()
//             console.log('ini response API',data)
//             return data.data
//         }
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
export const getDetailUser = async (data) => {
    try {
        const dataRequest = {
            iduser:data
        }
        console.log('ini data request insert data',dataRequest)
        const response = await fetch('http://localhost:5000/profile/get', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log('ini response API',data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const uploadKtp = async (iduser, pathktp) => {
    try {
        const dataRequest = {
            iduser:iduser,
            pathktp:pathktp
        }
        console.log('ini data request insert data',dataRequest)
        const response = await fetch('http://localhost:5000/profile/uploadKtp', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log('ini response API',data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}
export const uploadIjazah = async (iduser, pathijazah) => {
    try {
        const dataRequest = {
            iduser:iduser,
            pathijazah:pathijazah
        }
        console.log('ini data request insert data',dataRequest)
        const response = await fetch('http://localhost:5000/profile/uploadIjazah', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            console.log('ini response API',data)
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}