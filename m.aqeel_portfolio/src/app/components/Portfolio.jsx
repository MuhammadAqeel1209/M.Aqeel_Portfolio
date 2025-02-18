'use client';
import React, { useState } from 'react';
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
    gallery: [
      '/assets/project1/one.png',
      '/assets/project1/two.png',
      '/assets/project1/three.png',
      '/assets/project1/four.png',
      '/assets/project1/five.png',
    ],
  },
  {
    img: '/assets/project2/one.png',
    title: 'I Coder Blog Post',
    description:
      'A fullstack application built with Django and HTML, CSS, and Bootstrap Framework.',
    github:
      'https://github.com/MuhammadAqeel1209/Django_Frame_Work/tree/main/I_Coder%20Blog',
    gallery: [
      '/assets/project2/one.png',
      '/assets/project2/two.png',
      '/assets/project2/three.png',
      '/assets/project2/four.png',
    ],
  },
  {
    img: '/assets/project3/one.png',
    title: 'Text Utills Project',
    description:
      'Text Utills Project using Django, HTML, CSS, and Bootstrap Framework.',
    github:
      'https://github.com/MuhammadAqeel1209/Django_Frame_Work/tree/main/textutillity',
    gallery: [
      '/assets/project3/one.png',
      '/assets/project3/two.png',
      '/assets/project3/three.png',
      '/assets/project3/four.png',
      '/assets/project3/five.png',
      '/assets/project3/six.png',
    ],
  },
  {
    img: '/assets/project4/eight.jpg',
    title: 'E Commerce Project',
    description:
      'E Commerce Project using FASTAPI and Next js.',
    github:
      'https://github.com/MuhammadAqeel1209/FastAPI_Tutorials_and_Poetry/tree/main/E_Comerce_Mart_Project_FASTAPI_Nextjs',
    gallery: [
      '/assets/project4/one.jpg',
      '/assets/project4/two.jpg',
      '/assets/project4/three.jpg',
      '/assets/project4/four.jpg',
      '/assets/project4/five.jpg',
      '/assets/project4/six.jpg',
      '/assets/project4/seven.jpg',
      '/assets/project4/eight.jpg',
      '/assets/project4/nine.jpg',
      '/assets/project4/ten.jpg',
    ],
  },
];

const Portfolio = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-12`}>
            {/* Project Details */}
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>
                {project.title}
              </h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4 mb-4'>
                <a
                  href={project.github}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <AiOutlineGithub size={24} />
                </a>
              </div>

              {/* Project Gallery */}
              <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {project.gallery.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className='w-full'
                    onClick={() => openModal(image)}>
                    <Image
                      src={image}
                      width={550}
                      height={450}
                      alt={`Gallery ${imgIndex}`}
                      className='rounded-md shadow-md object-cover w-full cursor-pointer'
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Main Project Image */}
            <div className='w-full md:w-1/2 p-4'>
              <Image
                src={project.img}
                width={450}
                height={450}
                alt={project.title}
                className='rounded-lg object-cover shadow-lg'
              />
            </div>
          </div>
        </Reveal>
      ))}

      {/* Modal for displaying large image */}
      {modalImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'
          onClick={closeModal}>
          <div className='relative'>
            <Image
              src={modalImage}
              width={800}
              height={600}
              alt='Modal Image'
              className='rounded-md'
            />
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-white text-3xl font-bold bg-black rounded-full p-2'>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
