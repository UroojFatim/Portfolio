import React from 'react';
import wordpressIcon from '../assets/skills/WordPress.png';
import reactIcon from '../assets/skills/React.png';
import nextjsIcon from '../assets/skills/Next.PNG';
import nodejsIcon from '../assets/skills/Node.png';
import mongoIcon from '../assets/skills/MongoDb.png';
import jsIcon from '../assets/skills/Js.png';
import tailwindIcon from '../assets/skills/Tailwind css.PNG';
import gitIcon from '../assets/skills/Git.png';
import pythonIcon from '../assets/skills/Python.png';
import sqlIcon from '../assets/skills/SQL.png';
import htmlIcon from '../assets/skills/HTML.png';
import cssIcon from '../assets/skills/Css.png';
import cppIcon from '../assets/skills/C++.png';
import DSAIcon from '../assets/skills/DSA.png';
import Express from '../assets/skills/Express.png';
import OOPIcon from '../assets/skills/OOP.png';
import ProblemSolving from '../assets/skills/Soft Skills/Problem Solving.png';

const Skills = () => {
    // Professional skillset icons
    const professionalSkills = [
        { name: 'JavaScript', icon: jsIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Node.js', icon: nodejsIcon },
        { name: 'Express.js', icon: Express },
        { name: 'MongoDB', icon: mongoIcon },
        { name: 'Next.js', icon: nextjsIcon },
        { name: 'Tailwind CSS', icon: tailwindIcon },
        { name: 'Git', icon: gitIcon },
        { name: 'SQL Server', icon: sqlIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'C++', icon: cppIcon },
        { name: 'DSA', icon: DSAIcon },
        { name: 'OOP', icon: OOPIcon },
        { name: 'WordPress', icon: wordpressIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon }
    ];

    // Soft skillset icons (use any soft skill images that represent communication, leadership, etc.)
    const softSkills = [
        { name: 'Communication', icon: ProblemSolving },
        { name: 'Leadership', icon: '../assets/skills/leadership.png' },
        { name: 'Time Management', icon: '../assets/skills/time.png' },
        { name: 'Problem Solving', icon: '../assets/skills/problem-solving.png' },
        { name: 'Creativity', icon: '../assets/skills/creativity.png' },
    ];

    return (
        <section id="skills" className="skills-section py-16">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-lightTheme-text dark:text-darkTheme-text">
                    Skills
                </h2>
                <span className="inline-block w-24 h-1 bg-lightTheme-accent dark:bg-darkTheme-accent mt-4"></span>
            </div>

            {/* Professional Skillset */}
            <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    Professional skillset
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
                    {professionalSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative group flex justify-center items-center p-4 border-[2.5px] dark:border-[2.5px] border-lightTheme-accent dark:border-darkTheme-accent rounded-lg shadow-xl dark:bg-white dark:shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-none"
                        >
                            {/* Skill Icon */}
                            <img src={skill.icon} alt={skill.name} className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110" />

                            {/* Background Overlay with Skill Name */}
                            <div className="absolute inset-0 bg-lightTheme-accent dark:bg-darkTheme-accent opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-95 transition-all duration-500 ease-in-out"></div>

                            {/* Sliding Text (Skill Name) */}
                            <div className="absolute bottom-0 w-full h-full flex justify-center items-center text-white font-semibold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-900 transform translate-y-full group-hover:translate-y-0">
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Soft Skillset */}
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    Soft skillset
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
                    {softSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center p-4 border-2 border-orange-300 rounded-lg shadow-md dark:shadow-lg hover:shadow-none transition-transform duration-300 hover:scale-105"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-20 h-20 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
