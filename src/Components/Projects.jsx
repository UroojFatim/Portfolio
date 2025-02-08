import React from 'react';
import Project1Image from '../assets/projects/PlantPalace.JPG'; 
import Project2Image from '../assets/projects/Theater.JPG';
import Project3Image from '../assets/projects/EveChicBoutique.JPG';
import Project4Image from '../assets/projects/JobSphere.JPG';
import Project5Image from '../assets/projects/PickBazar.JPG';
import Project6Image from '../assets/projects/QuizWebsite.JPG';
import Project7Image from '../assets/projects/DailyTimes.JPG';
import Project8Image from '../assets/projects/ColorDetector.JPG';
import Project9Image from '../assets/projects/LibraryManagementSystem.JPG';
import Project10Image from '../assets/projects/AirLineReservationSystem.JPG';

const projects = [  
  {
    id: 1,
    title: 'PlantPalace – Modern E-Commerce for Plant Lovers 🌿',
    description: 'PlantPalace is a fast, responsive e-commerce site built with Vite and React, offering a smooth shopping experience for plant enthusiasts. Users can easily browse, search, and purchase plants with a sleek, modern interface and secure checkout.',
    image: Project1Image,
    demoLink: 'https://plant-palace-beta.vercel.app/',
    repoLink: 'https://github.com/UroojFatim/PlantPalace',
  },
  {
    id: 2,
    title: 'Theater Website – A Dynamic Platform for Movie Lovers 🎬',
    description: 'Theater Website is a dynamic, user-friendly platform built with React.js, designed to showcase movie listings, showtimes, and theater locations. It offers a seamless experience for moviegoers to explore upcoming films, check schedules, and book tickets online.',
    image: Project2Image,
    demoLink: 'https://theater-snowy.vercel.app/',
    repoLink: 'https://github.com/UroojFatim/Theater',
  },
  {
    id: 3,
    title: 'EvichicBoutique – Stylish & Elegant E-Commerce Platform 🛍️',
    description: 'EvichicBoutique is a sleek and modern e-commerce website built with HTML, CSS, Bootstrap, and PHP, offering a seamless shopping experience. Designed for fashion enthusiasts, it provides a stylish interface for browsing products, adding items to the cart, and managing orders efficiently.',
    image: Project3Image,
    repoLink: 'https://github.com/UroojFatim/EveChic_Boutique',
  },
  {
    id: 4,
    title: 'JobSphere – A Comprehensive Job Portal 💼',
    description: 'JobSphere is a full-stack job portal designed to connect job seekers with employers, providing a seamless and efficient hiring experience. Built with modern web technologies, it enables users to search and apply for jobs, while employers can post openings and manage applications. The platform ensures a smooth user experience with an intuitive UI and powerful backend functionalities.',
    image: Project4Image,
    repoLink: 'https://github.com/UroojFatim/Job-Sphere',
  },
  {
    id: 5,
    title: 'PickBazar – Modern E-Commerce Platform Built with Next.js 🛒',
    description: 'PickBazar is a high-performance e-commerce website developed using Next.js and deployed on Vercel. Designed for a seamless shopping experience, it offers a fast, responsive, and user-friendly interface with optimized performance. With advanced search, filtering, and cart management, PickBazar ensures a smooth and efficient online shopping journey.',
    image: Project5Image,
    demoLink: 'https://pickbazar-e-commerce-template.vercel.app/',
    repoLink: 'https://github.com/EponymousBearer/pickbazar_e-commerce_template',
  },
  {
    id: 6,
    title: 'PsyAssess – AI-Powered Personality Assessment for Job Seekers 🧠💼  z',
    description: "PsyAssess is an advanced personality assessment platform built using Django, designed to evaluate job seekers through psychology-based tests curated by professional psychologists. Developed collaboratively with Tasmiya Ansari, Sakina Qasim, and two psychology experts, this platform helps employers gain deeper insights into candidates' personalities, strengths, and work styles before hiring.",
    image: Project6Image,
    repoLink: 'https://github.com/UroojFatim/Personality_Assessment_Website',
  },
  {
    id: 7,
    title: 'DailyTimes – A Modern News & Articles Platform 📰',
    description: 'DailyTimes is a Proof of Concept (POC) news and articles website designed to showcase a sleek, user-friendly, and content-rich platform for delivering the latest news and insights. Built with scalability in mind, it offers an intuitive reading experience with fast loading times and seamless navigation.',
    image: Project7Image,
    demoLink: 'https://daily-times-alpha.vercel.app/',
    repoLink: 'https://github.com/UroojFatim/DailyTimes',
  },  
  {
    id: 8,
    title: 'WebCome – Color Detection for the Visually Impaired 🎨🦮  ',
    description: 'WebCome is an assistive technology tool built using Python and OpenCV, designed to help visually impaired individuals identify colors in real-time. By utilizing a webcam, the system detects the dominant color in the field of view and provides audio feedback, enhancing accessibility and independence.',
    image: Project8Image,
    repoLink: 'https://github.com/UroojFatim/ColorDetector',
  },
  {
    id: 9,
    title: 'Library Management System – Efficient Book Management in C++ 📚',
    description: 'The Library Management System is a console-based application built using C++, designed to help manage library operations efficiently. It allows librarians to add, delete, search, and issue books while keeping track of borrowers and returns. With a simple and interactive interface, this system streamlines book management and enhances library operations.',
    image: Project9Image,
    repoLink: 'https://github.com/UroojFatim/Library-Management-System',
  },
  {
    id: 10,
    title: 'Airline Reservation System – CEP Project in C++ (DSA & OOP) ✈️',
    description: 'The Airline Reservation System is a Comprehensive Evaluation Project (CEP) built using C++, integrating Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP) principles. This system allows users to book, cancel, and manage flight reservations efficiently while maintaining passenger records using optimized data structures.',
    image: Project10Image,
    repoLink: 'https://github.com/UroojFatim/CEP-Project',
  },   
];

const Projects = () => {
  return (
    <section id="portfolio" className="projects-section p-6 sm:p-10 lg:p-16 text-center my-10 lg:my-20"
  >
    <div className="mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lightTheme-text dark:text-darkTheme-text">
        Projects
      </h2>
      <span className="inline-block w-20 sm:w-28 h-1 bg-lightTheme-accent dark:bg-darkTheme-accent mt-4 mx-auto"></span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-lightTheme-bg dark:bg-darkTheme-bg border-2 border-lightTheme-accent dark:border-darkTheme-accent shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full  object-fit"
          />
          <div className="p-5">
            <h3 className="lg:text-xl font-semibold text-lightTheme-text dark:text-darkTheme-text mb-2">
              {project.title}
            </h3>
            <p className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex justify-center space-x-4">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-lightTheme-accent dark:border-darkTheme-accent hover:dark:bg-transparent hover:dark:text-white bg-lightTheme-accent dark:bg-darkTheme-accent text-white px-3 py-1 md:px-6 md:py-2 rounded-full hover:opacity-80 transition hover:bg-transparent hover:text-black text-sm lg:text-base"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-lightTheme-accent dark:border-darkTheme-accent px-3 py-1 md:px-6 md:py-2 rounded-full transition hover:text-white text-center hover:bg-lightTheme-accent dark:hover:bg-darkTheme-accent text-sm lg:text-base"
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
