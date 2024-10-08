import React from "react";
import Profile from "../../../assets/ProfileImage.jpeg";
import CV from "../../../assets/CV.pdf"; 

const Sidebar = ({ toggleTheme, isDarkMode, sidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 bg-lightTheme-bg dark:bg-darkTheme-bg p-6 shadow-lg h-screen text-lightTheme-text dark:text-darkTheme-text border-r-4 border-lightTheme-accent dark:border-darkTheme-accent transition-transform duration-300 transform md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:w-[30%] lg:w-1/4`}
    >
      {/* Close Button for Mobile */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={toggleSidebar} className="text-2xl text-lightTheme-text dark:text-darkTheme-text">
          ✕ {/* Close icon */}
        </button>
      </div>

      {/* Theme Toggle Button */}
      <div className="mt-6 flex md:flex-col xl:flex-row  item-center gap-2 justify-between">
        <button
          onClick={toggleTheme}
          className="px-4 py-1 lg:px-6 rounded-xl border-2 border-lightTheme-accent dark:border-darkTheme-accent text-lightTheme-text dark:text-darkTheme-text"
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <div className="text-xs">
          <p className="text-gray-700 dark:text-gray-300">Email: eshalmerab1@gmail.com</p>
          <p className="text-gray-700 dark:text-gray-300">Phone: +92 344 8302253</p>
        </div>
      </div>

      {/* Profile Image and Info */}
      <div className="text-center m-6 flex-col space-y-2">
        <img
          src={Profile}
          alt="Profile"
          className="w-40 h-40 mx-auto rounded-full"
        />
        <h1 className="text-2xl font-bold">Urooj Fatima</h1>
        <p className="text-gray-600 dark:text-gray-300">Web Developer</p>
      </div>

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

      {/* Hire Me and Download CV Buttons */}
      <div className="text-center flex flex-col gap-4 mx-5">
        <button className="border-2 border-lightTheme-accent dark:border-darkTheme-accent hover:dark:bg-transparent hover:dark:text-white bg-lightTheme-accent dark:bg-darkTheme-accent text-white px-14 py-2 md:px-20 rounded-full hover:opacity-80 transition hover:bg-transparent hover:text-black">
          Hire Me
        </button>
        <a
          href={CV}
          download="UroojFatima_CV.pdf"
          className="border-2 px-14 py-2 lg:px-20 rounded-full transition hover:text-white text-center border-lightTheme-accent hover:bg-lightTheme-accent dark:border-darkTheme-accent dark:hover:bg-darkTheme-accent"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
