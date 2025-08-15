// src/components/Layout.tsx (FINALE VERSION)
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

// Importiere die Icons und den Typ
import type { SocialLink } from '../types/socials';
import { FaLinkedin, FaGithub, FaXingSquare } from 'react-icons/fa';

// === DATEN AN EINER STELLE ===
const navLinks = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#ausbildung", label: "Ausbildung" },
  { href: "#berufserfahrung", label: "Berufserfahrung" },
  { href: "#faehigkeiten", label: "Fähigkeiten" },
  { href: "#projekte", label: "Projekte" },
  { href: "#kontakt", label: "Kontakt" },
];

const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bahram-shabbouei-hagh-31696890/', icon: FaLinkedin },
  { name: 'GitHub', url: 'https://github.com/Bahram-shabbouei', icon: FaGithub },
  { name: 'Xing', url: 'https://www.xing.com/profile/Bahram_ShabboueiHagh/web_profiles/', icon: FaXingSquare }
];

const Layout: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className={styles.navLink}
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.navSocials}>
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                // HINZUGEFÜGT für Barrierefreiheit und Tooltips
                aria-label={`Besuche mein ${link.name} Profil`}
                title={link.name}
                className={styles.socialIconLink}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerSocials}>
             {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name} aria-label={`Besuche mein ${link.name} Profil`}>
                    <link.icon />
                </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Bahram Shabbouei Hagh.</p>
        </div>
      </footer>
    </div>
  );
};
export default Layout;