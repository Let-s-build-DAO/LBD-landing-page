import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div id='hero'>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className='lg:w-1/2 w-[95%] text-center'>
          <div className='w-44 mx-auto mb-6'>
            <div className='linear'></div>
            <p className='text-[#7B5CFF] text-sm p-2'>Let's Build DAO</p>
            <div className='linear'></div>
          </div>
          <h3 className='lg:text-5xl text-4xl font-bold lg:leading-15'>We're Powering Africa's <br /> On-Chain Future</h3>

          <p className='text-[#C4C4C4] my-3'>LB DAO is building Africa’s first On-Chain Intelligence Hub, empowering individuals, businesses, and investors with real-time blockchain insights, decentralized governance, and funding intelligence.</p>
          <Link to={'https://t.me/letsbuilddaocommunity'}>
            <button className='rounded-full text-[#FBFBFB] py-3 px-8 border border-[#E5DEFF] bg-[#7B5CFF]'>Join Community </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;