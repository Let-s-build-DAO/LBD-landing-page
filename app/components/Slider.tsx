import React, { useRef, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Mousewheel } from 'swiper/modules';
import { useIsMobile } from '~/utils/isMobile';

export default function Slider() {
  const isMobile = useIsMobile();
  const swiperRef = useRef<{ swiper: any } | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsActive(entry.isIntersecting);
          if (entry.isIntersecting) {
            sliderContainerRef?.current?.focus();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sliderContainerRef.current) {
      observer.observe(sliderContainerRef.current);
    }

    return () => {
      if (sliderContainerRef.current) {
        observer.unobserve(sliderContainerRef.current);
      }
    };
  }, [mounted]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (!isActive || !mounted || !swiperRef.current) return;

      const swiper = swiperRef?.current?.swiper;

      const isAtBeginning = swiper.isBeginning;
      const isAtEnd = swiper.isEnd;

      switch (e.key) {
        case 'ArrowUp':
        case 'PageUp':
          if (!isAtEnd) {
            e.preventDefault();
            swiper.slideNext();
          }
          break;
        case 'ArrowDown':
        case 'PageDown':
          if (!isAtBeginning) {
            e.preventDefault();
            swiper.slidePrev();
          }
          break;
        case 'Home':
          swiper.slideTo(0);
          break;
        case 'End':
          swiper.slideTo(swiper.slides.length - 1);
          break;
        default:
          return;
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, mounted]);

  return (
    <>{mounted &&
      <div
        ref={sliderContainerRef}
        className='py-32 relative'
      >

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Mousewheel]}
          className="mySwiper"
          direction='vertical'
          cardsEffect={{
            slideShadows: true,
            perSlideOffset: isMobile ? 10 : 20,
            perSlideRotate: 0,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          initialSlide={2}
          ref={swiperRef}
        >
          <SwiperSlide>
            <div className='lg:flex lg:p-10 p-6 justify-evenly'>
              <img className='lg:w-[40%]' src="/images/lbd-academy.png" alt="" />
              <div className='lg:w-[30%] my-auto'>
                <h3 className='lg:text-5xl lg:mt-0 mt-6 text-3xl font-bold text-[#030303]'>Bootcamps, Hackathons & Meetups</h3>
                <p className='text-base text-[#373737] my-3'>We host community-driven Web3 events, connecting builders, investors, and enthusiasts to innovate, collaborate, and fund Africa’s blockchain revolution.</p>
                <button className='rounded-full text-[#FBFBFB] py-3 px-8 border border-[#7B5CFF] bg-[#7B5CFF]'>Join Our Community </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='lg:flex lg:p-10 p-6 justify-evenly'>
              <img className='lg:w-[40%]' src="/images/lbd-academy.png" alt="" />
              <div className='lg:w-[30%] my-auto'>
                <h3 className='lg:text-5xl lg:mt-0 mt-6 text-3xl font-bold'>Lazy NFTs</h3>
                <p className='text-base my-3 text-[#C4C4C4]'>Beyond collectibles – they are keys to: <br /> <br />

                  ✅ Let’s Build Academy (Web3 courses) <br />
                  ✅ Exclusive Meetups & Events <br />
                  ✅ LB DAO Governance & Funding Decisions</p>
                <button className='rounded-full bg-[#FBFBFB] py-3 px-8 border border-[#7B5CFF] text-[#7B5CFF]'>Claim our NFt </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='lg:flex lg:p-10 p-6 justify-evenly'>
              <img className='lg:w-[40%]' src="/images/lbd-academy.png" alt="" />
              <div className='lg:w-[30%] my-auto'>
                <h3 className='lg:text-5xl lg:mt-0 mt-6 text-3xl font-bold'>Let’s Build Academy</h3>
                <p className='text-base text-[#C4C4C4] my-3'>A self-learning platform that teaches Web3 development, design, writing, and more. Access is granted through our Lazy NFT collection.</p>
                <button className='rounded-full bg-[#FBFBFB] py-3 px-8 border border-[#7B5CFF] text-[#7B5CFF]'>Get Started </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    }
    </>
  );
}
