"use client";
import GlowCard from "./GlowCard";
import { ArrowIcon } from "./Icons";

export interface MyUrls{
    Url: string;
    label: string;
    icon?: string;
}

export interface MyProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    docsUrl?: MyUrls[];
    videoUrl?: string;
}

export default function MyProject({
    TheProject={
        title: "Project Name",
        description: "A brief description of the project goes here.",
        imageUrl: "https://via.placeholder.com/400x300",
    },
    index = 0,
    onViewClick,
}: {
    TheProject?: MyProjectProps;
    index?: number;
    onViewClick?: () => void;
}) {
    return (
        <GlowCard index={index} className="group overflow-hidden flex flex-col">
            <button type="button" onClick={onViewClick} className="flex flex-col grow text-left cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                    <img
                        alt={TheProject.title}
                        className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                        src={TheProject.imageUrl}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
                    <span className="absolute top-4 left-4 font-mono text-[11px] tracking-widest text-accent bg-ink/85 px-2 py-1 rounded-md border border-accent/20">
                        0{index + 1}
                    </span>
                </div>
                <div className="p-6 flex flex-col gap-3 grow">
                    <h3 className="text-[18px] font-semibold text-fg">{TheProject.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-muted grow line-clamp-3">
                        {TheProject.description}
                    </p>
                    <span className="flex items-center gap-1.5 text-[14px] font-medium text-accent mt-1">
                        View details
                        <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
            </button>
        </GlowCard>
    );
}
