import React from "react";
import AboutImg from "../assets/vector.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend development
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I specialize  in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I create responsive, user-friendly interfaces. Using Figma, I design sleek and intuitive UI/UX for a seamless user experience.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend development
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Proficient in Node.js and Express.js, I build robust, scalable, and high-performance server-side applications, ensuring efficient API integrations and backend logic.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Database development
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Working with MongoDB, designing optimized databases for secure and efficient data handling.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;