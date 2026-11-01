import { MyProjectProps } from "@/app/components/MyProject";

const projectImages = {
  // Hybrid Home Lab — server/network rack feel
  homeLab: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  // SOC Automation — code/terminal feel
  socAutomation: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  // IDS Honeypot — network/threat detection feel
  honeypot: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80",
};

export const hather: MyProjectProps = {
  title: "Hather: On-Device Scam Detection (Arabic/English)",
  description:
    "On-device scam detector for SMS and WhatsApp messages in Arabic and English, built for users in Saudi Arabia. A Python rules engine checks links and senders against 91 brands, and a 0.5 GB Qwen3.5-0.8B model, distilled from a 27B teacher with LoRA fine-tuning, decides and explains the verdict in the message's language. Trained on 7,900+ examples built from grounded synthetic messages and privacy-scrubbed real SMS; on a hand-labelled test set of 533 real messages it matched its teacher, catching 77–84% of scams with 8–9% false alarms.",
  imageUrl: "/hather.svg",
  docsUrl: [],
  videoUrl: undefined,
};

export const project1: MyProjectProps = {
  title: "Hybrid Home Lab",
  description:
    "Hybrid security lab spanning AWS and a local machine, simulating enterprise network conditions for hands-on detection and response practice. Designed to replicate real SOC environments with live traffic generation and alert tuning.",
  imageUrl: projectImages.homeLab,
  docsUrl: [{label: 'GitHub', Url: `https://github.com/OmarBaRaean/hybrid-homelab`, icon: 'code'}],
  videoUrl: undefined,
};

export const project2: MyProjectProps = {
  title: "SOC Automation Platform",
  description:
    "Python-based automation layer built on top of Wazuh targeting alert triage, incident enrichment, and response orchestration. Reduces manual analyst overhead by automating repetitive L1 tasks and enriching alerts with threat intelligence.",
  imageUrl: projectImages.socAutomation,
  docsUrl: [{label: 'Report', Url: `https://docs.google.com/document/d/1Ymu2webqiN4cdjnl4VPsSyXRSHAOA0vK/edit?usp=sharing&ouid=103318493768062807648&rtpof=true&sd=true`}],
  videoUrl: undefined,
};

export const project3: MyProjectProps = {
  title: "IDS and Honeypot Analysis",
  description:
    "Deployed Wazuh (SIEM/XDR) alongside a honeypot and correlated Wireshark captures with alerts across 200+ log events. Achieved 100% detection on 4 simulated intrusion categories through tuned thresholds and false positive analysis.",
  imageUrl: projectImages.honeypot,
  docsUrl: [],
  videoUrl: "https://drive.google.com/file/d/1IJ6Nnm_nyMcwHH7LWLHmY4C900wFA9Kc/view?usp=drive_link",
};

export const allProjects: MyProjectProps[] = [hather, project1, project2, project3];