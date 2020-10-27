import axios from 'axios'

const apiKey = 'yourkey';

export const params = {
    part: 'snippet',
    maxResults: 5,
    key: apiKey,
    type: 'video'
};


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'}   
)
