import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/logo.png';

export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-anthracite/90 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 h-28 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="relative h-48 w-[500px] -ml-8 -mt-2">
                        <Image
                            src={logoImg}
                            alt="New Path Logistics Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-8 text-sm font-medium uppercase tracking-wide">
                        <li><Link href="/" className="hover:text-white transition-colors text-white">Home</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors text-gray-400">Services</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors text-gray-400">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-white transition-colors text-gray-400">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors text-gray-400">Contact</Link></li>
                    </ul>
                </nav>
                {/* Mobile Menu Placeholder - easy to add later if needed */}
                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
