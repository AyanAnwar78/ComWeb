import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: '01', title: 'E-Commerce Platform', client: 'RetailCo', timeAgo: '2 weeks',
        clientMsg: 'We need a futuristic shopping experience with smooth animations and fast checkout.',
        teamReply: "Let's build it with React + Three.js. This one's going to be spectacular! 🚀",
        tags: ['React', 'Three.js', 'Node.js']
    },
    {
        id: '02', title: 'AI Travel Planning', client: 'TravelMind', timeAgo: '1 month',
        clientMsg: 'Build an AI-powered app that generates custom travel itineraries for users.',
        teamReply: 'Integrating GPT + Maps API. Buckle up, this trip planner will be legendary! 🗺️',
        tags: ['AI/ML', 'React', 'Python']
    },
    {
        id: '03', title: 'Event Management System', client: 'EventPro', timeAgo: '3 weeks',
        clientMsg: 'We handle 500+ events a year. We need a system that can keep up with us.',
        teamReply: "Real-time dashboards, ticketing & analytics. Let's scale this! 💯",
        tags: ['React', 'Socket.io', 'MongoDB']
    },
    {
        id: '04', title: 'Dental Clinic Website', client: 'SmileCare', timeAgo: '5 days',
        clientMsg: 'We want a premium website that makes patients excited about dentistry.',
        teamReply: "Clean, calm, premium design. Patients won't fear the dentist anymore! 😄",
        tags: ['Next.js', 'Tailwind', 'CMS']
    },
];

const ProjectsTree = () => {
    const sectionRef = useRef();
    const headingRef = useRef();
    const itemsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Heading — trigger as soon as heading enters viewport
            gsap.fromTo(headingRef.current.children,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: headingRef.current, start: 'top 90%', once: true }
                }
            );

            // Each project row
            itemsRef.current.forEach((item) => {
                if (!item) return;
                const clientBubble = item.querySelector('.bubble-client');
                const teamBubble = item.querySelector('.bubble-team');
                const titleEl = item.querySelector('.proj-title');
                const metaEl = item.querySelector('.proj-meta');
                const tagsEl = item.querySelector('.proj-tags');

                const tl = gsap.timeline({
                    scrollTrigger: { trigger: item, start: 'top 90%', once: true }
                });

                tl.fromTo(item, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' })
                    .fromTo(metaEl, { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.25')
                    .fromTo(titleEl, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
                    .fromTo(Array.from(tagsEl.children), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }, '-=0.25')
                    .fromTo(clientBubble, { opacity: 0, x: 40, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.15')
                    .fromTo(teamBubble, { opacity: 0, x: -40, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }, '+=0.1');
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="py-16 bg-black text-white border-t border-white/10 relative overflow-hidden">
            {/* Decorative bg number */}
            <div className="absolute right-4 top-6 text-[8rem] md:text-[10rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">05</div>

            <div className="container mx-auto px-6 relative z-10">

                {/* ── Section Heading ── */}
                <div ref={headingRef} className="mb-10">
                    <span className="section-label" style={{ opacity: 0 }}>Our Work</span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85]"
                        style={{ opacity: 0 }}>
                        Our<br /><span className="text-white/25">Projects</span>
                    </h2>
                </div>

                {/* ── Project rows ── */}
                <div>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={el => (itemsRef.current[index] = el)}
                            className="group border-t border-white/10 py-8 hover:bg-white/[0.02] transition-colors duration-400 rounded-sm"
                            style={{ opacity: 0 }}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">

                                {/* Left: identity */}
                                <div className="lg:w-[42%] flex-shrink-0">
                                    <div className="flex items-start gap-4">
                                        <span className="text-xs text-white/25 font-mono pt-1 flex-shrink-0 w-6">{project.id}</span>
                                        <div className="flex-1 min-w-0">
                                            {/* Meta */}
                                            <div className="proj-meta flex items-center gap-2 mb-2" style={{ opacity: 0 }}>
                                                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                                                    {project.client[0]}
                                                </div>
                                                <span className="text-white text-sm font-semibold">{project.client}</span>
                                                <span className="text-white/40 text-xs">{project.timeAgo} ago</span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="proj-title text-3xl md:text-5xl font-black tracking-tight text-white group-hover:text-white/80 transition-colors leading-tight mb-3"
                                                style={{ opacity: 0 }}>
                                                {project.title}
                                            </h3>

                                            {/* Tags */}
                                            <div className="proj-tags flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag}
                                                        className="text-xs px-2.5 py-0.5 border border-white/20 text-white/60 uppercase tracking-wider"
                                                        style={{ opacity: 0 }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: chat bubbles */}
                                <div className="lg:w-[58%] flex flex-col gap-3">
                                    {/* Client message → right */}
                                    <div className="bubble-client flex justify-end" style={{ opacity: 0 }}>
                                        <div className="max-w-[85%] md:max-w-sm">
                                            <div className="bg-white/8 border border-white/15 rounded-xl rounded-tr-sm px-4 py-3">
                                                <p className="text-white/85 text-base leading-relaxed">{project.clientMsg}</p>
                                            </div>
                                            <p className="text-right text-xs text-white/30 uppercase tracking-widest mt-1">{project.client}</p>
                                        </div>
                                    </div>

                                    {/* Team reply ← left */}
                                    <div className="bubble-team flex justify-start" style={{ opacity: 0 }}>
                                        <div className="max-w-[85%] md:max-w-sm">
                                            <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3">
                                                <p className="text-black text-base leading-relaxed font-medium">{project.teamReply}</p>
                                            </div>
                                            <p className="text-xs text-white/30 uppercase tracking-widest mt-1">WebNginx</p>
                                        </div>
                                    </div>

                                    {/* View project */}
                                    <div className="flex justify-end">
                                        <a href="#" className="text-xs uppercase tracking-widest text-white/35 hover:text-white flex items-center gap-1.5 transition-colors group/lnk">
                                            View Project
                                            <span className="group-hover/lnk:translate-x-1 transition-transform inline-block">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="border-t border-white/10 pt-10 mt-2 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">{projects.length} featured projects · many more in the making</p>
                    <a href="/projects" className="px-7 py-2.5 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full">
                        All Projects →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsTree;
