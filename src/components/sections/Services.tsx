import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
    return (
        <section className="py-24 bg-zinc-50 text-zinc-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-zinc-900 mb-4">Our Services</h2>
                    <div className="w-24 h-1 bg-zinc-900 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white border border-zinc-200 rounded-sm hover:border-zinc-900 transition-all duration-300 flex flex-col items-start hover:shadow-xl overflow-hidden"
                            >
                                {service.image && (
                                    <div className="relative w-full h-48 overflow-hidden bg-zinc-100">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            loading="lazy"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                                    </div>
                                )}
                                <div className="p-8 flex flex-col items-start w-full">
                                    <div className="mb-6 p-3 bg-zinc-100 rounded-lg group-hover:bg-zinc-200 transition-colors">
                                        <Icon className="w-10 h-10 text-zinc-900" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide text-zinc-900">{service.title}</h3>
                                    <p className="text-zinc-600 mb-8 flex-grow leading-relaxed">
                                        {service.shortDescription}
                                    </p>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="h-12 w-full px-8 border border-zinc-300 text-zinc-900 text-sm font-bold uppercase tracking-wider rounded hover:bg-zinc-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                                        aria-label={`Learn more about ${service.title}`}
                                    >
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
