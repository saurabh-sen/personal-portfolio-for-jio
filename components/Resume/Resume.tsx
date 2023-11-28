import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import resume_bg from '@/public/resume_bg.jpeg'

const Resume = () => {
  return (
    <section id='resume' className='resume px-6 py-12 md:p-24 relative'>
      <div className="resume__bg absolute top-0 left-0 -z-10 h-full w-full bg-[#0f0f0fb1]"></div>
      <Image className='resume__bg_image absolute top-0 left-0 -z-20 h-full w-full object-cover' src={resume_bg} alt='resume__bg_image' />
      <p className="about__heading text-xl md:text-4xl w-max mx-auto mt-3 font-semibold text-white">Interested in my work?</p>
      <Link href="https://drive.google.com/u/0/uc?id=1xyFP0kdPeIjtM8iVONUagln9oAYZA7KV&export=download" target='_blank' download className="my__work__button text-sm md:text-lg mt-10 flex mx-auto">Resume</Link>
    </section>
  )
}

export default Resume