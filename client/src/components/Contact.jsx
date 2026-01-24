import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Basic Website',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you! We will get back to you shortly.');
    };

    return (
        <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-orange-500">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400">Ready to start your project? We'd love to hear from you.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="md:w-1/3 space-y-8 reveal">
                        <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
                            {/* ... existing content ... */}
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-gray-800 rounded-lg text-neon-pink">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200">Location</h4>
                                        <p className="text-gray-400">Jalandhar, Punjab, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-gray-800 rounded-lg text-neon-green">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200">Email</h4>
                                        <p className="text-gray-400">hello@ekgod.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-gray-800 rounded-lg text-neon-green">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200">Phone / WhatsApp</h4>
                                        <p className="text-gray-400">+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-800">
                                <h4 className="font-bold text-gray-200 mb-2">Working Hours</h4>
                                <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-2/3 reveal">
                        <div className="bg-gray-900 p-8 rounded-2xl border border-white/10 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 mb-2 text-sm">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2 text-sm">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                                            placeholder="+91..."
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Interested Service</label>
                                    <select
                                        name="service"
                                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                                        onChange={handleChange}
                                    >
                                        <option value="Basic Website">Basic Website (₹10k)</option>
                                        <option value="Business Website">Business Website (₹20k-40k)</option>
                                        <option value="E-commerce">E-commerce Website (₹50k+)</option>
                                        <option value="Other">Other / Custom Requirement</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2 text-sm">Project Details</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                                        placeholder="Tell us a bit about your project..."
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-neon-pink to-purple-600 rounded-xl text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
