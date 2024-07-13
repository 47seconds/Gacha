import {axiosInstance} from '../conf/axiosInstance.conf.js';

export class AuthService {
    currentUser = async () => {
        try {
            const user = await axiosInstance.get('/users/me');
            return user.data;
        } catch (error) {
            throw error;
        }
    }

    userLogin = async(userLoginData) => {
        try {
            const user = await axiosInstance.post(
                '/users/login',
                {
                    username: userLoginData.username || '',
                    email: userLoginData.email || '',
                    password: userLoginData.password || ''
                }
            );
            return user.data;
        } catch (error) {
            throw error;
        }
    }

    userLogout = async() => {
        try {
            const res = await axiosInstance.post('/users/logout');
            return res.data.message;
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;