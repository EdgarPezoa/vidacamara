import type SkillsProps from "./type";

const Skills = ({ title, skills, limit = 3 }: SkillsProps) => {
  const skillList = skills.slice(0, limit);

  return (
    <div className="flex flex-col items-center bg-white p-[16px] border-[2px] border-secondary rounded-[8px] gap-[10px]">
      <p>{title}</p>
      <ul className="list-disc ml-[16px]">
        {skillList.map((skill) => (
          <li role="SkillLists" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
