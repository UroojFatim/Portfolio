import React from 'react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    company: 'AItek Solutions',
    role: 'Software Engineer',
    period: 'Feb 2025 – Apr 2026',
    location: 'Remote, USA',
    bullets: [
      'Built White-Label CRM with Twilio integration (calling, SMS, communication workflows)',
      'Developed Wolf of Arches SaaS platform serving 50+ business users, reducing onboarding time by 40%',
      'Architected Chair Track clinic system handling 500+ monthly appointments with automated scheduling',
      'Implemented RBAC across 3 enterprise apps securing data for 200+ users with 99.9% uptime',
      'Currently building AI Virtual Mirror — AI-based virtual try-on SaaS widget'
    ],
    stack: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'JWT', 'Vercel']
  },
  {
    company: 'Neplen (UAE)',
    role: 'Full Stack Developer',
    period: 'Aug 2024 – Jun 2025',
    location: 'Remote',
    bullets: [
      'Built SaaS dashboard for used electronics with dynamic pricing algorithm and product condition assessment',
      'Developed admin/vendor panels handling 200+ daily product listings with role-based auth'
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Vercel']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="section-heading">Experience</h2>
      </div>

      <div className="relative pl-0 md:pl-10">
        <div className="absolute left-3 top-1 bottom-1 hidden w-px bg-blue-500/70 md:block" aria-hidden="true" />

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <ScrollReveal key={index} delay={index * 80}>
            <article className="relative">
              <span className="absolute left-[-1.15rem] top-6 hidden h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(37,99,235,0.12)] md:block" aria-hidden="true" />
              <div className="glass-card hover-glow p-5 sm:p-6 md:p-7">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.company}</h3>
                    <p className="text-blue-200 font-medium mt-1">{item.role}</p>
                  </div>
                  <div className="text-sm text-gray-300 md:text-right">
                    <div>{item.period}</div>
                    <div>{item.location}</div>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-gray-300 list-disc pl-5 sm:pl-6">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
