import React from 'react';
import ProgressBar from './ProgressBar'; // Importieren wir gleich
import styles from './SkillsSection.module.css';

// Daten für die Skills
const pcSkills = [
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'SQL (Postgres/SQLite)', level: 70 },
  { name: 'Git & GitHub', level: 85 },
];

const languageSkills = [
  { name: 'Persisch', level: 'Muttersprache' },
  { name: 'Deutsch', level: 'C1 - Fachkundige Sprachkenntnisse' },
  { name: 'Englisch', level: 'B2 - Selbständige Sprachverwendung' },
];

const SkillsSection: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      {/* Linke Spalte: PC-Kenntnisse */}
      <div className={styles.skillColumn}>
        <h3 className={styles.columnTitle}>PC-Kenntnisse</h3>
        <div className={styles.progressList}>
          {pcSkills.map((skill) => (
            <ProgressBar key={skill.name} label={skill.name} level={skill.level} />
          ))}
        </div>
      </div>

      {/* Rechte Spalte: Sprachkenntnisse */}
      <div className={styles.skillColumn}>
        <h3 className={styles.columnTitle}>Sprachkenntnisse</h3>
        <ul className={styles.languageList}>
          {languageSkills.map((skill) => (
            <li key={skill.name} className={styles.languageItem}>
              <span className={styles.languageName}>{skill.name}</span>
              <span className={styles.languageLevel}>{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;