import React from 'react';
import { FaCode, FaCloud, FaShoppingCart, FaRobot, FaTachometerAlt, FaPaintBrush } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const accents = ['primary', 'secondary', 'tertiary'];
const accentText = { primary: 'text-primary', secondary: 'text-secondary', tertiary: 'text-tertiary' };

const services = [
  {
    icon: FaCode,
    title: 'Full Stack Web Development',
    description: 'End-to-end web applications with a React.js / Next.js frontend, RESTful Node.js + Express.js backend, MongoDB & PostgreSQL database design, and secure JWT + RBAC authentication.',
    tags: ['React & Next.js Frontends', 'REST API Design', 'JWT & RBAC Auth'],
  },
  {
    icon: FaCloud,
    title: 'SaaS Product Development',
    description: 'Multi-tenant SaaS architecture from scratch, with role-based dashboards for admin, vendor & user, subscription and onboarding flows, and scalable production deployment on Vercel.',
    tags: ['Multi-Tenancy Architecture', 'Subscription Systems', 'Performance Optimization'],
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Custom online stores with product & inventory management, admin and vendor dashboards, secure checkout integration, and mobile-first, SEO-optimized storefronts.',
    tags: ['Storefront & Cart Flows', 'Vendor Dashboards', 'Secure Checkout'],
  },
  {
    icon: FaRobot,
    title: 'AI-Powered Applications',
    description: 'RAG chatbots over custom knowledge bases, LangChain & LangGraph pipelines, AI integrations into existing products, and computer vision features built with OpenCV.',
    tags: ['RAG & LangChain Pipelines', 'LLM Integrations', 'Computer Vision (OpenCV)'],
  },
  {
    icon: FaTachometerAlt,
    title: 'Dashboard & CRM Development',
    description: 'Custom CRM systems with lead & pipeline management, real-time analytics dashboards, Twilio-powered calling & SMS workflows, and multi-role access with audit logs.',
    tags: ['Lead & Pipeline Tracking', 'Twilio Voice / SMS', 'Real-Time Analytics'],
  },
  {
    icon: FaPaintBrush,
    title: 'Frontend UI Development',
    description: 'Pixel-perfect, responsive UI built from Figma or reference designs, reusable Tailwind CSS component libraries, and performance-optimized, accessible interfaces with smooth animations.',
    tags: ['Figma-to-Code', 'Tailwind Component Libraries', 'Accessible & Animated UI'],
  },
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-10 text-center sm:mb-16">
        <span className="section-eyebrow text-primary">Offerings</span>
        <h2 className="section-heading">Specialized Services</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-on-surface-variant sm:text-base">
          Available for freelance projects, remote full-time roles, and contract work worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const accent = accentText[accents[index % accents.length]];
          return (
            <ScrollReveal key={service.title} delay={index * 70}>
              <article className="glass-card hover-glow group flex h-full flex-col rounded-md p-7 sm:p-8">
                <div className="mb-6 flex items-start justify-between sm:mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-md border border-outline-variant transition-transform group-hover:scale-110 ${accent}`}>
                    <Icon className="text-2xl" />
                  </div>
                  <span className="font-mono text-[11px] text-on-surface-variant/50">
                    {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-headline-md font-bold font-display leading-tight text-on-surface">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                  {service.description}
                </p>

                <ul className={`mt-6 space-y-2.5 text-[11px] font-semibold sm:mt-auto sm:pt-6 ${accent} opacity-90`}>
                  {service.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2">
                      <span aria-hidden="true">—</span> {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center sm:mt-16">
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 py-3 font-bold text-on-primary shadow-glow transition hover:brightness-110"
        >
          Let&apos;s Work Together →
        </a>
      </div>
    </section>
  );
};

export default Services;
