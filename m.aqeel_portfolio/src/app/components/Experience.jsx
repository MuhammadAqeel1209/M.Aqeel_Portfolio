"use client"; 
import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal"; 
const experiences = [
  {
    company: "Code Soft",
    period: "October 2023 - November 2023",
    skills: ["Tkinter", "Problem Solving", "Microsoft SQL Server"," Python"],
    description: "At Code Soft, our Python internship offers hands-on experience in one of today's most versatile programming languages. Dive into Python's fundamentals, work on real projects, and more. With guidance from experienced mentors, you'll emerge ready to tackle real-world coding challenges.",
  },
  {
    company: "Prodiology InfoTech", 
    period: "May 2024 - June 2024",
    skills :["Machine Learning", "Scikit-Learn", "Pandas "],
    description: "At Prodigy Info Tech, I'm currently interning as a Machine Learning Intern. My role involves collaborating with the team to develop and improve machine learning models. This includes tasks like preparing data for analysis, training models, and assessing their performance. I'm enthusiastic about learning and contributing to projects that make a real impact.",
  },
  {
    company: "OpusTech",
    period: "July 2024 - September 2024",
    skills: ["Sql Model" , "Next.js" , "Git" , "Virtual Environment" , "Docker Products", "PostgreSQL" , "Docker" , "Back-End Development" , "FastAPI" , "SQLAlchemy" , "Poetry" , "Python" , "Supabase"],
    description: "At OpusTech, our Full Stack internship offers hands-on experience in one of today's most versatile programming languages. Dive into Python's fundamentals, work on real projects, and more. With guidance from experienced mentors, you'll emerge ready to tackle real-world coding challenges."
  },
  {
    company: "Fiver",
    period: "October 2024 - Present",
    skills :['Python','FastAPI',"Django","Rest API"],
    description: "Worked as a Python developer, focusing on backend development for large-scale applications. Specialized in Django and FastAPI frameworks to build robust, scalable systems.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto" id="experience">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md 
                         hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
              {/* Display skills */}
              <div className="mt-4">
                <h3 className="text-gray-200 font-semibold">Skills:</h3>
                <ul className="list-disc list-inside text-gray-400">
                  {experience.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
