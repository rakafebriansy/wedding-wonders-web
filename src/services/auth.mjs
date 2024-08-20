import axios from "axios";

export const register = (data, successHandler, errorHandler) => {
    axios.post(import.meta.env.VITE_BASE_URL + '/register', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        successHandler(res.data);
    }).catch(res => {
        if(res.response.status >= 400 && res.response.status < 500) {
            errorHandler(Object.values(res.response.data.errors)[0][0]);
        } else {
            errorHandler(res.response.data.message);
        }
    });
}

export const login = (data, successHandler, errorHandler) => {
    axios.post(import.meta.env.VITE_BASE_URL + '/login', data,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        successHandler(res.data);
    }).catch(res => {
        if(res.response.status >= 400 && res.response.status < 500) {
            errorHandler(res.response.data.errors ? Object.values(res.response.data.errors)[0][0] : res.response.data.message);
        } else {
            errorHandler(res.response.data.message);
        }
    });
}