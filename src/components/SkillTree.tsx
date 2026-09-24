import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

function SkillTree() {
  return (
    <section id="skills" className="panel">
      <div className="section-top">
        <span>02</span>
        <b>SKILL TREE</b>
        <em>TECHNICAL LOADOUT</em>
      </div>

      <div className="skill-grid">
        {skills.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export default SkillTree;
