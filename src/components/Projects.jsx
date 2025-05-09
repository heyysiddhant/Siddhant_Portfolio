import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

import movieSearchImg from "../assets/moviesearch.jpg";
import amazonCloneImg from "../assets/amazonclone.jpg";
import todoListImg from "../assets/todolist.png";
import calcImg from "../assets/calc.jpg";
import ppImg from "../assets/pp3.jpg";
import bubbleGame from "../assets/bubbleGame.jpg";
import weather from "../assets/weather.jpg";
import amazonmern from "../assets/amazonmern.png";

const Projects = () => {
  const projects = [
    {
      title: "Movie Search Website",
      main: "The Movie Search Website is a fully responsive web application that allows users to search for movies in real time...",
      image: movieSearchImg,
      runLink: "https://heyysiddhant.github.io/MovieSearchApp/",
      sourceCode: "https://github.com/heyysiddhant/MovieSearchApp",
    },
    {
      title: "Amazon Clone (UI-Focused)",
      main: "The Amazon Clone is a visually rich and fully responsive e-commerce website built with HTML, CSS, and JavaScript...",
      image: amazonCloneImg,
      runLink: "https://heyysiddhant.github.io/Amazon/",
      sourceCode: "https://github.com/heyysiddhant/Amazon",
    },
    {
      title: "Amazon Clone (MERN)",
      main: "This Amazon-clone is a full-stack e-commerce website created using the MERN Stack...",
      image: amazonmern,
      runLink: "https://heyysiddhant.github.io/AmazonMERN/",
      sourceCode: "https://github.com/heyysiddhant/AmazonClone-MERN",
    },
    {
      title: "To-do List App",
      main: "The To-Do List App is a modern and fully responsive task management application...",
      image: todoListImg,
      runLink: "https://heyysiddhant.github.io/To-Do-List/",
      sourceCode: "https://github.com/heyysiddhant/To-Do-List",
    },
    {
      title: "Calculator",
      main: "The Simple Calculator is a web-based application built using core web technologies...",
      image: calcImg,
      runLink: "https://heyysiddhant.github.io/Calculator/",
      sourceCode: "https://github.com/heyysiddhant/Calculator",
    },
    {
      title: "Portfolio Website",
      main: "A fully responsive Personal Portfolio Website built using React.js and Tailwind CSS...",
      image: ppImg,
      runLink: "",
      sourceCode: "https://github.com/heyysiddhant/Siddhant_Portfolio",
    },
    {
      title: "Bubble Game",
      main: "A fun and interactive browser-based Bubble Game built using HTML, CSS, and JavaScript...",
      image: bubbleGame,
      runLink: "https://heyysiddhant.github.io/bubbleGame/",
      sourceCode: "https://github.com/heyysiddhant/bubbleGame",
    },
    {
      title: "WeatherLive",
      main: "A Weather App website that provides real-time weather data for any location...",
      image: weather,
      runLink: "https://heyysiddhant.github.io/WeatherLive/",
      sourceCode: "https://github.com/heyysiddhant/WeatherLive",
    },
  ];

  return (
    <motion.div
      id="Projects"
      className="p-10 md:p-24 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-2xl md:text-4xl text-white font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      <motion.p
        className="text-gray-400 mb-10 text-sm md:text-base tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        React.js • Tailwind CSS • JavaScript • MERN Stack • API Integration • UI/UX Design
      </motion.p>

      <div className="py-12 px-8 flex flex-wrap gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;