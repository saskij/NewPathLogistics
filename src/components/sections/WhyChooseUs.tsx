import { Shield, Gauge, Truck } from 'lucide-react';

export default function WhyChooseUs() {
    return (
        <section className="bg-zinc-950 py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

                    {/* Feature 1 */}
                    <div className="flex flex-col items-start p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500">
                        <div className="mb-6 p-4 bg-zinc-900 rounded-full text-white inline-block shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <Gauge size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Performance Driven</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            We build a culture where success is measured solely by your results and skill. Excellence is our only metric.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-start p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500">
                        <div className="mb-6 p-4 bg-zinc-900 rounded-full text-white inline-block shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <Shield size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Uncompromising Integrity</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Transparency in pricing and honesty in relationships with partners and drivers. We value trust above all else.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-start p-8 md:p-12 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500">
                        <div className="mb-6 p-4 bg-zinc-900 rounded-full text-white inline-block shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <Truck size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Reliable Network</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Guaranteed routes and stability across the entire United States. Delivering consistency you can count on.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
