import { CheckCircle2 } from 'lucide-react';
import { LazyMotion, domMax, m } from 'framer-motion';

const specs = [
    { category: "Interior Comfort", value: "Luxury leather seats with integrated heating and ventilation for all-season comfort." },
    { category: "Sleeper Berth", value: 'Spacious 80" UltraLoft sleeper with premium noise insulation and high-end bedding.' },
    { category: "Climate Control", value: "Advanced automatic dual-zone climate system with auxiliary power unit (APU)." },
    { category: "Digital Cockpit", value: "State-of-the-art 15-inch high-definition digital display with customizable gauges." },
    { category: "Safety Suite", value: "Bendix Wingman Fusion with collision mitigation and adaptive cruise control." },
    { category: "Performance", value: "Fuel-efficient PACCAR MX-13 engine (up to 510 HP) for heavy-duty reliability." },
    { category: "Connectivity", value: "Premium audio system with Bluetooth, SiriusXM, and multiple charging ports." },
];

export default function TechSpecs() {
    return (
        <section className="py-24 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Technical Specifications</h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>

                {/* DESKTOP VIEW (md+) */}
                <div className="hidden md:block bg-white shadow-2xl rounded-sm p-8 pb-4">
                    <LazyMotion features={domMax}>
                        <table className="w-full text-left border-collapse table-fixed">
                            <thead>
                                <tr className="text-zinc-400 text-xs uppercase tracking-widest font-bold border-b-2 border-zinc-100">
                                    <th className="py-4 px-6 w-[35%]">Category</th>
                                    <th className="py-4 px-6 w-[65%]">Feature Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {specs.map((spec, index) => (
                                    <m.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="border-b border-zinc-100 last:border-none hover:bg-red-50/30 transition-colors group cursor-default"
                                    >
                                        <td className="py-6 px-6 align-top">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-zinc-300 mt-0.5 group-hover:text-red-600 transition-colors" />
                                                <span className="font-bold text-zinc-900 uppercase tracking-wide text-sm group-hover:text-red-600 transition-colors">
                                                    {spec.category}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-6 px-6 text-zinc-700 leading-relaxed align-top font-mono text-sm">
                                            {spec.value}
                                        </td>
                                    </m.tr>
                                ))}
                            </tbody>
                        </table>
                    </LazyMotion>
                </div>

                {/* MOBILE VIEW (< md) */}
                <div className="md:hidden space-y-4">
                    {specs.map((spec, index) => (
                        <div key={index} className="bg-white p-6 rounded-sm shadow-md border-l-4 border-red-600">
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle2 className="w-5 h-5 text-red-600" />
                                <h3 className="font-bold text-zinc-900 uppercase tracking-wide text-sm">
                                    {spec.category}
                                </h3>
                            </div>
                            <p className="text-zinc-600 font-mono text-sm leading-relaxed">
                                {spec.value}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
