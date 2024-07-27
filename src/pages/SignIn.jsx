import React, { useState, useEffect } from "react";
import authService from "../service/auth.service.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../features/user/user.slice.js";
import Cookies from "js-cookie";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginHandler = async (e) => {
        e.preventDefault();

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
            navigate("/home");
        } else {
            console.log("Login failed");
        }
    };

    return (
        <div className='w-full h-full flex justify-center items-center'>
          <form className='w-1/4 h-1/2 flex flex-col justify-center items-center p-5 rounded-2xl'>
            <input type='text' placeholder='username or email' className='rounded-2xl font-medium text-xl m-2 p-2 bg-gray-200 w-5/6' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type='password' placeholder='password' className='rounded-2xl font-medium text-xl p-2 m-2 bg-gray-200 w-5/6' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' className='rounded-2xl bg-green-400 font-medium text-xl text-white no-underline mt-10 px-3 py-1' onClick={loginHandler}>Login</button>
          </form>
        </div>
    );

}

export default SignIn;
1