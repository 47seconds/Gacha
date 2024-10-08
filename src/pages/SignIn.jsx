import React, { useState, useEffect } from "react";
import authService from "../service/auth.service.js";
import Loader from '../utils/Loader.util';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/user/user.slice.js";
import Cookies from "js-cookie";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginHandler = async (e) => {
        e.preventDefault();
        setLoader(true);

        const userFormCredentials = {
            username,
            password,
        };
        const user = await authService.userLogin(userFormCredentials);

        if (user.success) {
            const userData = user.data;
            dispatch(userLogin(userData));

            // saving user data for 1 day in cookies
            const expirationDate = new Date(Date.now() + ( 1 * 24 * 60 * 60 * 1000));
            Cookies.set("userData", JSON.stringify(userData), {expires: expirationDate});
            console.log("Login successful");
            setLoader(false);
            navigate("/home");
        } else {
            console.log("Login failed");
            setLoader(false);
        }
    };

    return (
        <div className='w-full h-full flex justify-center items-center'>
          {loader ? (
            <Loader/>
          ) : (
            <form className='w-full h-1/2 flex flex-col justify-center items-center p-5 rounded-2xl'>
            <input type='text' placeholder='username or email' className='rounded-2xl font-medium text-xl m-2 p-2 bg-gray-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type='password' placeholder='password' className='rounded-2xl font-medium text-xl p-2 m-2 bg-gray-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' className='rounded-2xl bg-green-400 font-medium text-xl text-white no-underline mt-10 px-3 py-1' onClick={loginHandler}>Login</button>
          </form>
          )}
        </div>
    );

}

export default SignIn;
