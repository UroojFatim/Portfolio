import React from "react";
import Profile from "../../../assets/ProfileImage.jpeg";
import CV from "../../../assets/CV.pdf"; 

const Sidebar = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="w-1/4 bg-lightTheme-bg dark:bg-darkTheme-bg p-6 shadow-lg h-screen fixed left-0 top-0 text-lightTheme-text dark:text-darkTheme-text border-r-2 border-lightTheme-accent dark:border-darkTheme-accent animate-slideIn">
      {/* Theme Toggle Button */}
      <div className="mt-6 flex item-center gap-2 justify-between">
        <button
          onClick={toggleTheme}
          className="py-1 px-6 rounded-xl border-2 border-lightTheme-accent dark:border-darkTheme-accent text-lightTheme-text dark:text-darkTheme-text"
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <div className="text-xs">
          <p className="text-gray-700 dark:text-gray-300">Email: eshalmerab1@gmail.com</p>
          <p className="text-gray-700 dark:text-gray-300">Phone: +92 344 8302253</p>
        </div>
      </div>

      {/* Image */}
      <div className="text-center my-6 flex-col space-y-2">
        <img
          src={Profile}
          alt="Profile"
          className="w-[60%] h-40 mx-auto rounded-2xl"
        />
        {/* Name */}
        <h1 className="text-2xl font-bold">Urooj Fatima</h1>
        {/* Title */}
        <p className="text-gray-600 dark:text-gray-300">Web Developer</p>
      </div>

      {/* Details */}
      <div className="text-center mb-6">
        <p className="text-gray-700 dark:text-gray-400">
          A passionate developer who loves coding and creating innovative solutions.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mb-6">
        <a href="https://facebook.com" target="_blank" className="text-blue-500 dark:text-orange-400">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" className="text-pink-500 dark:text-orange-400">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" className="text-blue-700 dark:text-orange-400">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Hire Me Button */}
      <div className="text-center flex flex-col gap-4">
        <button className="border-2 border-lightTheme-accent dark:border-darkTheme-accent hover:dark:bg-transparent hover:dark:text-white  bg-lightTheme-accent dark:bg-darkTheme-accent text-white py-2 px-20 rounded-full hover:opacity-80 transition hover:bg-transparent hover:text-black">
          Hire Me
        </button>
        {/* Download CV Button */}
        <a
          href={CV}
          download="UroojFatima_CV.pdf"
          className="border-2 py-2 px-20 rounded-full transition hover:text-white text-center border-lightTheme-accent hover:bg-lightTheme-accent dark:border-darkTheme-accent dark:hover:bg-darkTheme-accent"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
