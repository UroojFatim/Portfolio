import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const StatCard = ({ label, value, suffix = '', decimals = 0, trigger }) => {
    const [count, setCount] = useState(0);
    const rafRef = useRef();

    useEffect(() => {
        if (!trigger) return;
        const start = performance.now();
        const duration = 1200;
        const from = 0;
        const to = value;

        const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const current = from + (to - from) * progress;
            setCount(Number(current.toFixed(decimals)));
            if (progress < 1) rafRef.current = requestAnimationFrame(step);
        };
        rafRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafRef.current);
    }, [trigger]);

    return (
        <div className="glass-card hover-glow w-full p-6">
            <div className="text-3xl font-bold text-primary">
                {count}{suffix}
            </div>
            <div className="mt-2 text-sm text-on-surface-variant">{label}</div>
        </div>
    );
};

const About = () => {
    const statsRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) setVisible(true);
            });
        }, { threshold: 0.3 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="about" className="scroll-mt-24 mx-auto max-w-container-max px-4 py-16 sm:px-6 sm:py-20 md:px-10">
            <div className="mb-10">
                <span className="section-eyebrow text-primary">Get to know me</span>
                <h2 className="section-heading">About</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Left: Stat cards */}
                <div className="min-w-0 space-y-4" ref={statsRef}>
                    <ScrollReveal delay={0}>
                        <StatCard label="Projects Shipped" value={5} suffix="+" trigger={visible} />
                    </ScrollReveal>
                    <ScrollReveal delay={80}>
                        <StatCard label="Users Served" value={250} suffix="+" trigger={visible} />
                    </ScrollReveal>
                    <ScrollReveal delay={160}>
                        <StatCard label="Years Experience" value={2} suffix="+" trigger={visible} />
                    </ScrollReveal>
                    <ScrollReveal delay={240}>
                        <StatCard label="CGPA" value={3.48} decimals={2} trigger={visible} />
                    </ScrollReveal>
                </div>

                {/* Right: Bio + Education */}
                <div className="min-w-0 space-y-6">
                    <ScrollReveal delay={80}>
                        <div className="glass-card hover-glow w-full min-w-0 p-6">
                            <h3 className="text-2xl font-bold font-display text-on-surface">Biography</h3>
                            <p className="mt-3 break-words text-on-surface-variant">
                                Full Stack Developer with 2+ years of production experience building scalable SaaS platforms, AI-driven applications, and e-commerce systems. Expertise in MERN stack, Next.js, TypeScript, and cloud-integrated architectures. Delivered 5+ live products serving 250+ active users across US and UAE clients.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={160}>
                        <div className="glass-card hover-glow w-full min-w-0 p-6">
                            <h3 className="text-2xl font-bold font-display text-on-surface">Education</h3>
                            <div className="mt-4">
                                <div className="mb-4 min-w-0">
                                    <div className="break-words font-semibold text-on-surface">B.E. Software Engineering — MAJU</div>
                                    <div className="text-sm text-on-surface-variant">(2022–2026) | CGPA: 3.48</div>
                                </div>

                                <div className="mb-4 min-w-0">
                                    <div className="break-words font-semibold text-on-surface">FSC Pre-Engineering — Govt. Degree Girls Science College, Karachi</div>
                                    <div className="text-sm text-on-surface-variant">(2022)</div>
                                </div>

                                <div className="min-w-0">
                                    <div className="break-words font-semibold text-on-surface">Matric Science — M.E Model School</div>
                                    <div className="text-sm text-on-surface-variant">(2020)</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
