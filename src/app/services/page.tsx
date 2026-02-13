
import { Map, Package, Route, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import heroNew from "../../../public/hero-new.jpg";
import joinFleet from "../../../public/Join our fleet.jpg";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="bg-zinc-50 text-zinc-900 min-h-screen">

            {/* Page Header (Dark Hero) */}
            <section className="bg-zinc-950 py-24 border-b border-zinc-800">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
                        Precision Logistics Solutions
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
                    <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
                        Delivering excellence, mile after mile.
                    </p>
                </div>
            </section>

            {/* Service Details - Unified Light Layout */}
            {/* 1. Nationwide Trucking */}
            <section className="py-20 border-b border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-zinc-100 rounded-lg">
                                    <Map className="w-8 h-8 text-black" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-3xl font-bold uppercase tracking-wide text-zinc-900">Nationwide Trucking</h2>
                            </div>
                            <div className="h-px w-full bg-zinc-200 mb-8"></div>
                            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                                We provide comprehensive coverage across all 48 contiguous states. Our fleet is equipped to handle long-haul transport with the reliability and speed your business demands.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-zinc-600">
                                    <ShieldCheck className="w-5 h-5 text-black" />
                                    <span>OTR (Over-The-Road) Excellence</span>
                                </li>
                                <li className="flex items-center gap-3 text-zinc-600">
                                    <ShieldCheck className="w-5 h-5 text-black" />
                                    <span>Real-time Tracking & Updates</span>
                                </li>
                                <li className="flex items-center gap-3 text-zinc-600">
                                    <ShieldCheck className="w-5 h-5 text-black" />
                                    <span>Safety-First Protocols</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-sm overflow-hidden border border-zinc-200 shadow-sm">
                            <Image
                                src={heroNew}
                                alt="Nationwide Trucking"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Freight Solutions */}
            <section className="py-20 border-b border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 relative h-[400px] w-full rounded-sm overflow-hidden border border-zinc-200 shadow-sm">
                            <Image
                                src={joinFleet}
                                alt="Freight Solutions"
                                fill
                                className="object-cover brightness-[0.9] contrast-[1.1] hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="order-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-zinc-100 rounded-lg">
                                    <Package className="w-8 h-8 text-black" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-3xl font-bold uppercase tracking-wide text-zinc-900">Freight Solutions</h2>
                            </div>
                            <div className="h-px w-full bg-zinc-200 mb-8"></div>
                            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                                No two shipments are alike. We offer tailored freight solutions designed to meet the specific requirements of your cargo, timeline, and budget.
                            </p>
                            <p className="text-zinc-600 leading-relaxed mb-6">
                                From complex logistical challenges to standard shipments, our team approaches every job with a problem-solving mindset. We optimize routes and load planning to ensure maximum efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Dedicated Runs */}
            <section className="py-20 border-b border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-zinc-100 rounded-lg">
                                    <Route className="w-8 h-8 text-black" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-3xl font-bold uppercase tracking-wide text-zinc-900">Dedicated Runs</h2>
                            </div>
                            <div className="h-px w-full bg-zinc-200 mb-8"></div>
                            <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                                Consistency is key. Our dedicated runs provide stable and predictable schedules for both our drivers and our clients, ensuring your supply chain never misses a beat.
                            </p>
                            <p className="text-zinc-600 leading-relaxed">
                                We build long-term partnerships that allow for dedicated capacity, meaning your freight always has a truck ready when you need it.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-sm overflow-hidden border border-zinc-200 shadow-sm">
                            {/* Reusing heroNew for now as requested to use existing assets */}
                            <Image
                                src={heroNew}
                                alt="Dedicated Runs"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700 grayscale-[50%]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-zinc-900 py-24 border-t border-zinc-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 text-white">
                        Need a custom solution?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Let's discuss how New Path Logistics can streamline your supply chain.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-white text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Get a Quote
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
