import React from 'react';
import { FaCertificate, FaGoogle, FaPython, FaLinux, FaBook, FaEnvelopeOpenText, FaGraduationCap } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const certifications = [
  { name: 'Linux Essentials', issuer: 'Cisco', date: 'Jan 2025', icon: FaLinux },
  { name: 'Project Management', issuer: 'Google', date: 'Nov 2023', icon: FaGoogle },
  { name: 'Python Data Structures', issuer: 'Coursera', date: 'Nov 2023', icon: FaPython },
  { name: 'Object-Oriented Programming', issuer: 'Great Learning', date: 'Nov 2023', icon: FaBook },
  { name: 'Introduction to Databases for Backend', issuer: 'Meta / Coursera', date: 'Date not listed', icon: FaGraduationCap },
  { name: 'HTML and CSS in Depth', issuer: 'Meta / Coursera', date: 'Date not listed', icon: FaGraduationCap },
  { name: 'Introduction to Back-End Development', issuer: 'Meta / Coursera', date: 'Date not listed', icon: FaGraduationCap },
  { name: 'Write Professional Emails in English', issuer: 'Coursera', date: 'Date not listed', icon: FaEnvelopeOpenText },
];

const Certifications = () => {
  return (
    <section id="certifications" className="mx-auto max-w-container-max px-6 py-16 sm:py-20">
      <div className="mb-10">
        <span className="section-eyebrow">Credentials</span>
        <h2 className="section-heading">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certifications.map((cert, index) => {
          const Icon = cert.icon ?? FaCertificate;
          return (
            <ScrollReveal key={index} delay={index * 60}>
              <article className="glass-card hover-glow flex h-full items-start gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary-container/20 text-xl text-primary">
                  <Icon />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-tight text-on-surface">{cert.name}</h3>
                  <p className="mt-1 text-sm text-on-surface-variant">{cert.issuer}</p>
                  <p className="mt-2 inline-flex rounded-full border border-outline-variant/40 bg-surface-container-low px-3 py-1 text-xs font-semibold text-on-surface-variant">
                    {cert.date}
                  </p>
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
