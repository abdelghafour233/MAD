import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetails } from './pages/ProductDetails';
import { AdminDashboard } from './pages/AdminDashboard';
import { SettingsProvider } from './context/SettingsContext';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:id" element={<CategoryPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </HashRouter>
    </SettingsProvider>
  );
};

export default App;