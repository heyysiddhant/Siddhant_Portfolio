import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaWeebly,
} from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills & Education</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <TbBrandNextjs color="#343434" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#00FF00" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#19BDF1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGraduationCap color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">👨🏻‍🎓 Bachelor of Technology</h2>
              <p className="text-sm leading-tight font-thin">
                Oct 2021 - May 2025
              </p>
              <ul className="text-sm p-2">
                <li>- Oriental Institute of Science & Technology</li>
                <li>- Computer Science with AIML</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <FaLaptopCode color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">💻 Tech Stack & Tools</h2>
              <p className="text-sm leading-tight font-thin">
                A set of technologies I use to build efficient websites
              </p>
              <ul className="text-sm p-2">
                <li>- 🚀 Frontend: React.js, Tailwind CSS, Figma </li>
                <li>- ⚙️ Backend: Node.js, Express.js, MongoDB </li>
                <li>- 🗃️ Version Control: Git, GitHub</li>
                <li>- 🌐 Deployment: Vercel, Netlify</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <FaWeebly color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                🌐 Learning & Growing in Web Dev
              </h2>
              {/* <p className="text-sm leading-tight font-thin"> small text here sub heading
              </p> */}
              <ul className="text-sm p-2">
                <p>
                  As a passionate web development student, <br />
                  I’m constantly exploring & refining my skills. <br />
                  While I enjoy the entire development process, <br />
                  frontend development excites me the most. <br />
                  The ability to create dynamic, interactive, <br />
                  visually engaging websites inspires me to keep <br />
                  learning and growing every day.
                </p>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
