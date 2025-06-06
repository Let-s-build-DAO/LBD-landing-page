import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // triggers when user scrolls down 10px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030303]/90 backdrop-blur-md shadow-md' : ''
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        <img className="w-28" src="/images/logo.png" alt="Logo" />

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-[#7B5CFF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <nav
          className={`${isOpen ? 'block' : 'hidden'
            } absolute md:static top-[70px] left-0 w-full md:w-auto md:flex bg-[#7B5CFF] md:bg-transparent px-6 md:px-0 py-4 md:py-0 flex-col md:flex-row gap-6 md:gap-8 text-[#EBEBEB] items-start md:items-center`}
        >
          <p className="my-3">
            <Link to="/" className="hover:text-[#7B5CFF]">Home</Link>
          </p>
          <p className="my-3">
            <Link to="/about" className="hover:text-[#7B5CFF]">About us</Link>
          </p>
          <p className="my-3">
            <Link to="https://academy.letsbuilddao.org/" className="hover:text-[#7B5CFF]">Academy</Link>
          </p>
          <p className="my-3">
            <Link to="https://lazy.letsbuilddao.org/" className="hover:text-[#7B5CFF]">Lazy NFT</Link>
          </p>

          <Link to={'https://t.me/letsbuilddaocommunity'}>
            <button className="rounded-full text-[#FBFBFB] my-3 py-2 px-6 border border-[#E5DEFF] bg-[#7B5CFF]">
              Join Community
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
