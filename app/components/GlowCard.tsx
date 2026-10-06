"use client";

// Glass card with a spotlight that follows the cursor; `index` staggers its scroll reveal.
export default function GlowCard({
    children,
    className = "",
    index = 0,
}: {
    children: React.ReactNode;
    className?: string;
    index?: number;
}) {
    return (
        <div
            className={`glow-card reveal-item ${className}`}
            style={{ "--i": index } as React.CSSProperties}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
            }}
        >
            {children}
        </div>
    );
}
