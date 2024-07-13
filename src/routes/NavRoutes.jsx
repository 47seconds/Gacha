import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, Navigate} from 'react-router-dom';
import App from '../App';
import {Home, Login, SignUp} from '../pages';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            {/* <Route path='' element={<Navigate to='/home' replace/>}/> */}
            <Route path='home' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
        </Route>
    )
)
export default router