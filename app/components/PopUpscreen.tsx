"use client";
import { useEffect } from "react";
import { MyProjectProps } from "./MyProject";

interface ProjectPopupProps {
    project: MyProjectProps | null;
    isOpen: boolean;
    onClose: () => void;
}

const linkClass =
    "flex items-center gap-2 text-[14px] font-medium px-4 py-2 rounded-full border border-line text-fg hover:border-accent/50 hover:text-accent transition-colors";

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
            className="backdrop-in fixed inset-0 z-50 flex items-center justify-center bg-ink/90 px-4"
            onClick={onClose}
        >
            {/* modal */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label={project.title}
                className="modal-in relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-line bg-ink-2 shadow-[0_0_80px_rgba(34,211,238,0.12)]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative h-56 overflow-hidden">
                    <img
                        alt={project.title}
                        className="w-full h-full object-cover opacity-70"
                        src={project.imageUrl}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-2 to-transparent" />
                    <button
                        type="button"
                        aria-label="Close"
                        className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-ink/85 border border-line text-fg hover:text-accent hover:border-accent/50 transition-colors cursor-pointer"
                        onClick={onClose}
                    >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-5">
                    <h2 className="text-[24px] leading-[1.2] font-semibold tracking-tight text-fg">
                        {project.title}
                    </h2>
                    <p className="text-[15px] leading-[1.7] text-muted">
                        {project.description}
                    </p>

                    {(project.docsUrl?.length || project.videoUrl) && (
                        <div className="flex gap-3 flex-wrap pt-5 border-t border-line">
                            {project.docsUrl?.map((url) => (
                                <a
                                    key={url.Url}
                                    href={url.Url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        {url.icon ?? "description"}
                                    </span>
                                    {url.label}
                                </a>
                            ))}
                            {project.videoUrl && (
                                <a
                                    href={project.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        play_circle
                                    </span>
                                    Demo Video
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
