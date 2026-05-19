import React from 'react';
import { FaCode, FaCloud, FaShoppingCart, FaRobot, FaTachometerAlt, FaPaintBrush } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: FaCode,
    iconColor: 'text-blue-400',
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
    iconColor: 'text-purple-400',
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
    iconColor: 'text-emerald-400',
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
    iconColor: 'text-orange-400',
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
    iconColor: 'text-pink-400',
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
    iconColor: 'text-cyan-400',
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
    <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-4">
        <h2 className="section-heading">What I Can Build For You</h2>
        <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-300">
          Available for freelance projects, remote full-time roles, and contract work worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <ScrollReveal key={service.title} delay={index * 70}>
              <article className="glass-card hover-glow h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-4xl ${service.iconColor}`}>
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-white leading-tight">{service.title}</h3>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-gray-300 list-disc pl-5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
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
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Let&apos;s Work Together →
        </a>
      </div>
    </section>
  );
};

export default Services;
