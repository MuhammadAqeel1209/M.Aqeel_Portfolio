"use client"; 
import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal"; 

const experiences = [
  {
    company: "Code Soft",
    period: "October 2023 - November 2023",
    skills: ["Tkinter", "Problem Solving", "Microsoft SQL Server", "Python"],
    description: "During my internship at Code Soft, I developed desktop applications using Python and Tkinter, creating intuitive user interfaces and solving complex problems. I also gained hands-on experience with Microsoft SQL Server, designing and managing databases to ensure efficient data storage and retrieval. This role enhanced my Python programming skills and deepened my understanding of database management systems.",
  },
  {
    company: "Prodiology InfoTech", 
    period: "May 2024 - June 2024",
    skills: ["Machine Learning", "Scikit-Learn", "Pandas"],
    description: "As a Machine Learning Intern at Prodiology InfoTech, I contributed to the development and optimization of machine learning models using Scikit-Learn and Pandas. I was responsible for data preprocessing, feature engineering, and model evaluation, ensuring high accuracy and performance. This experience allowed me to apply machine learning concepts to real-world datasets and improve my analytical and technical skills.",
  },
  {
    company: "OpusTech",
    period: "July 2024 - September 2024",
    skills: [
      "SQL Model", "Next.js", "Git", "Virtual Environment", "Docker Products", 
      "PostgreSQL", "Docker", "Back-End Development", "FastAPI", "SQLAlchemy", 
      "Poetry", "Python", "Supabase"
    ],
    description: "At OpusTech, I worked as a Full Stack Developer, focusing on backend systems using FastAPI, SQLAlchemy, and PostgreSQL. I containerized applications using Docker and collaborated with the team to build scalable and efficient solutions. This role helped me gain expertise in backend development, database management, and DevOps practices, while working in a fast-paced, collaborative environment.",
  },
  {
    company: "Fiverr",
    period: "October 2024 - Present",
    skills: ['Python', 'FastAPI', "Django", "Rest API"],
    description: "As a freelance Python developer on Fiverr, I specialize in backend development using Django and FastAPI. I design and implement RESTful APIs, optimize database performance, and build scalable systems for clients worldwide. This role has allowed me to work on diverse projects, improve my problem-solving skills, and deliver high-quality solutions tailored to client needs.",
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
