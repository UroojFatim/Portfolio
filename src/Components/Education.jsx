import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa'; // Icon for the timeline milestone

const Education = () => {
    const educationData = [
        {
            institution: "Mohammad Ali Jinnah University",
            degree: "Under-Graduation",
            field: "BE-Software Engineering",
            cgpa: "CGPA: 3.75",
            description: "Currently in the 4th semester of BE in Software Engineering, actively absorbing a wealth of knowledge and skills, with a passion for continuous learning and growth in the dynamic field of software development.",
            yearRange: "2022-Continue"
        },
        {
            institution: "Baldia Degree for Girls",
            degree: "Intermediate",
            field: "Pre-Engineering",
            grade: "Grade: A+",
            description: "Successfully completed Intermediate in Pre-Engineering with outstanding performance, showcasing expertise in advanced mathematics and science disciplines essential for engineering studies.",
            yearRange: "2020-2022"
        },
        {
            institution: "M.E Model High School",
            degree: "Matriculation",
            field: "Science",
            grade: "Grade: A+",
            description: "Attained top honors in Science Matriculation, demonstrating mastery in core subjects such as Physics, Chemistry, and Biology, poised to excel in advanced academic endeavors.",
            yearRange: "2018-2020"
        }
    ];

    return (
        <section className="education-section py-16 px-1 md:px-5" id="education">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-lightTheme-text dark:text-darkTheme-text">
                    Education
                </h2>
                <span className="inline-block w-24 h-1 bg-lightTheme-accent dark:bg-darkTheme-accent mt-4"></span>
            </div>

            <div className="relative flex flex-col space-y-12">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className={`flex flex-col space-y-4 md:flex-row md:items-center justify-between md:space-x-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Timeline Icon */}
                        <div className="relative flex items-center">
                            <FaRegCalendarAlt className="text-3xl text-lightTheme-accent dark:text-darkTheme-accent md:absolute left-0 md:translate-x-0" />
                            <div className="h-full md:w-1 md:bg-gray-300 absolute top-10 bottom-10 left-4 md:left-8"></div>
                        </div>

                        {/* Timeline Content */}
                        <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg w-full md:w-2/3">
                            <h3 className="text-2xl font-semibold text-lightTheme-text dark:text-darkTheme-text">
                                {edu.institution}
                            </h3>
                            <p className="text-xl font-medium text-lightTheme-text dark:text-darkTheme-text mt-1">
                                {edu.degree}
                            </p>
                            <p className="text-lg text-gray-500 dark:text-gray-400">
                                {edu.field}
                            </p>
                            <p className="text-lg text-gray-500 dark:text-gray-400">
                                {edu.cgpa || edu.grade}
                            </p>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                {edu.description}
                            </p>
                        </div>

                        {/* Year */}
                        <div className="text-lg font-semibold text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
                            {edu.yearRange}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
