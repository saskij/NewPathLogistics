import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import logoImg from '../../../public/logo.png';
import mapImg from '../../../public/map.png';

export default function Footer() {
    return (
        <footer id="footer" className="bg-black text-white pt-20 pb-8 border-t border-zinc-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-20">

                    {/* Column 1: Brand & Contact */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="block mb-8 relative w-56 h-28 -ml-2">
                            <Image
                                src={logoImg}
                                alt="New Path Logistics"
                                fill
                                className="object-contain object-left grayscale brightness-[1.8] contrast-[1.2]"
                            />
                        </Link>

                        <div className="space-y-6">
                            <h3 className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-4">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 group">
                                    <Phone className="w-5 h-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="text-base font-bold hover:text-red-500 transition-colors">
                                            <a href="tel:5551234567">(555) 123-4567</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <Mail className="w-5 h-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="text-base font-bold hover:text-red-500 transition-colors">
                                            <a href="mailto:info@newpathlogistics.com">info@newpathlogistics.com</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <MapPin className="w-5 h-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="text-base text-zinc-300 leading-relaxed">
                                            123 Logistics Way<br />
                                            Denver, CO 80202
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-start md:items-center">
                        <div className="w-full max-w-xs">
                            <h3 className="text-lg font-bold uppercase tracking-widest mb-8 text-white border-l-4 border-red-600 pl-4">Quick Links</h3>
                            <nav>
                                <ul className="flex flex-col space-y-4 text-sm font-medium tracking-wide text-zinc-400">
                                    <li><Link href="/" className="hover:text-white hover:pl-2 transition-all duration-300 block border-b border-zinc-900 pb-2">Home</Link></li>
                                    <li><Link href="/services" className="hover:text-white hover:pl-2 transition-all duration-300 block border-b border-zinc-900 pb-2">Services</Link></li>
                                    <li><Link href="/about" className="hover:text-white hover:pl-2 transition-all duration-300 block border-b border-zinc-900 pb-2">About Us</Link></li>
                                    <li><Link href="/careers" className="hover:text-white hover:pl-2 transition-all duration-300 block border-b border-zinc-900 pb-2">Careers</Link></li>
                                    <li><Link href="/contact" className="hover:text-white hover:pl-2 transition-all duration-300 block border-b border-zinc-900 pb-2">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Column 3: Nationwide Map */}
                    <div className="flex flex-col items-start md:items-end">
                        <h3 className="text-lg font-bold uppercase tracking-widest mb-8 text-white text-right w-full border-r-4 border-red-600 pr-4">Nationwide</h3>
                        <div className="relative w-full max-w-[300px] aspect-[4/3] group ml-auto">
                            <Image
                                src={mapImg}
                                alt="Nationwide Coverage Map"
                                fill
                                className="object-contain object-right opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                        <p className="text-xs text-zinc-500 mt-4 uppercase tracking-widest text-right w-full">Serving all 48 contiguous states</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Copyright & Links */}
                    <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] text-zinc-500 uppercase tracking-widest">
                        <p>&copy; 2026 New Path Logistics.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>

                    {/* Social Media - Now at bottom */}
                    <div className="flex gap-4">
                        <a href="#" className="p-2 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
