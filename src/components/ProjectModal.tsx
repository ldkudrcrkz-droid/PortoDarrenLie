import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Github, X } from "lucide-react";
import type { Project } from "../types";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

function statusClass(status: string) {
  return `status status-${status.toLowerCase().replace(/ /g, "-")}`;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const imageCount = project.images.length;

  useEffect(() => {
    if (lightboxIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight")
        setLightboxIndex((current) =>
          current === null ? current : (current + 1) % imageCount
        );
      if (event.key === "ArrowLeft")
        setLightboxIndex((current) =>
          current === null ? current : (current - 1 + imageCount) % imageCount
        );
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, imageCount]);

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(event) => event.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Close project">
          <X size={20} />
        </button>

        <div className="detail-number">PROJECT // {project.n}</div>

        <div className="project-meta">
          <div className="category">{project.category}</div>
          <div className={statusClass(project.status)}>{project.status}</div>
        </div>

        <h2>{project.title}</h2>
        <div className="detail-role">
          ROLE // {project.role} · {project.year}
        </div>

        <div className="detail-story">
          <div className="story-block">
            <h4>THE PROBLEM</h4>
            <p className="body-text">{project.problem}</p>
          </div>

          <div className="story-block">
            <h4>WHAT WE BUILT</h4>
            <p className="body-text">{project.solution}</p>
          </div>

          <div className="story-block">
            <h4>WHAT I LEARNED</h4>
            <p className="body-text">{project.learnings}</p>
          </div>
        </div>

        <div className="detail-tech">
          {project.technologies.map((tech) => (
            <span className="pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="detail-links">
            {project.links.map((link) => (
              <a
                key={link.url}
                className="link-button"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                {link.label}
              </a>
            ))}
          </div>
        )}

        {project.images.length > 0 && (
          <div className="project-gallery">
            <div className="gallery-title">PROJECT VISUALS //</div>

            <div className="gallery-grid">
              {project.images.map((image, index) => (
                <button
                  type="button"
                  className="gallery-image"
                  key={image}
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`View ${project.title} screenshot ${index + 1} full size`}
                >
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                  <div className="gallery-label">
                    FRAME {String(index + 1).padStart(2, "0")}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {lightboxIndex !== null &&
        createPortal(
          <div
            className="lightbox-overlay"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(null);
            }}
          >
            <button
              className="lightbox-close"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex(null);
              }}
              aria-label="Close image"
            >
              <X size={22} />
            </button>

            {imageCount > 1 && (
              <button
                className="lightbox-nav lightbox-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightboxIndex((current) =>
                    current === null ? current : (current - 1 + imageCount) % imageCount
                  );
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={26} />
              </button>
            )}

            <img
              className="lightbox-image"
              src={project.images[lightboxIndex]}
              alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              onClick={(event) => event.stopPropagation()}
            />

            {imageCount > 1 && (
              <button
                className="lightbox-nav lightbox-next"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightboxIndex((current) =>
                    current === null ? current : (current + 1) % imageCount
                  );
                }}
                aria-label="Next image"
              >
                <ChevronRight size={26} />
              </button>
            )}

            <div className="lightbox-counter">
              FRAME {String(lightboxIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default ProjectModal;