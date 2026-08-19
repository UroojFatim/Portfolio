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

      <div className="divide-y divide-outline-variant border-y border-outline-variant">
        {certifications.map((cert, index) => {
          const Icon = cert.icon ?? FaCertificate;
          return (
            <ScrollReveal key={index} delay={Math.min(index * 30, 300)}>
              <article className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-4">
                <span className="shrink-0 font-mono text-xs text-on-surface-variant/50 sm:w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-outline-variant text-lg text-primary transition-colors group-hover:border-primary/50">
                  <Icon />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="break-words text-sm font-bold leading-snug text-on-surface sm:text-base">{cert.name}</h3>
                  <p className="mt-0.5 text-xs text-on-surface-variant sm:text-sm">{cert.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-on-surface-variant">{cert.date}</span>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View certificate for ${cert.name}`}
                    className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md border border-primary/30 px-3 py-1.5 text-xs font-bold text-primary transition hover:bg-primary/10"
                  >
                    View <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                ) : (
                  <span className="shrink-0 text-[11px] font-medium italic text-on-surface-variant/50">
                    Link coming soon
                  </span>
                )}
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
