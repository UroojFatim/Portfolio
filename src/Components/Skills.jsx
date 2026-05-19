import React from 'react';
import ScrollReveal from './ScrollReveal';

const groups = [
    {
        title: 'Frontend',
        items: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
        title: 'Backend',
        items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs']
    },
    {
        title: 'Database',
        items: ['MongoDB', 'PostgreSQL', 'SQL']
    },
    {
        title: 'AI/ML',
        items: ['LangChain', 'LangGraph', 'RAG Systems', 'Streamlit', 'OpenCV']
    },
    {
        title: 'Auth',
        items: ['JWT', 'Role-Based Access Control (RBAC)']
    },
    {
        title: 'DevOps',
        items: ['Git', 'GitHub', 'Vercel', 'Docker', 'Twilio']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
            <div className="mb-8">
                <h2 className="section-heading">Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groups.map((g, idx) => (
                    <ScrollReveal key={idx} delay={idx * 60}>
                        <div className="glass-card hover-glow p-5 h-full">
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
        </section>
    );
};

export default Skills;
