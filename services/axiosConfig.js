import axios from 'axios'; // 49.3k (gzipped: 17.6k)

const axiosConfig = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export default axiosConfig;