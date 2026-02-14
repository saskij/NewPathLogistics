import { Truck, Package, Globe, Warehouse, MapPin, Shield, LucideIcon } from "lucide-react";

export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    icon: LucideIcon;
    fullDescription: string[];
    benefits: string[];
}

export const services: Service[] = [
    {
        id: "nationwide-trucking",
        title: "Nationwide Trucking",
        shortDescription: "Reliable long-haul transport across all 50 states. Full Truckload (FTL) and Less-Than-Truckload (LTL) services.",
        icon: Truck,
        fullDescription: [
            "Our Nationwide Trucking service is the backbone of New Path Logistics. We provide comprehensive long-haul transport solutions that cover all 48 contiguous states. Whether you need to move a single pallet or a full fleet of goods, our experienced drivers and modern fleet ensure your cargo arrives safely and on time.",
            "We specialize in both Full Truckload (FTL) and Less-Than-Truckload (LTL) shipping, offering flexibility to match your specific volume requirements. Our centralized dispatch team monitors every mile, providing real-time updates and proactive communication to keep your supply chain moving without interruption.",
            "With a focus on safety and efficiency, we maintain rigorous maintenance standards for our equipment and strict compliance protocols for our drivers. When you choose New Path Logistics for your nationwide transport, you're choosing a partner dedicated to operational excellence."
        ],
        benefits: [
            "Coverage across all 48 contiguous states",
            "Real-time tracking and 24/7 dispatch support",
            "Flexible FTL and LTL options",
            "Modern, well-maintained fleet",
            "Experienced, safety-certified drivers"
        ]
    },
    {
        id: "freight-solutions",
        title: "Freight Solutions",
        shortDescription: "Comprehensive freight management, including distribution strategies and supply chain optimization.",
        icon: Package,
        fullDescription: [
            "Navigating the complexities of modern supply chains requires more than just trucks; it requires intelligent Freight Solutions. New Path Logistics offers strategic freight management services designed to optimize your distribution network and reduce overall transportation costs.",
            "We analyze your shipping patterns, volume fluctuations, and delivery requirements to create a customized freight strategy. From consolidating shipments to selecting the most efficient modes of transport, our goal is to streamline your operations and improve your bottom line.",
            "Our team acts as an extension of your logistics department, handling everything from carrier negotiation to freight auditing. We leverage industry-leading technology to provide visibility and control, ensuring your products are in the right place at the right time."
        ],
        benefits: [
            "Customized distribution strategies",
            "Cost-effective freight optimization",
            "Carrier negotiation and management",
            "Advanced reporting and analytics",
            "Scalable solutions for growing businesses"
        ]
    },
    {
        id: "logistics-management",
        title: "Logistics Management",
        shortDescription: "Strategic route planning, tracking, and customs/land logistics support for efficient delivery.",
        icon: Globe,
        fullDescription: [
            "Effective Logistics Management is about precision and planning. At New Path Logistics, we take a holistic approach to managing the flow of your goods. Our services encompass everything from initial route planning to final delivery confirmation, ensuring a seamless process from end to end.",
            "We utilize advanced routing software to minimize transit times and fuel consumption, translating to faster deliveries and lower costs for you. Our team also manages the regulatory aspects of land logistics, ensuring compliance with all state and federal transportation laws.",
            "Whether you're dealing with complex multi-stop routes or time-sensitive deliveries, our logistics experts have the knowledge and tools to execute with precision. We provide the oversight needed to mitigate risks and resolve issues before they impact your schedule."
        ],
        benefits: [
            "Advanced route optimization",
            "Regulatory compliance management",
            "End-to-end supply chain visibility",
            "Risk mitigation strategies",
            "Dedicated logistics coordinators"
        ]
    },
    {
        id: "warehousing",
        title: "Warehousing",
        shortDescription: "Secure storage solutions with inventory management, cross-docking, and distribution services.",
        icon: Warehouse,
        fullDescription: [
            "Our Warehousing services provide the secure, flexible storage solutions your business needs to manage inventory effectively. Strategically located facilities offer easy access to major transportation routes, facilitating quick turnaround times for your goods.",
            "Beyond simple storage, we offer value-added services such as cross-docking, pick-and-pack, and inventory management. Our systems integrate with your supply chain to provide accurate, real-time inventory levels, helping you avoid stockouts and overstock situations.",
            "Security is paramount at our facilities. With 24/7 surveillance and strict access controls, you can trust that your assets are protected. Whether you need short-term storage for seasonal overflow or a long-term distribution hub, New Path Logistics has the capacity to support you."
        ],
        benefits: [
            "Secure, climate-controlled facilities",
            "Real-time inventory management",
            "Cross-docking and transloading",
            "Pick-and-pack fulfillment services",
            "24/7 security monitoring"
        ]
    },
    {
        id: "last-mile-delivery",
        title: "Last Mile Delivery",
        shortDescription: "Prompt and professional delivery to the final destination, ensuring customer satisfaction.",
        icon: MapPin,
        fullDescription: [
            "The final leg of the journey is often the most critical. Our Last Mile Delivery service ensures that your products reach their ultimate destination prompt and professionally. We understand that our drivers are often the face of your brand to your customers, and we take that responsibility seriously.",
            "We offer a range of last-mile solutions, from curbside drop-off to white-glove inside delivery. Our technology allows customers to track their deliveries in real-time and receive automated updates, enhancing the overall customer experience.",
            "Efficiency in the last mile is key to customer satisfaction. We optimize delivery routes to ensure timely arrivals and reduce the carbon footprint of your shipments. Trust New Path Logistics to close the loop on your supply chain with excellence."
        ],
        benefits: [
            "Professional, uniformed drivers",
            "Real-time customer tracking",
            "White-glove delivery options",
            "Route optimization for speed",
            "High customer satisfaction rates"
        ]
    },
    {
        id: "specialized-transport",
        title: "Specialized Transport",
        shortDescription: "Handling of oversized, hazardous, or high-value cargo with specialized equipment and care.",
        icon: Shield,
        fullDescription: [
            "Not all cargo fits in a standard dry van. For your unique shipping needs, New Path Logistics offers Specialized Transport services. We have the equipment and expertise to handle oversized loads, hazardous materials, and high-value cargo that requires extra care and attention.",
            "Our team is trained in the specific regulations and safety protocols required for specialized hauling. We handle all the necessary permits and escorts for wide or heavy loads, taking the administrative burden off your shoulders.",
            "From flatbeds to temperature-controlled reefers, our diverse fleet is equipped to handle the challenges of specialized transport. We plan every detail of the move to ensure the safety of the public and the integrity of your cargo."
        ],
        benefits: [
            "Oversized and heavy haul capabilities",
            "Hazardous materials (HazMat) certified",
            "Temperature-controlled transport",
            "Permit and escort management",
            "High-value cargo security"
        ]
    }
];
