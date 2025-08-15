// src/components/HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.css';
import type { SocialLink } from '../types/socials.tsx';

interface HeroProps {
  name: string;
  title: string;
  intro: string;
  imageUrl: string;
  socials: SocialLink[]; // Füge die Links zu den Props hinzu
}

const HeroSection: React.FC<HeroProps> = ({ name, title, intro, imageUrl, socials }) => {
  return (
    <header id="hero-section" className={styles.heroContainer}>
        <div className="container">
            <img src={imageUrl} alt={`Profilbild von ${name}`} className={styles.profileImage} />
            <h1 className={styles.heroName}>{name}</h1>
            <h2 className={styles.heroTitle}>{title}</h2>
            <p className={styles.heroIntro}>{intro}</p>

            {/* NEUER BLOCK FÜR SOCIAL MEDIA ICONS */}
            <div className={styles.heroSocials}>
              {socials.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Besuche mein ${link.name} Profil`}
                  title={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>
        </div>
    </header>
  );
};

export default HeroSection;