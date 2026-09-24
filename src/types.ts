export type Project = {
  n: string;
  year: string;
  category: string;
  title: string;
  status: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  learnings: string;
  technologies: string[];
  images: string[];
  links?: {
    label: string;
    url: string;
  }[];
};

export type Experience = {
  n: string;
  date: string;
  organization: string;
  title: string;
  category: string;
  description: string;
  details: string;
  responsibilities: string[];
};

export type SkillItem = {
  name: string;
  level?: "core" | "familiar";
};

export type SkillCategory = {
  id: string;
  n: string;
  icon: "frontend" | "backend" | "ai" | "creative" | "languages";
  title: string;
  summary: string;
  items: SkillItem[];
};
