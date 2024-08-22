import React from 'react';
import Logo from '../assets/Logo.png';

const SplashScreen = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 text-yellow-100 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-3xl font-bold animate-pulse flex justify-center items-center">
        <img src={Logo} className='w-24'/> Gacha
      </div>
    </div>
  );
};

export default SplashScreen;
