import axios from 'axios';

// 创建一个 axios 实例
const service = axios.create({
    baseURL:'https://api.vvhan.com',
    timeout: 3000000,
    withCredentials: false
});
export default service;