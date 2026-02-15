import { Shield, Gauge, Truck } from 'lucide-react';

export default function WhyChooseUs() {
    return (
        <section className="bg-zinc-950 py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-4">Why Choose Us</h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

                    {/* Feature 1: Merit & Performance */}
                    <div className="flex flex-col items-start p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500">
                        <div className="mb-6 p-4 bg-zinc-900 rounded-full text-white inline-block shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-zinc-800">
                            <Gauge size={36} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Merit & Performance</h3>
                        <p className="text-zinc-400 leading-relaxed min-h-[4rem]">
                            We value results, not labels. Your success is defined by your skill and dedication, not your background.
                        </p>
                    </div>

                    {/* Feature 2: Second Chances */}
                    <div className="flex flex-col items-start p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500">
                        <div className="mb-6 p-4 bg-zinc-900 rounded-full text-white inline-block shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-zinc-800">
                            <Shield size={36} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Second Chances</h3>
                        <p className="text-zinc-400 leading-relaxed min-h-[4rem]">
                            We believe in people. We provide genuine earning opportunities and a fresh start for those ready to work hard.
                        </p>
                    </div>

                    {/* Feature 3: Professionalism */}
                    <div className="flex flex-col items-start p-8 md:p-12 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500">
                        <div className="mb-6 p-4 bg-zinc-900 rounded-full text-white inline-block shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-zinc-800">
                            <Truck size={36} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Professionalism</h3>
                        <p className="text-zinc-400 leading-relaxed min-h-[4rem]">
                            A culture of accountability, integrity, and operational excellence. We deliver on our promises, every mile.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
