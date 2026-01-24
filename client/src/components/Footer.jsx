import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 bg-black border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <Link to="/" className="text-3xl font-bold tracking-tighter inline-block">
                            <span className="text-white">Ek</span>
                            <span className="text-neon-green drop-shadow-[0_0_10px_rgba(10,255,0,0.7)]">God</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Building premium digital experiences from Jalandhar, Punjab to the world. We craft stunning, high-performance websites that drive growth.
                        </p>
                        <div className="flex space-x-5 text-gray-400">
                            <a href="#" className="hover:text-neon-green transition-all transform hover:scale-110"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-neon-green transition-all transform hover:scale-110"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-neon-green transition-all transform hover:scale-110"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:ml-auto">
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/about" className="text-gray-400 hover:text-neon-green transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-neon-green transition-colors">Our Services</Link></li>
                            <li><Link to="/projects" className="text-gray-400 hover:text-neon-green transition-colors">Our Projects</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-neon-green transition-colors">Pricing Plans</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="md:ml-auto">
                        <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center space-x-3 text-gray-400">
                                <MapPin size={18} className="text-neon-green" />
                                <span>Jalandhar, Punjab, India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail size={18} className="text-neon-green" />
                                <span>hello@ekgod.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone size={18} className="text-neon-green" />
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} EkGod Startup. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
