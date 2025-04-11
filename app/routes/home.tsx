import React from 'react';
import Slider from '~/components/Slider';
import type { Route } from "./+types/home";
import Footer from '~/components/Footer';
import HeaderNav from '~/components/HeaderNav';
import Vision from '~/components/Vision';
import Hero from '~/components/Hero';


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Let's Build DAO" },
    { name: "description", content: "Powering Africa’s Web3 Future with Data, Governance & Education" },

    { property: "og:title", content: "Let's Build DAO" },
    { property: "og:description", content: "Powering Africa’s Web3 Future with Data, Governance & Education" },
    { property: "og:image", content: "http://letsbuilddao.org/images/logo.png" },
    { property: "og:url", content: "http://letsbuilddao.org/" },
    { property: "og:type", content: "website" },

    // 👇 Twitter Card
    { name: "twitter:title", content: "Let's Build DAO" },
    { name: "twitter:description", content: "Powering Africa’s Web3 Future with Data, Governance & Education" },
    { name: "twitter:image", content: "http://letsbuilddao.org/images/logo.png" },
  ];
}

const home = () => {
  return (
    <main>
      <HeaderNav />
      <Hero />
      <section className='bg-transparent -mt-10'>
        <Vision />
      </section>
      <section className='my-20 lg:mx-10 mx-6'>
        <div className='lg:w-[70%] text-center mx-auto'>
          <p className='text-[#CDCDCD]'>Why LB DAO?</p>
          <h3 className='lg:text-5xl text-3xl font-bold my-4'>Powering Africa’s Web3 Future with Data, Governance & Education</h3>
        </div>
        <div className='lg:flex justify-between mt-10 gap-3'>
          <div className='lg:w-[22%] mx-auto'>
            <img src="/images/why-lbd/why-1.png" alt="" />
            <div className='text-center p-4'>
              <p className='font-bold text-lg'>Data-Driven Decision Making</p>
              <p className='text-[#CDCDCD] text-sm mt-2'>We collect, analyze, and track on-chain transactions to identify real Web3 adoption trends across Africa.</p>
            </div>
          </div>
          <div className='linear opacity-50 lg:h-[200px] lg:my-auto my-4'></div>
          <div className='lg:w-[22%] mx-auto'>
            <img src="/images/why-lbd/why-2.png" alt="" />
            <div className='text-center p-4'>
              <p className='font-bold text-lg'>Decentralized Governance</p>
              <p className='text-[#CDCDCD] text-sm mt-2'>Our Lazy NFT holders participate in decision-making, funding allocations, and ecosystem growth.</p>
            </div>
          </div>
          <div className='linear opacity-50 lg:h-[200px] lg:my-auto my-4'></div>
          <div className='lg:w-[22%] mx-auto'>
            <img src="/images/why-lbd/why-3.png" alt="" />
            <div className='text-center p-4'>
              <p className='font-bold text-lg'>Web3 Education & Growth</p>
              <p className='text-[#CDCDCD] text-sm mt-2'>Through Let's Build Academy, we provide self-paced courses, bootcamps, and hackathons to train Africa’s next Web3 leaders.</p>
            </div>
          </div>
          <div className='linear opacity-50 lg:h-[200px] lg:my-auto my-4'></div>

          <div className='lg:w-[22%] mx-auto'>
            <img src="/images/why-lbd/why-4.png" alt="" />
            <div className='text-center p-4'>
              <p className='font-bold text-lg'>Real Funding for Real Needs</p>
              <p className='text-[#CDCDCD] text-sm mt-2'>Our ecosystem ensures investors and protocols fund projects based on data-backed needs, not speculation.</p>
            </div>
          </div>
        </div>
        <div className='linear'></div>
      </section>
      <section className='lg:mx-10 mx-6'>
        <div className='lg:w-[35%] mx-auto text-center my-10'>
          <p className='text-[#CDCDCD]'>Our Ecosystem</p>
          <p className='lg:text-5xl text-3xl my-4 font-bold'>Let’s Build DAO Intelligence Hub</p>
          <p className='text-[#CDCDCD]'>Our data platform tracks real-time on-chain transactions across Africa, enabling data-backed funding, innovation, and governance.</p>
        </div>
        <Slider />
      </section>
      {/* <section id='join' className='p-10 my-20 text-white text-center'>
        <h3 className='text-5xl font-bold mb-3'>Join the Movement</h3>
        <p>🚀 Be part of Africa’s Web3 revolution. Get involved today by:</p>
        <p>✅ Becoming a Lazy NFT holder | ✅ Enrolling in Let’s Build Academy </p>
        <p>✅ Attending our bootcamps & meetups | ✅ Participating in DAO governance</p>
        <p className='mt-3'>📌 Together, we are not just building – we are shaping Africa’s on-chain future.</p>
      </section> */}
      <Footer />
    </main>
  );
};

export default home;