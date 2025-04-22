import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaWeebly,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24 bg-gray-900 scroll-smooth">
      <motion.h1
        className="text-2xl md:text-4xl text-white font-bold"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Education
      </motion.h1>

      <div className="flex flex-wrap items-center justify-around mt-8">
        {/* Skills Icons */}
        <motion.div
          className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { Icon: FaHtml5, color: "#E34F26" },
            { Icon: FaCss3, color: "#1572B6" },
            { Icon: FaJs, color: "#F7DF1E" },
            { Icon: FaReact, color: "#61DAFB" },
            { Icon: TbBrandNextjs, color: "#343434" },
            { Icon: FaNodeJs, color: "#00FF00" },
            { Icon: SiTailwindcss, color: "#19BDF1" },
            { Icon: SiMongodb, color: "#47A248" },
            { Icon: FaFigma, color: "#F24E1E" },
            { Icon: FaJava, color: "#5382A1" },
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              className="p-3 bg-zinc-950 flex items-center rounded-2xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon color={color} size={50} />
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Tech Stack */}
        <div className="w-full md:w-2/5">
          <motion.div
            className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">👨🏻‍🎓 Bachelor of Technology</h2>
              <p className="text-sm leading-tight font-thin">Oct 2021 - May 2025</p>
              <ul className="text-sm p-2">
                <li>- Oriental Institute of Science & Technology</li>
                <li>- Computer Science with AIML</li>
              </ul>
            </span>
          </motion.div>

          <motion.div
            className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <FaLaptopCode color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">💻 Tech Stack & Tools</h2>
              <p className="text-sm leading-tight font-thin">
                A set of technologies I use to build efficient websites
              </p>
              <ul className="text-sm p-2">
                <li>- 🚀 Frontend: React.js, Tailwind CSS, Figma </li>
                <li>- ⚙ Backend: Node.js, Express.js, MongoDB </li>
                <li>- 💻 Programming Languages: Java, C++</li>
                <li>- 🗃 Version Control: Git, GitHub</li>
                <li>- 🌐 Deployment: Vercel, Netlify</li>
              </ul>
            </span>
          </motion.div>

          <motion.div
            className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
          >
            <FaWeebly color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">🌐 Learning & Growing in Web Dev</h2>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;