// src/types/skills.ts

// Typ für einen einzelnen technischen Skill mit einem Level von 0-100
export interface TechSkill {
  name: string;
  level: number; // Eine Zahl zwischen 0 und 100
  levelText: string; // z.B. "gute Kenntnisse"
}

// Typ für eine einzelne Sprache
export interface LanguageSkill {
  name: string;
  level: string; // z.B. "B1/B2 (GER)" oder "Muttersprache"
}