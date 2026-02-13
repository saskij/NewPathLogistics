import { Truck, Package, Globe, Warehouse, MapPin, Shield } from "lucide-react";

const services = [
    {
        title: "Nationwide Trucking",
        description: "Reliable long-haul transport across all 50 states. Full Truckload (FTL) and Less-Than-Truckload (LTL) services.",
        icon: Truck,
    },
    {
        title: "Freight Solutions",
        description: "Comprehensive freight management, including distribution strategies and supply chain optimization.",
        icon: Package,
    },
    {
        title: "Logistics Management",
        description: "Strategic route planning, tracking, and customs/land logistics support for efficient delivery.",
        icon: Globe,
    },
    {
        title: "Warehousing",
        description: "Secure storage solutions with inventory management, cross-docking, and distribution services.",
        icon: Warehouse,
    },
    {
        title: "Last Mile Delivery",
        description: "Prompt and professional delivery to the final destination, ensuring customer satisfaction.",
        icon: MapPin,
    },
    {
        title: "Specialized Transport",
        description: "Handling of oversized, hazardous, or high-value cargo with specialized equipment and care.",
        icon: Shield,
    },
];

export default function Services() {
    return (
        <section className="py-32 bg-[#1A1A1A]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">Our Services</h2>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 bg-zinc-900 border border-zinc-800 rounded-sm hover:border-white transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="mb-6 p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide text-white">{service.title}</h3>
                                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                    {service.description}
                                </p>
                                <button className="px-6 py-2 border border-white/30 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-white hover:text-black transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
