import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, Navigate} from 'react-router-dom';
import App from '../App';
import {Home, SignIn, SignUp, About, AccountSettings, UploadShottiePage} from '../pages';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Navigate to='/home' replace/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='signin' element={<SignIn/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='account-settings' element={<AccountSettings/>}/>
            <Route path='upload/shottie' element={<UploadShottiePage/>}/>
        </Route>
    )
)
export default router