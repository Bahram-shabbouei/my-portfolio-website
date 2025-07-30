// src/components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';
import type { Project } from '../types/projects';

// Projektdaten basierend auf deinem HTML-Beispiel
const projects: Project[] = [
  {
    id: 1,
    title: "Agile To-Do-Anwendung (Scrum-Projekt)",
    role: "Lead-Entwickler (UI, State Management, CRUD)",
    description: "Ein agiles Projekt zur Erstellung einer To-Do-Anwendung, das ich ganzheitlich entwickelte. Meine Aufgaben umfassten die Entwicklung von UI-Komponenten, die Verwaltung des Anwendungszustands und die Implementierung von CRUD-Operationen (Create, Read, Update, Delete) für Aufgaben. Das Projekt wurde nach den Prinzipien von Scrum mit Sprints, User Stories und einem Product Backlog durchgeführt.",
    // Hier könntest du einen Link zum GitHub-Repo des Team-Projekts einfügen
    repoUrl: "https://github.com/dein-team/to-do-app-scrum-projekt" // BITTE ANPASSEN
  },

  {
    id: 2,
    title: "Project Naght Crowler (Team-Projekt)",
    role: "Backend-Entwickler (Python, Flask, MongoDB) ",
    description: "Mitarbeit in einem Team zur Entwicklung einer Webanwendung mit einem Python-Backend. Meine Hauptverantwortung lag in der Implementierung von API-Endpunkten mit dem Flask-Framework und der Anbindung an eine MongoDB-Datenbank zur Datenpersistenz.f",
    imageUrl:"../../public/project-preview3.png",
   // projectUrl: "https://Bahram-shabbouei.github.io/my-portfolio-website/", // Dein Live-Link
    repoUrl: "https://github.com/MrRobob/Project-Night-Crawler" // Dein Repo-Link
  },
  // Hier könnten weitere Projekte hinzugefügt werden
    {
    id: 3,
    title: "Persönliche Portfolio-Website (Dieses Projekt)",
    role: "Full-Stack Entwickler (React, Node.js)",
    description: "Eigenständige Konzeption und Entwicklung dieser Single-Page-Application. Das Frontend wurde mit React, TypeScript und Vite realisiert. Das separate Backend auf Basis von Node.js/Express verarbeitet API-Anfragen, speichert Daten in einer SQLite-Datenbank und versendet automatisierte E-Mails.",
    imageUrl: "/project-portfolio.jpg", // Dein Screenshot
    //projectUrl: "https://bahram-shabbouei.github.io/my-portfolio-website/", // when Project deployed can be used. 
    repoUrl: "https://github.com/Bahram-shabbouei/my-portfolio-website"
  },
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