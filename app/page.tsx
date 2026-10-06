"use client";
import { CSSProperties, useState } from "react";
import MyHeader from "@/app/components/MyHeader";
import SkillCollection from "@/app/components/SkillCollection";
import { allSkills } from "@/app/data/skills";
import MyProject, { MyProjectProps } from "./components/MyProject";
import Credential from "./components/Credential";
import MyFooter from "./components/Myfooter";
import { allProjects } from "@/app/data/project";
import ProjectPopup from "./components/PopUpscreen";
import { allCredentials } from "@/app/data/Credentials";
import Reveal from "./components/Reveal";
import MatrixRain from "./components/MatrixRain";
import SectionHeading from "./components/SectionHeading";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, ShieldIcon } from "./components/Icons";

// Hero animations start once the intro overlay has faded out
const INTRO = 1.25;
const delay = (step: number) => ({ "--delay": `${INTRO + step * 0.12}s` }) as CSSProperties;

const secondaryLinks = [
  { label: "GitHub", href: "https://github.com/OmarBaRaean", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-ba-raean", Icon: LinkedInIcon },
  { label: "Email", href: "mailto:3mr.barayan@gmail.com", Icon: MailIcon },
];

const stats = [
  { value: `${allCredentials.length}`, label: "Certifications" },
  { value: `${allProjects.length}`, label: "Security projects" },
  { value: "1+ yr", label: "Hands-on lab experience" },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<MyProjectProps | null>(null);

  return (
    <div id="top" className="flex flex-col min-h-screen">
      {/* Intro */}
      <div className="intro" aria-hidden="true">
        <ShieldIcon className="intro-shield w-14 h-14 text-accent drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
        <div className="intro-bar" />
      </div>
      <div className="scroll-progress" aria-hidden="true" />

      <ProjectPopup
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />

      <MyHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-grid" />
        <div className="orb w-[700px] h-[700px] [--orb:rgba(34,211,238,0.22)] -top-64 -left-56" />
        <div className="orb w-[620px] h-[620px] [--orb:rgba(59,130,246,0.22)] top-0 -right-56" />
        <MatrixRain />

        <div className="relative px-4 md:px-8 max-w-6xl mx-auto pt-36 pb-24 md:pt-44 md:pb-32 flex flex-col items-start gap-7">
          <span className="fade-up flex items-center gap-2 text-[13px] text-muted px-3 py-1.5 rounded-full border border-line bg-white/[0.03]" style={delay(0)}>
            <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-400" />
            Available for SOC Analyst roles
          </span>

          <h1 className="fade-up text-[36px] sm:text-[60px] md:text-[76px] leading-[1.02] font-semibold tracking-[-0.035em] text-fg" style={delay(1)}>
            SOC Analyst &amp;
            <br />
            <span className="text-gradient">Security Engineer</span>
          </h1>

          <p className="fade-up text-[17px] md:text-[19px] leading-[1.6] text-muted max-w-2xl" style={delay(2)}>
            Currently building a Python automation layer on Wazuh to cut the manual
            work between an alert firing and an analyst picking it up. Below is the
            lab, the tooling, and the work behind it.
          </p>

          <div className="fade-up flex flex-wrap items-center gap-3" style={delay(3)}>
            <a
              href="/Omar_Ba_Raean_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[15px] font-semibold px-6 py-3 rounded-full bg-accent text-ink hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-shadow"
            >
              <DownloadIcon /> Download CV
            </a>
            {secondaryLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[15px] font-medium px-5 py-3 rounded-full border border-line text-fg bg-white/[0.02] hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Icon /> {label}
              </a>
            ))}
          </div>

          <dl className="fade-up grid grid-cols-3 gap-6 md:gap-12 mt-8 pt-8 border-t border-line w-full max-w-2xl" style={delay(4)}>
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="order-2 text-[13px] text-muted">{stat.label}</dt>
                <dd className="order-1 text-[28px] md:text-[34px] font-semibold tracking-tight text-fg">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <main className="px-4 md:px-8 max-w-6xl mx-auto w-full flex flex-col gap-32 pb-32">
        {/* Technical Arsenal */}
        <Reveal id="skills" className="flex flex-col gap-12 scroll-mt-24">
          <SectionHeading
            number="01"
            label="Skills"
            title="Technical Arsenal"
            description="Tools and disciplines I use across detection, response, and infrastructure."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allSkills.map((skillset, index) => (
              <SkillCollection key={index} index={index + 1} sections={skillset} />
            ))}
          </div>
        </Reveal>

        {/* Project Matrix */}
        <Reveal id="projects" className="flex flex-col gap-12 scroll-mt-24">
          <SectionHeading
            number="02"
            label="Projects"
            title="Project Matrix"
            description="Hands-on labs and builds — from hybrid infrastructure to SOC automation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProjects.map((project, index) => (
              <MyProject
                key={index}
                index={index}
                TheProject={project}
                onViewClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </Reveal>

        {/* Credentials */}
        <Reveal id="certs" className="flex flex-col gap-12 scroll-mt-24">
          <SectionHeading
            number="03"
            label="Credentials"
            title="Certifications"
            description="Verified credentials across security, cloud, and compliance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allCredentials.map((credential, index) => (
              <Credential key={index} index={index + 1} Certificate={credential} />
            ))}
          </div>
        </Reveal>
      </main>

      <MyFooter />
    </div>
  );
}
