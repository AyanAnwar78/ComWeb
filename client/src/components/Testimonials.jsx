import React from 'react';

const testimonials = [
    { id: 1, name: 'Sarah Connor', role: 'CEO, TechCorp', text: "WebNginx transformed our digital presence. The 3D integration is mind-blowing!" },
    { id: 2, name: 'James Cameron', role: 'Director', text: "A truly cinematic experience on the web. Highly recommended." },
    { id: 3, name: 'Ellen Ripley', role: 'CTO, Weyland', text: "Robust, fast, and visually stunning. The team delivered beyond expectations." },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-[#191919] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#fab162]">
                    Client Stories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="p-8 rounded-2xl bg-[#fab162]/5 border border-[#fab162]/10 hover:border-[#fab162]/30 transition-all duration-300 hover:shadow-xl group reveal">
                            <p className="text-white/80 mb-6 italic">"{t.text}"</p>
                            <div>
                                <h4 className="text-xl font-bold text-[#fab162] transition-colors">{t.name}</h4>
                                <span className="text-sm text-white/60">{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
