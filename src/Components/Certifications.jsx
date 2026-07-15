import React from 'react';
import { FaCertificate, FaGoogle, FaPython, FaLinux, FaBook, FaEnvelopeOpenText, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const certifications = [
  { name: 'Linux Essentials', issuer: 'Cisco', date: 'Jan 2025', icon: FaLinux, url: null },
  { name: 'Project Management', issuer: 'Google', date: 'Nov 2023', icon: FaGoogle, url: 'https://www.coursera.org/account/accomplishments/certificate/DLM3BZSDDRDS' },
  { name: 'Python Data Structures', issuer: 'Coursera', date: 'Nov 2023', icon: FaPython, url: null },
  { name: 'Object-Oriented Programming', issuer: 'Great Learning', date: 'Nov 2023', icon: FaBook, url: null },
  { name: 'Introduction to Databases for Backend', issuer: 'Meta / Coursera', date: 'Date not listed', icon: FaGraduationCap, url: null },
  { name: 'HTML and CSS in Depth', issuer: 'Meta / Coursera', date: 'Date not listed', icon: FaGraduationCap, url: null },
  { name: 'Introduction to Back-End Development', issuer: 'Meta / Coursera', date: 'Date not listed', icon: FaGraduationCap, url: null },
  { name: 'Write Professional Emails in English', issuer: 'Coursera', date: 'Date not listed', icon: FaEnvelopeOpenText, url: null },
];

const accents = ['primary', 'secondary', 'tertiary'];
const accentClass = {
  primary: { box: 'border-primary/20 bg-primary-container/20 text-primary', ring: 'group-hover:ring-primary/30' },
  secondary: { box: 'border-secondary/20 bg-secondary-container/30 text-secondary', ring: 'group-hover:ring-secondary/30' },
  tertiary: { box: 'border-tertiary/20 bg-tertiary-container/25 text-tertiary', ring: 'group-hover:ring-tertiary/30' },
};

const Certifications = () => {
  return (
    <section id="certifications" className="mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-10 sm:mb-16">
        <span className="section-eyebrow text-secondary">Credentials</span>
        <h2 className="section-heading">Certifications</h2>
        <p className="mt-4 max-w-2xl text-sm text-on-surface-variant sm:text-base">
          Coursework and professional certificates backing up the hands-on project work below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const Icon = cert.icon ?? FaCertificate;
          const accent = accentClass[accents[index % accents.length]];
          return (
            <ScrollReveal key={index} delay={index * 60}>
              <article className="glass-card hover-glow group flex h-full flex-col rounded-[1.75rem] p-6">
                <div className="flex items-start gap-4">
                  <div className={`ring-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl transition-all ${accent.box} ${accent.ring} group-hover:ring-4`}>
                    <Icon />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold leading-tight text-on-surface">{cert.name}</h3>
                    <p className="mt-1 text-sm text-on-surface-variant">{cert.issuer}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-1 items-end justify-between gap-3">
                  <span className="inline-flex rounded-full border border-outline-variant/40 bg-surface-container-low px-3 py-1 text-xs font-semibold text-on-surface-variant">
                    {cert.date}
                  </span>

                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View certificate for ${cert.name}`}
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-primary/30 px-3 py-1.5 text-xs font-bold text-primary transition hover:bg-primary-container/20"
                    >
                      View <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-medium italic text-on-surface-variant/50">
                      Link coming soon
                    </span>
                  )}
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
