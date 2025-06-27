import React, { useState } from 'react';
import {
  RiCloseLine,
  RiMenu2Line,
  RiUser3Line,
  RiCodeSSlashLine,
  RiStackLine,
  RiMailLine,
  RiDownload2Line,
} from '@remixicon/react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { label: 'About', href: '#About', icon: <RiUser3Line className="mr-2" /> },
    { label: 'Skills', href: '#Skills', icon: <RiCodeSSlashLine className="mr-2" /> },
    { label: 'Projects', href: '#Projects', icon: <RiStackLine className="mr-2" /> },
    { label: 'Contact', href: '#Contact', icon: <RiMailLine className="mr-2" /> },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 py-4 md:px-20 backdrop-blur-lg bg-white/10 border-b border-white/20 text-white shadow-sm">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 font-medium">
        {navLinks.map(({ label, href }) => (
          <a key={href} href={href}>
            <li className="hover:text-purple-300 transition">
              {label}
            </li>
          </a>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <RiMenu2Line
          size={28}
          onClick={() => setMenu(true)}
          className="cursor-pointer transition"
        />
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#1f1f1f] to-[#2a2a2a] text-white p-6 pt-24 z-40 transform transition-transform duration-300 ease-in-out ${
          menu ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Close Button */}
        <RiCloseLine
          size={24}
          className="absolute top-6 right-6 cursor-pointer text-gray-300 hover:text-white transition"
          onClick={() => setMenu(false)}
        />

        {/* Mobile Links */}
        <ul className="flex flex-col gap-4 text-md font-semibold">
          {navLinks.map(({ label, href, icon }, index) => (
            <a key={href} href={href} onClick={() => setMenu(false)}>
              <li
                className={`flex items-center px-4 py-2 rounded-xl transition hover:scale-105 ${
                  index === 0
                    ? 'bg-gradient-to-r from-pink-500 to-yellow-500'
                    : index === 1
                    ? 'bg-gradient-to-r from-green-400 to-blue-500'
                    : index === 2
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                    : 'bg-gradient-to-r from-red-400 to-orange-500'
                }`}
              >
                {icon}
                {label}
              </li>
            </a>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="mt-10">
          <a
            href="https://drive.google.com/file/d/1rQwfc8zig4J5cRwY8Wwa2r3bshHu189F/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white py-2 rounded-xl font-semibold transition"
          >
            <RiDownload2Line className="text-lg" />
            Download Resumé
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
