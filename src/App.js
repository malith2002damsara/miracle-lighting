// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import IndoorLighting from './pages/ServicePages/IndoorLighting';
import OutdoorLighting from './pages/ServicePages/OutdoorLighting';
import CustomDesigns from './pages/ServicePages/CustomDesigns';
import StageLighting from './pages/ServicePages/StageLighting';
import BackdropLighting from './pages/ServicePages/BackdropLighting';
import AmbientLighting from './pages/ServicePages/AmbientLighting';
import EventLighting from './pages/ServicePages/EventLighting';
import ThemedLighting from './pages/ServicePages/ThemedLighting';
import FestivalLighting from './pages/ServicePages/FestivalLighting';
import WeddingLighting from './pages/ServicePages/WeddingLighting';
import CorporateLighting from './pages/ServicePages/CorporateEventsLighting';
import HolidayLighting from './pages/ServicePages/HolidayLighting';
import GardenLighting from './pages/ServicePages/GardenLighting';

// New Imports for Event pages
import Wedding from './pages/Wedding';
import BirthdayParties from './pages/BirthdayParties';
import ChristmasParties from './pages/ChristmasParties';
import KathinaFestival from './pages/KathinaFestival';
import FAQ from './pages/FAQ';
import Venue from './pages/Venue';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/indoor-lighting" element={<IndoorLighting />} />
        <Route path="/outdoor-lighting" element={<OutdoorLighting />} />
        <Route path="/custom-designs" element={<CustomDesigns />} />
        <Route path="/stage-lighting" element={<StageLighting />} />
        <Route path="/backdrop-lighting" element={<BackdropLighting />} />
        <Route path="/ambient-lighting" element={<AmbientLighting />} />
        <Route path="/event-lighting" element={<EventLighting />} />
        <Route path="/themed-lighting" element={<ThemedLighting />} />
        <Route path="/festival-lighting" element={<FestivalLighting />} />
        <Route path="/wedding-lighting" element={<WeddingLighting />} />
        <Route path="/holiday-lighting" element={<HolidayLighting />} />
        <Route path="/garden-lighting" element={<GardenLighting />} />
        {/* New Routes for Event pages */}
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/birthday-parties" element={<BirthdayParties />} />
        <Route path="/christmas-parties" element={<ChristmasParties />} />
        <Route path="/kathina-festival" element={<KathinaFestival />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Venue" element={<Venue />} />
        
        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
