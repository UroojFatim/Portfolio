import React from 'react';
import { FaCertificate, FaPython, FaLinux, FaBook, FaEnvelopeOpenText, FaGraduationCap, FaExternalLinkAlt, FaServer, FaLaptopCode, FaDatabase, FaCode, FaCodeBranch, FaGoogle, FaCubes, FaSitemap } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const certifications = [
  { name: 'Linux Essentials Certification', issuer: 'Cisco Networking Academy', date: 'Jan 2025', icon: FaLinux, url: null },
  { name: 'Responsive Website Basics: Code with HTML, CSS, and JavaScript', issuer: 'University of London', date: 'Apr 2024', icon: FaGraduationCap, url: 'https://www.coursera.org/account/accomplishments/verify/UN2794293BHE' },
  { name: 'Introduction to Back-End Development', issuer: 'Meta', date: 'Apr 2024', icon: FaServer, url: 'https://www.coursera.org/account/accomplishments/verify/FB52R68HQ5M5' },
  { name: 'Introduction to Front-End Development', issuer: 'Meta', date: 'Apr 2024', icon: FaLaptopCode, url: 'https://www.coursera.org/account/accomplishments/verify/6DD3W8F4V8QY' },
  { name: 'Introduction to Databases for Back-End Development', issuer: 'Meta', date: 'Mar 2024', icon: FaDatabase, url: 'https://www.coursera.org/account/accomplishments/verify/Z6BLLKBJYF85' },
  { name: 'HTML and CSS in Depth', issuer: 'Meta', date: 'Mar 2024', icon: FaCode, url: 'https://www.coursera.org/account/accomplishments/verify/DNTRZP4WZRG9' },
  { name: 'Version Control', issuer: 'Meta', date: 'Mar 2024', icon: FaCodeBranch, url: 'https://www.coursera.org/account/accomplishments/verify/8EVKAGBXZ26C' },
  { name: 'Python Project', issuer: 'UST', date: 'Jan 2023', icon: FaPython, url: 'https://www.coursera.org/account/accomplishments/certificate/LPUEYDXMXFF2' },
  { name: 'English for Career Development', issuer: 'University of Pennsylvania', date: 'Dec 2023', icon: FaBook, url: 'https://www.coursera.org/account/accomplishments/verify/2AG2NQ5FSP5W' },
  { name: 'Write Professional Emails in English', issuer: 'Georgia Institute of Technology', date: 'Dec 2023', icon: FaEnvelopeOpenText, url: 'https://coursera.org/verify/4SQDXVRC9C4Z' },
  { name: 'Foundations of Project Management', issuer: 'Google', date: 'Nov 2023', icon: FaGoogle, url: 'https://coursera.org/verify/DLM3BZSDDRDS' },
  { name: 'Object-Oriented Programming Language', issuer: 'Great Learning', date: 'Nov 2023', icon: FaCubes, url: 'https://verify.mygreatlearning.com/verify/KNQQKPEJ' },
  { name: 'Python Data Structures', issuer: 'Coursera', date: 'Nov 2023', icon: FaSitemap, url: 'https://coursera.org/verify/VW89A93VR9SE' },
  { name: 'Programming for Everybody (Getting Started with Python)', issuer: 'Coursera', date: 'Oct 2023', icon: FaPython, url: 'https://www.coursera.org/account/accomplishments/verify/QMJ25LEUGD56' },
  { name: 'Python Essentials 1', issuer: 'Cisco', date: 'Oct 2023', icon: FaPython, url: 'https://www.credly.com/badges/2f9eca56-4547-403c-a2ee-ca7a8277170c/linked_in_profile' },
];

const accents = ['primary', 'secondary', 'tertiary'];
const accentClass = {
  primary: { box: 'border-primary/20 bg-primary-container/20 text-primary', ring: 'group-hover:ring-primary/30' },
  secondary: { box: 'border-secondary/20 bg-secondary-container/30 text-secondary', ring: 'group-hover:ring-secondary/30' },
  tertiary: { box: 'border-tertiary/20 bg-tertiary-container/25 text-tertiary', ring: 'group-hover:ring-tertiary/30' },
};

const Certifications = () => {
  return (
    <section id="certifications" className="scroll-mt-24 mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
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
