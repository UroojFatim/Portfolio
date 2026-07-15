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
    <section id="experience" className="mx-auto max-w-container-max px-6 py-16 sm:py-20">
      <div className="mb-10">
        <span className="section-eyebrow">Career Path</span>
        <h2 className="section-heading">Experience</h2>
      </div>

      <div className="relative pl-0 md:pl-12">
        <div className="absolute bottom-1 left-3 top-1 hidden w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:block" aria-hidden="true" />

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <article className="relative">
                <span className="absolute left-[-1.65rem] top-6 hidden h-4 w-4 rounded-full bg-primary shadow-[0_0_0_6px_rgb(var(--color-primary-container)/0.35)] md:block" aria-hidden="true" />
                <div className="glass-card hover-glow p-5 sm:p-6 md:p-7">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-display text-on-surface md:text-2xl">{item.company}</h3>
                      <p className="mt-1 font-medium text-primary">{item.role}</p>
                    </div>
                    <div className="text-sm text-on-surface-variant md:text-right">
                      <div>{item.period}</div>
                      <div>{item.location}</div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 pl-5 text-on-surface-variant sm:pl-6">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="list-disc">{bullet}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-primary/25 bg-primary-container/15 px-3 py-1 text-sm font-medium text-on-surface"
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
