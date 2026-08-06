// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import FullContactPage from './pages/FullContactPage';
import Layout from './components/Layout';

// Basis-Pfad für das Deployment auf GitHub Pages (Produktionsumgebung).
// Dieser Wert wird als benannte Konstante gehalten, damit zukünftige
// Änderungen einfach und eindeutig vorgenommen werden können.
const PRODUCTION_BASENAME = '/my-portfolio-website';
const DEVELOPMENT_BASENAME = '/';

/**
 * Bestimmt, mit welchem Basename der Router ausgeführt werden soll.
 * Im Entwicklungsmodus (Vite Dev Server) wird das Root-Verzeichnis
 * verwendet, in der Produktionsumgebung der Unterordner auf GitHub Pages.
 */
function getRouterBasename(): string {
  const isDevelopmentMode = import.meta.env.DEV;
  return isDevelopmentMode ? DEVELOPMENT_BASENAME : PRODUCTION_BASENAME;
}

function App() {
  const basename = getRouterBasename();

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* Layout-Route: enthält gemeinsame Elemente wie Header/Footer */}
        <Route path="/" element={<Layout />}>
          {/* Standardseite, wenn der Pfad genau dem Basename entspricht */}
          <Route index element={<PortfolioPage />} />
          {/* Relative Kindroute für die Kontaktseite */}
          <Route path="kontakt" element={<FullContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
