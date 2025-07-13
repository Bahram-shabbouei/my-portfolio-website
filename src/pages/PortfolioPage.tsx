// src/pages/PortfolioPage.tsx (KORRIGIERTE VERSION)

import React from 'react';

// Import der Hauptkomponenten
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
 import ShortContactForm from '../components/ShortContactForm';
 import FullContactForm from '../components/FullContactForm';

// Import der Typdefinitionen mit "type"
import { type TimelineEvent } from '../types/timeline';

// Import der CSS-Module für diese Seite
import styles from './PortfolioPage.module.css';

// ==================================================================
// DATEN-DEFINITIONEN
// ==================================================================

const ausbildungsEvents: TimelineEvent[] = [
  { id: 1, date: "2022-Heute", title: "Weiterbildung als Webentwicklung", subtitle: "Selbststudium & Projekte" },
  { id: 2, date: "2011-2012", title: "Master of Power Electronics", subtitle: "Islamic Azad University, Iran" },
];
const berufserfahrungEvents: TimelineEvent[] = [
  { id: 1, date: "2019-2023", title: "Praktiker und Projektmitarbeiter", subtitle: "KONTROLON GMBH bei DB AG, Berlin" },
  { id: 2, date: "2013-2016", title: "Anemometerinstallateur", subtitle: "MAPNA, Teheran, Iran" },
];

// ==================================================================
// DIE HAUPTSEITEN-KOMPONENTE
// ==================================================================

const PortfolioPage: React.FC = () => {
  return (
    <>
      {/* ------------------- HERO SEKTION ------------------- */}
      <HeroSection />

      {/* ------------------- ÜBER MICH SEKTION ------------------- */}
      <Section title="Über mich" id="ueber-mich">
        <div className={`container ${styles.aboutText}`}>
          <p>
            Als engagierter und lernfreudiger Fachmann mit einem soliden akademischen Fundament in der Elektrotechnik habe ich meine Karriere in der dynamischen Welt der Softwareentwicklung neu ausgerichtet. Angetrieben von einer tiefen Leidenschaft für Problemlösungen und Technologie, fokussiere ich mich auf die Entwicklung moderner, benutzerfreundlicher und performanter Webanwendungen.
          </p>
          <p>
            Meine Reise hat mich von der Hardware zur Software geführt, was mir eine einzigartige Perspektive auf die ganzheitliche Funktionsweise von Systemen verleiht. Ich bin auf der Suche nach einer spannenden Position, in der ich meine erworbenen Fähigkeiten einsetzen und weiter ausbauen kann.
          </p>
        </div>
      </Section>

      {/* ------------------- AUSBILDUNG SEKTION ------------------- */}
      <Section title="Ausbildung" id="ausbildung">
        <Timeline events={ausbildungsEvents} />
      </Section>

      {/* ------------------- BERUFSERFAHRUNG SEKTION ------------------- */}
      <Section title="Berufserfahrung" id="berufserfahrung">
        <Timeline events={berufserfahrungEvents} />
      </Section>

      {/* ------------------- FÄHIGKEITEN SEKTION ------------------- */}
      <Section title="Fähigkeiten" id="faehigkeiten">
        <SkillsSection />
      </Section>

      {/* ------------------- PROJEKTE SEKTION ------------------- */}
      <Section title="Projekte" id="projekte">
        <ProjectsSection />
      </Section>

      {/* ------------------- KONTAKT SEKTION ------------------- */}
     <Section title="Kontakt" id="kontakt">
        <div className={`container ${styles.contactIntro}`}>
          <h3 className={styles.contactHeader}>Haben Sie eine kurze Frage?</h3>
          <p className={styles.contactSubheader}>Hinterlassen Sie einfach Ihren Namen und Ihre E-Mail, ich melde mich bei Ihnen.</p>
          <ShortContactForm /> {/* Hier einfügen */}

          <h3 className={`${styles.contactHeader} ${styles.contactFullFormHeader}`}>Möchten Sie mir eine detaillierte Nachricht senden?</h3>
          <p className={styles.contactSubheader}>Nutzen Sie das vollständige Formular, um Ihr Anliegen zu beschreiben.</p>
          <FullContactForm /> {/* Hier einfügen */}
        </div>
      </Section>
    </>
  );
};

export default PortfolioPage;