import React from 'react';
import Footer from '~/components/Footer';
import HeaderNav from '~/components/HeaderNav';
import Vision from '~/components/Vision';
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About - Let's Build DAO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const about = () => {
  return (
    <>
      <HeaderNav />
      <section id='about' className='mx-10'>
        <div className='lg:w-[40%] mx-auto text-center py-40'>
          <p>About Let’s Build DAO</p>
          <h4 className='text-5xl font-bold'>Building Africa’s On-Chain Future</h4>
        </div>
        <div className='lg:flex justify-between'>
          <img className='lg:w-[45%] mr-auto' src="/images/about.png" alt="" />
          <div className='my-auto lg:mt-0 mt-6  lg:w-1/2'>
            <p>Who We Are</p>
            <h3 className='lg:text-5xl text-3xl my-3 font-bold'>Building Africa’s Web3 Future with On-Chain Intelligence</h3>
            <p className='text-[#CDCDCD] text-lg'>LB DAO is Africa’s first On-Chain Intelligence Hub, designed to drive real blockchain adoption by collecting, analyzing, and leveraging on-chain transaction data. Instead of blindly building, we provide insights, governance, and funding mechanisms to ensure the right Web3 solutions are created for Africa.
              <br /> <br />
              We’re not just another DAO—we’re building Africa’s Web3 infrastructure, ensuring Africans don’t just use blockchain, but actively shape its future.</p>
          </div>
        </div>
      </section>
      <section className='my-20 mx-10'>
        <div className='lg:w-[55%] my-10'>
          <p>What We Do</p>
          <h3 className='lg:text-5xl text-3xl font-bold'>Empowering Africa with Data-Driven Web3 Solutions</h3>
        </div>
        <div className='lg:flex lg:gap-0 gap-4 justify-between'>
          <div className='lg:w-[32%] rounded-[24px] overflow-hidden'>
            <div className='linear'>
              <img className='' src="/images/about/intelligence.png" alt="" />
              <div className='p-4'>
                <p className='font-bold my-2'>On-Chain Intelligence & Data Tracking</p>
                <p>We monitor blockchain transactions across Africa to identify trends, gaps, and opportunities.</p>
              </div>
            </div>
          </div>
          <div className='lg:w-[32%] rounded-[24px] overflow-hidden '>
            <div className='linear'>
              <img src="/images/about/governance.png" alt="" />
              <div className='p-4'>
                <p className='font-bold my-2'>DAO-Driven Governance & Funding</p>
                <p>Our community, powered by Lazy NFTs, decides where funding should go based on real data.</p>
              </div>
            </div>
          </div>
          <div className='lg:w-[32%] rounded-[24px] overflow-hidden'>
            <div className='linear'>
              <img src="/images/about/finance.png" alt="" />
              <div className='p-4'>
                <p className='font-bold my-2'>Bridging Traditional & On-Chain Finance</p>
                <p>Helping Africa transition into the global Web3 economy by driving adoption and investment.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:flex lg:gap-0 gap-4 justify-between mt-6'>
          <div className='lg:w-[49%] rounded-[24px] overflow-hidden'>
            <div className='linear'>
              <img src="/images/about/event.png" alt="" />
              <div className='p-4 '>
                <p className='font-bold my-2'>Hackathons, Meetups & Bootcamps</p>
                <p>Connecting builders, investors, and innovators to bring impactful Web3 projects to life.</p>
              </div>
            </div>
          </div>
          <div className='lg:w-[49%] rounded-[24px] overflow-hidden'>
            <div className='linear'>
              <img src="/images/about/academy.png" alt="" />
              <div className='p-4'>
                <p className='font-bold my-2'>Let’s Build Academy</p>
                <p>A self-learning platform offering Web3 courses in development, design, and blockchain writing.</p>
              </div></div>
          </div>
        </div>

      </section>
      <Vision />
      <Footer />
    </>
  );
};

export default about;