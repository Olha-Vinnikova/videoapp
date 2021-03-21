import axios from 'axios';

const KEY = 'AIzaSyDqXsE022ZorIy7fqvifURtqTDpoqdCmuE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        type: 'video',
        key: KEY,
    }
});


