// src/types/socials.ts
import type { IconType } from 'react-icons';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType; // Der Typ für eine Icon-Komponente aus react-icons
}