import React, { useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    { name: 'Ayan Anwar', role: 'Full Stack Developer', initial: 'A' },
    { name: 'Sahdat Rolli', role: 'AI/ML Engineer', initial: 'S' },
    { name: 'Vikash Kushwaha', role: 'Full Stack Developer', initial: 'V' }
];

const Team = () => {
    const sectionRef = useRef();
    const headerRef = useRef();
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current.children,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
                }
            );

            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1, y: 0, duration: 0.75, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: cardsRef.current[0], start: 'top 84%', once: true }
                }
            );

            // Hover: avatar scale bounce
            cardsRef.current.forEach(card => {
                if (!card) return;
                const avatar = card.querySelector('.team-avatar');
                card.addEventListener('mouseenter', () => gsap.to(avatar, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' }));
                card.addEventListener('mouseleave', () => gsap.to(avatar, { scale: 1, duration: 0.3, ease: 'power2.inOut' }));
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="team" className="py-16 bg-[#080808] text-white border-t border-white/10 relative overflow-hidden">
            <div className="absolute right-6 top-10 text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">07</div>

            <div className="container mx-auto px-6 relative z-10">
                <div ref={headerRef}>
                    <span className="section-label" style={{ opacity: 0 }}>The Team</span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-[0.85]" style={{ opacity: 0 }}>
                        Meet the<br /><span className="text-white/25">Minds</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                    {teamMembers.map((m, i) => (
                        <div
                            key={m.name}
                            ref={el => (cardsRef.current[i] = el)}
                            className="p-10 bg-[#080808] hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
                            style={{ opacity: 0 }}
                        >
                            {/* Avatar */}
                            <div className="team-avatar w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mb-6 group-hover:border-white/40 transition-colors text-xl font-black text-white/50 group-hover:text-white transition-colors">
                                {m.initial}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{m.name}</h3>
                            <p className="text-xs text-white/45 uppercase tracking-widest">{m.role}</p>
                            <div className="mt-6 w-6 h-px bg-white/20 group-hover:w-10 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
