import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiGithubBadge,
  DiPython, 
} from "react-icons/di";
import { 
  SiDjango, SiFastapi, SiNextdotjs, SiNumpy, SiPandas, SiApachespark, SiScikitlearn 
} from "react-icons/si"; 
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> }, 
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Python", icon: <DiPython className="text-blue-400" /> },
      { name: "Django", icon: <SiDjango className="text-green-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      { name: "Django Rest Framework", icon: <SiApachespark className="text-red-500" /> }, 
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-indigo-500" /> },  
      { name: "Pandas", icon: <SiPandas className="text-red-500" /> },  
      { name: "Scikit-Learn", icon: <SiScikitlearn className="text-yellow-400" /> },     
    ],
  },
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-6 text-gray-200" id="skills">
      <div className="max-w-[900px] w-full">
        <Reveal>
          <h2 className="text-6xl font-bold mb-6 text-center text-white">Skills</h2>
          <p className="text-center mb-10 text-gray-100 text-xl">
            I have worked on various <strong>frontend</strong> and <strong>backend projects</strong>. Check them{" "}
            <a href="https://github.com/MuhammadAqeel1209" className="underline text-blue-400 hover:text-blue-300">here</a>.
          </p>

          {/* Updated layout: Side by side on large screens */}
          <div className="flex lg:flex-row md:flex-col items-center justify-between gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-purple-800 p-6 rounded-xl bg-purple-900/20 shadow-lg 
                          hover:shadow-purple-700/50 transition-shadow duration-300 flex-1 w-full max-w-[450px]"
              >
                <h3 className="text-3xl font-semibold mb-4 text-center text-white">{skill.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skill.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <span className="text-3xl">{tech.icon}</span>
                      <span className="text-lg text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
