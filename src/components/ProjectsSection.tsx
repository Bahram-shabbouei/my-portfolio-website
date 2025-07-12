// src/components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard'; // Importieren wir gleich
import styles from './ProjectsSection.module.css';

// Typdefinition für ein einzelnes Projekt
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[]; // z.B. ['React', 'TypeScript', 'Node.js']
  liveUrl?: string; // Optionaler Link zur Live-Demo
  repoUrl?: string; // Optionaler Link zum GitHub-Repo
}

// Beispieldaten für deine Projekte
const projectsData: Project[] = [
  {
    id: 1,
    title: 'Persönliche Portfolio-Website',
    description: 'Eine responsive Single-Page-Anwendung, um meinen Lebenslauf und meine Projekte zu präsentieren. Entwickelt mit React, TypeScript und Vite. Das Backend für das Kontaktformular wurde mit Node.js und Express realisiert.',
    tags: ['React', 'TypeScript', 'Vite', 'Node.js', 'CSS Modules'],
    repoUrl: 'https://github.com/Bahram-shabbouei/my-portfolio-website',
  },
  {
    id: 2,
    title: 'Ein weiteres cooles Projekt',
    description: 'Beschreibung des zweiten Projekts. Hier habe ich mich auf die Implementierung von XY konzentriert, um meine Fähigkeiten in Z zu demonstrieren.',
    tags: ['Technologie A', 'Technologie B', 'API'],
    liveUrl: '#', // Platzhalter-Link
    repoUrl: '#', // Platzhalter-Link
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className={styles.projectsGrid}>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsSection;