import { useEffect, useState } from "react";

import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillTree from "./components/SkillTree";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Experience from "./components/Experience";
import ExperienceModal from "./components/ExperienceModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import type { Project, Experience as ExperienceType } from "./types";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceType | null>(null);

  // Close modals on Escape.
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setSelectedExperience(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const locked = selectedProject !== null || selectedExperience !== null;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, selectedExperience]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Background />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />

      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <SkillTree />
        <Projects onSelect={setSelectedProject} />
        <Experience onSelect={setSelectedExperience} />
        <Contact />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
}

export default App;
