import { SkillCard, SkillData } from "@/app/components/SkillCollection";

const siem: SkillData[] = [
  { name: "Splunk", color: "#4edea3" },
  { name: "Wazuh", color: "#4edea3" },
  { name: "Sysmon", color: "#adc6ff" },
];

const networking: SkillData[] = [
  { name: "TCP/IP", color: "#4edea3" },
  { name: "DNS", color: "#4edea3" },
  { name: "HTTP/S", color: "#4edea3" },
  { name: "Wireshark", color: "#adc6ff" },
  { name: "Nmap", color: "#adc6ff" },
  { name: "pfSense", color: "#adc6ff" },
];

const endpoint: SkillData[] = [
  { name: "EDR", color: "#4edea3" },
  { name: "Active Directory", color: "#4edea3" },
  { name: "Incident Triage", color: "#adc6ff" },
  { name: "Phishing Analysis", color: "#adc6ff" },
];

const osCloud: SkillData[] = [
  { name: "Windows Server", color: "#4edea3" },
  { name: "Linux (Kali)", color: "#4edea3" },
  { name: "PowerShell", color: "#adc6ff" },
  { name: "Bash", color: "#adc6ff" },
  { name: "AWS", color: "#adc6ff" },
];

const languages: SkillData[] = [
  { name: "Python", color: "#4edea3" },
  { name: "PowerShell", color: "#4edea3" },
  { name: "Java", color: "#adc6ff" },
  { name: "JavaScript", color: "#adc6ff" },
];

export const skillset1: SkillCard = {
  title: "SIEM & Detection",
  icon: "security",
  skills: siem,
};

export const skillset2: SkillCard = {
  title: "Networking",
  icon: "lan",
  skills: networking,
};

export const skillset3: SkillCard = {
  title: "Endpoint & IR",
  icon: "shield",
  skills: endpoint,
};

export const skillset4: SkillCard = {
  title: "OS & Cloud",
  icon: "cloud",
  skills: osCloud,
};

export const skillset5: SkillCard = {
  title: "Languages",
  icon: "data_object",
  skills: languages,
};

export const allSkills: SkillCard[] = [
  skillset1,
  skillset2,
  skillset3,
  skillset4,
  skillset5,
];