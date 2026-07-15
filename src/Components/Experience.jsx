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
    <section id="experience" className="mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-10 text-center sm:mb-16">
        <span className="section-eyebrow text-secondary">Career Path</span>
        <h2 className="section-heading">Work Experience</h2>
      </div>

      <div className="mx-auto max-w-4xl space-y-10 sm:space-y-12">
        {experiences.map((item, index) => (
          <ScrollReveal key={index} delay={index * 80}>
            <div className="relative flex flex-col gap-4 sm:gap-6 md:flex-row">
              <div className="md:w-1/4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">{item.period}</span>
                <div className="mt-2 text-xs font-medium text-on-surface-variant">{item.location}</div>
              </div>
              <div className="glass-card hover-glow relative rounded-3xl p-6 sm:p-8 md:w-3/4">
                <span
                  className="absolute left-6 top-8 hidden h-4 w-4 -translate-x-[3.25rem] rounded-full bg-primary shadow-[0_0_0_6px_rgb(var(--color-primary-container)/0.35)] md:block"
                  aria-hidden="true"
                />
                <h3 className="text-headline-md font-bold font-display text-on-surface">{item.role}</h3>
                <div className="mb-5 mt-1 font-bold text-primary sm:mb-6">{item.company}</div>

                <ul className="space-y-3 pl-5 text-sm leading-relaxed text-on-surface-variant">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="list-disc">{bullet}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-lg border border-secondary/20 bg-secondary-container/30 px-3 py-1.5 text-[11px] font-medium text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
