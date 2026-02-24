import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
    '100% Custom Design',
    'Affordable Pricing',
    'Fast Delivery',
    'Mobile-Friendly Websites',
    'SEO Optimized',
    'Ongoing Premium Support'
];

const WhyChooseUs = () => {
    const sectionRef = useRef();
    const leftRef = useRef();
    const rightRef = useRef();
    const itemsRef = useRef([]);
    const btnRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 78%', once: true };

            gsap.fromTo(leftRef.current.children,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out', scrollTrigger: st }
            );

            gsap.fromTo(itemsRef.current,
                { opacity: 0, x: 40 },
                {
                    opacity: 1, x: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: rightRef.current, start: 'top 82%', once: true }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 bg-[#080808] text-white border-t border-white/10 relative overflow-hidden">
            <div className="absolute right-6 top-10 text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                04
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="md:flex md:items-start md:justify-between max-w-6xl mx-auto gap-20">
                    {/* Left */}
                    <div ref={leftRef} className="md:w-1/2 mb-14 md:mb-0">
                        <span className="section-label" style={{ opacity: 0 }}>Why Us</span>
                        <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-4 leading-[0.85]" style={{ opacity: 0 }}>
                            Why Choose<br /><span className="text-white/25">WebNginx?</span>
                        </h2>
                        <p className="text-white/65 text-base leading-relaxed mb-8 max-w-sm" style={{ opacity: 0 }}>
                            We don't just build websites; we build digital experiences that convert.
                            Quality and transparency make us the perfect partner for your digital journey.
                        </p>
                        <a
                            ref={btnRef}
                            href="#projects"
                            className="inline-block px-8 py-3 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-all duration-300 rounded-full"
                            style={{ opacity: 0 }}
                        >
                            Let's Build Together
                        </a>
                    </div>

                    {/* Right: feature grid */}
                    <div ref={rightRef} className="md:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    ref={el => (itemsRef.current[i] = el)}
                                    className="flex items-center gap-3 p-6 bg-[#080808] hover:bg-white/[0.04] transition-colors duration-300 group"
                                    style={{ opacity: 0 }}
                                >
                                    <CheckCircle className="text-white/50 flex-shrink-0 group-hover:text-white transition-colors" size={16} />
                                    <span className="text-white/80 text-sm font-medium">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
