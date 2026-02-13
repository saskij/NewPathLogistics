import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import driverFleet from '../../../public/driver-fleet.jpg';

const benefits = [
    "$1,800 Weekly Guaranteed (Gross)",
    "$1,000 Sign-on Bonus (after 90 days)",
    "Choice of 1099 or W-2",
    "Dedicated Runs & No Slip Seating (Your own truck)",
    "Favorable Home Time",
];

export default function Careers() {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <h2 className="text-4xl lg:text-5xl font-bold text-anthracite mb-2 uppercase tracking-tight">Join Our Fleet</h2>
                        <div className="w-20 h-1.5 bg-anthracite mb-8"></div>

                        <p className="text-xl text-gray-600 mb-10 font-medium">
                            Drive for a company that values your skill and commitment. We offer competitive pay, stability, and respect.
                        </p>

                        <ul className="space-y-6 mb-12">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start group">
                                    <div className="mt-1 mr-4 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-6 h-6 fill-current" />
                                    </div>
                                    <span className="text-xl font-bold text-gray-800">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-sm text-gray-500 italic mb-8">
                            * Specifics like home time and detention will be discussed during the interview to ensure they fit your needs.
                        </p>

                        <Link
                            href="/careers"
                            className="inline-block px-10 py-5 bg-anthracite text-white text-lg font-bold uppercase tracking-wider hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Start Your Application
                        </Link>
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative h-[500px] lg:h-auto min-h-[600px] bg-gray-200">
                    <Image
                        src={driverFleet}
                        alt="Professional New Path Logistics Driver"
                        fill
                        className="object-cover brightness-[0.7] contrast-[1.1]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-anthracite/10 mix-blend-multiply transition-opacity hover:opacity-0 duration-500"></div>
                </div>
            </div>
        </section>
    );
}
