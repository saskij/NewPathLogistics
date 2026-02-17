'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, PhoneCall } from 'lucide-react';
import logoImg from '../../../public/logo.png';
import { services } from '@/data/services';

// Dynamic import for MobileMenu to reduce initial bundle size (TBT)
const MobileMenu = dynamic(() => import('./MobileMenu'), {
    ssr: false,
    loading: () => null
});

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
            <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-[#121212]/95 border-b border-white/5 h-16 backdrop-blur-md`}>
                <div className="container mx-auto px-4 h-full flex justify-between items-center">
                    <Link
                        href="/"
                        className={`relative z-50 self-start transition-opacity duration-300 ${isLogoVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        onClick={handleLogoClick}
                    >
                        <div className={`relative transition-all duration-500 ease-in-out will-change-[height,width] h-20 w-40 ${isScrolled ? 'md:h-24 md:w-48' : 'md:h-32 md:w-64'} mt-0`}>
                            <Image
                                src={logoImg}
                                alt="New Path Logistics Logo"
                                width={150}
                                height={140}
                                className="object-contain object-left grayscale brightness-[1.8] contrast-[1.2] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] w-full h-full"
                                priority
                                sizes="(max-width: 768px) 160px, (max-width: 1200px) 256px, 384px"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex h-full items-center ml-12">
                        <ul className="flex space-x-8 text-sm font-bold uppercase tracking-wide whitespace-nowrap h-full">
                            <li className="h-full flex items-center">
                                <Link
                                    href="/"
                                    className={`relative h-full flex items-center px-1 group/link transition-colors duration-300 ${pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <span className={`border-b-2 pb-0.5 transition-all duration-300 ${pathname === '/' ? 'border-red-600' : 'border-transparent group-hover/link:border-red-600/50'}`}>
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li className="relative group h-full flex items-center">
                                <Link
                                    href="/services"
                                    className={`relative h-full flex items-center px-1 group/link transition-colors duration-300 ${pathname.startsWith('/services') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <span className={`border-b-2 pb-0.5 transition-all duration-300 ${pathname.startsWith('/services') ? 'border-red-600' : 'border-transparent group-hover/link:border-red-600/50'}`}>
                                        Services
                                    </span>
                                </Link>
                                {/* Dropdown Menu */}
                                <div className="absolute left-0 top-full w-64 bg-[#121212] border border-white/10 rounded-b-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                    <ul className="py-2">
                                        {services.map((service) => (
                                            <li key={service.id}>
                                                <Link
                                                    href={`/services/${service.id}`}
                                                    className="block px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wider"
                                                >
                                                    {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li className="h-full flex items-center">
                                <Link
                                    href="/equipment"
                                    className={`relative h-full flex items-center px-1 group/link transition-colors duration-300 ${pathname === '/equipment' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <span className={`border-b-2 pb-0.5 transition-all duration-300 ${pathname === '/equipment' ? 'border-red-600' : 'border-transparent group-hover/link:border-red-600/50'}`}>
                                        Equipment
                                    </span>
                                </Link>
                            </li>
                            <li className="h-full flex items-center">
                                <Link
                                    href="/careers"
                                    className={`relative h-full flex items-center px-1 group/link transition-colors duration-300 ${pathname === '/careers' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <span className={`border-b-2 pb-0.5 transition-all duration-300 ${pathname === '/careers' ? 'border-red-600' : 'border-transparent group-hover/link:border-red-600/50'}`}>
                                        Careers
                                    </span>
                                </Link>
                            </li>
                            <li className="h-full flex items-center">
                                <Link
                                    href="/about"
                                    className={`relative h-full flex items-center px-1 group/link transition-colors duration-300 ${pathname === '/about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <span className={`border-b-2 pb-0.5 transition-all duration-300 ${pathname === '/about' ? 'border-red-600' : 'border-transparent group-hover/link:border-red-600/50'}`}>
                                        About Us
                                    </span>
                                </Link>
                            </li>
                            <li className="h-full flex items-center">
                                <Link
                                    href="/contact"
                                    className={`relative h-full flex items-center px-1 group/link transition-colors duration-300 ${pathname === '/contact' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <span className={`border-b-2 pb-0.5 transition-all duration-300 ${pathname === '/contact' ? 'border-red-600' : 'border-transparent group-hover/link:border-red-600/50'}`}>
                                        Contact
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <a
                            href="tel:5551234567"
                            className="ml-8 border-[0.5px] border-zinc-700 text-zinc-300 px-5 py-2 flex items-center gap-3 rounded-sm hover:border-white hover:text-white hover:scale-105 transition-all duration-300 group bg-transparent animate-in fade-in slide-in-from-right-4 duration-500 whitespace-nowrap"
                            style={{ animationDelay: '500ms', animationFillMode: 'both' }}
                        >
                            <PhoneCall className="w-4 h-4 text-red-600" />
                            <span className="font-bold tracking-widest text-xs uppercase">CALL US</span>

                            <div className="flex items-center gap-2 pl-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                                </span>
                            </div>
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle (Visible only when menu is closed) */}
                    <button
                        className={`xl:hidden relative z-50 h-20 flex items-center transition-colors duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'text-white'}`}
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Dynamic Mobile Menu */}
            {(isMenuOpen || typeof window === 'undefined') && (
                <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
            )}
        </>
    );
}
