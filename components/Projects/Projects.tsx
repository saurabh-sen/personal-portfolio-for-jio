import Image, { StaticImageData } from 'next/image';
import React from 'react'

import project_bg from '@/public/project_bg.jpg';
import project1_bg from '@/public/project1_bg.jpg';
import project2_bg from '@/public/project2_bg.jpg';
import Link from 'next/link';

const Projects = () => {

  const data = [
    {
      name: 'Collaborative Drawing app',
      category: 'Canvas Api, Socket.io, Next.js, Express.js.',
      image: project_bg,
      link: 'https://sketchbook-frontend-theta.vercel.app/',
    },
    {
      name: 'Peer to Peer Video chat app',
      category: 'webRTC, Socket.io, Next.js, TypeScript.',
      image: project1_bg,
      link: 'https://webrtc-video-call-app.vercel.app/',
    },
    {
      name: 'My Portfolio',
      category: 'Next.js, Tailwind CSS, TypeScript, Sanity CMS.',
      image: project2_bg,
      link: 'https://saurabhsen.me'
    }
  ]

  return (
    <section id="projects" className='projects p-6 md:p-24 bg-gray-100'>
      <p className="about__text bg-primary px-2 py-1 w-max mx-auto text-sm font-medium">Projects</p>
      <p className="about__heading text-xl md:text-4xl w-max mx-auto mt-3 font-semibold text-center">Some of my recent projects</p>
      <div className="projects__container flex flex-wrap gap-4 items-center justify-center mt-14">
        {data.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

interface PProjectCard {
  name: string,
  category: string,
  image: StaticImageData,
  link?: string
}

const ProjectCard: React.FC<PProjectCard> = ({name, category, image, link}) => {
  return (
    <div className="project__card group relative overflow-hidden">
      <Image className='w-44 md:w-96 transition-all duration-300 group-hover:scale-110' src={image} alt='project_bg' />
      <Link href={link ? link : "#"} target='_blank' className="overlay hidden group-hover:flex justify-center items-center flex-col group-hover:bg-[#00000162] z-20 absolute top-0 left-0 h-full w-full transition-all duration-150 cursor-pointer text-center">
        <p className="text-white text-sm md:text-xl font-medium">{name}</p>
        <p className="text-white text-xs md:text-sm font-medium">{category}</p>
      </Link>
    </div>
  )
};

export default Projects