// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import FullContactPage from './pages/FullContactPage'; // Neue Seite für das volle Formular
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/my-portfolio-website"}>
      <Routes>
        <Route path="/" element={<Layout><PortfolioPage /></Layout>}>
        </Route>
        <Route path="kontakt" element={<Layout><FullContactPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;