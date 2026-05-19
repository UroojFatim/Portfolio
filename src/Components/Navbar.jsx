import React from 'react';
import { Link } from 'react-scroll';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
//   { label: 'Education', to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Services', to: 'services' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = ({ toggleSidebar, activeSection, isScrolled }) => {
  return (
    <header className={`sticky top-0 z-30 border-b border-white/5 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-black/60 shadow-lg shadow-black/20' : 'backdrop-blur-sm bg-black/30'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl sm:text-2xl font-bold text-white">Urooj Fatima</div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className={`cursor-pointer min-h-11 inline-flex items-center transition-colors ${activeSection === item.to ? 'text-blue-300' : 'text-white/85 hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleSidebar} className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl p-2 text-2xl text-white border border-white/10 bg-white/5">☰</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
