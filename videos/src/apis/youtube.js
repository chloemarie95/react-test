import axios from 'axios';

const KEY = 'AIzaSyAJEKZXEoQ20lvx9TY0WQSWBcGnHvP4KSY';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
