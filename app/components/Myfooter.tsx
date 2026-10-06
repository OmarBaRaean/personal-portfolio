import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const links = [
    { label: "GitHub", href: "https://github.com/OmarBaRaean", Icon: GitHubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-ba-raean/", Icon: LinkedInIcon },
    { label: "Email", href: "mailto:3mr.barayan@gmail.com", Icon: MailIcon },
];

export default function MyFooter() {
    return (
        <footer className="w-full mt-auto">
            <Reveal id="contact" className="px-4 md:px-8 max-w-6xl mx-auto scroll-mt-20">
                <div className="reveal-item relative overflow-hidden rounded-3xl border border-line bg-ink-2 px-6 py-14 md:py-20 text-center">
                    <div className="orb w-[560px] h-[560px] [--orb:rgba(34,211,238,0.18)] -top-64 left-1/2 -translate-x-1/2" />
                    <div className="relative flex flex-col items-center gap-5">
                        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-accent">
                            04 <span className="text-muted">/</span> Contact
                        </span>
                        <h2 className="text-[32px] md:text-[44px] leading-[1.1] font-semibold tracking-tight text-fg max-w-xl">
                            Let&apos;s secure something together.
                        </h2>
                        <p className="text-[16px] text-muted max-w-md">
                            Open to SOC Analyst roles. The fastest way to reach me is email.
                        </p>
                        <a
                            href="mailto:3mr.barayan@gmail.com"
                            className="mt-2 flex items-center gap-2 text-[15px] font-semibold px-6 py-3 rounded-full bg-accent text-ink hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-shadow"
                        >
                            <MailIcon /> 3mr.barayan@gmail.com
                        </a>
                    </div>
                </div>
            </Reveal>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 max-w-6xl mx-auto py-10 text-[13px] text-muted">
                <span>© 2026 Omar Ba Raean · Built for security, not just performance.</span>
                <div className="flex gap-2">
                    {links.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            aria-label={label}
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="grid place-items-center w-9 h-9 rounded-full border border-line hover:border-accent/50 hover:text-accent transition-colors"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
