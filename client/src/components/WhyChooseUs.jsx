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
        <section className="py-20 bg-[#191919] text-[#fab162]">
            <div className="container mx-auto px-4">
                <div className="md:flex md:items-center md:justify-between max-w-6xl mx-auto">
                    <div className="md:w-1/2 mb-10 md:mb-0 reveal">
                        <h2 className="text-4xl font-bold mb-6 text-[#fab162]">Why Choose WebNginx?</h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            We don't just build websites; we build digital experiences that convert.
                            Our commitment to quality and transparency makes us the perfect partner regarding your digital journey.
                        </p>
                        <a href="#projects" className="inline-block px-8 py-3 bg-[#fab162] text-[#191919] font-bold rounded-full hover:bg-[#fab162]/90 transition-colors shadow-lg">
                            Lets Build Your Website
                        </a>
                    </div>

                    <div className="md:w-1/2 md:pl-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 p-4 bg-[#fab162]/5 rounded-lg border border-[#fab162]/5 hover:border-[#fab162]/20 transition-colors reveal">
                                    <CheckCircle className="text-[#fab162] flex-shrink-0" size={24} />
                                    <span className="font-medium text-white/80">{feature}</span>
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
