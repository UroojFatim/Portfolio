// import React from "react";
import Profile from "../../../assets/ProfileImage.jpeg";
import CV from "../../../assets/CV.pdf"; 
import { Link } from 'react-scroll';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  // { label: 'Education', to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Services', to: 'services' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const Sidebar = ({ toggleTheme, isDarkMode, sidebarOpen, toggleSidebar, activeSection }) => {
  return (
    <div
      className={`fixed top-0 right-0 left-auto w-[92vw] max-w-sm z-40 p-6 shadow-lg h-screen text-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden bg-black/95 backdrop-blur-md border-l border-white/10`}
    >
      {/* Close Button for Mobile */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={toggleSidebar} className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl text-2xl text-white border border-white/10 bg-white/5">
          ✕ {/* Close icon */}
        </button>
      </div>

      {/* Theme Toggle Button */}
      <div className="mt-6 flex flex-col gap-2 items-start">
        <div className="w-full flex justify-between items-center">
          <button
            onClick={toggleTheme}
            className="min-h-11 px-4 py-2 rounded-xl border border-white/10 text-white bg-black/20"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
          <button onClick={toggleSidebar} className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl text-xl border border-white/10 bg-white/5">✕</button>
        </div>
        <div className="text-xs text-gray-300">
          <p>Email: urooj.fatim2004@gmail.com</p>
          <p>Phone: +92 344 8302253</p>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
            className={`flex min-h-11 items-center rounded-xl border px-4 py-3 text-sm font-semibold transition ${activeSection === item.to ? 'border-blue-500/50 bg-blue-500/10 text-blue-100' : 'border-white/10 bg-white/5 text-white/85'}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Profile Image and Info */}
      <div className="text-center m-6 flex-col space-y-2 z-10">
        <img
          src={Profile}
          alt="Profile"
          className="w-40 h-40 mx-auto rounded-full"
        />
        <h1 className="text-2xl font-bold">Urooj Fatima</h1>
        <p className="text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-700 dark:text-gray-400">
          A passionate developer who loves coding and creating innovative solutions.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mb-6 text-2xl">
        <a href="https://github.com/UroojFatim" target="_blank" className="text-gray-200">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/urooj-fatima-588ba2296/" target="_blank" className="text-blue-400">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Hire Me and Download CV Buttons */}
      <div className="text-center flex flex-col gap-4 mx-5 mt-6 z-10">
        <a href="https://www.upwork.com/freelancers/~018b2cb9ef43a154ba?mp_source=share" target ="_blank" className="w-full min-h-11 text-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition inline-flex items-center justify-center">
          Hire Me
        </a >
        <a
          href={CV}
          target="_blank"
          rel="noreferrer"
          className="w-full min-h-11 text-center px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition inline-flex items-center justify-center"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
