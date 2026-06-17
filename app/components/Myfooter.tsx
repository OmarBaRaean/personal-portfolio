export default function MyFooter() {
    return (
        <footer className="bg-[#0e0e0e] border-t border-[#3c4a42] w-full py-10 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1280px] mx-auto gap-4">
                <span className="font-['JetBrains_Mono'] text-[13px] leading-[1.2] font-medium text-[#bbcabf]">
                    © 2024 DevEngine Terminal. Built for performance.
                </span>
                <div className="flex gap-4">
                    {[{"GitHub": "https://github.com/OmarBaRaean"}, {"LinkedIn": "https://www.linkedin.com/in/omar-ba-raean/"}, {"Email": "mailto:3mr.barayan@gmail.com"}].map((link) => (
                        <a
                            key={Object.keys(link)[0]}
                            className="font-['Inter'] text-[14px] leading-[1.5] text-[#bbcabf] hover:text-[#4edea3] transition-colors opacity-80 hover:opacity-100"
                            href={Object.values(link)[1]}
                        >
                            {Object.keys(link)[0]}
                        </a>
                    ))}
                </div>
            </div>
        </footer>);
}