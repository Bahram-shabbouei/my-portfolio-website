// src/components/ProgressBar.tsx (FINALE, KORRIGIERTE VERSION)
import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  level: number;
  skillName: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, skillName }) => {
  // Stellt sicher, dass der Wert immer zwischen 0 und 100 liegt
  const clampedLevel = Math.max(0, Math.min(100, level));

  return (
    // Das äußere Element ist der graue Hintergrund-Container.
    // Es trägt jetzt alle ARIA-Attribute, was semantisch korrekt ist.
    <div
      className={styles.progressBarContainer}
      role="progressbar"
      aria-label={`Kompetenzlevel für ${skillName}`}
      aria-valuenow={clampedLevel}
      aria-valuemin={0}
      aria-valuemax={100}
      title={`${skillName}: ${clampedLevel}%`} // Fügt einen nützlichen Tooltip hinzu
    >
      {/* Das innere Element ist der blaue Füllstand. */}
      {/* Seine Breite wird dynamisch per Inline-Stil gesetzt. */}
      <div
        className={styles.progressBarFill}
        style={{ width: `${clampedLevel}%` }}
      />
    </div>
  );
};

export default ProgressBar;