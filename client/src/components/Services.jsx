import React, { useRef, useEffect } from 'react';
import { Code, BarChart, Smartphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <Code size={28} />,
        title: 'Custom Website Development',
        desc: 'Tailor-made websites built from scratch. Every pixel crafted for your unique business needs.',
        num: '01',
    },
    {
        icon: <BarChart size={28} />,
        title: 'Business Websites',
        desc: 'Professional corporate websites that build trust, showcase your services, and convert visitors.',
        num: '02',
    },
    {
        icon: <Smartphone size={28} />,
        title: 'Portfolio & Personal Sites',
        desc: 'Showcase your work or personal brand with stunning visuals and smooth interactions.',
        num: '03',
    }
];

const Services = () => {
    const sectionRef = useRef();
    const headerRef = useRef();
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header
            gsap.timeline({
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
            })
                .fromTo(headerRef.current.children,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
                );

            // Cards stagger
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 70, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.8, stagger: 0.18, ease: 'power3.out',
                    scrollTrigger: { trigger: cardsRef.current[0], start: 'top 82%', once: true }
                }
            );

            // Hover: number pop-up
            cardsRef.current.forEach((card) => {
                if (!card) return;
                card.addEventListener('mouseenter', () =>
                    gsap.to(card, { y: -8, duration: 0.35, ease: 'power2.out' })
                );
                card.addEventListener('mouseleave', () =>
                    gsap.to(card, { y: 0, duration: 0.35, ease: 'power2.inOut' })
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="services" className="py-16 bg-[#080808] text-white border-t border-white/10 relative overflow-hidden">
            {/* Decorative bg number */}
            <div className="absolute right-6 top-10 text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                02
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div ref={headerRef}>
                    <span className="section-label" style={{ opacity: 0 }}>What We Do</span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.85]" style={{ opacity: 0 }}>
                        Our<br /><span className="text-white/25">Services</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            ref={el => (cardsRef.current[i] = el)}
                            className="relative p-10 bg-[#080808] transition-colors duration-300 group cursor-default"
                            style={{ opacity: 0 }}
                        >
                            {/* Large number watermark */}
                            <div className="absolute top-6 right-8 text-6xl font-black text-white/[0.05] leading-none select-none">{s.num}</div>

                            <div className="mb-7 text-white/50 group-hover:text-white transition-colors duration-300">
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 leading-snug">{s.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>

                            <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-white/35 group-hover:text-white transition-colors duration-300">
                                Learn More
                                <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
