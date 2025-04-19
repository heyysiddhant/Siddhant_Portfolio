import React from "react";
import ProjectCard from "./ProjectCard";
import movieSearchImg from "../assets/moviesearch.jpg";
import amazonCloneImg from "../assets/amazonclone.jpg";
import todoListImg from "../assets/todolist.png";
import calcImg from "../assets/calc.jpg";
import ppImg from "../assets/pp3.jpg";
import bubbleGame from "../assets/bubbleGame.jpg";
import weather from "../assets/weather.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Movie Search Website"
          main="The Movie Search Website is a fully responsive web application that allows users to search for movies in real time. Built using React.js, the app integrates the OMDb API to fetch and display movie details, including title, poster, release year, and genres."
          image={movieSearchImg}
          runLink="https://heyysiddhant.github.io/MovieSearchApp/"
          sourceCode="https://github.com/heyysiddhant/MovieSearchApp"
        />
        <ProjectCard
          title="Amazon Clone (UI-Focused)"
          main="The Amazon Clone is a visually rich and fully responsive e-commerce website built with HTML, CSS, and JavaScript, focusing primarily on UI/UX. This project recreates the look and feel of an e-commerce platform with a clean, modern design, smooth interactions, and a seamless user experience."
          image={amazonCloneImg}
          runLink="https://heyysiddhant.github.io/Amazon/"
          sourceCode="https://github.com/heyysiddhant/Amazon"
        />
        <ProjectCard
          title="To-do List App"
          main="The To-Do List App is a modern and fully responsive task management application built with React.js and Tailwind CSS. It provides an intuitive interface for users to add, edit, delete, and organize tasks efficiently. The app ensures seamless task tracking with a visually appealing UI and smooth animations."
          image={todoListImg}
          runLink="https://heyysiddhant.github.io/To-Do-List/"
          sourceCode="https://github.com/heyysiddhant/To-Do-List"
        />
        <ProjectCard
          title="Calculator"
          main="The Simple Calculator is a web-based application built using core web technologies – HTML5, CSS3, and JavaScript. It performs basic arithmetic operations. The design is clean and responsive with clickable buttons, an input display screen, and hover effects for a modern look.
"
          image={calcImg}
          runLink="https://heyysiddhant.github.io/Calculator/"
          sourceCode="https://github.com/heyysiddhant/Calculator"
        />
        <ProjectCard
          title="Portfolio Website"
          main=" A fully responsive Personal Portfolio Website built using React.js and Tailwind CSS, designed with a modern 
              UI/UX approach. Optimized for all devices, an enhanced UI, and a mobile-friendly navigation menu. With a clean, minimalistic and professional design,it ensures an engaging user experience."
          image={ppImg}
          runLink=""
          sourceCode="https://github.com/heyysiddhant/Siddhant_Portfolio"
        />
        <ProjectCard
          title="Bubble Game"
          main="A fun and interactive browser-based Bubble Game built using *HTML, CSS, and JavaScript*. Click the correct bubble number to increase your score before time runs out! A perfect beginner-friendly JavaScript project to demonstrate DOM manipulation, event handling, and dynamic styling."
          image={bubbleGame}
          runLink="https://heyysiddhant.github.io/bubbleGame/"
          sourceCode="https://github.com/heyysiddhant/bubbleGame"
        />

        <ProjectCard
          title="WeatherLive"
          main="A Weather App website provides real-time weather data for any location, including temperature, humidity, wind speed, and forecasts. Users can search by city or current location, with a unit toggle for Celsius/Fahrenheit, all in a responsive and user-friendly design."
          image={weather}
          runLink="https://heyysiddhant.github.io/WeatherLive/"
          sourceCode="https://github.com/heyysiddhant/WeatherLive"
        />
      </div>
    </div>
  );
};

export default Projects;
