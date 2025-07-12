import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  label: string;
  level: number; // Ein Wert von 0 bis 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, level }) => {
  // Stelle sicher, dass der Wert zwischen 0 und 100 liegt
  const clampedLevel = Math.max(0, Math.min(100, level));

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.labelContainer}>
        <span className={styles.label}>{label}</span>
        <span className={styles.level}>{clampedLevel}%</span>
      </div>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${clampedLevel}%` }}
          role="progressbar"
          aria-valuenow={clampedLevel}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;