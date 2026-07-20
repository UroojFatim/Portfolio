import React from 'react';
import { Link } from 'react-scroll';
import { FaCode, FaSun, FaMoon, FaBars } from 'react-icons/fa';
import CV from '../assets/CV.pdf';

const navItems = [
  { label: 'Certifications', to: 'certifications' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Services', to: 'services' },
  { label: 'Projects', to: 'projects' },
];

const Navbar = ({ toggleSidebar, activeSection, isScrolled, toggleTheme, isDarkMode }) => {
  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-outline-variant/40 bg-background/80 shadow-lg shadow-on-background/5 backdrop-blur-xl'
          : 'border-transparent bg-background/40 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-container-max items-center justify-between px-4 sm:px-6 md:px-10">
        <Link to="home" smooth duration={500} className="flex cursor-pointer items-center gap-2 sm:gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-container/60 text-primary sm:h-9 sm:w-9">
            <FaCode className="text-sm sm:text-base" />
          </span>
          <span className="whitespace-nowrap text-base font-bold font-display text-on-surface sm:text-lg md:text-xl">Urooj Fatima</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              className={`min-h-11 cursor-pointer text-sm font-medium tracking-wide transition-colors inline-flex items-center ${
                activeSection === item.to ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface-variant transition hover:text-primary"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center justify-center rounded-lg bg-primary-container px-5 text-sm font-bold text-on-primary-container transition hover:brightness-110 sm:inline-flex"
          >
            Resume
          </a>

          <button
            onClick={toggleSidebar}
            aria-label="Open menu"
            className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
