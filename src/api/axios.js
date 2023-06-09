import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('token'),
    },
});

export default axios;
