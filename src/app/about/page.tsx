
import { ShieldCheck, TrendingUp, Users, AlertTriangle, CheckCircle } from "lucide-react";
import Image from "next/image";
import heroNew from "../../../public/hero-new.jpg";

export default function AboutPage() {
    return (
        <div className="bg-anthracite text-white min-h-screen">

            {/* Story Section / Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroNew}
                        alt="New Path Logistics Highway"
                        fill
                        className="object-cover object-center grayscale brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-transparent to-black/80" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
                        Redefining the Road
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-10"></div>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6">
                        New Path Logistics is more than a transportation provider. We are a company built on the belief that logistics should be simple, transparent, and effective.
                    </p>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                        Our culture is forged from responsibility, honesty, and an unwavering commitment to results. We don't just move freight; we move the industry forward by valuing the people behind the wheel and the partners who trust us with their cargo.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16 text-center">Core Values</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Integrity */}
                        <div className="bg-zinc-900/50 p-10 border border-zinc-800 rounded-lg hover:border-white transition-all duration-300 group flex flex-col items-center text-center">
                            <div className="mb-8 p-5 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                                <ShieldCheck className="w-12 h-12 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 text-white">Integrity</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                We do what we say. In an industry full of promises, we deliver facts. Transparency is our currency, and trust is our bottom line.
                            </p>
                        </div>

                        {/* Performance */}
                        <div className="bg-zinc-900/50 p-10 border border-zinc-800 rounded-lg hover:border-white transition-all duration-300 group flex flex-col items-center text-center">
                            <div className="mb-8 p-5 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                                <TrendingUp className="w-12 h-12 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 text-white">Performance</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Merit is our only metric. We don't care about labels or past politics. We care about safe, on-time delivery and the drive to excel.
                            </p>
                        </div>

                        {/* Respect */}
                        <div className="bg-zinc-900/50 p-10 border border-zinc-800 rounded-lg hover:border-white transition-all duration-300 group flex flex-col items-center text-center">
                            <div className="mb-8 p-5 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                                <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 text-white">Respect</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Real truckers deserve real respect. We treat our drivers as partners, not numbers. Your safety and livelihood are our priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety First */}
            <section className="py-20 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
                {/* Abstract background element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto bg-black border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
                        <div className="min-w-[80px] h-[80px] bg-white text-black rounded-full flex items-center justify-center shrink-0">
                            <AlertTriangle className="w-10 h-10" strokeWidth={2} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4 text-white">Safety First</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We never compromise on safety. From rigorous equipment maintenance to ongoing driver training, we ensure that every mile driven is a safe one. Our commitment to safety protects our drivers, our cargo, and the communities we serve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
