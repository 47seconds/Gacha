import axios from "axios";

const axiosInstance = axios.create({
        // baseURL: import.meta.env.VITE_GACHA_API_URL,
        baseURL: 'https://api-gacha.onrender.com/api/v1',
        withCredentials: true,
    });

export { axiosInstance };
