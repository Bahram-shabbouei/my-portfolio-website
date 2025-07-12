export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description?: string; // Die Beschreibung ist optional
}