import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import avtarImage from '../assets/siddy.jpg';

const techStack = [
  'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Figma',
];

const Home = () => {
  return (
    <section className="relative w-full min-h-screen px-6 py-16 md:px-20 flex items-center justify-center overflow-hidden text-white">

      {/* Background Blob */}
      <div className="absolute -top-40 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse z-0" />

      {/* Social Icons */}
      <div className="fixed left-4 bottom-24 z-50 hidden md:flex flex-col gap-4">
        <a href="https://github.com/heyysiddhant" target="_blank" rel="noreferrer">
          <FaGithub className="text-white text-2xl hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com/in/siddhant2908" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-white text-2xl hover:scale-110 transition" />
        </a>
        <a href="https://twitter.com/29_siddhant" target="_blank" rel="noreferrer">
          <FaTwitter className="text-white text-2xl hover:scale-110 transition" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-20 md:gap-10 z-10">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-[2.5rem] p-3 sm:p-4 md:p-5 shadow-2xl border border-white/20 max-w-[360px] md:max-w-[400px] h-[500px] hover:shadow-purple-500/40 transition-all duration-300">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100 }}
              src={avtarImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              <Typewriter
                words={[
                  "Hey, I'm Siddhant",
                  'MERN Stack Developer',
                  'React.js Enthusiast',
                  'Frontend Craftsman',
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            I build performance-driven full-stack applications that blend powerful backend logic with stunning frontends. Let’s bring your next digital idea to life.
          </p>

          <p className="text-sm text-gray-400 mb-6">
            📍 Based in India · Available for Freelance & Remote Roles
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white shadow hover:shadow-lg hover:scale-105 transition"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://drive.google.com/file/d/1rQwfc8zig4J5cRwY8Wwa2r3bshHu189F/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#465697] hover:bg-[#3c4c87] text-white py-3 px-8 rounded-full text-sm sm:text-base font-semibold transition duration-300"
              >
                My Resumé
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#465697] hover:bg-[#3c4c87] text-white py-3 px-8 rounded-full text-sm sm:text-base font-semibold transition duration-300"
              >
                Contact Me
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl"
      >
        <a href="#About">↓</a>
      </motion.div>
    </section>
  );
};

export default Home;