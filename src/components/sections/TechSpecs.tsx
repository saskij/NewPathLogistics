'use client';

import { LazyMotion, domMax, m } from 'framer-motion';

const specs = [
    { category: "Interior Comfort", value: "Luxury leather seats with integrated heating and ventilation for all-season comfort." },
    { category: "Sleeper Berth", value: "Spacious 80\" UltraLoft sleeper with premium noise insulation and high-end bedding." },
    { category: "Climate Control", value: "Advanced automatic dual-zone climate system with auxiliary power unit (APU)." },
    { category: "Digital Cockpit", value: "State-of-the-art 15-inch high-definition digital display with customizable gauges." },
    { category: "Safety Suite", value: "Bendix Wingman Fusion with collision mitigation and adaptive cruise control." },
    { category: "Performance", value: "Fuel-efficient PACCAR MX-13 engine (up to 510 HP) for heavy-duty reliability." },
    { category: "Connectivity", value: "Premium audio system with Bluetooth, SiriusXM, and multiple charging ports." },
];

export default function TechSpecs() {
    return (
        <section className="py-24 bg-zinc-50 text-zinc-900">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Technical Specifications</h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>

                <div className="bg-white rounded-none shadow-2xl overflow-hidden border-t-4 border-red-600">
                    <LazyMotion features={domMax}>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-900 text-white text-sm uppercase tracking-widest font-bold">
                                    <th className="py-6 px-6 md:px-10 w-1/3 border-r border-zinc-800">Category</th>
                                    <th className="py-6 px-6 md:px-10 w-2/3">Feature</th>
                                </tr>
                            </thead>
                            <tbody>
                                {specs.map((spec, index) => (
                                    <m.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="border-b border-zinc-100 last:border-none hover:bg-zinc-50 transition-colors group"
                                    >
                                        <td className="py-6 px-6 md:px-10 font-bold text-zinc-900 align-top uppercase tracking-wide text-sm border-r border-zinc-100 group-hover:text-red-600 transition-colors">
                                            {spec.category}
                                        </td>
                                        <td className="py-6 px-6 md:px-10 text-zinc-600 leading-relaxed align-top group-hover:text-zinc-900 transition-colors">
                                            {spec.value}
                                        </td>
                                    </m.tr>
                                ))}
                            </tbody>
                        </table>
                    </LazyMotion>
                </div>
            </div>
        </section>
    );
}
