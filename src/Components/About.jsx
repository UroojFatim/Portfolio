import React from 'react';

const About = () => {
    const skills = [
        { name: 'React', level: '70%', color: 'bg-cyan-400' },
        { name: 'Next.js', level: '60%', color: 'bg-purple-500' },
        { name: 'Mongodb', level: '75%', color: 'bg-lime-500' },
        { name: 'Express', level: '50%', color: 'bg-rose-700' },
        { name: 'Node.js', level: '50%', color: 'bg-amber-800' },
        { name: 'SQL', level: '75%', color: 'bg-orange-400' },
        { name: 'JavaScript', level: '80%', color: 'bg-yellow-400' },
        { name: 'Python', level: '71%', color: 'bg-green-500' },
        { name: 'WordPress', level: '64%', color: 'bg-pink-400' },
        { name: 'HTML, CSS, (Tailwind CSS)', level: '95%', color: 'bg-blue-600' },
    ];

    return (
        <section className="about-section p-8 text-center my-20 " id="about">
            <h2 className="text-5xl font-bold text-lightTheme-text dark:text-darkTheme-text mb-4">About me</h2>
            <div className="flex flex-col md:flex-row justify-around items-start gap-12">
                {/* Left section: Bio */}
                <div className="md:w-[35%] text-left animate-fadeIn">
                    <h3 className="text-3xl font-semibold">
                       It's <span className=" text-lightTheme-accent dark:text-darkTheme-accent mb-6">Urooj Fatima</span>
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    As a dynamic Software Engineering student specializing in Full Stack Development, I thrive on learning and mastering a diverse array of technologies. 
                        In just a year, I've delved into HTML, CSS, JavaScript, WordPress, Next.js, Tailwind CSS, Shopify, PHP, MySQL, and beyond. My insatiable curiosity 
                        and dedication have propelled me to not only acquire technical expertise but also pursue additional soft skills and project management courses.
                        Driven by a passion for innovation and continuous growth, I’ve already brought to life three e-commerce websites and a job portal.
                    
                    </p>
                    <button className="border-2 border-lightTheme-accent dark:border-darkTheme-accent hover:dark:bg-transparent hover:dark:text-white  bg-lightTheme-accent dark:bg-darkTheme-accent text-white py-2 px-20 rounded-full hover:opacity-80 transition hover:bg-transparent hover:text-black">
                        ABOUT ME
                    </button>
                </div>

                {/* Right section: Skills */}
                <div className="md:w-[60%] animate-slideInUp">
                    <h3 className="text-3xl font-semibold text-lightTheme-text dark:text-darkTheme-text mb-6">SKILLS</h3>
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-4 flex justify-between">
                                <p className="w-[10%]  font-semibold text-lightTheme-text dark:text-darkTheme-text mb-2">{skill.name}</p>
                                <div className="w-[80%] h-4 bg-gray-300 rounded-full">
                                    <div
                                        className={`${skill.color} h-full rounded-full`}
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
