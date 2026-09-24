import { ArrowUpRight } from "lucide-react";
import { experiences } from "../data/experience";
import type { Experience as ExperienceType } from "../types";
import { useTilt } from "../hooks/useCursorSpotlight";

type ExperienceCardProps = {
  experience: ExperienceType;
  onSelect: (experience: ExperienceType) => void;
};

function ExperienceCard({ experience, onSelect }: ExperienceCardProps) {
  const tiltRef = useTilt<HTMLElement>(3);

  return (
    <article
      className="memory"
      ref={tiltRef}
      onClick={() => onSelect(experience)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter") onSelect(experience);
      }}
    >
      <div className="work-glow" />

      <div className="mem-date">{experience.date}</div>

      <div>
        <small>{experience.organization}</small>
        <h3>{experience.title}</h3>
        <p className="body-text">{experience.description}</p>
      </div>

      <ArrowUpRight className="memory-arrow" size={20} />
    </article>
  );
}

type ExperienceSectionProps = {
  onSelect: (experience: ExperienceType) => void;
};

function Experience({ onSelect }: ExperienceSectionProps) {
  return (
    <section id="experience" className="panel">
      <div className="section-top">
        <span>04</span>
        <b>EXPERIENCE</b>
        <em>MEMORY LOG</em>
      </div>

      <div className="memory-list">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.n} experience={experience} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
