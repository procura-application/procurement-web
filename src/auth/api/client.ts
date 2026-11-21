import axios from 'axios';
import { getToken } from '../session/authSession';


export const authApiClient = axios.create({
    baseURL: import.meta.env.VITE_AUTH_BASE_URL + '/authentication/',
    headers: {
        'Content-Type': 'application/json'
    }
});


authApiClient.interceptors.request.use(
    (config) => {
        const token = getToken();
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

authApiClient.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;
        if(status==401 || status==403){
                localStorage.removeItem("token");
        }
        return Promise.reject(error);
    }
)