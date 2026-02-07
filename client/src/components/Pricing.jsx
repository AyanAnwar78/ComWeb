import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
    {
        name: "Basic Website",
        price: "₹5,999 - ₹9999",
        desc: "Perfect for personal portfolios and simple online presence.",
        features: [
            "responsive Design",
            "3-5 Pages",
            "Contact Form",
            "Basic SEO",
            "1 Month Support"
        ],
        gradient: "from-black to-gray-700",
        shadow: "hover:shadow-xl"
    },
    {
        name: "Business Website",
        price: "₹14,999 - ₹39,999",
        desc: "Ideal for small to medium businesses looking to grow.",
        features: [
            "Custom Premium Design",
            "8-12 Pages",
            "CMS Integration",
            "Advanced SEO",
            "Social Media Integration",
            "3 Months Support"
        ],
        gradient: "from-gray-900 to-gray-600",
        shadow: "hover:shadow-xl",
        popular: true
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-[#191919] text-[#fab162] relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[#fab162]">Transparent Pricing</h2>
                    <p className="text-white/70">Choose the perfect plan for your needs. No hidden charges.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative bg-[#fab162]/5 rounded-2xl p-8 border border-[#fab162]/10 transition-all duration-300 transform hover:-translate-y-2 ${plan.shadow} reveal`}>
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-[#fab162] text-[#191919] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2 text-[#fab162]">{plan.name}</h3>
                            <div className={`text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#fab162] to-[#fab162]/50`}>
                                {plan.price}
                            </div>
                            <p className="text-white/70 mb-8 h-12">{plan.desc}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <Check size={20} className="text-[#fab162] flex-shrink-0" />
                                        <span className="text-white/70 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </ul>

                            <Link to="/#contact" className={`block w-full text-center py-3 rounded-xl font-bold bg-[#fab162] text-[#191919] hover:brightness-110 transition-all`}>
                                Choose Plan
                            </Link>
                        </div>
                    ))}
                </div>

                <p className="text-center text-white/40 mt-12 text-sm">
                    * Prices vary depending on specific custom requirements. Contact us for a precise quote.
                </p>
            </div>
        </section>
    );
};

export default Pricing;
