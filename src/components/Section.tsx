// src/components/Section.tsx
import React from 'react';
import styles from './Section.module.css';

// Wir definieren die 'Props' (Eigenschaften), die diese Komponente annehmen kann
interface SectionProps {
  title: string; // Jede Sektion muss einen Titel haben
  children: React.ReactNode; // 'children' ist der Inhalt, der zwischen die Tags geschrieben wird
  id?: string; // Eine optionale ID für Ankerlinks
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.sectionContent}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;