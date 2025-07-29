// src/pages/FullContactPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Für den "Zurück"-Link
import Section from '../components/Section';
import FullContactForm from '../components/FullContactForm'; // Importiert das große Formular

const FullContactPage: React.FC = () => {
  return (
    // Wir nutzen unsere wiederverwendbare Section-Komponente für ein konsistentes Aussehen
    <Section title="Detailliertes Kontaktformular" id="full-contact">
      <p className="fullContactDescription">
        Beschreiben Sie hier Ihr Anliegen im Detail. Ich werde mich so schnell wie möglich bei Ihnen melden.
      </p>
      
      {/* Hier wird die Komponente für das vollständige Formular gerendert */}
      <FullContactForm />

      <div className="contactPageLinkContainer">
        <Link to="/" style={{ color: '#0369a1', textDecoration: 'underline' }}>
          Zurück zur Hauptseite
        </Link>
      </div>
    </Section>
  );
};

export default FullContactPage;