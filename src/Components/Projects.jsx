import { useEffect, useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import ProjectArt from './ProjectArt';
import CornerMarks from './CornerMarks';
import ScrollReveal from './ScrollReveal';
import BrowserBar from './BrowserBar';

const FILTERS = [
  'All',
  'Featured',
  'MERN Stack',
  'Next.js',
  'AI/ML',
  'SaaS',
  'E-Commerce',
  'In Progress',
];

const statusStyles = {
  Live: 'bg-secondary text-on-secondary',
  'In Progress': 'bg-tertiary text-on-tertiary',
  Completed: 'bg-surface-container-highest text-on-surface-variant',
};

// The single strongest, most-verified case study (real client, live demo,
// quantified impact) gets a larger spotlight treatment. This is a purely
// presentational flag keyed off the existing project id — no project data,
// filter logic, or transition state is touched.
const FEATURED_ID = 1;

// Varies each non-featured card's image proportions (deterministically, by
// project id) so the masonry columns settle into a genuinely staggered
// skyline instead of a repeating uniform shape.
const IMAGE_ASPECTS = ['aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-video'];
const imageAspectFor = (id) => IMAGE_ASPECTS[id % IMAGE_ASPECTS.length];

// Fake "window chrome" label for the BrowserBar — purely decorative, derived
// from existing project data only.
const browserLabelFor = (project) =>
  `${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-+|-+$)/g, '')}.app`;

const ProjectLinks = ({ project }) => (
  <div className="mt-6 flex flex-wrap gap-3 pt-2">
    {!project.demo && !project.github && (
      <span className="flex min-h-11 flex-1 items-center justify-center rounded-md border border-outline-variant py-3 text-sm font-bold text-on-surface-variant">
        Private Project
      </span>
    )}
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open live site for ${project.name}`}
        className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant py-3 text-sm font-bold text-on-surface transition hover:border-primary/50 hover:text-primary"
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
        className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant py-3 text-sm font-bold text-on-surface transition hover:border-primary/50 hover:text-primary"
      >
        GitHub <FaGithub className="text-xs" />
      </a>
    )}
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Featured');
  const [displayedProjects, setDisplayedProjects] = useState(() =>
    projects.filter((project) => project.tags?.includes('Featured'))
  );
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
    <section id="projects" className="scroll-mt-24 mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
      <div className="mb-10 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="section-eyebrow text-primary">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        <div className="project-filter-bar glass-card flex h-fit flex-wrap gap-1.5 rounded-xl p-1.5">
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
        <>
          {displayedProjects.filter((project) => project.id === FEATURED_ID).map((project) => {
            const stageClass = cardClassForStage(transitionStage);
            return (
              <ScrollReveal key={project.id} delay={0} className="mb-8 sm:mb-10">
                <article className={`glass-card hover-glow group grid grid-cols-1 overflow-hidden rounded-md transition-opacity duration-300 lg:grid-cols-2 ${stageClass}`}>
                    <div className="group relative flex h-64 flex-col overflow-hidden sm:h-80 lg:h-full">
                      <BrowserBar label={browserLabelFor(project)} className="relative z-20" />
                      <div className="relative flex-1 overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.name} screenshot`}
                            loading="lazy"
                            decoding="async"
                            className={`h-full w-full max-w-full transition-transform duration-700 group-hover:scale-105 ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                          />
                        ) : (
                          <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                            <ProjectArt kind={project.artKind} />
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-on-surface/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <CornerMarks active accent="secondary" />
                        <div
                          className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider sm:right-5 sm:top-5 sm:px-4 ${
                            statusStyles[project.status] ?? statusStyles.Completed
                          }`}
                        >
                          {project.status}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-center p-7 sm:p-10">
                      <span className="section-eyebrow text-secondary">Flagship Build</span>
                      <h3 className="text-headline-lg font-bold font-display leading-tight text-on-surface">
                        {project.name}
                      </h3>
                      {project.client && (
                        <div className="mt-3 inline-flex w-fit rounded-full border border-outline-variant px-3 py-1 text-xs font-semibold text-on-surface-variant">
                          {project.client}
                        </div>
                      )}

                      <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                        {project.desc}
                      </p>

                      <div className="skill-badges mt-5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="skill-badge">{tech}</span>
                        ))}
                      </div>

                      <ProjectLinks project={project} />
                    </div>
                  </article>
              </ScrollReveal>
            );
          })}

          <div className="columns-1 gap-x-8 md:columns-2 md:gap-x-10 lg:columns-3">
            {displayedProjects.filter((project) => project.id !== FEATURED_ID).map((project, index) => {
              const stageClass = cardClassForStage(transitionStage);
              return (
                <ScrollReveal key={project.id} delay={index * 40} className="mb-8 break-inside-avoid sm:mb-10">
                  <article className={`glass-card hover-glow group flex flex-col overflow-hidden rounded-md transition-opacity duration-300 ${stageClass}`}>
                    <div className="group relative flex flex-col overflow-hidden">
                      <BrowserBar label={browserLabelFor(project)} />
                      <div className={`relative overflow-hidden ${imageAspectFor(project.id)}`}>
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.name} screenshot`}
                            loading="lazy"
                            decoding="async"
                            className={`h-full w-full max-w-full transition-transform duration-700 group-hover:scale-110 ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                          />
                        ) : (
                          <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                            <ProjectArt kind={project.artKind} />
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-on-surface/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <CornerMarks accent="primary" />
                        <div
                          className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider sm:right-5 sm:top-5 sm:px-4 ${
                            statusStyles[project.status] ?? statusStyles.Completed
                          }`}
                        >
                          {project.status}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <h3 className="text-headline-md font-bold font-display leading-tight text-on-surface">
                        {project.name}
                      </h3>
                      {project.client && (
                        <div className="mt-2 inline-flex w-fit rounded-full border border-outline-variant px-3 py-1 text-xs font-semibold text-on-surface-variant">
                          {project.client}
                        </div>
                      )}

                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-on-surface-variant">
                        {project.desc}
                      </p>

                      <div className="skill-badges mt-5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="skill-badge">{tech}</span>
                        ))}
                      </div>

                      <ProjectLinks project={project} />
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
