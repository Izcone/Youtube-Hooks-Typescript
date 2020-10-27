import axios from 'axios'

const apiKey = 'AIzaSyDYfFkCx40kM4s1U0JM3exaurKwv9g5U7k';

export const params = {
    part: 'snippet',
    maxResults: 5,
    key: apiKey,
    type: 'video'
};


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'}   
)