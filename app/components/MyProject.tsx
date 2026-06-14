"use client";
export interface MyUrls{
    Url: string;
    label: string;
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
    onViewClick,
}: {
    TheProject?: MyProjectProps;
    onViewClick?: () => void;
}) {
    return (
        <div className="bg-[#1c1b1b] border border-[#3c4a42] rounded-xl overflow-hidden hover:border-[#3b82f6] transition-colors flex flex-col">
            <div className="h-48 bg-[#131313] border-b border-[#3c4a42] relative flex items-center justify-center">

                <img
                    alt={TheProject.title}
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                    src={TheProject.imageUrl}
                />
            </div>
            <div className="p-4 flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-start">
                    <h3 className="font-['Inter'] text-[14px] font-semibold tracking-[0.01em] text-[#4edea3]">
                        {TheProject.title}
                    </h3>
                </div>
                <p className="font-['Inter'] text-[14px] leading-[1.5] text-[#bbcabf] flex-grow line-clamp-2">
                    {TheProject.description}
                </p>
                <a
                    className="font-['JetBrains_Mono'] text-[13px] leading-[1.2] font-medium text-[#adc6ff] hover:text-[#4edea3] transition-colors flex items-center gap-1 mt-2 cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        onViewClick?.();
                    }}
                >
                    View Details
                    <span className="material-symbols-outlined text-sm">
                        arrow_forward
                    </span>
                </a>
            </div>
        </div>
    );
}
