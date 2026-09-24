import { ArrowUpRight, Brain, Gamepad2, Globe, Layers } from "lucide-react";
import type { Project } from "../types";
import { useTilt } from "../hooks/useCursorSpotlight";

function statusClass(status: string) {
  return `status status-${status.toLowerCase().replace(/ /g, "-")}`;
}

function categoryIcon(category: string) {
  if (category.includes("GAME")) return <Gamepad2 size={20} strokeWidth={1.6} />;
  if (
    category.includes("MACHINE") ||
    category.includes("DEEP") ||
    category.includes("LLM")
  )
    return <Brain size={20} strokeWidth={1.6} />;
  if (category.includes("MUSIC")) return <Globe size={20} strokeWidth={1.6} />;
  return <Layers size={20} strokeWidth={1.6} />;
}

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const tiltRef = useTilt<HTMLElement>(3);

  return (
    <article
      className="work"
      ref={tiltRef}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter") onSelect(project);
      }}
    >
      <div className="work-glow" />

      <div className="work-num">{project.n}</div>
      <div className="work-icon">{categoryIcon(project.category)}</div>

      <div className="work-body">
        <div className="project-meta">
          <div className="category">{project.category}</div>
          <div className={statusClass(project.status)}>{project.status}</div>
        </div>

        <h3>{project.title}</h3>
        <p className="body-text">{project.description}</p>

        <div className="tech-row">
          {project.technologies.slice(0, 4).map((tech) => (
            <span className="pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <ArrowUpRight className="work-arrow" size={20} />
    </article>
  );
}

export default ProjectCard;