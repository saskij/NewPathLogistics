import { Truck, Package, Globe, Warehouse, MapPin, Shield, LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import heroNew from "../../public/hero-new.jpg";
import joinFleet from "../../public/Join our fleet.jpg";
import nationwideCard from "../../public/NATIONWIDE TRUCKING-card.jpg";

export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    icon: LucideIcon;
    fullDescription: string[];
    benefits: string[];
    image?: StaticImageData | string;
}

export const services: Service[] = [
    {
        id: "nationwide-trucking",
        title: "Nationwide Trucking",
        shortDescription: "Reliable long-haul transport across all 50 states. Full Truckload (FTL) and Less-Than-Truckload (LTL) services.",
        icon: Truck,
        image: nationwideCard,
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
        image: joinFleet,
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
        image: heroNew,
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
        id: "last-mile-delivery",
        title: "Last Mile Delivery",
        shortDescription: "Prompt and professional delivery to the final destination, ensuring customer satisfaction.",
        icon: MapPin,
        image: heroNew,
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
    }
];
