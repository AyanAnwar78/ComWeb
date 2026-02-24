import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

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
        <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer select-none"
                    onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
                >
                    <img src={logo} alt="WebNginx Logo" className="h-9 w-9 rounded-full object-cover grayscale" />
                    <span className="text-xl font-bold tracking-tight text-white">
                        Web<span className="text-white/60">Nginx</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-white/60 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest link-underline"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/projects"
                        className="px-5 py-2 border border-white/30 text-white text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest"
                    >
                        Let's Talk
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-white/70 transition-colors focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-xl border-b border-white/10 py-8">
                    <div className="flex flex-col space-y-6 px-6 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-white/70 hover:text-white transition-colors text-lg uppercase tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
