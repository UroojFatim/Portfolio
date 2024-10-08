import React, { useState } from "react";
import Sidebar from "./Components/Pages/LeftSide/Sidebar";
import Home from "./Components/Pages/RightSide/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Function to toggle sidebar on mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className="flex-1 p-6 bg-lightTheme-bg dark:bg-darkTheme-bg min-h-screen overflow-y-auto text-lightTheme-text dark:text-darkTheme-text lg:ml-[25%] md:ml-[20%] sm:ml-0">
        {/* Menu button for mobile */}
        <div className="sm:flex md:hidden">
          <button 
            onClick={toggleSidebar}
            className="p-2 text-xl bg-lightTheme-accent dark:bg-darkTheme-accent text-white rounded-lg"
          >
            ☰ 
          </button>
        </div>
        <Home />
      </div>
    </div>
  );
};

export default App;
