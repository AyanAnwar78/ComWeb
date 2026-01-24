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
        gradient: "from-neon-green to-emerald-600",
        shadow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
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
        gradient: "from-green-400 to-emerald-600",
        shadow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]",
        popular: true
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-black text-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
                    <p className="text-gray-400">Choose the perfect plan for your needs. No hidden charges.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative bg-gray-900 rounded-2xl p-8 border border-white/10 transition-all duration-300 transform hover:-translate-y-2 ${plan.shadow} reveal`}>
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-neon-green to-emerald-600 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className={`text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${plan.gradient}`}>
                                {plan.price}
                            </div>
                            <p className="text-gray-400 mb-8 h-12">{plan.desc}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <Check size={18} className="text-white" />
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </ul>

                            <Link to="/#contact" className={`block w-full text-center py-3 rounded-xl font-bold bg-gradient-to-r ${plan.gradient} text-white hover:brightness-110 transition-all`}>
                                Choose Plan
                            </Link>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-500 mt-12 text-sm">
                    * Prices vary depending on specific custom requirements. Contact us for a precise quote.
                </p>
            </div>
        </section>
    );
};

export default Pricing;
