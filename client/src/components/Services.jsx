import React from 'react';
import { Code, ShoppingBag, BarChart, Smartphone, Layout, Wrench } from 'lucide-react';

const services = [
    {
        icon: <Code size={40} />,
        title: "Custom Website Development",
        desc: "Tailor-made websites built from scratch to fit your unique business needs.",
        color: "text-black",
        border: "hover:border-neon-green"
    },
    {
        icon: <BarChart size={40} />,
        title: "Business Websites",
        desc: "Professional corporate websites that build trust and showcase your services.",
        color: "text-black",
        border: "hover:border-neon-green"
    },
    {
        icon: <Smartphone size={40} />,
        title: "Portfolio & Personal Sites",
        desc: "Showcase your work or personal brand with a stunning visuals.",
        color: "text-black",
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-[#191919] text-[#fab162]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[#fab162]">
                        Our Specialized Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive digital solutions to help your business thrive online.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`p-8 rounded-2xl bg-[#fab162]/5 border border-[#fab162]/10 hover:border-[#fab162]/40 transition-all duration-300 transform hover:-translate-y-2 group reveal`}>
                            <div className="mb-6 w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center text-[#fab162] transition-colors group-hover:bg-[#fab162] group-hover:text-[#191919]">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#fab162]">{service.title}</h3>
                            <p className="text-white/70 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
