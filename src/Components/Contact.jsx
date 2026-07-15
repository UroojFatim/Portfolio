import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-container-max px-6 py-16 sm:py-20">
      <ScrollReveal>
        <div className="glass-card grid overflow-hidden rounded-[2.5rem] shadow-2xl lg:grid-cols-2">
          {/* Info side */}
          <div className="bg-gradient-to-br from-primary-container/25 to-secondary-container/15 p-10 md:p-14">
            <h2 className="text-display-xl-mobile font-display leading-tight text-on-surface">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="mt-6 max-w-md text-on-surface-variant">
              I&apos;m always open to discussing new projects, freelance work, or full-time opportunities. Reach out and let&apos;s talk.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-5">
                <div className="glass-card flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Email Me</div>
                  <div className="text-lg font-bold text-on-surface">urooj.fatim2004@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="glass-card flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-secondary">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary">Location</div>
                  <div className="text-lg font-bold text-on-surface">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA side */}
          <div className="flex flex-col items-center justify-center gap-4 bg-background/40 p-10 md:p-14">
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
