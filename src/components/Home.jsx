import React from 'react'
import avtarImage from "../assets/picc.png"
import TextChange from './TextChange'

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 ">
        <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter"><TextChange /></h1>
        <p className="text-sm md:text-2xl tracking-tight">I’m a MERN Stack Developer passionate about building scalable and high-performance web applications. With expertise in React.js, Node.js, Express.js, and MongoDB, I focus on creating seamless user experiences. I also leverage Tailwind CSS for modern, responsive designs and use Figma to craft intuitive UI/UX.
        </p>

       <a href="#Contact">
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 front-semibold rounded-3xl bg-[#465697]">Contact Me</button>
       </a> 
        </div>


        <div className="relative w-full md:w-1/2 flex justify-end pr-10 md:pr-20 mt-16 md:mt-0">
  
  <div className="absolute top-14 md:top-5 right-0 md:right-10 w-[60vw] max-w-[250px] h-[80vw] max-h-[350px] bg-blue-950 rounded-3xl rotate-6 
  animate-neon-glow"></div>

  <img 
    className="relative w-[60vw] max-w-[250px] h-[80vw] max-h-[350px] object-cover rounded-3xl shadow-lg transform -rotate-6 hover:rotate-0 transition duration-500" 
    src={avtarImage} 
    alt="Profile"
  />
</div>

    </div>
  )
}

export default Home;