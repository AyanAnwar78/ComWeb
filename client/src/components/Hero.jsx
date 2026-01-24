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
            // Rotate based on mouse position (state.pointer is normalized -1 to 1)
            const { x, y } = state.pointer;

            // Smooth interpolation for rotation
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.5, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.5, 0.1);

            // Keep a subtle continuous rotation
            meshRef.current.rotation.z += delta * 0.05;
        }
    });

    return (
        <points ref={meshRef}>
            <torusKnotGeometry args={[10, 3, 100, 16]} />
            <pointsMaterial
                size={0.05}
                color="#0aff00"
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
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black" id="hero">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
                    <color attach="background" args={['#000000']} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={null}>
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                            <AnimatedParticles />
                        </Float>
                    </Suspense>
                    <fog attach="fog" args={['#000000', 20, 40]} />
                </Canvas>
            </div>

            <div className="relative z-10 text-center px-4 pointer-events-none">
                <h1 ref={titleRef} className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-white via-neon-green to-neon-pink drop-shadow-[0_0_20px_rgba(10,255,0,0.6)]">
                    EkGod
                </h1>
                <p ref={subtitleRef} className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto tracking-wide font-light">
                    Innovating Digital Realities with <span className="text-neon-green font-normal">Code</span> & <span className="text-neon-pink font-normal">Design</span>
                </p>
                <div className="mt-10 pointer-events-auto">
                    <Link to="/projects" className="inline-block px-8 py-3 rounded-full border border-white/20 hover:border-neon-green hover:bg-neon-green/10 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,255,0,0.4)] backdrop-blur-sm">
                        Explore Our Universe
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
