import React from 'react'
import authService from '../service/auth.service';
import {userLogout} from '../features/user/user.slice.js';
import { useDispatch } from 'react-redux';

function DeleteUser() {
        const dispach = useDispatch();

        const deletebtnHandler = async(e) => {
            e.preventDefault();

            const res = await authService.userDelete().then(dispach(userLogout()));
            console.log('account deleted');
        }

  return (
    <button className='bg-red-500 rounded-2xl px-3 py-1 mb-2 text-white' onClick={deletebtnHandler}>Delete</button>
  )
}

export default DeleteUser