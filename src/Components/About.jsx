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
        <div className="glass-card p-6 hover-glow transition w-full">
            <div className="text-3xl font-bold text-white">
                {count}{suffix}
            </div>
            <div className="text-sm text-gray-300 mt-2">{label}</div>
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
        <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
            <div className="mb-8">
                <h2 className="section-heading">About</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Stat cards */}
                <div className="space-y-4" ref={statsRef}>
                    <ScrollReveal delay={0}>
                        <StatCard label="Projects Shipped" value={5} suffix="+" trigger={visible} />
                    </ScrollReveal>
                    <ScrollReveal delay={80}>
                        <StatCard label="Users Served" value={250} suffix="+" trigger={visible} />
                    </ScrollReveal>
                    <ScrollReveal delay={160}>
                        <StatCard label="Years Experience" value={1} suffix="+" trigger={visible} />
                    </ScrollReveal>
                    <ScrollReveal delay={240}>
                        <StatCard label="CGPA" value={3.48} decimals={2} trigger={visible} />
                    </ScrollReveal>
                </div>

                {/* Right: Bio + Education */}
                <div className="space-y-6">
                    <ScrollReveal delay={80}>
                    <div className="glass-card hover-glow p-6">
                        <h3 className="text-2xl font-semibold text-white">Biography</h3>
                        <p className="mt-3 text-gray-300">
                            Full Stack Developer with 2+ year of production experience building scalable SaaS platforms, AI-driven applications, and e-commerce systems. Expertise in MERN stack, Next.js, TypeScript, and cloud-integrated architectures. Delivered 5+ live products serving 250+ active users across US and UAE clients.
                        </p>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal delay={160}>
                    <div className="glass-card hover-glow p-6">
                        <h3 className="text-2xl font-semibold text-white">Education</h3>
                        <div className="mt-4">
                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold">B.E. Software Engineering — MAJU</div>
                                        <div className="text-sm text-gray-300">(2022–2026) | CGPA: 3.48</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="font-semibold">FSC Pre-Engineering — Govt. Degree Girls Science College, Karachi</div>
                                <div className="text-sm text-gray-300">(2022)</div>
                            </div>

                            <div>
                                <div className="font-semibold">Matric Science — M.E Model School</div>
                                <div className="text-sm text-gray-300">(2020)</div>
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
