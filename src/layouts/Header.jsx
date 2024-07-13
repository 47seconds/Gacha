import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import {LogoutButton} from '../components';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector(state => state.userReducer.isLogin);
  // console.log(useSelector(state => state.userReducer.user));
  const navItems = [
    {
      name: 'Home',
      url: '/home',
      active: true
    },
    // {
    //   name: 'Login',
    //   url: '/login',
    //   active: !authStatus
    // },
    // {
    //   name: 'Signup',
    //   url: '/signup',
    //   active: !authStatus
    // },
  ]

  const isPageActive = ({isActive}) => isActive ? 'bg-red-400' : '';
  return (
    <header className='w-full h-16 bg-gray-400 flex justify-around items-center fixed top-0 mb-16'>
      <nav className='w-full h-full flex justify-around items-center'>
        <div className='h-full'>
          <Link to='/'>
            <img src={Logo} className='h-full p-2 rounded-2xl'/>
          </Link>
        </div>
        <div className='h-full w-1/2 flex'>
          <ul className='h-full w-full flex justify-around items-center'>
            {navItems.map((item) => 
              item.active ? (
              <li key={item.name}>
                <NavLink to={item.url} className={(isActive) => `${isPageActive(isActive)} p-2 rounded-2xl font-medium text-xl text-white hover:bg-red-400`}>
                  {item.name}
                </NavLink>
              </li>) : null
            )}
          </ul>
        </div>
        <div className='w-1/6'></div>
        <div>
          {!authStatus && (
                <div>
                  <NavLink to='/signup' className={(isActive) => `${isPageActive(isActive)} p-2 rounded-2xl font-medium text-xl text-white hover:bg-red-400`}>
                    Sign up
                  </NavLink>
                  <Link to='/login' className='rounded-2xl bg-blue-500 text-white p-2 text-xl font-medium mx-2'>
                    Login
                  </Link>
                </div>
          )}
          {authStatus && (
                <div>
                  <LogoutButton/>
                </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header