import React from 'react';
import { FaUniversity, FaSchool, FaBook } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

// Note: not currently rendered in Home.jsx — education is shown compactly inside
// About.jsx instead. Kept here (and kept on-brand) in case a dedicated section
// is wanted later.
const Education = () => {
    const educationData = [
        {
            icon: FaUniversity,
            degree: 'B.E. Software Engineering',
            institution: 'Mohammad Ali Jinnah University (MAJU)',
            duration: 'Sep 2022 – July 2026 | CGPA: 3.5',
            location: 'Karachi, Pakistan',
            badge: 'Currently Enrolled',
            badgeClass: 'border-secondary/40 text-secondary',
        },
        {
            icon: FaSchool,
            degree: 'FSC — Pre-Engineering',
            institution: 'Govt. Degree Girls Science, Arts & Commerce College, Baldia Town',
            duration: 'Completed: June 2022',
            location: 'Karachi, Pakistan',
            badge: 'Completed',
            badgeClass: 'border-outline-variant text-on-surface-variant',
        },
        {
            icon: FaBook,
            degree: 'Matriculation — Science',
            institution: 'M.E Model School',
            duration: 'Completed: April 2020',
            location: 'Karachi, Pakistan',
            badge: 'Completed',
            badgeClass: 'border-outline-variant text-on-surface-variant',
        }
    ];

    return (
        <section id="education" className="mx-auto max-w-container-max px-6 py-16 sm:py-20">
            <div className="mb-10">
                <span className="section-eyebrow text-primary">Academics</span>
                <h2 className="section-heading">Education</h2>
            </div>

            <div className="relative space-y-6 md:pl-10">
                <div className="absolute bottom-2 left-4 top-2 hidden border-l border-dashed border-outline-variant md:block" aria-hidden="true" />
                {educationData.map((edu, index) => (
                    <ScrollReveal key={index} delay={index * 80} threshold={0.12}>
                        <div className="relative">
                            <span className="absolute left-[-2.35rem] top-7 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" aria-hidden="true" />
                            <article className="glass-card rounded-md p-6">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-outline-variant text-2xl text-primary">
                                            <edu.icon />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-semibold text-on-surface">{edu.degree}</h3>
                                            <p className="mt-1 text-lg font-semibold text-primary">{edu.institution}</p>
                                            <p className="mt-2 font-mono text-xs text-on-surface-variant">{edu.duration}</p>
                                            <p className="font-mono text-xs text-on-surface-variant">{edu.location}</p>
                                        </div>
                                    </div>

                                    <span className={`inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold ${edu.badgeClass}`}>
                                        {edu.badge}
                                    </span>
                                </div>
                            </article>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Education;
