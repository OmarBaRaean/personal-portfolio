import GlowCard from "./GlowCard";
import { ArrowIcon, ShieldIcon } from "./Icons";

export interface CredentialInfo {
    title: string;
    issuedDate: string;
    EmbedCode?: string;
    CertURL?: string;
}

export default function Credential({ Certificate = {
    title: "Certification Title",
    issuedDate: "January 2024",
    CertURL: "#",
}, index = 0 }: { Certificate?: CredentialInfo; index?: number }) {
    return (
        <GlowCard index={index} className="p-5 flex items-center gap-4">
            <span className="grid place-items-center shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                <ShieldIcon className="w-5 h-5" />
            </span>
            <div className="flex flex-col gap-0.5 grow min-w-0">
                <h3 className="text-[15px] font-semibold text-fg">{Certificate.title}</h3>
                <span className="font-mono text-[12px] text-muted">Issued {Certificate.issuedDate}</span>
            </div>
            {Certificate.CertURL ? (
                <a
                    className="group/link flex items-center gap-1 shrink-0 text-[13px] font-medium text-accent hover:text-fg transition-colors"
                    href={Certificate.CertURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Verify
                    <ArrowIcon className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover/link:translate-x-0.5" />
                </a>
            ) : (
                Certificate.EmbedCode && <div dangerouslySetInnerHTML={{ __html: Certificate.EmbedCode }} />
            )}
        </GlowCard>
    );
}
