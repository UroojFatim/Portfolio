import React from 'react';
import {
    FaLaptopCode, FaServer, FaDatabase, FaBrain, FaShieldAlt, FaTools,
    FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker,
} from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si';
import ScrollReveal from './ScrollReveal';

const groups = [
    { title: 'Frontend', icon: FaLaptopCode, items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { title: 'Backend', icon: FaServer, items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
    { title: 'Database', icon: FaDatabase, items: ['MongoDB', 'PostgreSQL', 'SQL'] },
    { title: 'AI/ML', icon: FaBrain, items: ['LangChain', 'LangGraph', 'RAG Systems', 'Streamlit', 'OpenCV'] },
    { title: 'Auth', icon: FaShieldAlt, items: ['JWT', 'Role-Based Access Control (RBAC)'] },
    { title: 'DevOps', icon: FaTools, items: ['Git', 'GitHub', 'Vercel', 'Docker', 'Twilio'] },
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
            <span key={label} className="flex items-center gap-3 text-xl text-on-surface-variant/60">
                <Icon className="text-primary" /> {label}
            </span>
        ))}
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="mx-auto max-w-container-max px-6 py-16 sm:py-20">
            <div className="mb-10">
                <span className="section-eyebrow">Expertise</span>
                <h2 className="section-heading">Skills</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {groups.map((g, idx) => (
                    <ScrollReveal key={idx} delay={idx * 60}>
                        <div className="glass-card hover-glow group h-full p-6">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/25 text-primary transition-transform group-hover:rotate-12">
                                <g.icon className="text-2xl" />
                            </div>
                            <div className="skill-group-heading">{g.title}</div>
                            <div className="skill-badges mt-3">
                                {g.items.map((item, i) => (
                                    <span key={i} className="skill-badge">{item}</span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            <div className="glass-card marquee mt-10 rounded-3xl py-8">
                <MarqueeRow />
                <MarqueeRow ariaHidden />
            </div>
        </section>
    );
};

export default Skills;
