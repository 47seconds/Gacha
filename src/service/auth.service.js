import {axiosInstance} from '../conf/axiosInstance.conf.js';

export class AuthService {
    currentUser = async () => {
        try {
            const user = await axiosInstance.get('/user/me');
            if(user.data.statusCode == 200) {
                return res.data.data;
            } else {
                console.log('failed to account info');
            }
        } catch (error) {
            throw error;
        }
    }

    userLogin = async(userLoginData) => {
        try {
            const user = await axiosInstance.post(
                '/user/login',
                {
                    username: userLoginData.username || '',
                    email: userLoginData.email || '',
                    password: userLoginData.password || ''
                }
            );
            // console.log(user.data)
            if(user.data.statusCode == 200) {
                return user.data;
            } else {
                console.log('cannot login');
            }
        } catch (error) {
            throw error;
        }
    }

    userLogout = async() => {
        try {
            const res = await axiosInstance.post('/user/logout').then();
            if(res.data.statusCode == 200) {
                return res.data.message;
            }
        } catch (error) {
            throw error;
        }
    }

    userSignup = async(userignupFormData) => {
        try {
            const res = await axiosInstance.post('/user/register', userignupFormData, {
                headers: {
                  'Content-Type': 'multipart/form-data', // Important for Axios to correctly handle multipart data
                },  
              });
            if(res.data.statusCode == 200) {
                return res.data;
            }
        } catch (error) {
            throw error;
        }
    }

    userDelete = async() => {
        try {
            const res = await axiosInstance.delete('/user/delete-account');
            if(res.data.statusCode == 200) {
                return res.data;
            }
        } catch (error) {
            throw error;
        }
    } 
}

const authService = new AuthService();

export default authService;