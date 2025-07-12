import React from 'react';
import styles from './HeroSection.module.css'; // Wir werden diese CSS-Datei gleich erstellen

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div className="container"> {/* Nutzt unsere globale Container-Klasse */}
        <img
          src="/profile.jpg" // Pfad zum Bild im public-Ordner
          alt="Profilbild von Bahram Shabbouei Hagh"
          className={styles.profileImage}
        />
        <h1 className={styles.heroName}>Bahram Shabbouei Hagh</h1>
        <p className={styles.heroTitle}>Webentwickler & Elektroingenieur</p>
      </div>
    </section>
  );
};

export default HeroSection;