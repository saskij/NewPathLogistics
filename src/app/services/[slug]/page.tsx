import { services } from '@/data/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { Metadata } from 'next';

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);
    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }
    return {
        title: `${service.title} | New Path Logistics`,
        description: service.shortDescription,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="bg-zinc-50 min-h-screen pt-16">
            {/* Hero Section - Dark */}
            <section className="bg-zinc-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-8">
                        <Link href="/services" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors text-sm font-medium uppercase tracking-wider">
                            <ArrowLeft size={16} /> Back to Services
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                            <Icon size={48} className="text-red-500" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">{service.title}</h1>
                            <p className="text-xl text-zinc-400 max-w-2xl">{service.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section - Light */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold uppercase tracking-wide text-zinc-900 mb-6 border-b border-zinc-200 pb-4">
                                Service Overview
                            </h2>
                            <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6 text-lg leading-relaxed">
                                {service.fullDescription.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Benefits Box */}
                            <div className="bg-white p-8 rounded-sm shadow-sm border border-zinc-200">
                                <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900 mb-6">Key Benefits</h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-zinc-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Box */}
                            <div className="bg-zinc-900 text-white p-8 rounded-sm shadow-lg relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">Ready to Ship?</h3>
                                    <p className="text-zinc-400 mb-8">
                                        Get a competitive quote for your {service.title.toLowerCase()} needs today.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="w-full block text-center py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider rounded transition-colors"
                                    >
                                        Get a Quote
                                    </Link>
                                    <div className="mt-6 flex justify-center items-center gap-2 text-zinc-400 text-sm">
                                        <Phone size={16} />
                                        <span>Or call us: (555) 123-4567</span>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
