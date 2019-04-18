import axios from 'axios';

const instance= axios.create({
    baseURL : 'http://localhost:4000'
})

// instance.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     return Promise.reject(error);
// });

export default instance;