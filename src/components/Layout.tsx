// src/components/Layout.tsx (ANGEPASSTE VERSION)
import React from 'react';
import styles from './Layout.module.css';

// Daten für die Navigationslinks, zentral an einer Stelle definiert
const navLinks = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#ausbildung", label: "Ausbildung" },
  { href: "#berufserfahrung", label: "Berufserfahrung" },
  { href: "#faehigkeiten", label: "Fähigkeiten" },
  { href: "#projekte", label: "Projekte" },
  { href: "#kontakt", label: "Kontakt" },
];

interface LayoutProps {
  children: React.ReactNode; // Nimmt jetzt 'children' statt eines <Outlet />
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Funktion für sanftes Scrollen
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Verhindert das Standard-Sprungverhalten des Browsers
    const targetId = href.substring(1); // Entfernt das '#' aus dem href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scrollt sanft zum Zielelement
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.layout}>
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
        </nav>
      </header>

      <main>
        {children} {/* Rendert die PortfolioPage, die wir in App.tsx übergeben haben */}
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Bahram Shabbouei Hagh.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;