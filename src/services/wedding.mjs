import axios from "axios";

export const create = (data, token, successHandler, errorHandler) => {
    axios.post(import.meta.env.VITE_BASE_URL + '/auth/wedding', data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
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

export const read = (id) => {
    return axios.get(import.meta.env.VITE_BASE_URL + '/wedding/' + id);
}