import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CarMarketplace from './pages/CarMarketplace';
import Bookings from './pages/Bookings';
import TourGuides from './pages/TourGuides';
import EmergencySupport from './pages/EmergencySupport';
import ContactAbout from './pages/ContactAbout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/vehicles" element={<CarMarketplace />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/guides" element={<TourGuides />} />
            <Route path="/emergency" element={<EmergencySupport />} />
            <Route path="/contact" element={<ContactAbout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;