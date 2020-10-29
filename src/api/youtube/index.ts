import axios from 'axios'

const apiKey = 'yourkey';

export const params = {
    part: 'snippet',
    maxResults: 3,
    key: apiKey,
    type: 'video'
};


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'}   
)
