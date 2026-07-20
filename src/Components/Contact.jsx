import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <ScrollReveal>
        <div className="glass-card grid grid-cols-1 overflow-hidden rounded-[2.5rem] shadow-2xl sm:rounded-[4rem] lg:grid-cols-2">
          {/* Info side */}
          <div className="bg-gradient-to-br from-primary-container/25 to-secondary-container/15 p-8 sm:p-12 md:p-20">
            <h2 className="text-display-xl-mobile font-display leading-tight text-on-surface">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="mt-6 max-w-md text-on-surface-variant">
              I&apos;m always open to discussing new projects, freelance work, or full-time opportunities. Reach out and let&apos;s talk.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="glass-card flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-primary sm:h-14 sm:w-14 sm:text-2xl">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Email Me</div>
                  <div className="break-all text-base font-bold text-on-surface sm:text-lg">urooj.fatim2004@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="glass-card flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-secondary sm:h-14 sm:w-14 sm:text-2xl">
                  <FaMapMarkerAlt />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary">Location</div>
                  <div className="break-words text-base font-bold text-on-surface sm:text-lg">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA side */}
          <div className="flex flex-col items-center justify-center gap-4 bg-background/40 p-8 sm:p-12 md:p-20">
            <a
              href="mailto:urooj.fatim2004@gmail.com"
              className="flex min-h-11 w-full max-w-sm items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-5 text-lg font-bold text-on-primary shadow-glow transition hover:brightness-110"
            >
              <FaEnvelope /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/uroojfatima-588ba2296"
              target="_blank"
              rel="noreferrer"
              className="glass-card flex min-h-11 w-full max-w-sm items-center justify-center gap-3 rounded-2xl px-6 py-5 text-lg font-bold text-on-surface transition hover:border-primary/40"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
