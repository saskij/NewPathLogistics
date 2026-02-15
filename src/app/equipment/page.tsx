import Image from "next/image";
import Link from "next/link";
import { Sofa, Monitor, Thermometer, ShieldCheck, Wrench, Leaf, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import TechSpecs from "@/components/sections/TechSpecs";

import driverFleet from "../../../public/driver-fleet.jpg"; // Using driver-fleet as base, will have overlay
import equipmentImg from "../../../public/hero-services.jpg";

export const metadata = {
    title: "Equipment | New Path Logistics",
    description: "Explore our modern fleet of 2024 Peterbilt trucks. Top-tier equipment for top-tier drivers.",
};

export default function EquipmentPage() {
    return (
        <main className="bg-zinc-950 text-white min-h-screen">

            {/* 1. Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={driverFleet}
                        alt="New Path Logistics Fleet - Peterbilt 2024"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Gradient Overlay: Deep Black to Transparent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <ScrollAnimation>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-none drop-shadow-2xl">
                            Top-Tier Equipment <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                                For Top-Tier Drivers
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg border-l-4 border-red-600 pl-6 text-left md:text-center md:border-none md:pl-0">
                            We operate a modern fleet of 2024 Peterbilt trucks, designed for maximum reliability and driver comfort.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 2. The Peterbilt Advantage (bg-zinc-50) */}
            <section className="py-24 bg-zinc-50 text-zinc-900 border-b border-zinc-200">
                <div className="container mx-auto px-4">
                    <ScrollAnimation>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Text Side */}
                            <div className="order-2 lg:order-1">
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                                    The Peterbilt Advantage
                                </h2>
                                <div className="w-24 h-1 bg-red-600 mb-10"></div>

                                <p className="text-xl text-zinc-700 leading-relaxed mb-8 font-medium">
                                    Our 2024 models are equipped with the latest aerodynamic packages and fuel-efficient engines to ensure timely deliveries and environmental responsibility.
                                </p>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 group">
                                        <div className="p-3 bg-zinc-100 rounded-sm text-red-600 mt-1 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                            <Leaf className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold uppercase tracking-wide mb-1">Fuel Efficiency</h3>
                                            <p className="text-zinc-600">Advanced aerodynamics meant to save fuel and reduce footprint.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 group">
                                        <div className="p-3 bg-zinc-100 rounded-sm text-red-600 mt-1 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                            <Wrench className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold uppercase tracking-wide mb-1">Reliability</h3>
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
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale brightness-[0.9] contrast-[1.1] group-hover:grayscale-0"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 border-4 border-white/10 group-hover:border-white/30 transition-colors"></div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 2.5 Tech Specs */}
            <TechSpecs />

            {/* 3. Comfort on the Road (bg-zinc-950 - DARK MODE) */}
            <section className="py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900/50">
                <div className="container mx-auto px-4 relative z-10">
                    <ScrollAnimation>
                        <div className="max-w-4xl mx-auto mb-16 text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                                Comfort on the <span className="text-red-600">Road</span>
                            </h2>
                            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                                Driver comfort is not a luxury; it's a necessity. Our cabs feature ergonomic seating, advanced climate control, and spacious sleeper berths to make life on the road feel like home.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="group border border-zinc-800 bg-zinc-900/50 p-8 rounded-sm hover:border-red-600/50 transition-colors duration-300">
                                <Sofa className="w-10 h-10 text-zinc-500 mb-6 group-hover:text-red-500 transition-colors" strokeWidth={1} />
                                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">Ergonomic Seating</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Premium luxury leather seats with integrated heating and ventilation, designed for long-haul support and posture health.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="group border border-zinc-800 bg-zinc-900/50 p-8 rounded-sm hover:border-red-600/50 transition-colors duration-300">
                                <Monitor className="w-10 h-10 text-zinc-500 mb-6 group-hover:text-red-500 transition-colors" strokeWidth={1} />
                                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">Modern Dash</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    State-of-the-art 15-inch high-definition digital display with customizable gauges and instant connectivity.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="group border border-zinc-800 bg-zinc-900/50 p-8 rounded-sm hover:border-red-600/50 transition-colors duration-300">
                                <Thermometer className="w-10 h-10 text-zinc-500 mb-6 group-hover:text-red-500 transition-colors" strokeWidth={1} />
                                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">Climate Control</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Advanced automatic dual-zone climate system with auxiliary power unit (APU) for perfect temperature, engine-off.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 4. Uncompromising Safety (Redesigned) */}
            <section className="py-24 bg-white text-zinc-900">
                <div className="container mx-auto px-4">
                    <ScrollAnimation>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Left: Title */}
                            <div className="flex flex-col justify-center">
                                <ShieldCheck className="w-20 h-20 text-red-600 mb-8" strokeWidth={1} />
                                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                                    Safety Is<br />Our Promise
                                </h2>
                                <div className="w-24 h-2 bg-zinc-900"></div>
                            </div>

                            {/* Right: Checklist */}
                            <div className="flex flex-col justify-center">
                                <p className="text-xl text-zinc-600 leading-relaxed mb-10">
                                    Every truck in our fleet undergoes rigorous inspections. We provide our drivers with the tools they need to stay safe and efficient across all 48 states.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        "Collision Mitigation System",
                                        "Adaptive Cruise Control",
                                        "Night Vision Optimization",
                                        "Lane Departure Warning",
                                        "Rigorous Pre-Trip Inspections"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-lg font-bold uppercase tracking-wide text-zinc-800">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* 5. Final CTA + Local Context */}
            <section className="py-20 bg-zinc-900 text-white text-center border-t border-zinc-800">
                <div className="container mx-auto px-4">
                    <ScrollAnimation>
                        {/* Local Context */}
                        <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-10">
                            Our fleet is serviced and maintained at our main hub in <span className="text-red-500 font-bold">Meridian, Idaho</span>.
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
                            Ready to Take the Wheel?
                        </h2>
                        <Link
                            href="/careers"
                            className="inline-flex items-center gap-3 bg-red-600 text-white px-12 py-6 rounded-sm font-bold text-lg hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl hover:shadow-red-900/30"
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
