import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Pricing', href: '/pricing' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer select-none"
                    onClick={() => {
                        navigate('/');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="WebNginx Logo" className="h-10 w-10 rounded-full object-cover" />
                    <span className="text-2xl font-bold font-sans tracking-tighter text-white">
                        Web<span className="text-neon-green/80">Nginx</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-gray-300 hover:text-neon-green transition-colors duration-300 text-sm uppercase tracking-wide hover:drop-shadow-[0_0_8px_rgba(10,255,0,0.5)]"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/#contact"
                        className="px-6 py-2 bg-transparent border border-neon-pink text-neon-pink rounded-full hover:bg-neon-pink hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(188,19,254,0.3)] hover:shadow-[0_0_20px_rgba(188,19,254,0.6)] text-sm font-medium tracking-wide"
                    >
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-neon-green transition-colors focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 animate-in slide-in-from-top-5 duration-300">
                    <div className="flex flex-col space-y-6 px-4 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-gray-300 hover:text-neon-green transition-colors text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/#contact"
                            className="px-8 py-3 border border-neon-pink text-neon-pink rounded-full hover:bg-neon-pink hover:text-white transition-all shadow-[0_0_10px_rgba(188,19,254,0.3)]"
                            onClick={() => setIsOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
