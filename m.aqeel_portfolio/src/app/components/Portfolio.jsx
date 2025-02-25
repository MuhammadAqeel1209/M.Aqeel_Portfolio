'use client';
import React from 'react';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: '/assets/project1/one.png',
    title: 'E-Commerce Project',
    description:
      'E-Commerce Project using Django, HTML, CSS, and Bootstrap Framework.',
    github:
      'https://github.com/MuhammadAqeel1209/Django_Frame_Work/tree/main/E_Commerce/AqeelMart',
  },
  {
    img: '/assets/project2/one.png',
    title: 'I Coder Blog Post',
    description:
      'A fullstack application built with Django and HTML, CSS, and Bootstrap Framework.',
    github:
      'https://github.com/MuhammadAqeel1209/Django_Frame_Work/tree/main/I_Coder%20Blog',
  },
  {
    img: '/assets/project3/one.png',
    title: 'Text Utills Project',
    description:
      'Text Utills Project using Django, HTML, CSS, and Bootstrap Framework.',
    github:
      'https://github.com/MuhammadAqeel1209/Django_Frame_Work/tree/main/textutillity',
  },
  {
    img: '/assets/project4/eight.jpg',
    title: 'E Commerce Project',
    description:
      'E Commerce Project using FASTAPI and Next js.',
    github:
      'https://github.com/MuhammadAqeel1209/FastAPI_Tutorials_and_Poetry/tree/main/E_Comerce_Mart_Project_FASTAPI_Nextjs',
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-12`}>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>
                {project.title}
              </h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <a
                href={project.github}
                className='w-12 h-12 bg-slate-600 text-gray-200 flex items-center justify-center rounded-lg hover:bg-slate-700 transition duration-300'
                target='_blank'
                rel='noopener noreferrer'>
                <AiOutlineGithub size={22} />
              </a>
            </div>
            <div className='w-full md:w-1/2 p-4'>
              <Image
                src={project.img}
                width={800}
                height={600}
                alt={project.title}
                className='rounded-lg object-cover shadow-lg w-full'
              />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
