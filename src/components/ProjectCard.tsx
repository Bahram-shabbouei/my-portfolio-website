// src/components/ProjectCard.tsx
import React from 'react';
import type { Project } from './ProjectsSection'; // Wir importieren den Typ von der übergeordneten Komponente
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      
      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.links}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonOutline}`}>
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;