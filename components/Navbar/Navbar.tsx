"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const softScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', softScroll);

    // cleanup this event listener
    () => {
      window.removeEventListener('scroll', softScroll);
    }
  }, [])

  return (
    <nav className={`navbar py-4 text-white flex justify-between items-center flex-col md:flex-row fixed top-0 left-0 z-50 w-full ${isScrolled && 'backdrop-filter backdrop-blur-sm bg-[#00000015]'} px-24`}>
      <Link href="/" className='navbar__text font-bold text-xl md:text-3xl' title="I'm Saurabh">
        Saurabh Sen
      </Link>
      <div className='navbar__links text-sm md:text-lg flex gap-3'>
        <Link href="#about" className='hover:text-primary hover:underline' >About</Link>
        <Link href="#projects" className='hover:text-primary hover:underline' >Projects</Link>
        <Link href="#resume" className='hover:text-primary hover:underline' >Resume</Link>
        <Link href="#contact" className='hover:text-primary hover:underline' >Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar