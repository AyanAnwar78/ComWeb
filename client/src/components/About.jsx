import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="container mx-auto px-4 reveal">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-green">
                        About EkGod
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        We are <span className="text-neon-green font-bold">EkGod</span>, a forward-thinking digital agency dedicated to crafting stunning, high-performance websites. Our mission is to empower businesses with digital solutions that not only look amazing but also drive real growth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
                        <div className="p-6 bg-gray-900/50 rounded-xl border border-white/10 hover:border-neon-green/50 transition-all reveal">
                            <h3 className="text-xl font-bold text-neon-green mb-3">Our Vision</h3>
                            <p className="text-gray-400">To be the catalyst for your digital success, providing innovative and custom web solutions that set you apart in the digital landscape.</p>
                        </div>
                        <div className="p-6 bg-gray-900/50 rounded-xl border border-white/10 hover:border-neon-green/50 transition-all reveal">
                            <h3 className="text-xl font-bold text-neon-green mb-3">Our Approach</h3>
                            <p className="text-gray-400">Client-first, transparent, and quality-driven. We believe in building partnerships, not just websites. Your satisfaction is our top priority.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
