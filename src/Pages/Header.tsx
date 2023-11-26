"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <header className={`sticky top-0 py-12 px-32 border-b-2 transition-all bg-[#161826] ease-in-out duration-500 ${scrolled ? 'border-[#00D8FF]' : "border-transparent"}`} >
        <div className='flex items-center justify-between'>
          <div className='text-xl text-white font-extrabold'>Portfolio.</div>
          <div className='flex items-center gap-16'>
            <div className='text-lg text-white font-normal hover:text-[#00D8FF] transition-colors duration-500 cursor-pointer'>Home</div>
            <Link href="/AboutMe" className='text-lg text-white font-normal hover:text-[#00D8FF] transition-colors duration-500 cursor-pointer'>About</Link>
            <div className='text-lg text-white font-normal hover:text-[#00D8FF] transition-colors duration-500 cursor-pointer'>Services</div>
            <div className='text-lg text-white font-normal hover:text-[#00D8FF] transition-colors duration-500 cursor-pointer'>Portfolio</div>
            <div className='text-lg text-white font-normal hover:text-[#00D8FF] transition-colors duration-500 cursor-pointer'>Contact</div>
          </div>
        </div>
    </header>
  )
}

export default Header