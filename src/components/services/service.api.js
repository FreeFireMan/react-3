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

const getInventory = (id) => {
    return axiosInstance.get('/inventory/'+id)
}

const getCharacter = (id) => {
    return axiosInstance.get('/characters/'+id)
}

export {getCharacters, getInventories, getInventory, getCharacter}