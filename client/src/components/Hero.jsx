import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const AnimatedParticles = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Constant subtle rotation
            meshRef.current.rotation.y += delta * 0.1;
            meshRef.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <points ref={meshRef}>
            <torusKnotGeometry args={[10, 3, 100, 16]} />
            <pointsMaterial
                size={0.05}
                color="#fab162"
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
};

const Hero = () => {
    const titleRef = useRef();
    const subtitleRef = useRef();

    React.useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
        )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=1"
            );
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#191919]" id="hero">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
                    <color attach="background" args={['#191919']} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={null}>
                        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                            <AnimatedParticles />
                        </Float>
                    </Suspense>
                </Canvas>
            </div>

            <div className="relative z-10 text-center px-4 pointer-events-none">
                <h1 ref={titleRef} className="text-6xl md:text-8xl font-black tracking-tighter text-[#fab162] drop-shadow-lg py-4">
                    WebNginx
                </h1>
                <p ref={subtitleRef} className="mt-6 text-lg md:text-2xl text-white/70 max-w-2xl mx-auto tracking-wide font-light">
                    Innovating Digital Realities with <span className="text-white font-normal">Code</span> & <span className="text-white font-normal">Design</span>
                </p>
                <div className="mt-10 pointer-events-auto">
                    <Link to="/projects" className="inline-block px-8 py-3 rounded-full border border-[#fab162]/20 hover:border-[#fab162] hover:bg-[#fab162]/10 text-white transition-all duration-300 backdrop-blur-sm">
                        Explore Our Universe
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
