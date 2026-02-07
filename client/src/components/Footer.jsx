import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-10 bg-[#191919] border-t border-[#fab162]/10 text-[#fab162]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 text-3xl font-bold tracking-tighter text-[#fab162] pb-1">
                            Web<span className="text-[#fab162]/80">Nginx</span>
                        </Link>
                        <p className="text-[#fab162]/70 text-sm leading-relaxed max-w-xs">
                            Building premium digital experiences. We craft stunning, high-performance websites that drive growth.
                        </p>
                        <div className="flex space-x-5 text-[#fab162]/70">
                            <a href="#" className="hover:text-[#fab162] transition-all transform hover:scale-110"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-[#fab162] transition-all transform hover:scale-110"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-[#fab162] transition-all transform hover:scale-110"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:ml-auto">
                        <h3 className="text-[#fab162] font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/about" className="text-[#fab162]/70 hover:text-[#fab162] transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-[#fab162]/70 hover:text-[#fab162] transition-colors">Our Services</Link></li>
                            <li><Link to="/projects" className="text-[#fab162]/70 hover:text-[#fab162] transition-colors">Our Projects</Link></li>
                            <li><Link to="/pricing" className="text-[#fab162]/70 hover:text-[#fab162] transition-colors">Pricing Plans</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="md:ml-auto">
                        <h3 className="text-[#fab162] font-bold text-lg mb-6">Get in Touch</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center space-x-3 text-[#fab162]/70">
                                <MapPin size={18} className="text-[#fab162]" />
                                <span>Jalandhar, Punjab, India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-[#fab162]/70">
                                <Mail size={18} className="text-[#fab162]" />
                                <span>kushwahav912@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-[#fab162]/70">
                                <Phone size={18} className="text-[#fab162]" />
                                <span>+91 81539 29447</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} WebNginx. All rights reserved.</p>
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
