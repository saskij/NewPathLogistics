'use client';

import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
}

// Dynamically import framer-motion only when needed (reduces TBT significantly)
const LazyMotionComponent = dynamic(
    () => import('framer-motion').then(mod => {
        const { LazyMotion, domMax, m } = mod;

        // Return a wrapper component
        return {
            default: ({ children, className }: { children: ReactNode; className?: string }) => (
                <LazyMotion features={domMax}>
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={className}
                    >
                        {children}
                    </m.div>
                </LazyMotion>
            )
        };
    }),
    {
        ssr: false, // Don't render on server
        loading: () => <div className="opacity-0">{null}</div> // Invisible while loading
    }
);

export default function ScrollAnimation({ children, className = '' }: ScrollAnimationProps) {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        // Only load animations on desktop (>= 1024px for true desktop)
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
            setShouldAnimate(true);
        }
    }, []);

    // On mobile/tablet, return static div (no animation library loaded)
    if (!shouldAnimate) {
        return <div className={className}>{children}</div>;
    }

    // On desktop, use dynamic import (loads framer-motion only when needed)
    return <LazyMotionComponent className={className}>{children}</LazyMotionComponent>;
}
