import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
    "100% Custom Design",
    "Affordable Pricing",
    "Fast Delivery",
    "Mobile-Friendly Websites",
    "SEO Optimized",
    "Ongoing Premium Support"
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="md:flex md:items-center md:justify-between max-w-6xl mx-auto">
                    <div className="md:w-1/2 mb-10 md:mb-0 reveal">
                        <h2 className="text-4xl font-bold mb-6 text-neon-green">Why Choose EkGod?</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We don't just build websites; we build digital experiences that convert.
                            Our commitment to quality and transparency makes us the perfect partner regarding your digital journey.
                        </p>
                        <a href="#contact" className="inline-block px-8 py-3 bg-neon-green text-black font-bold rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(10,255,0,0.5)]">
                            Lets Build Your Website
                        </a>
                    </div>

                    <div className="md:w-1/2 md:pl-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg border border-white/5 hover:border-neon-green/30 transition-colors reveal">
                                    <CheckCircle className="text-neon-green flex-shrink-0" size={24} />
                                    <span className="font-medium text-gray-200">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
