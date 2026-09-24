import { projects } from "../data/projects";
import type { Project } from "../types";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  onSelect: (project: Project) => void;
};

function Projects({ onSelect }: ProjectsProps) {
  return (
    <section id="projects" className="panel">
      <div className="section-top">
        <span>03</span>
        <b>PROJECTS</b>
        <em>SELECT A FILE</em>
      </div>

      <div className="work-list">
        {projects.map((project) => (
          <ProjectCard key={project.n} project={project} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
