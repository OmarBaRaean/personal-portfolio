export default function MyFooter() {
    return (
        <footer className="bg-[#0e0e0e] border-t border-[#3c4a42] w-full py-10 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1280px] mx-auto gap-4">
                <span className="font-['JetBrains_Mono'] text-[13px] leading-[1.2] font-medium text-[#bbcabf]">
© 2026 Omar Ba Raean · Built for security, not just performance.                </span>
                <div className="flex gap-4">
                    {[
                        { label: "GitHub", href: "https://github.com/OmarBaRaean" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-ba-raean/" },
                        { label: "Email", href: "mailto:3mr.barayan@gmail.com" },
                    ].map((link) => (
                        <a
                            key={link.label}
                            className="font-['Inter'] text-[14px] leading-[1.5] text-[#bbcabf] hover:text-[#4edea3] transition-colors opacity-80 hover:opacity-100"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>);
}