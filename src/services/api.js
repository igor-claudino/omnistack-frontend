import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-backend-grakt.herokuapp.com",
});

export default api;