import React from 'react';

const Vision = () => {
  return (
    <div>
      <div className='text-center'>
        <p className='text-[#C4C4C4]'>About Let’s Build Dao</p>
        <h1 className='lg:text-5xl text-3xl mt-3 font-bold'>Our Vision</h1>
      </div>
      <div className='mt-10 px-10'>
        <div className='linear'></div>
        <div className='lg:flex justify-between'>
          <div className='lg"w-[25%] mx-auto lg:my-auto my-6 lg:text-right text-center'>
            <h3 className='text-4xl font-bold'>5,000+</h3>
            <p className='text-[#CDCDCD] text-xs'>Africans fully on-chain by 2028</p>
          </div>
          <div className='linear opacity-50 lg:h-[100px] my-auto'></div>
          <div className='lg:w-[35%] mx-auto text-center my-10'>
            <p className='text-[#CDCDCD] text-sm'>A thriving African blockchain economy built on real data, governance, and collaboration.
              For too long, Africa has been excluded from global finance. LB DAO is here to change that by making Web3 more accessible, inclusive, and impactful.</p>
          </div>
          <div className='linear opacity-50 lg:h-[100px] my-auto'></div>
          <div className='lg:w-[25%] mx-auto lg:my-auto my-6 lg:text-right text-center'>
            <h3 className='text-4xl font-bold'>45.6M+</h3>
            <p className='text-[#CDCDCD] text-xs'>on-chain transactions by 2030</p>
          </div>
        </div>
        <div className='linear'></div>
      </div>
    </div>
  );
};

export default Vision;