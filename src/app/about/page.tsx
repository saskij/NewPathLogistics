
import { ShieldCheck, TrendingUp, Users, MapPin } from "lucide-react";
import Image from "next/image";
import heroNew from "../../../public/hero-new.jpg";

export default function AboutPage() {
    return (
        <div className="bg-anthracite text-white min-h-screen">

            {/* Hero Section (Dark) */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroNew}
                        alt="New Path Logistics Highway"
                        fill
                        className="object-cover object-center grayscale brightness-[0.4] contrast-[1.2]"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/80" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 text-white drop-shadow-xl">
                        Built on the Road
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-10"></div>
                    <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-6 drop-shadow-md">
                        Founded in Meridian, Idaho, by those who understand the true weight of every mile. We don’t just manage logistics; we respect the journey.
                    </p>
                </div>
            </section>

            {/* Our Philosophy (Light) */}
            <section className="py-20 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 text-zinc-900">Performance Over Labels</h2>
                    <div className="w-24 h-1 bg-zinc-900 mx-auto mb-12"></div>
                    <p className="text-xl leading-relaxed text-zinc-600">
                        At New Path Logistics, success is measured by craftsmanship and responsibility, not by the past or stereotypes. We believe that true professionalism is demonstrated on the road, through every safe delivery and every kept promise.
                    </p>
                </div>
            </section>

            {/* Why Us (Unified Light) */}
            <section className="py-20 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Integrity */}
                        <div className="flex flex-col items-center text-center group bg-white p-10 rounded-lg shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
                            <div className="mb-8 p-6 bg-zinc-100 rounded-full group-hover:bg-zinc-200 transition-colors">
                                <ShieldCheck className="w-10 h-10 text-zinc-900" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-zinc-900">Integrity</h3>
                            <p className="text-zinc-600 leading-relaxed text-lg px-4">
                                Honesty is our only navigator. We operate with absolute transparency in every interaction.
                            </p>
                        </div>

                        {/* Accountability */}
                        <div className="flex flex-col items-center text-center group bg-white p-10 rounded-lg shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
                            <div className="mb-8 p-6 bg-zinc-100 rounded-full group-hover:bg-zinc-200 transition-colors">
                                <Users className="w-10 h-10 text-zinc-900" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-zinc-900">Accountability</h3>
                            <p className="text-zinc-600 leading-relaxed text-lg px-4">
                                We take ownership of the cargo and the people. Every mile is a commitment we keep.
                            </p>
                        </div>

                        {/* Excellence */}
                        <div className="flex flex-col items-center text-center group bg-white p-10 rounded-lg shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
                            <div className="mb-8 p-6 bg-zinc-100 rounded-full group-hover:bg-zinc-200 transition-colors">
                                <TrendingUp className="w-10 h-10 text-zinc-900" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-zinc-900">Excellence</h3>
                            <p className="text-zinc-600 leading-relaxed text-lg px-4">
                                Only the highest standard of work. We don't settle for "good enough."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Context (Unified Light) */}
            <section className="py-20 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm border border-zinc-200 mb-8">
                        <MapPin className="w-8 h-8 text-red-600 mr-3" />
                        <span className="text-xl font-bold uppercase tracking-widest text-zinc-900">Meridian, Idaho</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-zinc-900">Proudly Based in Meridian</h2>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        Bringing the honesty, hard work, and resilience of our region to the highways of America.
                    </p>
                </div>
            </section>

        </div>
    );
}

