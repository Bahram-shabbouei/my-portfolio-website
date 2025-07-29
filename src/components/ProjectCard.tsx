// src/components/ProjectCard.tsx
import React from 'react';
import styles from './ProjectCard.module.css';
import type { Project } from '../types/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      {project.imageUrl && (
        <img src={project.imageUrl} alt={`Vorschaubild für ${project.title}`} className={styles.cardImage} />
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardRole}>
          <strong>Rolle:</strong> {project.role}
        </p>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.cardActions}>
          {project.projectUrl && (
            <a href={project.projectUrl} className={styles.button} target="_blank" rel="noopener noreferrer">
              Zum Projekt
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} className={`${styles.button} ${styles.buttonSecondary}`} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;