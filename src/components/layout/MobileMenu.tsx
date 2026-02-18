'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../../public/logo.png';
import { services } from '@/data/services';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            onClose();
        } else {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed inset-0 bg-zinc-950/90 backdrop-blur-xl z-[100] flex flex-col xl:hidden"
                >
                    {/* Header Row: Logo & Close Button */}
                    <div className="container mx-auto px-4 h-24 flex justify-between items-center shrink-0 border-b border-white/10">
                        {/* Logo in Menu */}
                        <div className="relative h-16 w-32" onClick={onClose}>
                            <Image
                                src={logoImg}
                                alt="New Path Logistics"
                                fill
                                sizes="128px"
                                placeholder="blur"
                                className="object-contain object-left grayscale brightness-[1.8] contrast-[1.2]"
                            />
                        </div>

                        <button
                            className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
                            onClick={onClose}
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 flex flex-col justify-center items-center py-8">
                        <ul className="flex flex-col items-center space-y-8 text-3xl font-bold uppercase tracking-widest w-full">
                            {/* Mobile Call Us Button - Top of list for visibility */}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 }}
                                className="w-full px-6 mb-4"
                            >
                                <a
                                    href="tel:2089927153"
                                    onClick={onClose}
                                    className="flex items-center justify-center gap-3 w-full py-4 text-center border border-white/80 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-all"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call Us</span>
                                </a>
                            </motion.li>

                            {['Home', 'Services', 'Equipment', 'Careers', 'About', 'Contact'].map((item, index) => {
                                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                                const isActive = pathname === path;
                                return (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                    >
                                        <Link
                                            href={path}
                                            onClick={item === 'Home' ? handleHomeClick : onClose}
                                            className={`transition-colors ${isActive ? 'text-red-500' : 'text-white hover:text-red-500'}`}
                                        >
                                            {item === 'About' ? 'About Us' : item}
                                        </Link>
                                    </motion.li>
                                );
                            })}
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
                                onClick={onClose}
                                className="block w-full py-4 text-center bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg shadow-red-900/20"
                            >
                                Get a Quote
                            </Link>
                        </motion.div>
                    </nav>

                    {/* Footer: Contacts */}
                    <div className="pb-8 px-6 text-center border-t border-white/10 pt-6">
                        <div className="flex flex-col space-y-4 text-zinc-300 text-sm">
                            <a href="tel:2089927153" className="flex items-center justify-center space-x-2 hover:text-white transition-colors">
                                <Phone size={18} />
                                <span>+1 (208) 992-7153</span>
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
    );
}
