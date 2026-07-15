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
    <section
      id="services"
      className="mx-auto max-w-container-max rounded-[2.5rem] bg-surface-container-low/60 px-4 py-16 backdrop-blur-md sm:rounded-[4rem] sm:px-6 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mb-10 text-center sm:mb-16">
        <span className="section-eyebrow text-primary">Offerings</span>
        <h2 className="section-heading">Specialized Services</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-on-surface-variant sm:text-base">
          Available for freelance projects, remote full-time roles, and contract work worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const accent = accentText[accents[index % accents.length]];
          return (
            <ScrollReveal key={service.title} delay={index * 70}>
              <article className="glass-card hover-glow group h-full rounded-[2.5rem] p-8 sm:rounded-[3.5rem] sm:p-12">
                <div className={`mb-6 w-fit transition-transform group-hover:scale-110 sm:mb-10 ${accent}`}>
                  <Icon className="text-5xl sm:text-6xl" />
                </div>
                <h3 className="text-headline-md font-bold font-display leading-tight text-on-surface">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant sm:mb-10">
                  {service.description}
                </p>

                <ul className={`space-y-2.5 text-[11px] font-semibold ${accent} opacity-80`}>
                  {service.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2">
                      <span aria-hidden="true">•</span> {tag}
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
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-on-primary shadow-glow transition hover:brightness-110"
        >
          Let&apos;s Work Together →
        </a>
      </div>
    </section>
  );
};

export default Services;
