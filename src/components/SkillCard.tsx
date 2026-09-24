import { Brain, Code2, Gamepad2, Languages, Server } from "lucide-react";
import type { SkillCategory } from "../types";
import { useTilt } from "../hooks/useCursorSpotlight";

const ICONS = {
  frontend: Code2,
  backend: Server,
  ai: Brain,
  creative: Gamepad2,
  languages: Languages,
};

function SkillCard({ category }: { category: SkillCategory }) {
  const tiltRef = useTilt<HTMLDivElement>(5);
  const Icon = ICONS[category.icon];

  return (
    <div className="skill" ref={tiltRef}>
      <div className="skill-glow" />

      <div className="skill-head">
        <span className="skill-index">{category.n}</span>
        <Icon size={24} strokeWidth={1.6} />
      </div>

      <h3>{category.title}</h3>
      <p className="body-text">{category.summary}</p>

      <ul className="skill-chips">
        {category.items.map((item) => (
          <li
            key={item.name}
            className={`chip ${item.level === "core" ? "chip-core" : ""}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
