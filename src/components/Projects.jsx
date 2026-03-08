import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

import DesiTrailsImg from "../assets/DesiTrailsImg.jpg";
import movieSearchImg from "../assets/moviesearch.jpg";
import amazonCloneImg from "../assets/amazonclone.jpg";
import todoListImg from "../assets/todolist.png";
import calcImg from "../assets/calc.jpg";
import ppImg from "../assets/portfolio_new.png";
import bubbleGame from "../assets/bubbleGame.jpg";
import weather from "../assets/weather.jpg";
import amazonmern from "../assets/amazonmern.png";
import ShowzyImg from "../assets/showzy.png";
import VaaniImg from "../assets/vaani.png";
import ShortlyImg from "../assets/shortly.png";
import BimsImg from "../assets/bookinventory.png";
import WatchlyImg from "../assets/watchly.png";

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState("ALL");

  const categories = ["ALL", "MERN STACK (MAJOR)", "REACT STACK", "CORE WEB"];

  const projects = [
    {
      title: "Showzy – Event & Booking Management",
      main: "A SaaS-based event management platform designed to simplify scheduling and workflows. Features JWT & Google OAuth, real-time booking, and RBAC. Built with MERN stack.",
      image: ShowzyImg,
      runLink: "https://showzy-psi.vercel.app/",
      sourceCode: "https://github.com/heyysiddhant/Showzy",
      tech: "MERN Stack • SaaS",
      category: "MERN STACK (MAJOR)"
    },
    {
      title: "Vaani - Chat Application",
      main: "A real-time full-stack chat application built with the MERN stack. Focuses on seamless communication and secure user interactions.",
      image: VaaniImg,
      runLink: "https://vaani-ten-gamma.vercel.app/login",
      sourceCode: "https://github.com/heyysiddhant/Vaani",
      tech: "MERN • Socket.io",
      category: "MERN STACK (MAJOR)"
    },
    {
      title: "Watchly - Movie Watchlist",
      main: "A MERN stack movie application that allows users to browse movies, create personalized watchlists, and manage profiles using JWT authentication.",
      image: WatchlyImg,
      runLink: "https://watchly-moive-web-app.vercel.app/",
      sourceCode: "https://github.com/heyysiddhant/Watchly-MoiveWebApp",
      tech: "MERN • REST API",
      category: "MERN STACK (MAJOR)"
    },
    {
      title: "Shortly | URL Shortener",
      main: "Efficient URL miniaturization tool built with Node.js and MongoDB. Features click tracking, analytics, and a responsive dashboard.",
      image: ShortlyImg,
      runLink: "https://shortly-axkj.onrender.com/",
      sourceCode: "https://github.com/heyysiddhant/Shortly",
      tech: "Node.js • MongoDB",
      category: "MERN STACK (MAJOR)"
    },
    {
      title: "Amazon Clone (MERN)",
      main: "This Amazon-clone is a full-stack e-commerce website created using the MERN Stack...",
      image: amazonmern,
      runLink: "https://heyysiddhant.github.io/AmazonMERN/",
      sourceCode: "https://github.com/heyysiddhant/AmazonClone-MERN",
      tech: "MERN • E-Commerce",
      category: "MERN STACK (MAJOR)"
    },
    {
       title: "Desi Trails",
       main: "A Tour & Travel Site with full operations, A modern travel booking platform showcasing high-end UI/UX and seamless responsiveness.",
       image: DesiTrailsImg,
       runLink: "https://heyysiddhant.github.io/Desi-Trails/",
       sourceCode: "https://github.com/heyysiddhant/Desi-Trails",
       tech: "React • UI/UX",
       category: "REACT STACK"
    },
    {
      title: "Book Inventory (BIMS)",
      main: "A modern management system leveraging Google Books API to search and manage inventory with real-time data synchronization.",
      image: BimsImg,
      runLink: "https://book-inventory-omega.vercel.app/",
      sourceCode: "https://github.com/heyysiddhant/Book-Inventory",
      tech: "React • Google API",
      category: "REACT STACK"
    },
    {
      title: "Movie Search Website",
      main: "The Movie Search Website is a fully responsive web application that allows users to search for movies in real time...",
      image: movieSearchImg,
      runLink: "https://heyysiddhant.github.io/MovieSearchApp/",
      sourceCode: "https://github.com/heyysiddhant/MovieSearchApp",
      tech: "React • TMDB API",
      category: "REACT STACK"
    },
    {
      title: "To-do List App",
      main: "The To-Do List App is a modern and fully responsive task management application...",
      image: todoListImg,
      runLink: "https://heyysiddhant.github.io/To-Do-List/",
      sourceCode: "https://github.com/heyysiddhant/To-Do-List",
      tech: "React • Hooks",
      category: "REACT STACK"
    },
    {
      title: "Portfolio Website",
      main: "A fully responsive Personal Portfolio Website built using React.js and Tailwind CSS...",
      image: ppImg,
      runLink: "",
      sourceCode: "https://github.com/heyysiddhant/Siddhant_Portfolio",
      tech: "React • Tailwind",
      category: "REACT STACK"
    },
    {
      title: "WeatherLive",
      main: "A Weather App website that provides real-time weather data for any location, demonstrating core JavaScript and API integration.",
      image: weather,
      runLink: "https://heyysiddhant.github.io/WeatherLive/",
      sourceCode: "https://github.com/heyysiddhant/WeatherLive",
      tech: "Fetch API • JS",
      category: "CORE WEB"
    },
    {
      title: "Amazon Clone (UI-Focused)",
      main: "The Amazon Clone is a visually rich and fully responsive e-commerce website built with HTML, CSS, and JavaScript...",
      image: amazonCloneImg,
      runLink: "https://heyysiddhant.github.io/Amazon/",
      sourceCode: "https://github.com/heyysiddhant/Amazon",
      tech: "HTML • CSS • JS",
      category: "CORE WEB"
    },
    {
      title: "Calculator",
      main: "The Simple Calculator is a web-based application built using core web technologies...",
      image: calcImg,
      runLink: "https://heyysiddhant.github.io/Calculator/",
      sourceCode: "https://github.com/heyysiddhant/Calculator",
      tech: "JavaScript • Logic",
      category: "CORE WEB"
    },
    {
      title: "Bubble Game",
      main: "A fun and interactive browser-based Bubble Game built using HTML, CSS, and JavaScript...",
      image: bubbleGame,
      runLink: "https://heyysiddhant.github.io/bubbleGame/",
      sourceCode: "https://github.com/heyysiddhant/bubbleGame",
      tech: "JS • DOM Ops",
      category: "CORE WEB"
    },
  ];

  const filteredProjects = activeTab === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <motion.div
      id="Projects"
      className="p-10 md:p-24 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent uppercase tracking-tighter">
            My <span className="text-white">Creations</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-medium">
            A comprehensive showcase of my technical journey, from production-ready SaaS applications to core JavaScript experiments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === cat 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105" 
                  : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat === "ALL" ? "SHOW ALL" : cat.replace(" (MAJOR)", "")}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
