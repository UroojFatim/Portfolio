import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import CornerMarks from './CornerMarks';
import useMagnetic from '../hooks/useMagnetic';

const Contact = () => {
  const magneticRef = useMagnetic(10);

  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-primary py-16 sm:py-20">
      <div className="relative mx-auto max-w-container-max px-4 sm:px-6 md:px-10">
        <ScrollReveal>
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-on-primary/70">Get In Touch</span>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.03] text-on-primary sm:text-6xl md:text-7xl">
              Let&apos;s build something worth shipping.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-on-primary/80">
              I&apos;m always open to discussing new projects, freelance work, or full-time opportunities. Reach out and let&apos;s talk.
            </p>
            <div className="mt-6 flex justify-center">
              <svg width="120" height="12" viewBox="0 0 120 12" className="text-on-primary/50" aria-hidden="true">
                <path d="M1 6 H113" stroke="currentColor" strokeWidth="1.5" fill="none" className="trace-draw" />
                <circle cx="117" cy="6" r="3" fill="currentColor" />
              </svg>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-8 sm:mt-10">
          <div className="glass-card group relative overflow-hidden rounded-md">
            <CornerMarks active accent="primary" />
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
              <div className="p-8 sm:p-12 md:p-16">
              <div className="space-y-5">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-outline-variant text-xl text-primary sm:h-14 sm:w-14 sm:text-2xl">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary">Email Me</div>
                    <div className="break-all text-base font-bold text-on-surface sm:text-lg">urooj.fatim2004@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-outline-variant text-xl text-secondary sm:h-14 sm:w-14 sm:text-2xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-secondary">Location</div>
                    <div className="break-words text-base font-bold text-on-surface sm:text-lg">Karachi, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA side */}
            <div className="flex flex-col items-stretch justify-center gap-4 border-t border-outline-variant p-8 sm:p-12 md:p-16 lg:border-l lg:border-t-0">
              <a
                ref={magneticRef}
                href="mailto:urooj.fatim2004@gmail.com"
                className="flex min-h-11 w-full items-center justify-center gap-3 rounded-md bg-primary px-6 py-5 text-lg font-bold text-on-primary shadow-glow transition hover:brightness-110"
              >
                <FaEnvelope /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/urooj-fatima-588ba2296"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 w-full items-center justify-center gap-3 rounded-md border border-outline-variant px-6 py-5 text-lg font-bold text-on-surface transition hover:border-primary/50 hover:text-primary"
              >
                <FaLinkedin /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
