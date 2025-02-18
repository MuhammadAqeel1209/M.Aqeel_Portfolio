import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex flex-col sm:flex-row justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4 sm:space-y-0'>
        <h3 className='text-2xl text-gray-200 font-semibold'>Muhammad.Aqeel</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <div className='flex gap-4 text-2xl sm:text-4xl text-purple-400'>
            <a href='https://github.com/MuhammadAqeel1209' target='_blank'>
              <AiOutlineGithub />
            </a>
            <a href='https://www.linkedin.com/in/muhammad-aqeel-a04716279/' target='_blank'>
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>
      </div>

      <p className='text-gray-400 mt-4 sm:mt-0'>@2025 Muhammad. Aqeel</p>
    </div>
  )
}

export default Footer
