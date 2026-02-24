import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#080808] text-white border-t border-white/10">
            {/* Marquee ticker */}
            <div className="border-b border-white/10 py-5 overflow-hidden">
                <div className="marquee-track">
                    {['Web Design', 'GSAP Animation', 'React Apps', 'Custom Dev', 'SEO', 'UI/UX', 'Mobile-First', 'Premium Support',
                        'Web Design', 'GSAP Animation', 'React Apps', 'Custom Dev', 'SEO', 'UI/UX', 'Mobile-First', 'Premium Support'].map((item, i) => (
                            <span key={i} className="inline-block text-xs uppercase tracking-[0.4em] text-white/30 mx-8">
                                {item} <span className="text-white/15 mx-4">·</span>
                            </span>
                        ))}
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-5">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
                            Web<span className="text-white/30">Nginx</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Building premium digital experiences. Stunning, high-performance websites that drive real growth.
                        </p>
                        <div className="flex space-x-5 text-white/40">
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            {[['About Us', '/about'], ['Our Services', '/services'], ['Our Projects', '/projects'], ['Pricing Plans', '/pricing']].map(([label, href]) => (
                                <li key={href}>
                                    <Link to={href} className="text-white/60 hover:text-white transition-colors link-underline">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6">Get in Touch</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-center gap-3"><MapPin size={15} className="text-white/35 flex-shrink-0" /><span>Jalandhar, Punjab, India</span></li>
                            <li className="flex items-center gap-3"><Mail size={15} className="text-white/35 flex-shrink-0" /><span>kushwahav912@gmail.com</span></li>
                            <li className="flex items-center gap-3"><Phone size={15} className="text-white/35 flex-shrink-0" /><span>+91 81539 29447</span></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/25 text-xs">
                    <p>© {new Date().getFullYear()} WebNginx. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
