import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://reqres.in'
})

const getUsers = () => {
    axiosInstance.get('/users?page=2')
}

export {
    getUsers
}