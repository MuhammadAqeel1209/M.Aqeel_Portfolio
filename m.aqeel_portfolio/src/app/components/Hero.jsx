'use client';
import React from 'react';
import Image from 'next/image';
import profilepic from '../assets/profpic.jpeg';
import { TypeAnimation } from 'react-type-animation';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleDownloadCV = () => {
    const cvPath = '/Muhammad_Aqeel_CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Muhammad_Aqeel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mt-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative' id="hero">
      <div className='grid md:grid-cols-2 place-items-center gap-8'>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='text-center md:text-left'
        >
          <TypeAnimation
            sequence={['Python Developer', 1000, 'Django Rest Framework', 1000, 'Django Development', 1000, 'FastAPI Development', 1000, 'BackEnd Development', 1000]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-gray-600 text-lg sm:text-xl md:text-4xl italic mb-4'
          />

          <motion.p className='text-gray-200 text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4'>
            HEY, I AM <br />
            <span className='text-purple-500'>MUHAMMAD AQEEL</span>
          </motion.p>

          <motion.p className='text-lg sm:text-xl text-gray-300 mb-6'>
            🚀 <strong>Python Backend Developer | Django | FastAPI</strong>
          </motion.p>

          <motion.p className='text-gray-400 text-sm sm:text-md leading-relaxed'>
            I am a passionate <strong>Python Developer</strong> with expertise in <strong>Django, Django Rest Framework (DRF), and FastAPI</strong>.
          </motion.p>

          <ul className='text-gray-400 mt-4 space-y-2 text-sm sm:text-md'>
            <motion.li>🔹 <strong>Backend Development</strong> - Building RESTful APIs</motion.li>
            <motion.li>🔹 <strong>Database Management</strong> - PostgreSQL, MySQL, MongoDB</motion.li>
          </ul>

          <motion.div className='flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6'>
            <motion.button
              onClick={handleDownloadCV}
              className='cursor-pointer font-bold text-gray-200 p-3 sm:p-4 border border-purple-400 rounded-xl'
            >
              Download CV
            </motion.button>

            <div className='flex gap-4 text-2xl sm:text-4xl text-purple-400'>
              <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/MuhammadAqeel1209' target='_blank'><AiOutlineGithub /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href='https://www.linkedin.com/in/muhammad-aqeel-a04716279/' target='_blank'><AiOutlineLinkedin /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href='https://www.fiverr.com/s/6Y0gPyB' target='_blank'><FaDollarSign /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href='https://wa.me/923227131980' target='_blank'><AiOutlineWhatsApp /></motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto'
        >
          <Image src={profilepic} width={450} height={450} alt='Profile Picture' className='rounded-full' />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;