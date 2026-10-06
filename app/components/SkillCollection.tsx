import GlowCard from "./GlowCard";

export interface SkillData {
  name: string;
  color: string;
}

export interface SkillCard {
  title?: string;
  icon?: string;
  skills?: SkillData[];
}

export default function SkillCollection({
  sections = {
    title: "Languages",
    icon: "data_object",
    skills: [
      { name: "Rust", color: "#4edea3" },
      { name: "Go", color: "#4edea3" },
      { name: "C++", color: "#4edea3" },
      { name: "Python", color: "#adc6ff" },
    ],
  },
  index = 0,
}: {
  sections?: SkillCard;
  index?: number;
}) {
  return (
    <GlowCard index={index} className="p-6 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent">
          <span className="material-symbols-outlined text-[20px]">{sections.icon}</span>
        </span>
        <h3 className="text-[16px] font-semibold text-fg">{sections.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {sections.skills?.map((skill) => (
          <span
            key={skill.name}
            className="text-[13px] px-3 py-1 rounded-full text-muted bg-white/[0.03] border border-line"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </GlowCard>
  );
}
