// src/pages/PortfolioPage.tsx

import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ShortContactForm from '../components/ShortContactForm';
import type { TimelineEvent } from '../types/timeline';
import styles from './PortfolioPage.module.css';
// NEUE IMPORTS FÜR ICONS UND TYPEN
import type { SocialLink } from '../types/socials.tsx';
import { FaLinkedin, FaGithub, FaXingSquare } from 'react-icons/fa';

// ==================================================================
// 2. DATENDEFINITION (AKTUALISIERT MIT DEINEN DATEN)
// ==================================================================

const heroData = {
  name: "Bahram Shabbouei Hagh",
  title: "Webentwickler & Elektroingenieur",
  // Wir nehmen hier den ersten Satz aus deinem "Über mich"-Text als Intro
  intro: "Als engagierter und zielstrebiger Fachmann mit einem soliden technischen Fundament, strebe ich danach, meine Karriere in der dynamischen Welt der Webentwicklung fortzusetzen.", imageUrl: "/profile.jpg" };
const aboutMeText = [
  "Als engagierter und zielstrebiger Fachmann mit einem soliden technischen Fundament bin ich bestrebt, meine Karriere in der dynamischen Welt der Webentwicklung und Cloud-Technologien fortzusetzen. Ursprünglich als Elektroingenieur ausgebildet, habe ich wertvolle Erfahrungen in der Qualitätskontrolle und Projektüberwachung im Anlagenbau gesammelt und war verantwortlich für die termingerechte Umsetzung komplexer Vorhaben.",
  "Meine ausgeprägte Leidenschaft für Technologie und digitale Innovation hat mich dazu bewogen, mich intensiv im Bereich der modernen Webentwicklung und Cloud-Technologien weiterzubilden. Aktuell vertiefe ich meine Kenntnisse bei Techstarter Berlin und arbeite aktiv daran, meine Fähigkeiten in diesem zukunftsorientierten Feld auszubauen.",
  "Ich zeichne mich durch Geduld und Ausdauer bei der Bewältigung von Herausforderungen aus und bin ein überzeugter Teamplayer, der stets offen dafür ist, gemeinsam neue Wege zu erkunden und innovative Lösungen zu finden. Meine Zielstrebigkeit treibt mich an, kontinuierlich an meinen Zielen zu arbeiten und mich persönlich sowie beruflich weiterzuentwickeln.",
  "Ich bin auf der Suche nach einer spannenden Position, in der ich meine technischen Fähigkeiten und meine ausgeprägte Lernbereitschaft einbringen kann, um wertvolle Beiträge zu leisten und mich langfristig in einem innovativen Umfeld zu etablieren."
];

const ausbildungsEvents: TimelineEvent[] = [
  { id: 1, date: "2024/09 - bis jetzt", title: "Weiterbildung als Webentwicklung & Cloud", subtitle: "Techstarter GmbH, Berlin" },
  { id: 2, date: "2023/05 - 2023/07", title: "Deutsch für den Beruf CEF B2+", subtitle: "Weiterbildung" },
  { id: 3, date: "03/2023 - 06/2023", title: "Computerkurs ReDI school basic 2", subtitle: "ReDI School of Digital Integration" },
  { id: 4, date: "09/2022 - 11/2022", title: "Computerkurs für die Mittelstufe", subtitle: "Weiterbildung" },
  { id: 5, date: "04/2022 - 06/2022", title: "Computer Anfängerkurs", subtitle: "Weiterbildung" },
  { id: 6, date: "11/2021 - 05/2022", title: "Berufssprachkurs Telc Europaratsstufe B2", subtitle: "Weiterbildung" },
  { id: 7, date: "04/2018 - 07/2018", title: "Deutsch für Zuwanderer B1", subtitle: "Weiterbildung" },
  { id: 8, date: "08/2016 - 08/2017", title: "Deutsch für Zuwanderer A2", subtitle: "Berufssprachkurs" },
  { id: 9, date: "09/2011 - 09/2013", title: "Master of Power Electronics and Electric Machine", subtitle: "Faculty Computer Science and Engineering, Pardis Shahid Abbaspour", description: "Schwerpunkt: Liquid insulation in electric power" },
  { id: 10, date: "09/2005 - 21.09/2008", title: "Bachelor in Elektrotechnik", subtitle: "Islamische Azad-Universität, Teheran Mitte" },
  { id: 11, date: "1999 - 2004", title: "Vor-Universität (naturwissenschaftlich) und Vorbereitung", subtitle: "Seyyed Jamaluddin Asadabadi, Teheran" },
  { id: 12, date: "1994 - 1998", title: "Abitur", subtitle: "Rahnama-Gymnasium, Teheran" }
];

const berufserfahrungEvents: TimelineEvent[] = [
    { id: 1, date: "01/2024 - 08/2024", title: "Arzneimittellieferant", subtitle: "Selbstständig" },
    { id: 2, date: "03/2018", title: "Praktikum bei SBH Nord Betriebsstätte Berlin", subtitle: "Praktikum" },
    { id: 3, date: "08/2014 - 08/2015", title: "Barista, Monteur (als Asyl in der Türkei)", subtitle: "Diverse Tätigkeiten" },
    { id: 4, date: "07/2005 - 02/2010", title: "Qualitäts- & Laufzeitkontrolleur", subtitle: "Baufirma SANAYE DRYAIE SHAHID DARVICHY, Bandarabbas, Iran", description: "Kontrolle der Auftragserfüllung von Subunternehmen im Bereich Stromversorgung." },
    { id: 5, date: "04/2004 - 06/2005", title: "Pajoohan Sepand Engineering Services", subtitle: "Projektbezogene Tätigkeit" }
];
const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bahram-shabbouei-hagh-31696890/', // <-- ERSETZE DAS!
    icon: FaLinkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Bahram-shabbouei', // <-- ERSETZE DAS!
    icon: FaGithub
  },
  {
    name: 'Xing',
    url: 'https://www.xing.com/profile/Bahram_ShabboueiHagh/web_profiles/',
    icon: FaXingSquare
  }
];
const PortfolioPage: React.FC = () => {
  return (
    <>
      <HeroSection 
        name={heroData.name}
        title={heroData.title}
        intro={heroData.intro}
        imageUrl={heroData.imageUrl}
        socials={socialLinks} 
      />
      <Section title="Über mich" id="ueber-mich">
        <div className={`${styles.aboutText} container`}>
          {aboutMeText.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </Section>
      <Section title="Ausbildung" id="ausbildung">
        <Timeline events={ausbildungsEvents} />
      </Section>
      <Section title="Berufserfahrung" id="berufserfahrung">
        <Timeline events={berufserfahrungEvents} />
      </Section>
      <Section title="Fähigkeiten" id="faehigkeiten">
        <div className="container">
          <SkillsSection />
        </div>
      </Section>
      <Section title="Projekte" id="projekte">
        <div className="container">
          <ProjectsSection />
        </div>
      </Section>
      <Section title="Kontakt" id="kontakt">
        <div className={`${styles.contactIntro} container`}>
            <h3>Haben Sie eine kurze Frage?</h3>
            <p>Hinterlassen Sie einfach Ihren Namen und Ihre E-Mail.</p>
            <ShortContactForm /> 
            <h3 className={styles.marginTop2rem}>Möchten Sie mir Ihr Anliegen detaillierter mitteilen?</h3>
            <p>Nutzen Sie das vollständige Formular auf unserer Kontaktseite.</p>
            <a href="/kontakt" className={styles.fullContactLink}>
                Zum detaillierten Kontaktformular
            </a>
        </div>
      </Section>
    </>
  );
};

export default PortfolioPage;