"use client"
import homepage_bg from '@/public/homepage_bg.jpg'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Homepage = () => {
  return (
    <section className='homepage relative min-h-screen text-white center__div text-center'>
      <div className="homepage__bg absolute top-0 left-0 -z-20 h-full w-full bg-[#5b505057]"></div>
      <Image className='homepage__bg_image absolute top-0 left-0 -z-10 h-full w-full' src={homepage_bg} alt='homepage' />
      <div className="homepage__content center__div gap-3 flex-col ">
        <p className="content__text text-base md:text-2xl">HI, I&apos;M A SOFTWARE ENGINEER</p>
        <p className="content__text text-4xl md:text-8xl font-semibold">
          <Typewriter
            cursor
            cursorBlinking
            cursorColor="#ffffff"
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              'Freelancer',
              'Developer',
              'Problem Solver'
            ]}
          />
        </p>
        <p className="content__text text-sm md:text-lg">based in Madhya Pradesh, India.</p>
        <Link href="#projects" className="my__work__button text-sm md:text-lg mt-3">My Works</Link>
      </div>
    </section>
  )
}

export default Homepage