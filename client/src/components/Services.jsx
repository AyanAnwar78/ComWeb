import React from 'react';
import { Code, ShoppingBag, BarChart, Smartphone, Layout, Wrench } from 'lucide-react';

const services = [
    {
        icon: <Code size={40} />,
        title: "Custom Website Development",
        desc: "Tailor-made websites built from scratch to fit your unique business needs.",
        color: "text-neon-green",
        border: "hover:border-neon-green"
    },
    {
        icon: <BarChart size={40} />,
        title: "Business Websites",
        desc: "Professional corporate websites that build trust and showcase your services.",
        color: "text-neon-green",
        border: "hover:border-neon-green"
    },
    {
        icon: <Smartphone size={40} />,
        title: "Portfolio & Personal Sites",
        desc: "Showcase your work or personal brand with a stunning visuals.",
        color: "text-neon-green",
        border: "hover:border-neon-green"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">We provide comprehensive digital solutions to help your business thrive online.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`service-card bg-gray-900/50 p-8 rounded-2xl border border-white/5 ${service.border} transition-all duration-300 hover:shadow-lg hover:bg-gray-900 group reveal`}>
                            <div className={`${service.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
