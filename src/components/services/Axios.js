import axios from 'axios';

const axiosInstance = axios.create(
    {baseURL: 'https://jsonplaceholder.typicode.com/'}
);

const getPosts = () => {
    return axiosInstance.get('/posts')
}

const getComment = () => {
    return axiosInstance.get('/comments')
}
export {
    getPosts, getComment
}
