import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import logoImg from '../../../public/logo.png';

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
                        <div className="relative w-full aspect-[5/3] group">
                            {/* Stylized US Map SVG - Increased contrast */}
                            <svg viewBox="0 0 950 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-zinc-500 stroke-[2] group-hover:stroke-zinc-300 transition-colors duration-500">
                                <path d="M936.8,127.3c-2.4-7.3-8.6-12.7-16-14.7c-9.6-2.6-19.4-1.6-28.7,2.1c-6.6,2.6-13.6,1.4-19.2-3.1
    c-7.3-5.9-16.7-7-25-2.8c-2,1-4.2,0.9-6.1-0.2c-5.9-3.3-12.3-5.2-19-6.3c-3.1-0.5-5.9-2.3-7.5-5c-3.3-5.5-8.3-9.5-14.5-11.4
    c-7.8-2.4-16.2-1.4-23.2,2.8c-1.8,1.1-4,1.4-6,0.8c-6.8-2-14-1.8-20.7,0.7c-4.4,1.6-9.1,1.1-13.2-1.3c-6.4-3.8-13.9-5.1-21.2-3.6
    c-4.7,1-9.6-0.3-13.3-3.6c-5.2-4.6-11.8-7.1-18.7-7.1c-0.8,0-1.6,0-2.4,0.1c-6.9,0.5-13.6-2-18.4-7c-5.7-5.9-13.6-9.1-21.9-8.8
    c-5.6,0.2-10.9-2-14.7-6.1C591,46.7,581.9,43.2,572.3,44c-11.4,1-21.5,8.2-25.5,18.3c-1.1,2.8-3.4,4.9-6.3,5.7
    c-6.4,1.8-12.2,5.8-16.2,11.3c-2.4,3.3-6.2,5.2-10.3,5.1c-9.1-0.2-17.6,4-22.3,11.2c-3.4,5.2-9,8.4-15.2,8.7c-9.3,0.4-17.8,5.4-22.6,13.2
    c-2.1,3.4-5.5,5.8-9.5,6.5c-7.8,1.4-14.8,6.2-18.9,12.7c-2.1,3.3-5.6,5.4-9.5,5.8c-7.1,0.7-13.7,4.3-18.1,9.8
    c-2.2,2.7-5.3,4.5-8.7,5.1c-7.3,1.3-13.9,5.7-17.9,11.8c-2,3-5.2,5.1-8.8,5.7c-6.2,1.1-11.7,4.6-15.3,9.7c-11.2,15.8-26.6,15.2-34.7,14.6
    c-5.4-0.4-10.6,1.4-14.6,4.9c-8.9,7.9-20.7,11.6-32.5,10.2c-5.5-0.7-11,1.1-15.1,4.9c-7.1,6.6-16.7,9.7-26.3,8.5
    c-5.7-0.7-11.4,1.2-15.7,5.2c-7.5,6.9-17.7,10-27.7,8.5c-5.4-0.8-10.9,0.9-14.9,4.6c-7.5,6.9-17.7,10-27.7,8.5
    c-5.4-0.8-10.9,0.9-14.9,4.6c-9.6,8.8-22.7,11.8-35.3,8c-5.2-1.6-10.8-0.9-15.4,1.9c-10.3,6.2-22.6,7.6-34,3.8
    c-4.6-1.5-9.6-1.2-14.1,0.9c-11.8,5.5-25.3,5.1-36.8-1.1c-5.6-3-12.2-3.6-18.3-1.6C44.3,277.1,38,284,28.6,287.6
    c-7.2,2.8-13.2,8.2-16.6,14.9C10,306.4,10,310.6,12.1,314.1c4,6.7,3.4,15.1-1.6,21.2c-4.4,5.4-5.6,12.6-3.2,19
    c2.4,6.4,8.1,11,14.8,12c5.6,0.8,10.8,3.7,14.2,8.1c4.5,5.8,11.1,9.5,18.3,10.3c6.8,0.7,12.8,4.5,16.4,10.2
    c4.7,7.4,12.5,12.2,21.1,13.1c5.9,0.6,11.2,3.8,14.5,8.5c4.6,6.6,11.9,10.9,19.9,11.7c8.3,0.8,15.6,5.6,19.8,12.8
    c2.4,4.1,6.5,6.9,11.1,7.6c11.9,1.8,21.8,9.7,26,20.8c2.4,6.4,8.1,11,14.8,12c7.6,1.1,14,6.2,17.3,13.1c2.1,4.4,6.3,7.5,11.1,8.3
    c11,1.8,20.3,9.7,23.9,20.1c3,8.6,10.7,14.7,19.7,15.7c9,1,16.8,7.2,19.6,15.7c1.4,4.1,5,7.1,9.3,7.8c11,1.8,20.3,9.7,23.9,20.1
    c3,8.6,10.7,14.7,19.7,15.7c9,1,16.8,7.2,19.6,15.7c1.7,5.1,6.5,8.4,11.8,8.2c12.1-0.5,23.5,4.7,29.9,13.6h0.1l0,0
    c6.4,8.9,16.5,14.6,27.5,15.4c4.6,0.3,8.9,2.6,11.9,6.2c6.9,8.4,17.1,13.6,27.9,14.1c4.6,0.2,9,2.4,11.9,6
    c6.3,7.7,15.7,12.2,25.6,12.2c1.9,0,3.8-0.2,5.7-0.5c6.5-1.1,13,1.4,17.2,6.5c10.4,12.5,25.6,19.6,41.9,19.6c0,0,0,0,0,0
    c6.5,0,13,0.3,19.4,0.3c60.3,0,109.1-48.9,109.1-109.1c0-14.7-2.9-28.7-8.2-41.5c-4.4-10.6-2.6-22.8,4.9-31.9
    c7.5-9.1,18.8-14.4,30.6-14.4h0c11.7,0,22.9-5.2,30.5-14.1c7.4-8.7,9.6-20.7,5.9-31.5c-3.1-9,0.3-19,8.4-24.5
    c9.6-6.5,15.4-17.4,15.4-29c0-8.2,3.3-16.1,9.1-21.9c8.2-8.2,12.8-19.5,12.8-31.1c0-2-0.1-4-0.4-6c-1.3-8.8,3.2-17.6,11.1-21.4
    c10.6-5.1,17.3-15.9,17.3-27.7c0-2.4-0.3-4.7-0.8-7.1c-2.6-10.9,2.9-22,13.2-26.2C921.2,138.8,934.3,134.9,936.8,127.3z"/>
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                                <div className="absolute top-0 left-0 w-2 h-2 bg-red-600 rounded-full"></div>
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
