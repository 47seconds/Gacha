import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../service/auth.service'
import { userLogout } from '../features/user/user.slice'

function LogoutButton() {
    const dispach = useDispatch();
    const logoutHandler = () => {
        authService.userLogout()
        .then(dispach(userLogout()))
        console.log('Logout successful')
    }

  return (
    <button onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutButton