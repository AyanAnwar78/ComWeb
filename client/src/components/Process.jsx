import React from 'react';
import { MessageSquare, PenTool, Code2, Rocket, Search } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare size={32} />,
        title: "1. Requirement Discussion",
        desc: "We listen to your ideas, understand your goals, and outline the project scope."
    },
    {
        icon: <PenTool size={32} />,
        title: "2. Planning & Design",
        desc: "We create a roadmap and design visual prototypes that align with your brand."
    },
    {
        icon: <Code2 size={32} />,
        title: "3. Development",
        desc: "Our developers build your site using the latest cleaner, faster technologies."
    },
    {
        icon: <Search size={32} />,
        title: "4. Testing & Review",
        desc: "We rigorously test for performance and bugs, ensuring everything works perfectly."
    },
    {
        icon: <Rocket size={32} />,
        title: "5. Launch & Support",
        desc: "We launch your site and provide ongoing support to ensure sustained success."
    }
];

const Process = () => {
    return (
        <section id="process" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-purple-500">
                    How We Work
                </h2>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step flex items-start md:items-center bg-black/40 p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all reveal">
                            <div className="flex-shrink-0 mr-6 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-neon-green shadow-[0_0_15px_rgba(10,255,0,0.2)]">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
