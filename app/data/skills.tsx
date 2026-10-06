import { SkillCard, SkillData } from "@/app/components/SkillCollection";

const siem: SkillData[] = [
  { name: "Splunk", color: "#4edea3" },
  { name: "Wazuh", color: "#4edea3" },
  { name: "Sysmon", color: "#4edea3" },
  { name: "Alert Triage", color: "#4edea3" },
  { name: "Log Analysis", color: "#4edea3" },
  { name: "Security Monitoring", color: "#4edea3" },
  { name: "Reporting & Documentation", color: "#4edea3" },
];

const detectionEngineering: SkillData[] = [
  { name: "Alert Tuning", color: "#4edea3" },
  { name: "Detection Validation", color: "#4edea3" },
  { name: "False-Positive Reduction", color: "#4edea3" },
];

const microsoftSecurity: SkillData[] = [
  { name: "Defender XDR", color: "#4edea3" },
  { name: "Entra ID", color: "#4edea3" },
  { name: "Microsoft Sentinel", color: "#4edea3" },
  { name: "Purview", color: "#4edea3" },
  { name: "Zero Trust", color: "#4edea3" },
  { name: "Security Policies", color: "#4edea3" },
  { name: "Access Management", color: "#4edea3" },
];

const networking: SkillData[] = [
  { name: "TCP/IP", color: "#4edea3" },
  { name: "Wireshark", color: "#4edea3" },
  { name: "Nmap", color: "#4edea3" },
  { name: "pfSense", color: "#4edea3" },
  { name: "SMTP", color: "#4edea3" },
  { name: "Network Switches", color: "#4edea3" },
];

const endpoint: SkillData[] = [
  { name: "Active Directory", color: "#4edea3" },
  { name: "EDR", color: "#4edea3" },
  { name: "Incident Response", color: "#4edea3" },
  { name: "Incident Triage", color: "#4edea3" },
  { name: "Phishing Analysis", color: "#4edea3" },
];

const securityAssessment: SkillData[] = [
  { name: "Vulnerability Assessment", color: "#4edea3" },
  { name: "Threat Research", color: "#4edea3" },
  { name: "Security Recommendations", color: "#4edea3" },
];

const osCloud: SkillData[] = [
  { name: "AWS", color: "#4edea3" },
  { name: "Linux", color: "#4edea3" },
  { name: "Windows Server", color: "#4edea3" },
  { name: "Bash", color: "#4edea3" },
];

const programming: SkillData[] = [
  { name: "Python", color: "#4edea3" },
  { name: "TypeScript", color: "#4edea3" },
  { name: "Java", color: "#4edea3" },
  { name: "JavaScript", color: "#4edea3" },
  { name: "Next.js", color: "#4edea3" },
];

const spokenLanguages: SkillData[] = [
  { name: "Arabic (Native)", color: "#4edea3" },
  { name: "English (Fluent)", color: "#4edea3" },
];

export const skillset1: SkillCard = {
  title: "SIEM & Detection",
  icon: "security",
  skills: siem,
};

export const skillset2: SkillCard = {
  title: "Detection Engineering",
  icon: "radar",
  skills: detectionEngineering,
};

export const skillset3: SkillCard = {
  title: "Microsoft Security",
  icon: "policy",
  skills: microsoftSecurity,
};

export const skillset4: SkillCard = {
  title: "Networking",
  icon: "lan",
  skills: networking,
};

export const skillset5: SkillCard = {
  title: "Endpoint & IR",
  icon: "shield",
  skills: endpoint,
};

export const skillset6: SkillCard = {
  title: "Security Assessment",
  icon: "bug_report",
  skills: securityAssessment,
};

export const skillset7: SkillCard = {
  title: "OS & Cloud",
  icon: "cloud",
  skills: osCloud,
};

export const skillset8: SkillCard = {
  title: "Programming",
  icon: "data_object",
  skills: programming,
};

export const skillset9: SkillCard = {
  title: "Languages",
  icon: "translate",
  skills: spokenLanguages,
};

export const allSkills: SkillCard[] = [
  skillset1,
  skillset2,
  skillset3,
  skillset4,
  skillset5,
  skillset6,
  skillset7,
  skillset8,
  skillset9,
];
