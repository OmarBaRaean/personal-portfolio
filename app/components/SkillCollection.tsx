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
}: {
  sections?: SkillCard;
}) {
  return (
    <div className="bg-[#1c1b1b] border border-[#3c4a42] rounded-xl p-4 flex flex-col gap-4 hover:border-[#3b82f6] transition-colors hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
      <div className="flex items-center gap-2 text-[#4edea3]">
        <span className="material-symbols-outlined">{sections.icon}</span>
        <h3 className="font-['Inter'] text-[14px] font-semibold tracking-[0.01em]">
          {sections.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {sections.skills?.map((skill) => (
          <span
            key={skill.name}
            className="flex items-center gap-1 bg-[#131313] font-['JetBrains_Mono'] text-[13px] leading-[1.2] font-medium px-2 py-1 rounded text-[#bbcabf] border border-[#3c4a42]"
          >
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: skill.color }}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
