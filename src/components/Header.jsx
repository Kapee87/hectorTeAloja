// src/components/Header.js
import React from 'react';
import Navbar from './Navbar';
import LoginModal from './LoginModal';
import logo from '../assets/logoH.png'


const Header = () => {


  return (
    <header className="bg-gray-800 text-white fixed top-0 w-full flex flex-col md:flex-row flex-wrap justify-center md:justify-between p-4 z-50">
      <div className='flex flex-wrap justify-center'>
        <a href="/" className="text-xl font-bold text-white">
          <img src={logo} alt="logo de hector te aloja" className='h-9' />
        </a>
        <Navbar />
      </div>
      <LoginModal />
    </header>
  );
};

export default Header;




