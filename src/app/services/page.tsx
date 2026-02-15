import { Map, Package, Route, ArrowRight, ShieldCheck, Truck, Globe, Warehouse, MapPin, Shield } from "lucide-react";
import Image from "next/image";
import heroServices from "../../../public/hero-services.jpg";
import heroNew from "../../../public/hero-new.jpg";
import joinFleet from "../../../public/Join our fleet.jpg";
import Link from "next/link";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { services } from "@/data/services";
import PageHero from "@/components/ui/PageHero";

export default function ServicesPage() {
    return (
        <main className="bg-zinc-50 text-zinc-900 min-h-screen">

            <PageHero
                title="Comprehensive Logistics"
                subtitle="From coast-to-coast trucking to last-mile delivery, we provide the solutions that keep your business moving forward."
                backgroundImage={heroServices}
            />

            {/* Service Details - Dynamic List */}
            {services.map((service, index) => {
                const isEven = index % 2 === 0;
                const Icon = service.icon;
                // Use the specific image defined in data, fallback to heroNew if not present
                const ServiceImage = service.image || heroNew;

                return (
                    <section key={service.id} className="py-20 border-b border-zinc-200">
                        <div className="container mx-auto px-4">
                            <ScrollAnimation>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    {/* Content Column */}
                                    <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-zinc-100 rounded-lg">
                                                <Icon className="w-8 h-8 text-black" strokeWidth={1.5} />
                                            </div>
                                            <h2 className="text-3xl font-bold uppercase tracking-wide text-zinc-900">{service.title}</h2>
                                        </div>
                                        <div className="h-px w-full bg-zinc-200 mb-8"></div>
                                        <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                                            {service.shortDescription}
                                        </p>
                                        <ul className="space-y-4 mb-8">
                                            {service.benefits.slice(0, 3).map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3 text-zinc-600">
                                                    <ShieldCheck className="w-5 h-5 text-black" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={`/services/${service.id}`}
                                            className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider hover:text-red-700 transition-colors group"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Image Column */}
                                    <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative h-[400px] w-full rounded-sm overflow-hidden border border-zinc-200 shadow-sm`}>
                                        <Image
                                            src={ServiceImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </section>
                );
            })}

            {/* CTA Section */}
            <section className="bg-zinc-900 py-24 border-t border-zinc-800">
                <div className="container mx-auto px-4 text-center">
                    <ScrollAnimation>
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
                    </ScrollAnimation>
                </div>
            </section>

        </main>
    );
}
