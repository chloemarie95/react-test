import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 5691c9c9b7c51518ec41ce84842446f8f1374c59d5b6740f33ef1f46ae6d3ef8'
    }
});