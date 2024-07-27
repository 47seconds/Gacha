import axios from "axios";

const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_GACHA_API_URL,
        withCredentials: true,
    });

export { axiosInstance };
