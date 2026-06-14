"use client";
import { useEffect } from "react";
import { MyProjectProps } from "./MyProject";

interface ProjectPopupProps {
    project: MyProjectProps | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectPopup({
    project,
    isOpen,
    onClose,
}: ProjectPopupProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        // backdrop
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-5"
            onClick={onClose}
        >
            {/* modal */}
            <div
                className="relative bg-[#1c1b1b] border border-[#3c4a42] rounded-xl w-dvw overflow-hidden shadow-[0_0_40px_rgba(78,222,163,0.08)] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* image */}
                <div className="h-56 bg-[#131313] border-b border-[#3c4a42] relative flex items-center justify-center overflow-hidden">
                    <img
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60"
                        src={project.imageUrl}
                    />
                    {/* close button */}
                    <button
                        className="absolute top-3 right-3 p-1 text-white hover:text-[#4edea3] hover:border-[#4edea3] transition-colors"
                        onClick={onClose}
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                </div>

                {/* content */}
                <div className="p-6 flex flex-col gap-4">
                    {/* title + badge */}
                    <div className="flex justify-between items-start gap-4">
                        <h2 className="font-['Inter'] text-[22px] leading-[1.3] font-bold text-[#e5e2e1]">
                            {project.title}
                        </h2>
                        {/* {project.language && (
                            <span className="shrink-0 bg-[#131313] font-['JetBrains_Mono'] text-[11px] px-2 py-1 rounded text-[#bbcabf] border border-[#3c4a42]">
                                {project.language}
                            </span>
                        )} */}
                    </div>

                    {/* full description */}
                    <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#bbcabf]">
                        {project.description}
                    </p>

                    {/* divider */}
                    <div className="border-t border-[#3c4a42]" />

                    {/* links */}
                    <div className="flex gap-3 flex-wrap items-center">
                        {project.docsUrl &&
                            project.docsUrl.map((url, index) => (
                                <a
                                    href={url.Url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-['Inter'] text-[13px] font-semibold bg-[#131313] border border-[#3c4a42] text-[#e5e2e1] px-4 py-2 rounded-lg hover:border-[#adc6ff] transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[16px]">
                                        description
                                    </span>
                                    {url.label}
                                </a>
                            ))}
                        {project.videoUrl && (
                            <a
                                href={project.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-['Inter'] text-[13px] font-semibold bg-[#131313] border border-[#3c4a42] text-[#e5e2e1] px-4 py-2 rounded-lg hover:border-[#adc6ff] transition-colors"
                            >
                                <span className="material-symbols-outlined text-[16px]">
                                    play_circle
                                </span>
                                Demo Video
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
