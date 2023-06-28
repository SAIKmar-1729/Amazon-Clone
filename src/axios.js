import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-98e5f.cloudfunctions.net/api'
    // 'http://127.0.0.1:5001/clone-98e5f/us-central1/api'
    //The API (cloud function) url
});

export default instance;