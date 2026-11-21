import { triggerLogout } from '@/auth/session/authLogoutHandler';
import { getToken } from '@/auth/session/authSession';
import axios from 'axios';



export const mastersApiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + '/admin/masters/',
    headers: {
        'Content-Type': 'application/json'
    }
});


mastersApiClient.interceptors.request.use(
    (config) => {
        const token = getToken();
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

mastersApiClient.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;
        if(status==401 || status==403){
            console.log("inside interceptor 401");
            console.log(
  "401/403 FROM:",
  error.config?.url,
  "STATUS:",
  status
);
                localStorage.removeItem("token");
                triggerLogout();
        }
        return Promise.reject(error);
    }
)