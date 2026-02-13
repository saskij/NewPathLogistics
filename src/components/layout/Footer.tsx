import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import logoImg from '../../../public/logo.png';
import mapImg from '../../../public/map.png';

export default function Footer() {
    return (
        <footer id="footer" className="bg-black text-white pt-20 pb-8 border-t border-zinc-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-20 items-stretch">

                    {/* Column 1: Brand & Contact */}
                    <div className="flex flex-col items-start h-full justify-between">
                        <div>
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
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-start md:items-center h-full">
                        <div className="w-full max-w-xs h-full flex flex-col">
                            <h3 className="text-lg font-bold uppercase tracking-widest mb-8 text-white border-l-4 border-red-600 pl-4">Quick Links</h3>
                            <nav className="flex-grow">
                                <ul className="flex flex-col justify-between h-full min-h-[200px] text-sm font-medium tracking-wide text-zinc-400">
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
                    <div className="flex flex-col items-start md:items-end h-full">
                        <h3 className="text-lg font-bold uppercase tracking-widest mb-8 text-white text-right w-full border-r-4 border-red-600 pr-4">Nationwide</h3>
                        <div className="relative w-full max-w-[300px] aspect-[4/3] group ml-auto">
                            <Image
                                src={mapImg}
                                alt="Nationwide Coverage Map"
                                fill
                                className="object-contain object-right opacity-80 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            />

                            {/* Pulsating Pin for Idaho (Approximate Position) */}
                            <div className="absolute top-[28%] left-[22%] transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-2 h-2 bg-red-600 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                                <div className="absolute top-0 left-0 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                            </div>
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
