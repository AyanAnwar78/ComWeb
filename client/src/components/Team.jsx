import React from 'react';
import { User } from 'lucide-react';

const teamMembers = [
    { name: 'Ayan Anwar', role: 'Full Stack Developer', color: 'from-[#fab162] to-[#fab162]/50' },
    { name: 'Sahdat Rolli', role: 'AI/ML Engineer', color: 'from-[#fab162] to-[#fab162]/40' },
    { name: 'Vikash Kushwaha', role: 'Full Stack Developer', color: 'from-[#fab162] to-[#fab162]/60' }
];

const Team = () => {
    return (
        <section id="team" className="py-20 bg-[#191919]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#fab162]">
                    Meet the <span className="text-[#fab162]/60">Minds</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="team-card w-full sm:w-80 p-1 rounded-2xl bg-gradient-to-br hover:scale-105 transition-transform duration-300 reveal">
                            <div className={`w-full h-full p-1 rounded-2xl bg-gradient-to-br ${member.color}`}>
                                <div className="bg-[#fab162]/5 rounded-xl p-8 h-full flex flex-col items-center text-center relative overflow-hidden border border-[#fab162]/10">
                                    <div className="w-24 h-24 rounded-full bg-black/40 flex items-center justify-center mb-6 text-[#fab162]">
                                        <User size={48} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                    <p className={`text-transparent bg-clip-text text-white bg-gradient-to-r ${member.color} font-medium`}>
                                        {member.role}
                                    </p>

                                    {/* Glow Effect */}
                                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-3xl opacity-20 bg-gradient-to-t ${member.color}`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
