import React from 'react';
import {
    FaLaptopCode, FaServer, FaDatabase, FaBrain, FaShieldAlt, FaTools,
    FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker,
} from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si';
import ScrollReveal from './ScrollReveal';

const groups = [
    { title: 'Frontend', icon: FaLaptopCode, level: 92, items: ['React.js / Next.js', 'JavaScript / TypeScript', 'Tailwind CSS', 'Vite'] },
    { title: 'Backend', icon: FaServer, level: 88, items: ['Node.js / Express.js', 'FastAPI', 'REST APIs'] },
    { title: 'Database', icon: FaDatabase, level: 82, items: ['MongoDB', 'PostgreSQL', 'SQL'] },
    { title: 'AI / ML', icon: FaBrain, level: 76, items: ['LangChain / LangGraph', 'RAG Systems', 'Streamlit', 'OpenCV'] },
    { title: 'Auth', icon: FaShieldAlt, level: 85, items: ['JWT', 'Role-Based Access Control'] },
    { title: 'DevOps', icon: FaTools, level: 80, items: ['Git / GitHub', 'Vercel', 'Docker', 'Twilio'] },
];

const marqueeItems = [
    { icon: FaReact, label: 'React.js' },
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: FaNodeJs, label: 'Node.js' },
    { icon: SiExpress, label: 'Express.js' },
    { icon: SiMongodb, label: 'MongoDB' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiTailwindcss, label: 'Tailwind CSS' },
    { icon: FaPython, label: 'Python' },
    { icon: FaDocker, label: 'Docker' },
    { icon: FaGitAlt, label: 'Git' },
];

const MarqueeRow = ({ ariaHidden = false }) => (
    <div className="marquee-content" aria-hidden={ariaHidden || undefined}>
        {marqueeItems.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-4 text-xl text-on-surface-variant/50 sm:text-2xl">
                <Icon className="text-primary" /> {label}
            </span>
        ))}
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-24 mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
            <div className="mb-10 text-center sm:mb-16">
                <span className="section-eyebrow text-tertiary">Expertise</span>
                <h2 className="section-heading">Technical Skillset</h2>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-16 sm:grid-cols-2 lg:grid-cols-3">
                {groups.map((g, idx) => (
                    <ScrollReveal key={idx} delay={idx * 60}>
                        <div className="glass-card hover-glow group h-full rounded-[2.5rem] p-8 sm:p-10">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-container/25 text-primary transition-transform group-hover:rotate-12 sm:mb-8">
                                <g.icon className="text-3xl" />
                            </div>
                            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-on-surface sm:mb-6 sm:text-sm">
                                {g.title}
                            </h4>
                            <ul className="space-y-3 text-sm font-medium text-on-surface-variant">
                                {g.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 sm:mt-8">
                                <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                                    <span>Proficiency</span>
                                    <span className="text-primary">{g.level}%</span>
                                </div>
                                <div className="skill-bar-track">
                                    <div className="skill-bar-fill" style={{ '--bar-width': `${g.level}%` }} />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            <div className="glass-card marquee rounded-3xl border-y border-outline-variant/20 py-10 sm:py-12">
                <MarqueeRow />
                <MarqueeRow ariaHidden />
            </div>
        </section>
    );
};

export default Skills;
