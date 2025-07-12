// src/components/TimelineItem.tsx
import React from 'react';
import styles from './TimelineItem.module.css';
// Korrigierte Zeile
import type { TimelineEvent } from '../types/timeline'; 
interface TimelineItemProps {
  event: TimelineEvent;
  position: 'left' | 'right'; // Wir geben die Position explizit vor
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, position }) => {
  // Bestimme die CSS-Klasse basierend auf der Position
  const containerClass = position === 'left' ? styles.left : styles.right;

  return (
    <div className={`${styles.timelineItem} ${containerClass}`}>
      <div className={styles.dot}></div>
      <div className={styles.content}>
        <div className={styles.date}>{event.date}</div>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.subtitle}>{event.subtitle}</p>
        {event.description && (
          <p className={styles.description}>{event.description}</p>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;