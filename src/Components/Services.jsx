import React from 'react';
import { FaCode, FaCloud, FaShoppingCart, FaRobot, FaTachometerAlt, FaPaintBrush, FaBolt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import CornerMarks from './CornerMarks';

const accents = ['primary', 'secondary', 'tertiary'];
const accentText = { primary: 'text-primary', secondary: 'text-secondary', tertiary: 'text-tertiary' };
const accentIconBox = {
  primary: 'border-primary/30 bg-primary/10 text-primary',
  secondary: 'border-secondary/30 bg-secondary/10 text-secondary',
  tertiary: 'border-tertiary/30 bg-tertiary/10 text-tertiary',
};

const services = [
  {
    icon: FaRobot,
    title: 'AI-Powered Applications',
    description: 'RAG chatbots over custom knowledge bases, LangChain & LangGraph pipelines, AI integrations into existing products, and computer vision features built with OpenCV.',
    tags: ['RAG & LangChain Pipelines', 'LLM Integrations', 'Computer Vision (OpenCV)'],
  },
  {
    icon: FaCode,
    title: 'Full Stack Web Development',
    description: 'End-to-end web applications with a React.js / Next.js frontend, RESTful Node.js + Express.js backend, MongoDB & PostgreSQL database design, and secure JWT + RBAC authentication.',
    tags: ['React & Next.js Frontends', 'REST API Design', 'JWT & RBAC Auth'],
  },
  {
    icon: FaBolt,
    title: 'Workflow Automation',
    description: 'Cloud flow automation with Microsoft Power Automate — approval workflows, email & document processing, and scheduled data sync between apps and REST APIs, built with proper error handling for real business processes.',
    tags: ['Approval Workflows', 'Power Automate Flows', 'API & Data Sync'],
    badge: 'New',
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

const [featured, ...rest] = services;

const Services = () => {
  const FeaturedIcon = featured.icon;

  return (
    <section id="services" className="scroll-mt-24 mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-10 text-center sm:mb-16">
        <span className="section-eyebrow text-primary">Offerings</span>
        <h2 className="section-heading">Specialized Services</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-on-surface-variant sm:text-base">
          Available for freelance projects, remote full-time roles, and contract work worldwide
        </p>
      </div>

      {/* Featured service — pulled out of the grid so the offering list reads
          as one clear entry point + five supporting specialties, instead of
          six visually identical boxes. */}
      <ScrollReveal className="mb-5 sm:mb-6">
        <article className="glass-card hover-glow group relative overflow-hidden rounded-md p-8 sm:p-10 md:p-12">
          <CornerMarks active accent="primary" />
          <div className="flex items-center gap-5">
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-md border text-2xl transition-transform group-hover:scale-110 ${accentIconBox.primary}`}>
              <FeaturedIcon />
            </div>
            <div className="min-w-0">
              <span className="section-eyebrow text-primary">Core Offering</span>
              <h3 className="mt-1 text-headline-lg font-bold font-display leading-tight text-on-surface">
                {featured.title}
              </h3>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            {featured.description}
          </p>
          <div className="skill-badges mt-6">
            {featured.tags.map((tag) => (
              <span key={tag} className="skill-badge">{tag}</span>
            ))}
          </div>
        </article>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((service, index) => {
          const Icon = service.icon;
          const accentKey = accents[(index + 1) % accents.length];
          const accent = accentText[accentKey];
          return (
            <ScrollReveal key={service.title} delay={index * 70}>
              <article className="glass-card hover-glow group relative flex h-full flex-col rounded-md p-7 sm:p-8">
                <CornerMarks accent={accentKey} />
                <div className="mb-6 flex items-start justify-between sm:mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-md border transition-transform group-hover:scale-110 ${accentIconBox[accentKey]}`}>
                    <Icon className="text-2xl" />
                  </div>
                  <span className="font-mono text-[11px] text-on-surface-variant/50">
                    {String(index + 2).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="flex flex-wrap items-center gap-2 text-headline-md font-bold font-display leading-tight text-on-surface">
                  {service.title}
                  {service.badge && (
                    <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${accentIconBox[accentKey]}`}>
                      {service.badge}
                    </span>
                  )}
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

      <ScrollReveal variant="clip" className="mt-10 sm:mt-14">
        <div className="relative overflow-hidden rounded-lg bg-primary px-8 py-14 text-center sm:px-12 sm:py-16 md:py-20">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-on-primary/70">
            Let&apos;s Talk
          </span>
          <h3 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-on-primary sm:text-5xl md:text-6xl">
            Got a project in mind? Let&apos;s build it together.
          </h3>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-on-primary px-8 py-4 text-base font-bold text-primary shadow-soft transition hover:brightness-95"
            >
              Let&apos;s Work Together <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Services;
