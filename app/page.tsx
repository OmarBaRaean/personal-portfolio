"use client";
import type { Metadata } from "next";
import MyHeader from "@/app/components/MyHeader";
import SkillCollection from "@/app/components/SkillCollection";
import { skillset1, skillset2, allSkills } from "@/app/data/skills";
import MyProject, { MyProjectProps } from "./components/MyProject";
import Credential from "./components/Credential";
import MyFooter from "./components/Myfooter";
import { allProjects } from "@/app/data/project";
import ProjectPopup from "./components/PopUpscreen";
import { useEffect, useState } from "react";
import { allCredentials } from "@/app/data/Credentials";

export default function PortfolioPage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<MyProjectProps | null>(null);

  useEffect(() => {
    selectedProject ? setPopupOpen(true) : setPopupOpen(false);

  }, [selectedProject]);
  return (
    <div className="font-['Inter'] text-[16px] leading-[1.6] bg-[#131313] antialiased flex flex-col min-h-screen">
      <ProjectPopup project={selectedProject} isOpen={popupOpen} onClose={() => setSelectedProject(null)} />

      <MyHeader />

      <main className="flex-grow pt-[104px] pb-16 px-6 md:px-10 max-w-[1280px] mx-auto w-full flex flex-col gap-16">
        {/* Hero Section */}
        <section className="flex flex-col gap-6 py-10 ">
          <div className="flex flex-col gap-2">
            <span className="font-['JetBrains_Mono'] text-[13px] leading-[1.2] font-medium text-[#4edea3]">
              &gt; System Initialization complete.
            </span>
            <h1 className="font-['Inter'] text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#e5e2e1]">
              SOC Analyst &amp; <br />
              Security Engineer.
            </h1>
          </div>
          <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#bbcabf] max-w-3xl">
            Detecting threats, automating response, and engineering secure systems.
            Specializing in SIEM engineering with Splunk and Wazuh, network traffic
            analysis, and building hands-on security labs across AWS and on-premise
            environments.
          </p>
          <div className="flex gap-4 mt-2 max-w-svw flex-wrap">
            <a className="flex-1 font-['Inter'] text-[14px] font-semibold tracking-[0.01em] bg-[#10b981] text-[#00422b] px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              href="https://drive.google.com/file/d/12IYb6PXHon2ItppRJuxqZadkTE3Rfd7y/view?usp=sharing"
              target="_blank"
            >
              <span className="material-symbols-outlined text-sm">description </span>{" "}
              CV
            </a>
            <a
              className="flex-1 font-['Inter'] text-[14px] font-semibold tracking-[0.01em] bg-transparent border border-[#3c4a42] text-[#e5e2e1] px-6 py-2 rounded-lg hover:border-[#adc6ff] transition-colors flex items-center gap-2"
              href="https://github.com/OmarBaRaean"
              target="_blank"            >
              <span className="material-symbols-outlined text-sm">code</span>{" "}
              GitHub
            </a>
            <a
              className="flex-1 font-['Inter'] text-[14px] font-semibold tracking-[0.01em] bg-transparent border border-[#3c4a42] text-[#e5e2e1] px-6 py-2 rounded-lg hover:border-[#adc6ff] transition-colors flex items-center gap-2"
              href="https://www.linkedin.com/in/omar-ba-raean"
              target="_blank"
            >
              <span className="material-symbols-outlined text-sm">work</span>{" "}
              LinkedIn
            </a>
            <a
              className="flex-1 font-['Inter'] text-[14px] font-semibold tracking-[0.01em] bg-transparent border border-[#3c4a42] text-[#e5e2e1] px-6 py-2 rounded-lg hover:border-[#adc6ff] transition-colors flex items-center gap-2"
              href="mailto:3mr.barayan@gmail.com"
            >
              <span className="material-symbols-outlined text-sm">mail</span>{" "}
              Email
            </a>
          </div>
        </section>

        {/* Technical Arsenal */}
        <section className="flex flex-col gap-6">
          <h2 className="font-['Inter'] text-[24px] leading-[1.3] font-semibold text-[#e5e2e1] border-b border-[#3c4a42] pb-2">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allSkills.map((skillset, index) => (
              <SkillCollection key={index} sections={skillset} />
            ))}          </div>
        </section>

        {/* Project Matrix */}
        <section className="flex flex-col gap-6">
          <h2 className="font-['Inter'] text-[24px] leading-[1.3] font-semibold text-[#e5e2e1] border-b border-[#3c4a42] pb-2">
            Project Matrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project, index) => (
              <MyProject key={index} TheProject={project} onViewClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section className="flex flex-col gap-6">
          <h2 className="font-['Inter'] text-[24px] leading-[1.3] font-semibold text-[#e5e2e1] border-b border-[#3c4a42] pb-2">
            Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allCredentials.map((credential, index) => (
              <Credential key={index} Certificate={credential} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <MyFooter />
    </div>
  );
}
