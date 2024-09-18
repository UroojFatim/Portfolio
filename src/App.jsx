import React, { useState } from "react";
import Sidebar from "./Components/LeftSide/Sidebar";
import Home from "./Components/RightSide/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`flex ${isDarkMode ? 'dark' : ''}`}>
      {/* Fixed Sidebar */}
      <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      {/* Scrollable Content Area */}
      <div className="flex-1 ml-[25%] p-6 bg-lightTheme-bg dark:bg-darkTheme-bg h-screen overflow-y-auto text-lightTheme-text dark:text-darkTheme-text">
        <Home />
      </div>
    </div>
  );
};

export default App;
