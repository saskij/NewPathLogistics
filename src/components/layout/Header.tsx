'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import logoImg from '../../../public/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/95 border-b border-white/5 h-16' : 'bg-[#121212]/0 border-b border-white/0 h-20'} backdrop-blur-md`}>
            <div className="container mx-auto px-4 h-full flex justify-between items-center">
                <Link href="/" className="relative z-50 self-start" onClick={handleLogoClick}>
                    <div className={`relative transition-all duration-500 ease-in-out ${isScrolled ? 'h-32 w-64 mt-0' : 'h-48 w-96 mt-2'}`}>
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

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden relative z-[70] h-20 flex items-center transition-colors duration-300 ${isMenuOpen ? 'text-black' : 'text-white'}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Navigation Overlay */}
                <div className={`fixed inset-0 bg-white z-[60] flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav>
                        <ul className="flex flex-col items-center space-y-8 text-2xl font-bold uppercase tracking-widest">
                            <li>
                                <Link href="/" onClick={toggleMenu} className="hover:text-red-600 transition-colors text-black">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" onClick={toggleMenu} className="hover:text-red-600 transition-colors text-zinc-800">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={toggleMenu} className="hover:text-red-600 transition-colors text-zinc-800">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" onClick={toggleMenu} className="hover:text-red-600 transition-colors text-zinc-800">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={toggleMenu} className="hover:text-red-600 transition-colors text-zinc-800">
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
