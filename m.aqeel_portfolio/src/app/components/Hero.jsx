'use client';
import React from 'react';
import Image from 'next/image';
import profilepic from '../assets/profpic.jpeg';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import { FaDollarSign } from 'react-icons/fa'; // Using FaDollarSign instead of FaFiverr
import { motion } from 'framer-motion';

const Hero = () => {

    const handleDownloadCV = () => {
        const cvPath = "/Muhammad_Aqeel_CV.pdf"; // Ensure this file exists in the 'public' folder
        const link = document.createElement("a");
        link.href = cvPath;
        link.download = "Muhammad_Aqeel_CV.pdf"; // File name when downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2 place-items-center gap-8'>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          <TypeAnimation
            sequence={[
              'Python Developer',
              1000,
              'Django Rest Framework',
              1000,
              'Django Development',
              1000,
              'FastAPI',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4'
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'>
            HEY, I AM <br />
            <span className='text-purple-500'>MUHAMMAD AQEEL</span>
          </motion.p>

          <motion.p
            className='text-lg text-gray-300 mb-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}>
            🚀{' '}
            <strong>
              Python Backend Developer | Django | FastAPI | Machine Learning
            </strong>
          </motion.p>

          <motion.p
            className='text-gray-400 text-md leading-relaxed'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}>
            I am a passionate <strong>Python Developer</strong> with expertise
            in
            <strong> Django, Django Rest Framework (DRF), FastAPI</strong>, and
            <strong> Machine Learning</strong>. With over{' '}
            <strong>2 years</strong>
            of backend development experience, I specialize in building
            <strong> scalable, high-performance APIs</strong> and{' '}
            <strong>backend systems</strong>.
          </motion.p>

          <ul className='text-gray-400 mt-4 space-y-2'>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}>
              🔹 <strong>Backend Development</strong> - Building RESTful APIs
              with Django & FastAPI
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}>
              🔹 <strong>Database Management</strong> - PostgreSQL, MySQL,
              MongoDB
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}>
              🔹 <strong>Machine Learning</strong> - Model Training & Data
              Analysis
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}>
              🔹 <strong>Cryptocurrency & Finance</strong> - Experienced with
              Binance API
            </motion.li>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex flex-row items-center gap-6 my-4 md:mb-0'>
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)',
              }}
              className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                          border-purple-400 rounded-xl'>
              Download CV
            </motion.button>

            <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://github.com/MuhammadAqeel1209'
                target='_blank'>
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://www.linkedin.com/in/muhammad-aqeel-a04716279/'
                target='_blank'>
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://www.fiverr.com/s/6Y0gPyB'
                target='_blank'>
                <FaDollarSign />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          <Image
            src={profilepic}
            width={450}
            height={450}
            alt='Profile Picture'
          />
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'>
        <p className='text-gray-200 mr-6'>My Tech Stack</p>
        <DiHtml5 className='text-orange-600 mx-2' />
        <DiCss3 className='text-blue-600 mx-2' />
        <DiJavascript1 className='text-yellow-500 mx-2' />
        <DiReact className='text-blue-500 mx-2' />
        <DiNodejsSmall className='text-green-500 mx-2' />
      </motion.div>

      {/* Shiny Effect */}
      <div className='absolute inset-0 hidden md:block'>
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
