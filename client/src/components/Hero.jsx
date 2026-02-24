import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

/* ── Rotating particles ──────────────── */
const Particles = () => {
    const ref = useRef();
    useFrame((_, d) => {
        if (ref.current) {
            ref.current.rotation.y += d * 0.07;
            ref.current.rotation.x += d * 0.035;
        }
    });
    return (
        <points ref={ref}>
            <torusKnotGeometry args={[10, 3, 120, 16]} />
            <pointsMaterial size={0.04} color="#ffffff" transparent opacity={0.25} sizeAttenuation />
        </points>
    );
};

/* ── Hero ────────────────────────────── */
const Hero = () => {
    const labelRef = useRef();
    const titleRef = useRef();
    const subRef = useRef();
    const btnsRef = useRef();
    const lineRef = useRef();
    const statsRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.2 });
        tl.fromTo(labelRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        )
            .fromTo(titleRef.current,
                { opacity: 0, y: 80, skewY: 4 },
                { opacity: 1, y: 0, skewY: 0, duration: 1.3, ease: 'power4.out' },
                '-=0.4'
            )
            .fromTo(lineRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 0.8, ease: 'power3.inOut', transformOrigin: 'left' },
                '-=0.6'
            )
            .fromTo(subRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
                '-=0.5'
            )
            .fromTo(Array.from(btnsRef.current.children),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
                '-=0.4'
            )
            .fromTo(Array.from(statsRef.current.children),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
                '-=0.3'
            );

        // Counter animation — use gsap.to() with a plain object (NOT fromTo)
        const counters = statsRef.current.querySelectorAll('[data-count]');
        counters.forEach(el => {
            const target = parseInt(el.getAttribute('data-count'), 10);
            const obj = { val: 0 };
            gsap.to(obj, {
                val: target,
                duration: 2,
                ease: 'power2.out',
                delay: 1.2,
                onUpdate() { el.textContent = Math.round(obj.val) + '+'; },
            });
        });
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black" id="hero">
            {/* 3-D background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
                    <color attach="background" args={['#000000']} />
                    <ambientLight intensity={0.3} />
                    <Stars radius={90} depth={60} count={5000} factor={3} saturation={0} fade speed={0.5} />
                    <Suspense fallback={null}>
                        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
                            <Particles />
                        </Float>
                    </Suspense>
                </Canvas>
            </div>

            {/* Subtle vignette */}
            <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000_100%)] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
                <p ref={labelRef} className="section-label mb-6">Web Design Studio · Est. 2024</p>

                <h1 ref={titleRef}
                    className="text-[clamp(3.5rem,11vw,8rem)] font-black tracking-tighter text-white leading-[0.9] mb-6"
                    style={{ opacity: 0 }}
                >
                    We Build<br />
                    <span className="text-white/20">Websites</span>
                </h1>

                {/* Horizontal rule */}
                <div ref={lineRef} className="h-px bg-white/20 max-w-xs mx-auto mb-6" style={{ transformOrigin: 'left', transform: 'scaleX(0)' }} />

                <p ref={subRef} className="text-base md:text-lg text-white/60 max-w-lg mx-auto leading-relaxed mb-10" style={{ opacity: 0 }}>
                    A team of designers &amp; developers crafting extraordinary digital experiences that drive real growth.
                </p>

                <div ref={btnsRef} className="flex gap-4 justify-center flex-wrap">
                    <Link to="/projects"
                        className="px-8 py-3 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-all duration-300 rounded-full"
                        style={{ opacity: 0 }}
                    >
                        View Our Work
                    </Link>
                    <Link to="/about"
                        className="px-8 py-3 border border-white/30 text-white text-sm uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300 rounded-full"
                        style={{ opacity: 0 }}
                    >
                        About Us →
                    </Link>
                </div>
            </div>

            {/* Stats row */}
            <div ref={statsRef} className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-12 md:gap-20 px-6">
                {[['50', 'Projects Done'], ['100', 'Happy Clients'], ['5', 'Years Exp.']].map(([num, label]) => (
                    <div key={label} className="text-center" style={{ opacity: 0 }}>
                        <div data-count={num} className="text-2xl md:text-3xl font-black text-white">{num}+</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{label}</div>
                    </div>
                ))}
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 z-10" />
        </section>
    );
};

export default Hero;
