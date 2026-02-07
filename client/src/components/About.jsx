import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#191919] text-[#fab162] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="container mx-auto px-4 reveal">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-white">
                        About WebNginx
                    </h2>
                    <p className="text-xl text-white/80 mb-8 leading-relaxed">
                        We are <span className="font-bold text-[#fab162]">WebNginx</span>, a forward-thinking digital agency dedicated to crafting stunning, high-performance websites. Our mission is to empower businesses with digital solutions that not only look amazing but also drive real growth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
                        <div className="p-6 bg-[#fab162]/5 rounded-xl border border-[#fab162]/10 hover:border-[#fab162]/30 transition-all reveal">
                            <h3 className="text-xl font-bold text-[#fab162] mb-3">Our Vision</h3>
                            <p className="text-white/70">To be the catalyst for your digital success, providing innovative and custom web solutions that set you apart in the digital landscape.</p>
                        </div>
                        <div className="p-6 bg-[#fab162]/5 rounded-xl border border-[#fab162]/10 hover:border-[#fab162]/30 transition-all reveal">
                            <h3 className="text-xl font-bold text-[#fab162] mb-3">Our Approach</h3>
                            <p className="text-white/70">Client-first, transparent, and quality-driven. We believe in building partnerships, not just websites. Your satisfaction is our top priority.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
