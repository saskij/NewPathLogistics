import { ShieldCheck, Banknote, Clock, Award } from "lucide-react";

const reasons = [
    {
        title: "Guaranteed Pay",
        description: "$1,800 gross per week minimum. We value your time and commitment.",
        icon: Banknote,
    },
    {
        title: "Sign-on Bonus",
        description: "$1,000 additional bonus after 90 days. A welcome reward for joining our fleet.",
        icon: Award,
    },
    {
        title: "Stability",
        description: "Dedicated runs and No slip seating. Your own truck, your own consistent routes.",
        icon: ShieldCheck,
    },
    {
        title: "Flexibility",
        description: "Choice of 1099 or W-2 and favorable home time. We adapt to your lifestyle.",
        icon: Clock,
    },
];

export default function WhyDrive() {
    return (
        <section className="py-24 bg-white text-anthracite">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Real Drivers. Real Opportunities.</h2>
                    <div className="w-24 h-1 bg-anthracite mx-auto"></div>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Providing the stability, pay, and respect you deserve.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-6 p-4 bg-anthracite/5 rounded-full text-anthracite">
                                    <Icon className="w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
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
