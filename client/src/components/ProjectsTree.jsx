import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: 'E-Commerce', desc: 'A futuristic shopping experience built with React and Three.js.', side: 'left' },
    { id: 2, title: 'Ai Travel Planning', desc: 'Real-time data visualization using D3.js and WebSocket.', side: 'right' },
    { id: 3, title: 'Event Management System', desc: 'Interactive chat UI with generative AI responses.', side: 'left' },
    { id: 4, title: 'Dental Clinic Website', desc: 'Immersive 3D art gallery walkthrough.', side: 'right' },
];

const ProjectsTree = () => {
    const componentRef = useRef(null);
    const lineRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Main Pinning Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: 1,
                    pin: true,
                }
            });

            // Animate the vertical line drawing
            tl.fromTo(lineRef.current,
                { scaleY: 0, transformOrigin: "top" },
                { scaleY: 1, duration: 2, ease: "none" }
            );

            // Animate cards
            projects.forEach((_, index) => {
                tl.fromTo(`.project-card-${index}`,
                    { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.5 },
                    index === 0 ? 0.2 : `>-0.2`
                );
            });

        }, componentRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={componentRef} id="projects" className="relative w-full min-h-screen bg-[#191919] py-20 overflow-hidden">
            <div className="container mx-auto px-4 h-full flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-20 text-[#fab162] z-10">
                    Our Creations
                </h2>

                <div className="relative w-full max-w-5xl flex justify-center pb-20">
                    {/* Central Linear Path */}
                    <div
                        ref={lineRef}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#fab162] to-[#fab162]/20 shadow-[0_0_15px_rgba(250,177,98,0.3)]"
                    />

                    <div className="relative w-full flex flex-col gap-32">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`project-card-${index} relative w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
                            >
                                {/* Connector Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fab162] border-4 border-[#191919] z-20 shadow-[0_0_10px_#fab162]" />

                                {/* Card */}
                                <div className="w-full md:w-[45%] p-8 bg-black/40 backdrop-blur-md border border-[#fab162]/10 hover:border-[#fab162]/40 rounded-2xl transition-all duration-300 group">
                                    <div className="mb-4 text-[#fab162] opacity-50 text-xs font-mono tracking-widest uppercase">
                                        Project 0{project.id}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#fab162] mb-3 group-hover:translate-x-2 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {project.desc}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-[#fab162] text-sm font-semibold cursor-pointer hover:gap-4 transition-all">
                                        View Details <span>→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsTree;
