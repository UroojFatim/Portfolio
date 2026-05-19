import React, { useEffect, useState } from 'react';
import ProfileImage from '../assets/ProfileImage.jpeg';
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import CV from '../assets/CV.pdf';

const Hero = () => {
    const roles = [
        'Full Stack Developer',
        'MERN Stack Engineer',
        'AI App Builder',
        'SaaS Developer'
    ];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingSpeed = isDeleting ? 40 : 120;
        const current = index % roles.length;
        const fullText = roles[current];

        const timer = setTimeout(() => {
            setText(prev => isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1));
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 900);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setIndex(prev => prev + 1);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    return (
        <section id="home" className="relative hero-section px-5 sm:px-8 py-10 sm:py-14 text-center flex flex-col lg:flex-row justify-around items-center my-12 sm:my-16 lg:my-20 gap-8 lg:gap-12">
            <div className="hero-mesh float-particles" aria-hidden="true"></div>
            {/* Profile Image Section */}
            <div className="animate-slideInUp lg:animate-none transition duration-1000 ease-in-out">
                <img
                    src={ProfileImage}
                    alt="Urooj Fatima"
                    className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-white dark:shadow-lg dark:shadow-darkTheme-accent shadow-lightTheme-accent shadow-md"
                />
            </div>

            {/* Text and Buttons Section */}
            <div className='flex flex-col gap-3 text-center lg:text-left z-10 w-full lg:w-1/2 max-w-3xl'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Urooj Fatima
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-blue-200 mt-2 leading-snug">
                    <span className="text-white mr-2">{text}</span>
                    <span className="blinking-cursor text-blue-400">|</span>
                </p>

                <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl text-center lg:text-left leading-6 sm:leading-7">
                    Full Stack Developer with 1+ year of production experience building scalable SaaS platforms, AI-driven applications, and e-commerce systems. Expertise in MERN stack, Next.js, TypeScript, and cloud-integrated architectures. Delivered 5+ live products serving 250+ active users across US and UAE clients.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mt-6">
                    <a href={CV} target="_blank" rel="noreferrer" className="min-h-11 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition inline-flex items-center justify-center">
                        Download Resume
                    </a>
                    <Link to="projects" smooth={true} duration={600} className="inline-block">
                        <button className="min-h-11 px-5 py-3 rounded-full border border-blue-500 text-blue-200 hover:bg-blue-500/10 transition inline-flex items-center justify-center w-full sm:w-auto">
                            View Projects
                        </button>
                    </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-2xl text-gray-300">
                    <a href="https://github.com/UroojFatim" target="_blank" rel="noreferrer" className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl bg-white/5 text-gray-200 hover:text-white">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/uroojfatima-588ba2296" target="_blank" rel="noreferrer" className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl bg-white/5 text-blue-300 hover:text-white">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~018b2cb9ef43a154ba?mp_source=share" target="_blank" rel="noreferrer" className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl bg-white/5 text-green-300 hover:text-white">
                        <SiUpwork />
                    </a>
                    <a href="https://www.fiverr.com/yourprofile" target="_blank" rel="noreferrer" className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl bg-white/5 text-green-200 hover:text-white">
                        <SiFiverr />
                    </a>
                    <a href="mailto:urooj.fatim2004@gmail.com" className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl bg-white/5 text-pink-200 hover:text-white">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
