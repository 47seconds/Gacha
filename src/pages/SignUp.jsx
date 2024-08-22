import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../service/auth.service.js";
import { userSignup } from "../features/user/user.slice.js";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState(undefined);
    const [coverImage, setCoverImage] = useState(undefined);
    const dispach = useDispatch();
    const navigate = useNavigate();

    const signupHandler = async (e) => {
        e.preventDefault();

        const signupFormData = new FormData();

        signupFormData.append("fullName", fullName);
        signupFormData.append("username", username);
        signupFormData.append("password", password);
        signupFormData.append("email", email);
        signupFormData.append("avatar", avatar);
        signupFormData.append("coverImage", coverImage);

        const res = await authService.userSignup(signupFormData);
        if (res.statusCode == 200) {
            dispach(userSignup(res.data));
            console.log("account created");
            navigate("/home");
        }
    };

    return (
        <div className='h-full w-full flex justify-center items-center'>
          <form className='flex w-full flex-col justify-center items-center'>
            <input type='text' placeholder='Full Name' required value={fullName} onChange={e => setFullName(e.target.value)} className='bg-gray-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-2xl px-3 py-1.5 my-2 text-2xl font-medium'/>
            <input type='text' placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} className='bg-gray-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-2xl px-3 py-1.5 my-2 text-2xl font-medium'/>
            <input type='text' placeholder='username' required value={username} onChange={e => setUsername(e.target.value)} className='bg-gray-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-2xl px-3 py-1.5 my-2 text-2xl font-medium'/>
            <input type='password' placeholder='password' required value={password} onChange={e => setPassword(e.target.value)} className='bg-gray-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-2xl px-3 py-1.5 my-2 text-2xl font-medium'/>
            <input type='file' placeholder='Avatar' accept=".png, .jpg, .jpeg" required   onChange={e => setAvatar(e.target.files[0])} className='bg-gray-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-2xl px-3 py-1.5 my-2 text-2xl font-medium'/>
            <input type='file' placeholder='Cover Image' accept=".png, .jpg, .jpeg" onChange={e => setCoverImage(e.target.files[0])} className='bg-gray-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-2xl px-3 py-1.5 my-2 text-2xl font-medium'/>
            <button onClick={signupHandler} className='bg-green-200 rounded-2xl px-5 py-1.5 my-2 text-2xl font-medium'>Sign up</button>
          </form>
        </div>
    );
}

export default SignUp;
