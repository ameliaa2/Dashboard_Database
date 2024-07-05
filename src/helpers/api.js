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
export const fetchGetLabel = async () => {
    try {
        const response = await fetch('http://localhost:5000/label')
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
export const fetchDataNoFilter = async (req) => {
    try {
        const dataRequest = {
            currentPage: req
        }
        const response = await fetch('http://localhost:5000/nofilter', {
            method: 'POST', // Metode request
            headers: {
                'Content-Type': 'application/json' // Header untuk mengirimkan data dalam format JSON
            },
            body: JSON.stringify(dataRequest) // Mengubah data menjadi string JSON
        })
        if (response.ok) {
            const data = await response.json()
            return data.data
        }
    }
    catch (error) {
        console.log(error)
    }
}