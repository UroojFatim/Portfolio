import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const StatCell = ({ label, value, suffix = '', decimals = 0, trigger }) => {
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
        <div className="min-w-0 px-1 py-6 text-center sm:px-6 sm:py-8 sm:text-left">
            <div className="font-display text-4xl font-semibold text-primary sm:text-5xl">
                {count}{suffix}
            </div>
            <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant sm:text-xs">{label}</div>
        </div>
    );
};

const EDUCATION = [
    { years: '2022 – 2026', school: 'B.E. Software Engineering — MAJU', note: 'CGPA: 3.5' },
    { years: '2022', school: 'FSC Pre-Engineering — Govt. Degree Girls Science College, Karachi', note: '' },
    { years: '2020', school: 'Matric Science — M.E Model School', note: '' },
];

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
            <div className="mb-10 md:mb-16">
                <span className="section-eyebrow text-primary">Get to know me</span>
                <h2 className="section-heading">About</h2>
            </div>

            {/* Editorial lede + bio — asymmetric columns instead of a bordered card */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
                <ScrollReveal delay={0} className="min-w-0 lg:col-span-5">
                    <p className="font-display text-3xl italic leading-snug text-on-surface sm:text-4xl">
                        Building software that <span className="text-primary">ships</span> — not just demos.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={80} className="min-w-0 lg:col-span-7">
                    <p className="break-words text-base leading-8 text-on-surface-variant sm:text-lg">
                        Full Stack Developer with 2+ years of production experience building scalable SaaS platforms, AI-driven applications, and e-commerce systems. Expertise in MERN stack, Next.js, TypeScript, Power Automate, and cloud-integrated architectures. Delivered 5+ live products serving 250+ active users across US and UAE clients.
                    </p>
                </ScrollReveal>
            </div>

            {/* Stat strip — one continuous ledger, not four separate boxes */}
            <div ref={statsRef} className="mt-14 grid grid-cols-2 gap-x-4 gap-y-2 border-y border-outline-variant sm:grid-cols-4 sm:divide-x sm:divide-outline-variant">
                <ScrollReveal delay={0}>
                    <StatCell label="Projects Shipped" value={5} suffix="+" trigger={visible} />
                </ScrollReveal>
                <ScrollReveal delay={80}>
                    <StatCell label="Users Served" value={250} suffix="+" trigger={visible} />
                </ScrollReveal>
                <ScrollReveal delay={160}>
                    <StatCell label="Years Experience" value={2} suffix="+" trigger={visible} />
                </ScrollReveal>
                <ScrollReveal delay={240}>
                    <StatCell label="CGPA" value={3.5} decimals={2} trigger={visible} />
                </ScrollReveal>
            </div>

            {/* Education — timeline spine, not a matching bordered card */}
            <div className="mt-14 md:mt-20">
                <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                    <span className="text-primary">//</span> Education
                </h3>
                <div className="border-l border-outline-variant pl-7">
                    {EDUCATION.map((item, i) => (
                        <ScrollReveal key={item.school} delay={i * 80}>
                            <div className="relative min-w-0 pb-9 last:pb-0">
                                <span className="absolute -left-8 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                                <div className="font-mono text-xs text-on-surface-variant">{item.years}</div>
                                <div className="mt-1.5 break-words font-display text-lg font-semibold text-on-surface sm:text-xl">
                                    {item.school}
                                </div>
                                {item.note && (
                                    <div className="mt-1 font-mono text-xs text-primary">{item.note}</div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
