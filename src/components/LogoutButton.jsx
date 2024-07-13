import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../service/auth.service'
import { userLogout } from '../features/user/user.slice'

function LogoutButton() {
    const dispach = useDispatch();
    const logoutHandler = () => {
        authService.userLogout()
        .then(dispach(userLogout()))
    }

  return (
    <button className='rounded-2xl bg-blue-500 text-white p-2 text-xl font-medium' onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutButton