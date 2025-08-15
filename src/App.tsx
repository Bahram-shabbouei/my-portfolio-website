// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import FullContactPage from './pages/FullContactPage';
import Layout from './components/Layout';

function App() {
  // Diese Zeile prüft, ob wir im Entwicklungsmodus sind.
  // import.meta.env.DEV ist eine spezielle Variable von Vite.
  const basename = import.meta.env.DEV ? "/" : "/my-portfolio-website";

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