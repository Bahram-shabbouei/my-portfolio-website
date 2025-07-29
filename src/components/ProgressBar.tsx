// src/components/ProgressBar.tsx
import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  level: number;
  skillName: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, skillName }) => {
  const clampedLevel = Math.max(0, Math.min(100, level));

  return (
    // Das äußere Element ist der graue Hintergrund-Container.
    // Es dient auch als Träger für die ARIA-Attribute.
    <div
      className={styles.progressBarContainer}
      role="progressbar"
      aria-label={`Kompetenzlevel für ${skillName}`}
      aria-valuenow={clampedLevel}
      aria-valuemin={0}
      aria-valuemax={100}
      title={`${skillName}: ${clampedLevel}%`} // Fügt einen Tooltip für Maus-Hover hinzu
    >
      {/* Das innere Element ist der blaue Füllstand. */}
      {/* Seine Breite wird dynamisch per Inline-Stil gesetzt. */}
      <div
        className={`${styles.progressBarFill} ${styles.progressBarLevel}`}
      />
    </div>
  );
};

export default ProgressBar;