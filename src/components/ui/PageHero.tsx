import Image, { StaticImageData } from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { ReactNode } from "react";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    bottomCaption?: string;
    backgroundImage: StaticImageData | string;
    children?: ReactNode;
    size?: 'medium' | 'large';
    imagePriority?: boolean;
    sizes?: string;
    overlayOpacity?: string;
    className?: string;
}

export default function PageHero({
    title,
    subtitle,
    bottomCaption,
    backgroundImage,
    children,
    size = 'medium', // Default to medium (40vh) for internal pages
    overlayOpacity = 'bg-black/60',
    className = "",
    imagePriority = true,
    sizes = "(max-width: 768px) 100vw, 50vw",
}: PageHeroProps) {

    const heightClass = size === 'large' ? 'min-h-[80vh] h-screen' : 'min-h-[40vh] py-20 md:py-32';

    // Handle string vs StaticImageData for src
    const imageSrc = typeof backgroundImage === 'string' && backgroundImage.startsWith('/')
        ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${backgroundImage}`
        : backgroundImage;

    return (
        <section className={`relative flex items-center justify-center overflow-hidden ${heightClass} ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt={`${title} Background`}
                    fill
                    className="object-cover object-center"
                    priority={imagePriority}
                    sizes={sizes}
                    placeholder="blur"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 ${overlayOpacity}`} />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                <ScrollAnimation>
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none drop-shadow-2xl">
                        {title}
                    </h1>

                    {/* Red Underline Decoration */}
                    <div className="w-24 h-2 bg-red-600 mx-auto mb-8 rounded-full"></div>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg mb-8">
                            {subtitle}
                        </p>
                    )}

                    {/* Children (Buttons/CTA) */}
                    {children && (
                        <div className="flex flex-col md:flex-row gap-6 mt-8 animate-fade-in-up delay-300">
                            {children}
                        </div>
                    )}
                </ScrollAnimation>
            </div>

            {/* Bottom Caption (DOT/MC Numbers) */}
            {bottomCaption && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <div className="w-12 h-[1px] bg-white/40 mb-2"></div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase whitespace-nowrap">
                        {bottomCaption}
                    </p>
                </div>
            )}
        </section>
    );
}
