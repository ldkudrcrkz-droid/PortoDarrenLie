import type { SkillCategory } from "../types";

// ============================================================
// SKILL TREE DATA
// To add a new language, add an entry to the "languages"
// category's `items` array below — nothing else needs to change.
// ============================================================

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    n: "01",
    icon: "frontend",
    title: "FRONTEND",
    summary:
      "Building interfaces that feel fast, accessible, and considered.",
    items: [
      { name: "React", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "JavaScript", level: "core" },
      { name: "Responsive UI", level: "core" },
      { name: "Component Architecture", level: "familiar" },
    ],
  },
  {
    id: "backend",
    n: "02",
    icon: "backend",
    title: "BACKEND",
    summary: "Designing APIs and services that the frontend can trust.",
    items: [
      { name: "C#", level: "core" },
      { name: ".NET", level: "core" },
      { name: "REST APIs", level: "core" },
      { name: "Database Integration", level: "familiar" },
      { name: "Socket Communication", level: "familiar" },
    ],
  },
  {
    id: "ai",
    n: "03",
    icon: "ai",
    title: "AI / ML",
    summary: "Turning data into models that make useful predictions.",
    items: [
      { name: "Machine Learning", level: "core" },
      { name: "NLP", level: "core" },
      { name: "Forecasting", level: "familiar" },
      { name: "Deep Learning", level: "familiar" },
      { name: "Model Evaluation", level: "familiar" },
    ],
  },
  {
    id: "creative",
    n: "04",
    icon: "creative",
    title: "CREATIVE",
    summary: "3D and interactive work outside of pure software.",
    items: [
      { name: "Blender", level: "core" },
      { name: "Unity", level: "core" },
      { name: "3D Modeling", level: "familiar" },
      { name: "Game Development", level: "familiar" },
    ],
  },
  {
    id: "languages",
    n: "05",
    icon: "languages",
    title: "LANGUAGES",
    summary: "Programming languages I read, write, and debug in.",
    items: [
      { name: "Python", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "C#", level: "core" },
      { name: "C", level: "familiar" },
      { name: "C++", level: "familiar" },
      { name: "Java", level: "familiar" },
      { name: "SQL", level: "familiar" },
    ],
  },
];
