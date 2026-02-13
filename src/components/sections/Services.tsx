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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-anthracite mb-16 uppercase tracking-tight">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 bg-anthracite text-white hover:bg-black transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col items-start border-l-4 border-transparent hover:border-white"
                            >
                                <div className="mb-6 p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{service.title}</h3>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed group-hover:text-gray-300">
                                    {service.description}
                                </p>
                                <button className="text-sm font-bold uppercase tracking-wider border-b border-white/30 pb-1 hover:border-white transition-colors">
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
