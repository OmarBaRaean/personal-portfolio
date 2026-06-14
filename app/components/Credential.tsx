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
} }: { Certificate?: CredentialInfo }) {
    return (
        <div className="bg-[#1c1b1b] border border-[#3c4a42] rounded-xl p-4 flex justify-between items-center hover:border-[#3b82f6] transition-colors">
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#4edea3] text-3xl">
                    verified
                </span>
                <div>
                    <h3 className="font-['Inter'] text-[14px] font-semibold tracking-[0.01em] text-[#e5e2e1]">
                        {Certificate.title}
                    </h3>
                    <p className="font-['Inter'] text-[14px] leading-[1.5] text-[#bbcabf]">
                        Issued: {Certificate.issuedDate}
                    </p>
                </div>
            </div>
            {((Certificate.CertURL) &&
                <a
                    className="font-['JetBrains_Mono'] text-[13px] leading-[1.2] font-medium text-[#adc6ff] hover:text-[#4edea3] transition-colors"
                    href={Certificate.CertURL || "#"}
                    target="_blank"

                >
                    Verify
                </a>) || (Certificate.EmbedCode) &&
                <div dangerouslySetInnerHTML={{ __html: Certificate.EmbedCode }} />

            }
        </div>
    );
}
