// src/types/projects.ts

export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  imageUrl?: string; // Ein optionales Bild für die Projektkarte
  projectUrl?: string; // Ein optionaler Link zum Live-Projekt
  repoUrl?: string; // Ein optionaler Link zum GitHub-Repository
}