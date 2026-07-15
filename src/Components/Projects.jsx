import React, { useEffect, useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import ProjectArt from './ProjectArt';
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
  Live: 'bg-emerald-500/90 text-white',
  'In Progress': 'bg-amber-500/90 text-white',
  Completed: 'bg-secondary/90 text-on-secondary',
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
    <section id="projects" className="mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-10 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="section-eyebrow text-primary">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        <div className="glass-card flex h-fit flex-wrap gap-1.5 rounded-xl p-1.5">
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
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => {
            const stageClass = cardClassForStage(transitionStage);
            return (
              <ScrollReveal key={project.id} delay={index * 40}>
                <article
                  className={`glass-card group flex h-full flex-col overflow-hidden rounded-[2rem] transition-opacity duration-300 ${stageClass}`}
                >
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                        <ProjectArt kind={project.artKind} />
                      </div>
                    )}
                    <div
                      className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md sm:right-5 sm:top-5 sm:px-4 ${
                        statusStyles[project.status] ?? statusStyles.Completed
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-headline-md font-bold font-display leading-tight text-on-surface">
                      {project.name}
                    </h3>
                    {project.client && (
                      <div className="mt-2 inline-flex w-fit rounded-full border border-outline-variant/40 px-3 py-1 text-xs font-semibold text-on-surface-variant">
                        {project.client}
                      </div>
                    )}

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-on-surface-variant">
                      {project.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-secondary/20 bg-secondary-container/30 px-3 py-1.5 text-[11px] font-medium text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 pt-2">
                      {!project.demo && !project.github && (
                        <span className="flex min-h-11 flex-1 items-center justify-center rounded-xl border border-outline-variant/30 bg-surface-container-high/60 py-3 text-sm font-bold text-on-surface-variant">
                          Private Project
                        </span>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open live site for ${project.name}`}
                          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-on-surface/5 bg-surface-container-high py-3 text-sm font-bold text-on-surface transition-all hover:bg-surface-bright"
                        >
                          Live Demo <FaExternalLinkAlt className="text-xs" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open GitHub repo for ${project.name}`}
                          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-on-surface/5 bg-surface-container-high py-3 text-sm font-bold text-on-surface transition-all hover:bg-surface-bright"
                        >
                          GitHub <FaGithub className="text-xs" />
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
