// src/Components/Pages/RightSide/Projects.js

import React from 'react';
import Project1Image from '../assets/Profile.jpeg'; // Replace with your project images
import Project2Image from '../assets/Profile.jpeg';
import Project3Image from '../assets/Profile.jpeg';
// Import more project images as needed

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: Project1Image,
    demoLink: 'https://example.com/project-one',
    repoLink: 'https://github.com/yourusername/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: Project2Image,
    demoLink: 'https://example.com/project-two',
    repoLink: 'https://github.com/yourusername/project-two',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    image: Project3Image,
    demoLink: 'https://example.com/project-three',
    repoLink: 'https://github.com/yourusername/project-three',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section p-4 sm:p-8 lg:p-12 text-center my-10 lg:my-20" id="projects">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lightTheme-text dark:text-darkTheme-text">
          Projects
        </h2>
        <span className="inline-block w-16 sm:w-24 h-1 bg-lightTheme-accent dark:bg-darkTheme-accent mt-4 mx-auto"></span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-lightTheme-bg dark:bg-darkTheme-bg shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />

            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-lightTheme-text dark:text-darkTheme-text mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:text-blue-700 dark:text-orange-400 dark:hover:text-orange-600 transition"
                >
                  Live Demo
                </a>
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:text-blue-700 dark:text-orange-400 dark:hover:text-orange-600 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
