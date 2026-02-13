'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../../public/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    return (
        <header className="fixed w-full top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5 h-20">
            <div className="container mx-auto px-4 h-full flex justify-between items-start">
                <Link href="/" className="relative z-50">
                    <div className="bg-white h-28 w-64 md:w-80 px-4 flex items-center justify-center rounded-b-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        <div className="relative h-20 w-full">
                            <Image
                                src={logoImg}
                                alt="New Path Logistics Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex h-20 items-center">
                    <ul className="flex space-x-8 text-sm font-bold uppercase tracking-wide">
                        <li><Link href="/" className="hover:text-white transition-colors text-white">Home</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors text-gray-400">Services</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors text-gray-400">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-white transition-colors text-gray-400">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors text-gray-400">Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white relative z-50 h-20 flex items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Navigation Overlay */}
                <div className={`fixed inset-0 bg-[#121212] z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav>
                        <ul className="flex flex-col items-center space-y-8 text-2xl font-bold uppercase tracking-widest">
                            <li>
                                <Link href="/" onClick={toggleMenu} className="hover:text-red-500 transition-colors text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" onClick={toggleMenu} className="hover:text-red-500 transition-colors text-gray-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={toggleMenu} className="hover:text-red-500 transition-colors text-gray-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" onClick={toggleMenu} className="hover:text-red-500 transition-colors text-gray-300">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={toggleMenu} className="hover:text-red-500 transition-colors text-gray-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
