import { X } from "lucide-react";
import type { Experience } from "../types";

type ExperienceModalProps = {
  experience: Experience;
  onClose: () => void;
};

function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(event) => event.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Close experience">
          <X size={20} />
        </button>

        <div className="detail-number">EXPERIENCE // {experience.n}</div>

        <div className="project-meta">
          <div className="category">{experience.category}</div>
          <div className="status status-completed">{experience.date}</div>
        </div>

        <h2>{experience.title}</h2>
        <div className="detail-role">{experience.organization}</div>

        <p className="body-text detail-description">{experience.details}</p>

        <div className="detail-section">
          <div className="gallery-title">RESPONSIBILITIES //</div>

          <div className="responsibilities">
            {experience.responsibilities.map((item, index) => (
              <div className="responsibility" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p className="body-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceModal;
