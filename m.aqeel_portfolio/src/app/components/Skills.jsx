import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiDjango,
  SiFastapi,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiApachespark,
  SiScikitlearn,
  SiTailwindcss,
  // SiDocker,
  // SiVisualstudiocode,  
} from "react-icons/si";
// import { FaPycharm } from "react-icons/fa"; // ✅ Correct import for PyCharm
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> }, // ✅ Tailwind CSS added
    ],
  },
  {
    category: "Tools & Technologies",
    technologies: [
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Django", icon: <SiDjango className="text-green-500" /> },
      { name: "Django Rest Framework", icon: <SiApachespark className="text-red-500" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-indigo-500" /> },
      { name: "Pandas", icon: <SiPandas className="text-red-500" /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn className="text-yellow-400" /> },
      // { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      // { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-600" /> }, // ✅ Fixed VS Code icon
      // { name: "PyCharm", icon: <FaPycharm className="text-green-600" /> }, // ✅ Fixed PyCharm icon
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
            <a href="https://github.com/MuhammadAqeel1209" className="underline text-blue-400 hover:text-blue-300">
              here
            </a>.
          </p>

          {/* Two Columns for Frontend & Tools/Technologies */}
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-purple-800 p-8 rounded-xl bg-purple-900/20 shadow-lg 
                          hover:shadow-purple-700/50 transition-shadow duration-300"
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
