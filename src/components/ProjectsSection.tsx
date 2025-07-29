// src/components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';
import type { Project } from '../types/projects';

// Projektdaten basierend auf deinem HTML-Beispiel
const projects: Project[] = [
  {
    id: 1,
    title: "Meine persönliche Portfolio-Website",
    role: "Webentwickler (Front-end), UI/UX Conceptualizer, Content Integrator",
    description: "Ich habe diese persönliche Portfolio-Website konzipiert und mitentwickelt, um meine Fähigkeiten im Bereich Webentwicklung und meine beruflichen Erfahrungen effektiv zu präsentieren. Der Entwicklungsprozess umfasste die Definition der Nutzeranforderungen, das Design der Benutzeroberfläche (UI) und der Benutzererfahrung (UX) durch iterative Frage-Antwort-Zyklen, die Strukturierung und Integration von Inhalten sowie die Auswahl geeigneter Frontend-Technologien (React, TypeScript, Vite).",
    // Füge hier einen Link zu einem Vorschaubild hinzu, wenn du eines hast (z.B. ein Screenshot deiner Seite)
    imageUrl: "/project-preview.jpg", // Lege dieses Bild in den `public`-Ordner
    projectUrl: "https://Bahram-shabbouei.github.io/my-portfolio-website/", // Dein Live-Link
    repoUrl: "https://github.com/Bahram-shabbouei/my-portfolio-website" // Dein Repo-Link
  },
  // Hier könnten weitere Projekte hinzugefügt werden
  // {
  //   id: 2,
  //   title: "Projekt 2",
  //   role: "Backend-Entwickler",
  //   description: "Eine kurze Beschreibung des zweiten Projekts.",
  //   projectUrl: "#",
  //   repoUrl: "#"
  // }
];

const ProjectsSection: React.FC = () => {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsSection;