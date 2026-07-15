import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const links = [
  { href: 'https://github.com/UroojFatim', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/uroojfatima-588ba2296', label: 'LinkedIn' },
  { href: 'https://www.upwork.com/freelancers/~018b2cb9ef43a154ba?mp_source=share', label: 'Upwork' },
  { href: 'mailto:urooj.fatim2004@gmail.com', label: 'Email' },
];

const iconFor = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Upwork: SiUpwork,
  Email: FaEnvelope,
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-container-max border-t border-outline-variant/30 px-4 py-12 sm:px-6 md:px-10">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <div className="text-xl font-bold font-display text-on-surface">Urooj Fatima</div>
          <div className="mt-1 text-sm text-on-surface-variant">© {year} · Built with React &amp; Tailwind CSS</div>
        </div>

        <div className="flex items-center gap-3">
          {links.map(({ href, label }) => {
            const Icon = iconFor[label];
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                aria-label={label}
                className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-on-surface-variant transition hover:text-primary"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
