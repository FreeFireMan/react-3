import axios from 'axios'

const axiosInstance = axios.create(
    {baseURL: 'https://jsonplaceholder.typicode.com'}
);

const getUsers = () => {
    return axiosInstance.get('/users')
}

const getPosts = () => {
    return axiosInstance.get('/posts')
}

const getUserPosts = (id) => {
    return axiosInstance.get(`/users/${id}/posts`)
}

const getComments = (id) => {
    return axiosInstance(`/posts/${id}/comments`)
}

export {
    getUsers, getPosts, getUserPosts, getComments
}