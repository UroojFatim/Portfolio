import CV from "../../../assets/CV.pdf";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaTimes } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const navItems = [
  { label: 'Certifications', to: 'certifications' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Services', to: 'services' },
  { label: 'Projects', to: 'projects' },
];

const Sidebar = ({ toggleTheme, isDarkMode, sidebarOpen, toggleSidebar, activeSection }) => {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-on-background/40 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-[88vw] max-w-sm transform border-l border-outline-variant/40 bg-surface p-6 text-on-surface shadow-2xl transition-transform duration-300 lg:hidden ${
          sidebarOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        style={{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)' }}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold font-display">Menu</span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface-variant"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={toggleSidebar}
              aria-label="Close menu"
              className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        <nav className="mt-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              onClick={toggleSidebar}
              className={`flex min-h-11 items-center rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                activeSection === item.to
                  ? 'border-primary/40 bg-primary-container/40 text-on-primary-container'
                  : 'border-outline-variant/40 bg-surface-container-low text-on-surface-variant'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex items-center justify-center gap-4 text-xl">
          <a href="https://github.com/UroojFatim" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface-variant hover:text-primary">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/uroojfatima-588ba2296" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface-variant hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="https://www.upwork.com/freelancers/~018b2cb9ef43a154ba?mp_source=share" target="_blank" rel="noreferrer" aria-label="Upwork" className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface-variant hover:text-primary">
            <SiUpwork />
          </a>
          <a href="mailto:urooj.fatim2004@gmail.com" aria-label="Email" className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface-variant hover:text-primary">
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-8 space-y-3">
          <a
            href="mailto:urooj.fatim2004@gmail.com"
            className="flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-bold text-on-primary transition hover:brightness-110"
          >
            Hire Me
          </a>
          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="glass-card flex min-h-11 w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold text-on-surface"
          >
            Download Resume
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-on-surface-variant">
          urooj.fatim2004@gmail.com · +92 344 8302253
        </p>
      </div>
    </>
  );
};

export default Sidebar;
