import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-anthracite/90 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold uppercase tracking-tighter text-white">New Path</span>
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
