// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import FullContactPage from './pages/FullContactPage';
import Layout from './components/Layout';
// Relative path for the contact page route.
const CONTACT_ROUTE_PATH = 'contact';
/**
 * Returns the base path the router should use.
 * This value comes directly from Vite's `base` config (see vite.config.ts),
 * so the base path is defined in exactly one place across the whole project.
 */
function getRouterBasename(): string {
  return import.meta.env.BASE_URL;
}

function App() {
  const basename = getRouterBasename();

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PortfolioPage />} />
          <Route path="kontakt" element={<FullContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
