import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      id="Contact"
      className="flex flex-col items-center bg-[#465697] text-white p-10 md:p-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row justify-around w-full items-center gap-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 4, type: "spring" }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel free to reach out!
          </h3>
        </motion.div>

        <motion.ul
          className="text-sm md:text-xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, type: "spring" }}
          viewport={{ once: true }}
        >
          <li className="flex gap-1 items-center">
            <MdOutlineEmail size={20} />
            <a
              href="mailto:siddhantmishra2k18@gmail.com?subject=Hello&body=Hi, I wanted to contact you!"
              className="hover:opacity-85 duration-300 hover:scale-101"
            >
              siddhantmishra2k18@gmail.com
            </a>
          </li>
          <li className="flex gap-1 items-center">
            <CiLinkedin />
            <a
              href="https://www.linkedin.com/in/siddhant2908/"
              target="_blank"
              className="hover:opacity-85 duration-300 hover:scale-101"
            >
              linkedin.com/siddhant2908
            </a>
          </li>
          <li className="flex gap-1 items-center">
            <FaGithub />
            <a
              href="https://github.com/heyysiddhant"
              target="_blank"
              className="hover:opacity-85 duration-300 hover:scale-101"
            >
              github.com/heyysiddhant
            </a>
          </li>
        </motion.ul>
      </div>

      <motion.div
        className="mt-6 text-xs md:text-sm text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} All rights reserved. Developed with ❤ by{" "}
        <a
          href="https://www.instagram.com/ssiiddhant/"
          target="_blank"
          className="text-blue-100 underline hover:text-red-300 duration-300"
        >
          Siddhant Mishra.
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Footer;