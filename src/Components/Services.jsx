import React from 'react';
import { FaCode, FaCloud, FaShoppingCart, FaRobot, FaTachometerAlt, FaPaintBrush } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const accents = ['primary', 'secondary', 'tertiary'];
const accentClass = {
  primary: { icon: 'text-primary', bg: 'bg-primary-container/20', list: 'text-primary' },
  secondary: { icon: 'text-secondary', bg: 'bg-secondary-container/30', list: 'text-secondary' },
  tertiary: { icon: 'text-tertiary', bg: 'bg-tertiary-container/25', list: 'text-tertiary' },
};

const services = [
  {
    icon: FaCode,
    title: 'Full Stack Web Development',
    bullets: [
      'End-to-end web apps with React.js / Next.js frontend',
      'RESTful APIs and backend with Node.js + Express.js',
      'MongoDB & PostgreSQL database design',
      'Authentication with JWT & RBAC',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    icon: FaCloud,
    title: 'SaaS Product Development',
    bullets: [
      'Multi-tenant SaaS architecture from scratch',
      'Role-based dashboards for admin, vendor & user',
      'Subscription flows and onboarding systems',
      'Scalable, production-ready deployment on Vercel',
    ],
    tech: ['MERN Stack', 'JWT', 'Vercel', 'PostgreSQL'],
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Solutions',
    bullets: [
      'Custom online stores with product & inventory management',
      'Admin panels, vendor dashboards, order tracking',
      'Secure checkout and payment flow integration',
      'Mobile-first, SEO-optimized storefront',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    icon: FaRobot,
    title: 'AI-Powered Applications',
    bullets: [
      'RAG chatbots with custom knowledge bases',
      'LangChain & LangGraph pipeline development',
      'AI integrations into existing web products',
      'Computer vision features (OpenCV, image processing)',
    ],
    tech: ['LangChain', 'LangGraph', 'FastAPI', 'Python', 'OpenAI'],
  },
  {
    icon: FaTachometerAlt,
    title: 'Dashboard & CRM Development',
    bullets: [
      'Custom CRM systems with lead & pipeline management',
      'Data dashboards with charts and real-time analytics',
      'Twilio integration for calling & SMS workflows',
      'Multi-role access with audit logs',
    ],
    tech: ['React', 'Node.js', 'Twilio', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: FaPaintBrush,
    title: 'Frontend UI Development',
    bullets: [
      'Pixel-perfect, responsive UI from Figma or reference designs',
      'Tailwind CSS component libraries',
      'Performance-optimized, accessible interfaces',
      'Smooth animations using CSS & Intersection Observer',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];

const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-container-max px-6 py-16 sm:py-20">
      <div className="mb-4">
        <span className="section-eyebrow">Offerings</span>
        <h2 className="section-heading">What I Can Build For You</h2>
        <p className="mt-4 max-w-3xl text-sm text-on-surface-variant sm:text-base">
          Available for freelance projects, remote full-time roles, and contract work worldwide
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const accent = accentClass[accents[index % accents.length]];
          return (
            <ScrollReveal key={service.title} delay={index * 70}>
              <article className="glass-card hover-glow h-full rounded-3xl p-6 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} text-4xl ${accent.icon}`}>
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold font-display leading-tight text-on-surface">{service.title}</h3>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 pl-5 text-sm text-on-surface-variant">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc">{bullet}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-on-primary shadow-glow transition hover:brightness-110"
        >
          Let&apos;s Work Together →
        </a>
      </div>
    </section>
  );
};

export default Services;
