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
    return (
        <section className="py-24 bg-zinc-50 text-zinc-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-zinc-900 mb-4">Our Services</h2>
                    <div className="w-24 h-1 bg-zinc-900 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group p-10 bg-white border border-zinc-200 rounded-sm hover:border-zinc-900 transition-all duration-300 flex flex-col items-start hover:shadow-xl"
                            >
                                <div className="mb-6 p-3 bg-zinc-100 rounded-lg group-hover:bg-zinc-200 transition-colors">
                                    <Icon className="w-10 h-10 text-zinc-900" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide text-zinc-900">{service.title}</h3>
                                <p className="text-zinc-600 mb-8 flex-grow leading-relaxed">
                                    {service.description}
                                </p>
                                <button className="h-12 px-8 border border-zinc-300 text-zinc-900 text-sm font-bold uppercase tracking-wider rounded hover:bg-zinc-900 hover:text-white transition-all duration-300 flex items-center justify-center">
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
