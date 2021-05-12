import axios from 'axios'

const axiosInstance = axios.create(
    {baseURL: 'https://api.sampleapis.com/futurama'}
)

const getCharacters = () => {
    return axiosInstance.get('/characters')
}

const getInventories = () => {
    return axiosInstance.get('/inventory')
}



export {getCharacters, getInventories}