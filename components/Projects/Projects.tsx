import Image from 'next/image';
import React from 'react'

import project_bg from '@/public/project_bg.jpg';

const Projects = () => {
  return (
    <section id="projects" className='projects p-6 md:p-24 bg-gray-100'>
      <p className="about__text bg-primary px-2 py-1 w-max mx-auto text-sm font-medium">Projects</p>
      <p className="about__heading text-xl md:text-4xl w-max mx-auto mt-3 font-semibold text-center">Some of my recent projects</p>
      <div className="projects__container flex flex-wrap gap-4 items-center justify-center mt-14">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

const ProjectCard = () => {
  return (
    <div className="project__card group relative overflow-hidden">
      <Image className='w-44 md:w-96 transition-all duration-300 group-hover:scale-110' src={project_bg} alt='project_bg' />
      <div className="overlay hidden group-hover:flex justify-center items-center flex-col group-hover:bg-[#00000162] z-20 absolute top-0 left-0 h-full w-full transition-all duration-150 cursor-pointer text-center">
        <p className="text-white text-sm md:text-xl font-medium">Collaborative Drawing app</p>
        <p className="text-white text-xs md:text-sm font-medium">Full Stack Application</p>
      </div>
    </div>
  )
};

export default Projects