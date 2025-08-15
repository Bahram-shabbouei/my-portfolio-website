// src/components/SkillsSection.tsx
import React from 'react';
import ProgressBar from './ProgressBar';
import styles from './SkillsSection.module.css';
import type { TechSkill, LanguageSkill } from '../types/skills'; // Importiere die Typen

// Daten für die Skills (später können diese auch als Props übergeben werden)
const techSkills: TechSkill[] = [
  { name: "AutoCad Electrical", level: 80, levelText: "gute Kenntnisse" },
  { name: "MS-Office", level: 95, levelText: "sehr gute Kenntnisse" },
  { name: "Photoshop", level: 30, levelText: "Grundkenntnisse" },
  { name: "Google Sites", level: 80, levelText: "gute Kenntnisse" },
  { name: "HTML & CSS", level: 80, levelText: "gute Kenntnisse" },
  { name: "PHP", level: 30, levelText: "Grundkenntnisse" },
  { name: "JavaScript", level: 80, levelText: "gute Kenntnisse" },
  { name: "React", level: 80, levelText: "gute Kenntnisse" },
  { name: "Python", level: 80, levelText: "gute Kenntnisse" },
];

const languageSkills: LanguageSkill[] = [
  { name: "Deutsch", level: "B1/B2 (GER)" },
  { name: "Englisch", level: "Gut" },
  { name: "Türkisch", level: "Muttersprache" },
  { name: "Persisch", level: "Exzellente Kenntnisse" },
];

// Die SkillsSection-Komponente
// Diese Komponente zeigt die technischen und sprachlichen Fähigkeiten
const SkillsSection: React.FC = () => {
  return (
    <div className={styles.skillsGrid}>
      {/* PC-Kenntnisse */}
      <div className={styles.skillCategory}>
        <h3>PC-Kenntnisse</h3>
        <div className={styles.techSkillsList}>
          {techSkills.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <span>{skill.name}</span>
              <ProgressBar level={skill.level} skillName={skill.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Sprachkenntnisse */}
      <div className={styles.skillCategory}>
        <h3>Sprachkenntnisse</h3>
        <ul className={styles.languageList}>
          {languageSkills.map((language) => (
            <li key={language.name}>
              <strong>{language.name}:</strong> {language.level}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;