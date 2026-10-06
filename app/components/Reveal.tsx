"use client";
import { useEffect, useRef, useState } from "react";

// Adds `is-visible` once the section scrolls into view, which animates its `.reveal-item` children.
export default function Reveal({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} id={id} className={`${visible ? "is-visible" : ""} ${className}`}>
            {children}
        </section>
    );
}
