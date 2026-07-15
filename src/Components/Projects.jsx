import React, { useEffect, useMemo, useState } from 'react';
import { FaRobot, FaCloud, FaShoppingCart, FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import ScrollReveal from './ScrollReveal';

const FILTERS = [
  'All',
  'MERN Stack',
  'Next.js',
  'AI/ML',
  'SaaS',
  'E-Commerce',
  'In Progress',
];

const statusStyles = {
  Live: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500 dark:text-emerald-300',
  'In Progress': 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300',
  Completed: 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300',
};

const placeholderIcon = (tags = []) => {
  if (tags.includes('AI/ML')) return FaRobot;
  if (tags.includes('SaaS')) return FaCloud;
  if (tags.includes('E-Commerce')) return FaShoppingCart;
  return FaCode;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [transitionStage, setTransitionStage] = useState('idle');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.tags?.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    let exitTimer;
    let enterTimer;

    if (transitionStage === 'idle') return undefined;

    if (transitionStage === 'exit') {
      exitTimer = setTimeout(() => {
        setDisplayedProjects(filteredProjects);
        setTransitionStage('enter');
      }, 180);
    }

    if (transitionStage === 'enter') {
      enterTimer = window.requestAnimationFrame(() => {
        setTransitionStage('idle');
      });
    }

    return () => {
      clearTimeout(exitTimer);
      if (enterTimer) window.cancelAnimationFrame(enterTimer);
    };
  }, [filteredProjects, transitionStage]);

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;
    setActiveFilter(filter);
    setTransitionStage('exit');
  };

  const cardClassForStage = (stage) => {
    if (stage === 'exit') return 'project-card-exit';
    if (stage === 'enter') return 'project-card-enter';
    return 'project-card-idle';
  };

  return (
    <section id="projects" className="mx-auto max-w-container-max px-6 py-16 sm:py-20">
      <div className="mb-10">
        <span className="section-eyebrow">Portfolio</span>
        <h2 className="section-heading">Projects</h2>
      </div>

      <div className="glass-card mx-auto mb-10 max-w-fit rounded-2xl">
        <div className="project-filter-bar">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              aria-pressed={activeFilter === filter}
              className={`project-filter-btn min-h-11 ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {displayedProjects.length === 0 ? (
        <p className="mx-auto max-w-md text-center text-sm text-on-surface-variant">
          No projects match this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => {
            const stageClass = cardClassForStage(transitionStage);
            const PlaceholderIcon = placeholderIcon(project.tags);
            return (
              <ScrollReveal key={project.id} delay={index * 40}>
                <article
                  className={`glass-card hover-glow group overflow-hidden transition-opacity duration-300 ${stageClass}`}
                >
                  <div className="relative h-44 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-container/40 to-secondary-container/30">
                        <PlaceholderIcon className="text-5xl text-primary/70" />
                      </div>
                    )}
                    <span className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-on-surface backdrop-blur-md">
                      {project.tags?.[0] || 'Project'}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display text-on-surface">{project.name}</h3>
                    {project.client && (
                      <div className="mt-2 inline-flex rounded-full border border-outline-variant/40 px-3 py-1 text-xs font-semibold text-on-surface-variant">
                        {project.client}
                      </div>
                    )}

                    <div className={`mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status] ?? statusStyles.Completed}`}>
                      <span aria-hidden="true">{project.status === 'Live' ? '🟢' : project.status === 'In Progress' ? '🟡' : '✅'}</span>
                      <span>{project.status}</span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-on-surface-variant">
                      {project.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary/20 bg-primary-container/15 px-3 py-1 text-xs font-medium text-on-surface"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open live site for ${project.name}`}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary-container/20"
                        >
                          <FaExternalLinkAlt className="text-xs" /> Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open GitHub repo for ${project.name}`}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-outline-variant/50 px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-on-surface/5"
                        >
                          <FaGithub className="text-xs" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
