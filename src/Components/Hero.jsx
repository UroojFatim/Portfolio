import React, { useEffect, useState } from 'react';
import ProfileImage from '../assets/ProfileImage.jpeg';
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaReact } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import CV from '../assets/CV.pdf';
import TerminalCard from './TerminalCard';

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

    const stats = [
        { label: 'Projects', value: '5+' },
        { label: 'Users', value: '250+' },
        { label: 'Years Exp', value: '2+' },
        { label: 'CGPA', value: '3.48' },
    ];

    return (
        <section id="home" className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:py-24">
            <div className="mx-auto grid max-w-container-max items-center gap-14 lg:grid-cols-2 lg:gap-16">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <span className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-on-surface-variant">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        Available for Opportunities
                    </span>

                    <h1 className="text-display-xl-mobile font-display leading-tight text-on-surface md:text-display-xl">
                        Urooj Fatima
                    </h1>

                    <h2 className="mt-3 min-h-[1.4em] text-headline-md font-display text-gradient sm:text-headline-lg">
                        <span>{text}</span>
                        <span className="blinking-cursor text-primary">|</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-on-surface-variant sm:text-base lg:mx-0">
                        Full Stack Developer with 2+ years of production experience building scalable SaaS platforms, AI-driven applications, and e-commerce systems. Expertise in MERN stack, Next.js, TypeScript, and cloud-integrated architectures. Delivered 5+ live products serving 250+ active users across US and UAE clients.
                    </p>

                    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
                        <a
                            href={CV}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-6 py-3 font-bold text-on-primary shadow-glow transition hover:brightness-110"
                        >
                            Download Resume
                        </a>
                        <Link to="projects" smooth duration={600} className="inline-block">
                            <button className="glass-card min-h-11 w-full rounded-xl px-6 py-3 font-bold text-on-surface transition hover:border-primary/40 sm:w-auto">
                                View Projects
                            </button>
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                        {[
                            { href: 'https://github.com/UroojFatim', icon: FaGithub, label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/uroojfatima-588ba2296', icon: FaLinkedin, label: 'LinkedIn' },
                            { href: 'https://www.upwork.com/freelancers/~018b2cb9ef43a154ba?mp_source=share', icon: SiUpwork, label: 'Upwork' },
                            { href: 'mailto:urooj.fatim2004@gmail.com', icon: FaEnvelope, label: 'Email' },
                        ].map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                                aria-label={label}
                                className="glass-card flex min-h-11 min-w-11 items-center justify-center rounded-xl text-lg text-on-surface-variant transition hover:text-primary"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="glass-card hover-glow rounded-2xl p-4 text-center">
                                <div className="text-headline-md font-bold text-primary">{stat.value}</div>
                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-on-surface-variant">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile/tablet: code widget shown inline since the profile visual is desktop-only */}
                    <div className="mt-8 lg:hidden">
                        <TerminalCard className="mx-auto max-w-md" />
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mx-auto hidden max-w-md lg:block">
                    <div className="absolute inset-0 rounded-full bg-primary/25 blur-[100px]" aria-hidden="true" />
                    <div className="glass-card relative flex aspect-square items-center justify-center overflow-hidden rounded-[2.5rem] p-8">
                        <div className="hero-mesh float-particles" aria-hidden="true" />
                        <img
                            src={ProfileImage}
                            alt="Urooj Fatima"
                            className="relative z-10 h-full w-full rounded-3xl border-4 border-surface object-cover shadow-xl"
                        />

                        <div className="glass-card floating absolute left-6 top-6 z-20 rounded-2xl p-4 shadow-xl" style={{ animationDelay: '0.2s' }}>
                            <FaCode className="text-3xl text-primary" />
                        </div>
                        <div className="glass-card floating absolute bottom-14 right-4 z-20 rounded-2xl p-4 shadow-xl" style={{ animationDelay: '0.8s' }}>
                            <FaDatabase className="text-3xl text-secondary" />
                        </div>
                        <div className="glass-card floating absolute right-2 top-1/2 z-20 rounded-2xl p-4 shadow-xl" style={{ animationDelay: '0.5s' }}>
                            <FaReact className="text-3xl text-tertiary" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <TerminalCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
