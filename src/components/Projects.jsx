import React from "react";
import ProjectCard from "./ProjectCard";
import movieSearchImg from "../assets/moviesearch.jpg";
import amazonCloneImg from "../assets/amazonclone.jpg";
import todoListImg from "../assets/todolist.png";

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
      </div>
    </div>
  );
};

export default Projects;