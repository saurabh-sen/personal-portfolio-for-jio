import React from 'react'
import Image from 'next/image'

import js_bg from "@/public/javascript-logo.png"
import Link from 'next/link'

const About = () => {
  return (
    <section id='about' className='about px-6 py-12 md:p-24'>
      <p className="about__text bg-primary px-2 py-1 w-max mx-auto text-xs md:text-sm font-medium">About Me</p>
      <p className="about__heading text-lg md:text-4xl w-max mx-auto mt-3 font-semibold">Know Me More</p>
      <div className="about__content flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 text-center md:text-left my-14">
        <div className="content__text">
          <p className="content__heading text-xl md:text-3xl font-medium mb-2">Hi, I&apos;m <Link href="https://saurabhsen.me" className="relative font-bold">SAURABH SEN
          <div className='absolute -bottom-2 left-0 z-10 bg-primary h-[3px] w-full' />
          </Link>.</p>
          <p className="content__desc text-sm md:text-2xl leading-loose">I&apos;m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client&apos;s requirements is our moto.</p>
        </div>
        <Image className='w-40 md:w-56' src={js_bg} alt='js_bg' />
      </div>
      <div className="about__info flex flex-wrap justify-between items-center text-sm md:text-xl">
        <div className="flex flex-col gap-2">
          <p className="text-gray-300">Name:</p>
          <p className="">Saurabh Sen</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-300">Email:</p>
          <Link href="mailto:sensaurabh1212@gmail.com" className="">Saurabh Sen</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-300">Date of birth:</p>
          <p className="">23 March, 2002</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-300">From:</p>
          <p className="">Madhya Pradesh, India.</p>
        </div>
      </div>
    </section>
  )
}

export default About