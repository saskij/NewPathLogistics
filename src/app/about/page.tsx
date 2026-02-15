
import { ShieldCheck, TrendingUp, Users, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import aboutHero from "../../../public/About us-hero.jpg";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function About() {
    return (
        <main className="bg-zinc-50 min-h-screen">
            <PageHero
                title="Our Journey, Your Trust"
                subtitle="Built on a foundation of integrity, safety, and unwavering commitment to our drivers and partners."
                backgroundImage={aboutHero}
            />

            {/* Our Philosophy (Light) */}
            <section className="py-20 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <ScrollAnimation>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 text-zinc-900">Performance Over Labels</h2>
                        <div className="w-24 h-1 bg-zinc-900 mx-auto mb-12"></div>
                        <p className="text-xl leading-relaxed text-zinc-600">
                            At New Path Logistics, success is measured by craftsmanship and responsibility, not by the past or stereotypes. We believe that true professionalism is demonstrated on the road, through every safe delivery and every kept promise.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Why Us (Unified Light) */}
            <section className="py-20 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
                <div className="container mx-auto px-4">
                    <ScrollAnimation>
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
                    </ScrollAnimation>
                </div>
            </section>

            {/* Local Context (Unified Light) */}
            <section className="py-20 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
                <div className="container mx-auto px-4 text-center">
                    <ScrollAnimation>
                        <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm border border-zinc-200 mb-8">
                            <MapPin className="w-8 h-8 text-red-600 mr-3" />
                            <span className="text-xl font-bold uppercase tracking-widest text-zinc-900">Meridian, Idaho</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-zinc-900">Proudly Based in Meridian</h2>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                            Bringing the honesty, hard work, and resilience of our region to the highways of America.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

        </main>
    );
}

