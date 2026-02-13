'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../../public/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer to hide header logo when footer is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsLogoVisible(!entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of footer is visible
        );

        const footer = document.getElementById('footer');
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) observer.unobserve(footer);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/95 border-b border-white/5 h-16' : 'bg-[#121212]/0 border-b border-white/0 h-20'} backdrop-blur-md`}>
                <div className="container mx-auto px-4 h-full flex justify-between items-center">
                    <Link
                        href="/"
                        className={`relative z-50 self-start transition-opacity duration-300 ${isLogoVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        onClick={handleLogoClick}
                    >
                        <div className={`relative transition-all duration-500 ease-in-out ${isScrolled ? 'h-20 w-40 md:h-32 md:w-64 mt-0' : 'h-24 w-48 md:h-48 md:w-96 mt-2'}`}>
                            <Image
                                src={logoImg}
                                alt="New Path Logistics Logo"
                                fill
                                className="object-contain object-left grayscale brightness-[1.8] contrast-[1.2] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex h-20 items-center ml-12">
                        <ul className="flex space-x-8 text-sm font-bold uppercase tracking-wide">
                            <li><Link href="/" className="hover:text-white transition-colors text-white">Home</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors text-gray-400">Services</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors text-gray-400">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors text-gray-400">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors text-gray-400">Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Toggle (Visible only when menu is closed) */}
                    <button
                        className={`md:hidden relative z-50 h-20 flex items-center transition-colors duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'text-white'}`}
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Overlay - Premium Dark Theme */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-zinc-950/90 backdrop-blur-xl z-[100] flex flex-col md:hidden"
                    >
                        {/* Header Row: Logo & Close Button */}
                        <div className="container mx-auto px-4 h-24 flex justify-between items-center shrink-0 border-b border-white/10">
                            {/* Logo in Menu */}
                            <div className="relative h-16 w-32" onClick={toggleMenu}>
                                <Image
                                    src={logoImg}
                                    alt="New Path Logistics"
                                    fill
                                    className="object-contain object-left grayscale brightness-[1.8] contrast-[1.2]"
                                />
                            </div>

                            <button
                                className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
                                onClick={toggleMenu}
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <nav className="flex-1 flex flex-col justify-center items-center py-8">
                            <ul className="flex flex-col items-center space-y-8 text-3xl font-bold uppercase tracking-widest w-full">
                                {['Home', 'Services', 'About', 'Careers', 'Contact'].map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                    >
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                            onClick={toggleMenu}
                                            className="text-white hover:text-red-500 transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 w-full max-w-xs px-6"
                            >
                                <Link
                                    href="/contact"
                                    onClick={toggleMenu}
                                    className="block w-full py-4 text-center bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg shadow-red-900/20"
                                >
                                    Get a Quote
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Footer: Contacts */}
                        <div className="pb-8 px-6 text-center border-t border-white/10 pt-6">
                            <div className="flex flex-col space-y-4 text-zinc-400 text-sm">
                                <a href="tel:+15551234567" className="flex items-center justify-center space-x-2 hover:text-white transition-colors">
                                    <Phone size={18} />
                                    <span>+1 (555) 123-4567</span>
                                </a>
                                <a href="mailto:info@newpathlogistics.com" className="flex items-center justify-center space-x-2 hover:text-white transition-colors">
                                    <Mail size={18} />
                                    <span>info@newpathlogistics.com</span>
                                </a>
                            </div>

                            <div className="flex justify-center space-x-6 mt-6 text-zinc-500">
                                <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
