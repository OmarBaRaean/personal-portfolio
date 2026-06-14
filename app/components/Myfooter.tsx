export default function MyFooter() {
    return (
        <footer className="bg-[#0e0e0e] border-t border-[#3c4a42] w-full py-10 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1280px] mx-auto gap-4">
                <span className="font-['JetBrains_Mono'] text-[13px] leading-[1.2] font-medium text-[#bbcabf]">
                    © 2024 DevEngine Terminal. Built for performance.
                </span>
                <div className="flex gap-4">
                    {["GitHub", "LinkedIn", "Email"].map((link) => (
                        <a
                            key={link}
                            className="font-['Inter'] text-[14px] leading-[1.5] text-[#bbcabf] hover:text-[#4edea3] transition-colors opacity-80 hover:opacity-100"
                            href="#"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </footer>);
}