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
        {/* Sidebar */}
        <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        {/* Scrollable Content Area */}
        <div className="flex-1 p-6 bg-lightTheme-bg dark:bg-darkTheme-bg min-h-screen overflow-y-auto text-lightTheme-text dark:text-darkTheme-text lg:ml-[25%] md:ml-[20%] sm:ml-0">
          <Home />
        </div>
      </div>
    );
  };

  export default App;
