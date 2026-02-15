import Image from "next/image";
import Link from "next/link";
import { Sofa, Monitor, Thermometer, ShieldCheck, Wrench, Leaf, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import TechSpecs from "@/components/sections/TechSpecs";

import driverFleet from "../../../public/NATIONWIDE TRUCKING-card.jpg";
import equipmentImg from "../../../public/hero-services.jpg"; // Using as placeholder for truck detail

export const metadata = {
    title: "Equipment | New Path Logistics",
    description: "Explore our modern fleet of 2024 Peterbilt trucks. Top-tier equipment for top-tier drivers.",
};

export default function EquipmentPage() {
    return (
        <main className="bg-zinc-950 text-white min-h-screen">

            {/* 1. Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={driverFleet}
                        alt="New Path Logistics Fleet"
                        fill
                        className="object-cover brightness-[0.6] contrast-[1.1]"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <ScrollAnimation>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8 leading-tight drop-shadow-2xl">
                            Top-Tier Equipment <br />
                            <span className="text-red-600">For Top-Tier Drivers</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                            We operate a modern fleet of 2024 Peterbilt trucks, designed for maximum reliability and driver comfort.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 2. The Peterbilt Advantage (bg-zinc-50) */}
            <section className="py-24 bg-zinc-50 text-zinc-900">
                <div className="container mx-auto px-4">
                    <ScrollAnimation>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Text Side */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                                    The Peterbilt Advantage
                                </h2>
                                <div className="w-24 h-1 bg-red-600 mb-10"></div>

                                <p className="text-xl text-zinc-700 leading-relaxed mb-8">
                                    Our 2024 models are equipped with the latest aerodynamic packages and fuel-efficient engines to ensure timely deliveries and environmental responsibility.
                                </p>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="p-2 bg-zinc-100 rounded-full text-red-600 mt-1">
                                            <Leaf className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold uppercase tracking-wide">Fuel Efficiency</h3>
                                            <p className="text-zinc-600">Advanced aerodynamics meant to save fuel and reduce footprint.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="p-2 bg-zinc-100 rounded-full text-red-600 mt-1">
                                            <Wrench className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold uppercase tracking-wide">Reliability</h3>
                                            <p className="text-zinc-600">Rigorous maintenance schedules keep you moving, not waiting.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Image Side */}
                            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-2xl group">
                                <Image
                                    src={equipmentImg}
                                    alt="2024 Peterbilt Truck Detail"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 border-4 border-white/20"></div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 2.5 Tech Specs */}
            <TechSpecs />

            {/* 3. Comfort on the Road (bg-zinc-900) */}
            <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-800/20 -skew-x-12 transform translate-x-32" />

                <div className="container mx-auto px-4 relative z-10">
                    <ScrollAnimation>
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                                Comfort on the Road
                            </h2>
                            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                            <p className="text-xl text-zinc-300 leading-relaxed">
                                Driver comfort is not a luxury; it's a necessity. Our cabs feature ergonomic seating, advanced climate control, and spacious sleeper berths to make life on the road feel like home.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {/* Feature 1 */}
                            <div className="bg-zinc-800/50 p-10 rounded-sm border border-zinc-700 hover:border-red-600 transition-colors group">
                                <div className="mb-6 inline-block p-4 bg-zinc-950 rounded-full text-white group-hover:text-red-500 transition-colors shadow-lg">
                                    <Sofa className="w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">Ergonomic Seating</h3>
                                <p className="text-zinc-400">Premium seats designed for long-haul support.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-zinc-800/50 p-10 rounded-sm border border-zinc-700 hover:border-red-600 transition-colors group">
                                <div className="mb-6 inline-block p-4 bg-zinc-950 rounded-full text-white group-hover:text-red-500 transition-colors shadow-lg">
                                    <Monitor className="w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">Modern Dash</h3>
                                <p className="text-zinc-400">Smart displays and connectivity at your fingertips.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-zinc-800/50 p-10 rounded-sm border border-zinc-700 hover:border-red-600 transition-colors group">
                                <div className="mb-6 inline-block p-4 bg-zinc-950 rounded-full text-white group-hover:text-red-500 transition-colors shadow-lg">
                                    <Thermometer className="w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">Climate Control</h3>
                                <p className="text-zinc-400">Advanced APUs for perfect temperature, engine-off.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 4. Safety & Reliability (bg-zinc-50) */}
            <section className="py-24 bg-zinc-50 text-zinc-900">
                <div className="container mx-auto px-4">
                    <ScrollAnimation>
                        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 md:p-16 shadow-xl border border-zinc-100 rounded-sm">
                            <div className="flex-shrink-0 p-6 bg-zinc-100 rounded-full">
                                <ShieldCheck className="w-24 h-24 text-red-600" strokeWidth={1} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
                                    Uncompromising Safety
                                </h2>
                                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6">
                                    Every truck in our fleet undergoes rigorous inspections. We provide our drivers with the tools they need to stay safe and efficient across all 48 states. Safety isn't just a policy; it's our promise to you and the families sharing the road.
                                </p>
                                <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-red-600"></div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-20 bg-red-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <ScrollAnimation>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
                            Ready to Take the Wheel?
                        </h2>
                        <Link
                            href="/careers"
                            className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-sm font-bold text-lg hover:bg-zinc-100 transition-transform transform hover:scale-105 shadow-2xl"
                        >
                            Apply to Drive These Beauties
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </ScrollAnimation>
                </div>
            </section>

        </main>
    );
}
