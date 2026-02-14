import { TrendingUp, RefreshCw, ShieldCheck } from "lucide-react";

const advantages = [
    {
        title: "Merit & Performance",
        description: "We value results, not labels.",
        icon: TrendingUp,
    },
    {
        title: "Second Chances",
        description: "We believe in people and provide earning opportunities regardless of background.",
        icon: RefreshCw,
    },
    {
        title: "Professionalism",
        description: "A culture of accountability and integrity.",
        icon: ShieldCheck,
    },
];

export default function Advantage() {
    return (
        <section className="py-24 bg-anthracite text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">The New Path Advantage</h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {advantages.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="mb-6 p-4 bg-white/5 rounded-full ring-1 ring-white/20">
                                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
