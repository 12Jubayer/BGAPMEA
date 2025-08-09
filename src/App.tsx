import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CompanyProfile from './pages/CompanyProfile';
import OurServices from './pages/OurServices';
import OurClients from './pages/OurClients';
import B2BPartners from './pages/B2BPartners';
import ContactUs from './pages/ContactUs';
import LearnMore from './pages/LearnMore';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/clients" element={<OurClients />} />
            <Route path="/b2b-partners" element={<B2BPartners />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/learn-more/:section" element={<LearnMore />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;