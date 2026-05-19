import React, { useEffect, useMemo, useState } from 'react';
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
  Live: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'In Progress': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  Completed: 'bg-sky-500/15 text-sky-200 border-sky-500/30',
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
    <section
      id="projects"
      className="projects-section py-16 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-8">
        <h2 className="section-heading">Projects</h2>
      </div>

      <div className="max-w-6xl mx-auto mb-10">
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
        <p className="text-sm text-gray-400 max-w-md mx-auto text-center">
          No projects match this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => {
            const stageClass = cardClassForStage(transitionStage);
            return (
              <ScrollReveal key={project.id} delay={index * 40}>
              <article
                className={`glass-card hover-glow p-6 relative overflow-hidden border border-white/10 transition-opacity duration-300 ${stageClass}`}
              >
                <div className="absolute top-4 right-4">
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
                    {project.tags?.[0] ?? 'Project'}
                  </span>
                </div>

                <div className="pr-24">
                  <h3 className="text-2xl font-bold text-white text-left">{project.name}</h3>
                  {project.client && (
                    <div className="mt-2 inline-flex rounded-full border px-3 py-1 text-xs font-semibold border-white/10 text-gray-300">
                      {project.client}
                    </div>
                  )}
                </div>

                <div className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status] ?? statusStyles.Completed}`}>
                  <span aria-hidden="true">{project.status === 'Live' ? '🟢' : project.status === 'In Progress' ? '🟡' : '✅'}</span>
                  <span>{project.status}</span>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-300 text-left">
                  {project.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100"
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
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-500/10"
                    >
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open GitHub repo for ${project.name}`}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-500 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-500/10"
                    >
                      GitHub
                    </a>
                  )}
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
