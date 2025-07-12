// src/App.tsx (NEUE, VEREINFACHTE VERSION)
import React from 'react';
import Layout from './components/Layout';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <Layout>
      {/* Die PortfolioPage wird als "Kind" an das Layout übergeben */}
      <PortfolioPage />
    </Layout>
  );
}

export default App;