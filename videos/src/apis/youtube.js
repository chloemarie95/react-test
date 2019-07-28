import axios from 'axios';

const KEY = 'AIzaSyBnoPgKfZsqnLiA84kgV-hlVKiAwmB8j34';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
