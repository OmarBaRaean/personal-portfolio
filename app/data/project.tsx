import { MyProjectProps } from "@/app/components/MyProject";

const projectImages = {
  // Hybrid Home Lab — server/network rack feel
  homeLab: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  // SOC Automation — code/terminal feel
  socAutomation: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  // IDS Honeypot — network/threat detection feel
  honeypot: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80",
};

export const project1: MyProjectProps = {
  title: "Hybrid Home Lab",
  description:
    "Hybrid security lab spanning AWS and a local machine, simulating enterprise network conditions for hands-on detection and response practice. Designed to replicate real SOC environments with live traffic generation and alert tuning.",
  imageUrl: projectImages.homeLab,
  docsUrl: [],
  videoUrl: undefined,
};

export const project2: MyProjectProps = {
  title: "SOC Automation Platform",
  description:
    "Python-based automation layer built on top of Wazuh targeting alert triage, incident enrichment, and response orchestration. Reduces manual analyst overhead by automating repetitive L1 tasks and enriching alerts with threat intelligence.",
  imageUrl: projectImages.socAutomation,
  docsUrl: [],
  videoUrl: undefined,
};

export const project3: MyProjectProps = {
  title: "IDS and Honeypot Analysis",
  description:
    "Deployed Wazuh (SIEM/XDR) alongside a honeypot and correlated Wireshark captures with alerts across 200+ log events. Achieved 100% detection on 4 simulated intrusion categories through tuned thresholds and false positive analysis.",
  imageUrl: projectImages.honeypot,
  docsUrl: [],
  videoUrl: undefined,
};

export const allProjects: MyProjectProps[] = [project1, project2, project3];