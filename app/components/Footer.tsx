import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className='m-10'>
      <div className='text-center'>
        <p className='text-[#C4C4C4] mb-6'>Quick Links</p>
        <div className='flex lg:w-80 mx-auto justify-between'>
          <p>Home</p>
          <p><Link to='/about'> About us </Link></p>
          <p>Academy</p>
          <p>Lazy NFT</p>
        </div>
      </div>
      <div className='lg:flex justify-between my-8'>
        <img className='w-32 my-4 lg:mx-0 lg:my-0 mx-auto' src="/images/logo.png" alt="" />
        <div className='flex my-auto justify-between gap-1'>
          <img className='w-12 h-12 my-auto' src="/images/icons/001.svg" alt="" />
          <img className='w-12 h-12 my-auto' src="/images/icons/002.svg" alt="" />
          <img className='w-12 h-12 my-auto' src="/images/icons/003.svg" alt="" />
          <img className='w-12 h-12 my-auto' src="/images/icons/004.svg" alt="" />
          <img className='w-12 h-12 my-auto' src="/images/icons/005.svg" alt="" />

        </div>
      </div>
      <div className='bg-[#E5DEFF] text-[#030303] rounded-sm mt-6 text-center p-4 text-sm'>
        <p>Copyright © 2025 LBD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;