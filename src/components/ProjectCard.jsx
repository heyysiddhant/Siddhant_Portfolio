import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, main, image, runLink, sourceCode, tech, index }) => {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: fromLeft ? -30 : 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-4 md:p-6 flex flex-col w-full h-full bg-[#0c0e19]/80 backdrop-blur-sm shadow-xl shadow-black/50 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors duration-500"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          src={image} 
          alt={title} 
        />
      </div>
      
      <div className="mb-2">
        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">{tech}</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2 text-white">
        {title}
      </h3>
      
      <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-6 flex-grow">
        {main}
      </p>
      
      <div className="flex gap-3 pt-4 border-t border-white/5 mt-auto">
        <a
          href={runLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-white py-2 px-4 text-sm font-bold rounded-xl bg-[#465697] hover:opacity-90 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1"
        >
          LIVE
        </a>
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-white py-2 px-4 text-sm font-bold rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:-translate-y-1"
        >
          CODE
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;