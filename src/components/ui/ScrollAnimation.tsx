'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
}

export default function ScrollAnimation({ children, className = '' }: ScrollAnimationProps) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if window is defined (client-side) and if width is >= 768px (md breakpoint)
        if (typeof window !== 'undefined') {
            const checkDesktop = () => {
                setIsDesktop(window.innerWidth >= 768);
            };

            // Initial check
            checkDesktop();

            // Add listener for resize
            window.addEventListener('resize', checkDesktop);
            return () => window.removeEventListener('resize', checkDesktop);
        }
    }, []);

    // If not desktop, return a static div with the same class
    if (!isDesktop) {
        return <div className={className}>{children}</div>;
    }

    // If desktop, return the animated motion.div
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
