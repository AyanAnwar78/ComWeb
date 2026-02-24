import React, { useRef, useEffect } from 'react';
import { MessageSquare, PenTool, Code2, Rocket, Search } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { icon: <MessageSquare size={20} />, title: 'Requirement Discussion', desc: 'We listen to your ideas, understand your goals, and outline the project scope clearly.' },
    { icon: <PenTool size={20} />, title: 'Planning & Design', desc: 'We create a detailed roadmap and visual prototypes that perfectly align with your brand.' },
    { icon: <Code2 size={20} />, title: 'Development', desc: 'Our developers build your site using the latest, cleaner and faster technologies.' },
    { icon: <Search size={20} />, title: 'Testing & Review', desc: 'We rigorously test for performance and bugs, ensuring everything works flawlessly.' },
    { icon: <Rocket size={20} />, title: 'Launch & Support', desc: 'We launch your site and provide ongoing support for sustained long-term success.' }
];

const Process = () => {
    const sectionRef = useRef();
    const headerRef = useRef();
    const stepsRef = useRef([]);
    const lineRef = useRef();

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

            // Progress line draw
            gsap.fromTo(lineRef.current,
                { scaleY: 0, transformOrigin: 'top' },
                {
                    scaleY: 1, duration: 1.5, ease: 'power2.inOut',
                    scrollTrigger: { trigger: lineRef.current, start: 'top 75%', once: true }
                }
            );

            // Steps stagger slide from left
            stepsRef.current.forEach((step, i) => {
                if (!step) return;
                gsap.fromTo(step,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
                        scrollTrigger: { trigger: step, start: 'top 85%', once: true },
                        delay: i * 0.08
                    }
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="process" className="py-16 bg-black text-white border-t border-white/10 relative overflow-hidden">
            <div className="absolute right-6 top-10 text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                03
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div ref={headerRef}>
                    <span className="section-label" style={{ opacity: 0 }}>How We Work</span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.85]" style={{ opacity: 0 }}>
                        Our<br /><span className="text-white/25">Process</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical progress line */}
                    <div
                        ref={lineRef}
                        className="absolute left-[2.4rem] top-6 bottom-6 w-px bg-white/10 hidden md:block"
                        style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
                    />

                    <div className="space-y-0">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                ref={el => (stepsRef.current[i] = el)}
                                className="flex items-start gap-8 py-8 border-b border-white/10 group hover:bg-white/[0.025] transition-colors duration-300 px-4 -mx-4 rounded-lg"
                                style={{ opacity: 0 }}
                            >
                                {/* Icon circle */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/50 group-hover:border-white/50 group-hover:text-white transition-all duration-300 bg-black">
                                    {step.icon}
                                </div>
                                <div className="flex-1 pt-2">
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Step 0{i + 1}</span>
                                        <h3 className="text-base md:text-lg font-bold text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                                {/* Hover arrow */}
                                <div className="flex-shrink-0 text-white/20 group-hover:text-white/60 transition-colors pt-3 text-xs">
                                    →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
