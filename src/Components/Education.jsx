import React from 'react';
import { FaUniversity, FaSchool, FaBook } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Education = () => {
    const educationData = [
        {
            icon: FaUniversity,
            degree: 'B.E. Software Engineering',
            institution: 'Mohammad Ali Jinnah University (MAJU)',
            duration: 'Sep 2022 – July 2026 | CGPA: 3.48',
            location: 'Karachi, Pakistan',
            badge: 'Currently Enrolled',
            badgeClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200',
        },
        {
            icon: FaSchool,
            degree: 'FSC — Pre-Engineering',
            institution: 'Govt. Degree Girls Science, Arts & Commerce College, Baldia Town',
            duration: 'Completed: June 2022',
            location: 'Karachi, Pakistan',
            badge: 'Completed',
            badgeClass: 'border-blue-500/30 bg-blue-500/10 text-blue-100',
        },
        {
            icon: FaBook,
            degree: 'Matriculation — Science',
            institution: 'M.E Model School',
            duration: 'Completed: April 2020',
            location: 'Karachi, Pakistan',
            badge: 'Completed',
            badgeClass: 'border-blue-500/30 bg-blue-500/10 text-blue-100',
        }
    ];

    return (
        <section id="education" className="py-16 px-6 max-w-6xl mx-auto">
            <div className="mb-8">
                <h2 className="section-heading">Education</h2>
            </div>

            <div className="relative space-y-6 md:pl-10">
                <div className="absolute left-4 top-2 bottom-2 hidden border-l-2 border-dotted border-blue-500/70 md:block" aria-hidden="true" />
                {educationData.map((edu, index) => (
                    <ScrollReveal key={index} delay={index * 80} threshold={0.12}>
                        <div className="relative">
                            <span className="absolute left-[-2.35rem] top-7 hidden h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(37,99,235,0.12)] md:block" aria-hidden="true" />
                            <article className="glass-card hover-glow border-l-4 border-blue-500 rounded-2xl p-6">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-200">
                                            <edu.icon />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                                            <p className="mt-1 text-lg font-semibold text-blue-300">{edu.institution}</p>
                                            <p className="mt-2 text-sm text-gray-400">{edu.duration}</p>
                                            <p className="text-sm text-gray-400">{edu.location}</p>
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
