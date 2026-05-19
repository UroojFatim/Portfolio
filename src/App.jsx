import React, { useEffect, useMemo, useRef, useState } from "react";
import Sidebar from "./Components/Pages/LeftSide/Sidebar";
import Home from "./Components/Pages/RightSide/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const trackedSections = useMemo(() => ([
    'home',
    'about',
    'education',
    'certifications',
    'skills',
    'experience',
    'services',
    'projects',
    'contact',
  ]), []);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 24;
      setIsScrolled(scrolled);
      setShowBackToTop(window.scrollY > 400);
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topMost = visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActiveSection(topMost.target.id);
        }
      },
      { threshold: 0.35 }
    );

    trackedSections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) sectionObserver.observe(sectionElement);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, [trackedSections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar
        toggleSidebar={toggleSidebar}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />
      <div className="flex">
        <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeSection={activeSection} />
        <main className="flex-1 p-4 sm:p-6 min-h-screen text-white">
          <Home />
        </main>
      </div>

      <a
        href="mailto:urooj.fatim2004@gmail.com"
        className="fixed bottom-5 right-5 z-50 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(37,99,235,0.45)] animate-pulse hover:bg-blue-500"
      >
        Hire Me
      </a>

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 z-50 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-blue-500 bg-black/70 px-4 py-3 text-sm font-semibold text-blue-100 shadow-lg backdrop-blur-md transition hover:bg-blue-500/10"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
