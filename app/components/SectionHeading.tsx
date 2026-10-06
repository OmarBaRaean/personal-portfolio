export default function SectionHeading({
    number,
    label,
    title,
    description,
}: {
    number: string;
    label: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="reveal-item flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-accent">
                {number} <span className="text-muted">/</span> {label}
            </span>
            <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-semibold tracking-tight text-fg">
                {title}
            </h2>
            {description && (
                <p className="text-[16px] leading-[1.6] text-muted">{description}</p>
            )}
        </div>
    );
}
