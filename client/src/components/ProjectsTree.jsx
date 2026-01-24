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
    const svgRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    pin: true,
                    // markers: true, // debug
                }
            });

            // Animate the main trunk
            tl.fromTo(".tree-trunk", { drawSVG: "0%" }, { drawSVG: "100%", duration: 1 });

            projects.forEach((_, index) => {
                // Animate branch
                tl.fromTo(`.branch-${index}`,
                    { strokeDasharray: 300, strokeDashoffset: 300 },
                    { strokeDashoffset: 0, duration: 0.5 },
                    `trunk+=${index * 0.5}`
                );

                // Animate card appearance
                tl.fromTo(`.project-card-${index}`,
                    { opacity: 0, scale: 0.5, x: index % 2 === 0 ? -50 : 50 },
                    { opacity: 1, scale: 1, x: 0, duration: 0.5 },
                    "<0.2"
                );
            });

        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        // Reduced height from 300vh to 150vh to reduce scroll distance
        <section ref={componentRef} id="projects" className="relative w-full h-[150vh] bg-black text-white overflow-hidden">
            {/* Sticky Container */}
            <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-start pt-24 md:pt-32">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 text-neon-green drop-shadow-[0_0_10px_rgba(10,255,0,0.7)] z-10">
                    Our Creations
                </h2>

                <div className="relative w-full max-w-4xl flex-1 flex justify-center pb-10">
                    {/* The Tree SVG */}
                    <svg
                        ref={svgRef}
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full overflow-visible"
                        viewBox="0 0 400 800"
                        preserveAspectRatio="xMidYMin meet"
                    >
                        {/* Main Trunk */}
                        <path
                            d="M200,0 L200,800"
                            className="tree-trunk"
                            stroke="#0aff00"
                            strokeWidth="4"
                            fill="none"
                            filter="drop-shadow(0 0 5px #0aff00)"
                        />

                        {/* Branches */}
                        {projects.map((project, index) => {
                            const yPos = 150 + index * 150;
                            const isLeft = index % 2 === 0;
                            // Draw curve: M200,yPos Q100,yPos 50,yPos+50 (example)
                            const pathD = isLeft
                                ? `M200,${yPos} C150,${yPos} 100,${yPos + 20} 50,${yPos}`
                                : `M200,${yPos} C250,${yPos} 300,${yPos + 20} 350,${yPos}`;

                            return (
                                <path
                                    key={`branch-${index}`}
                                    d={pathD}
                                    className={`branch-${index}`}
                                    stroke="#bc13fe"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeDasharray="300"
                                    strokeDashoffset="300"
                                    filter="drop-shadow(0 0 3px #bc13fe)"
                                />
                            );
                        })}
                    </svg>

                    {/* Project Cards (HTML overlay positioned absolutely) */}
                    {projects.map((project, index) => {
                        const yPos = 150 + index * 150; // Match SVG yPos roughly
                        // We need to map SVG coordinate to CSS. The SVG viewport is 400x800.
                        // 800 units ~ 80% of screen height.
                        // It's tricky with responsive SVG scaling. 
                        // Alternative: Use fixed % top positions.

                        const cssTop = `${(yPos / 800) * 100}%`;

                        return (
                            <div
                                key={project.id}
                                className={`project-card-${index} absolute w-64 md:w-80 p-6 bg-gray-900/80 backdrop-blur-md border border-neon-green/50 rounded-xl shadow-[0_0_15px_rgba(10,255,0,0.2)]`}
                                style={{
                                    top: cssTop,
                                    left: index % 2 === 0 ? '10%' : 'auto',
                                    right: index % 2 !== 0 ? '10%' : 'auto',
                                    transform: 'translateY(-50%)'
                                }}
                            >
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsTree;
