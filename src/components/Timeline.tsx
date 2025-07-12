// src/components/Timeline.tsx
import React from 'react';
import styles from './Timeline.module.css';
import TimelineItem from './TimelineItem';
// Korrigierte Zeile
import type { TimelineEvent } from '../types/timeline'; 
interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <TimelineItem
          key={event.id}
          event={event}
          // Wechsle die Position basierend auf dem Index (gerade/ungerade)
          position={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </div>
  );
};

export default Timeline;