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
        <section id="process" className="py-20 bg-[#191919] text-[#fab162]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#fab162]">
                    How We Work
                </h2>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step flex items-start md:items-center bg-[#fab162]/5 p-6 rounded-xl border border-[#fab162]/10 hover:border-[#fab162]/30 transition-all reveal">
                            <div className="flex-shrink-0 mr-6 w-16 h-16 rounded-full bg-black/40 flex items-center justify-center text-[#fab162]">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#fab162] mb-2">{step.title}</h3>
                                <p className="text-white/80">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
