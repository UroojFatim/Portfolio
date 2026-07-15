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
            duration: 'Sep 2022 – July 2026 | CGPA: 3.48',
            location: 'Karachi, Pakistan',
            badge: 'Currently Enrolled',
            badgeClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500 dark:text-emerald-300',
        },
        {
            icon: FaSchool,
            degree: 'FSC — Pre-Engineering',
            institution: 'Govt. Degree Girls Science, Arts & Commerce College, Baldia Town',
            duration: 'Completed: June 2022',
            location: 'Karachi, Pakistan',
            badge: 'Completed',
            badgeClass: 'border-primary/30 bg-primary-container/15 text-on-surface',
        },
        {
            icon: FaBook,
            degree: 'Matriculation — Science',
            institution: 'M.E Model School',
            duration: 'Completed: April 2020',
            location: 'Karachi, Pakistan',
            badge: 'Completed',
            badgeClass: 'border-primary/30 bg-primary-container/15 text-on-surface',
        }
    ];

    return (
        <section id="education" className="mx-auto max-w-container-max px-6 py-16 sm:py-20">
            <div className="mb-10">
                <span className="section-eyebrow">Academics</span>
                <h2 className="section-heading">Education</h2>
            </div>

            <div className="relative space-y-6 md:pl-10">
                <div className="absolute bottom-2 left-4 top-2 hidden border-l-2 border-dotted border-primary/50 md:block" aria-hidden="true" />
                {educationData.map((edu, index) => (
                    <ScrollReveal key={index} delay={index * 80} threshold={0.12}>
                        <div className="relative">
                            <span className="absolute left-[-2.35rem] top-7 hidden h-4 w-4 rounded-full bg-primary shadow-[0_0_0_6px_rgb(var(--color-primary-container)/0.35)] md:block" aria-hidden="true" />
                            <article className="glass-card hover-glow rounded-2xl border-l-4 border-primary p-6">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary-container/15 text-2xl text-primary">
                                            <edu.icon />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-display text-on-surface">{edu.degree}</h3>
                                            <p className="mt-1 text-lg font-semibold text-primary">{edu.institution}</p>
                                            <p className="mt-2 text-sm text-on-surface-variant">{edu.duration}</p>
                                            <p className="text-sm text-on-surface-variant">{edu.location}</p>
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
