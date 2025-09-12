import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import UpstreamPage from './pages/UpstreamPage';
import DownstreamPage from './pages/DownstreamPage';
import ProcurementPage from './pages/ProcurementPage';
import CommunicationsPage from './pages/CommunicationsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/upstream" element={<UpstreamPage />} />
            <Route path="/downstream" element={<DownstreamPage />} />
            <Route path="/procurement" element={<ProcurementPage />} />
            <Route path="/communications" element={<CommunicationsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;