/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TeamSection } from './components/TeamSection';
import { PraxisSection } from './components/PraxisSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeNav, setActiveNav] = useState('start');

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#2B2326] antialiased selection:bg-pink-700 selection:text-white font-sans overflow-x-hidden">
      {/* 1. Practice Header with Brand Logo, Navigation, and Action */}
      <Header 
        activeNav={activeNav}
        onNavClick={setActiveNav}
      />

      {/* Main Content Sections */}
      <main id="start">
        {/* Welcome Hero Section featuring Praxisteam */}
        <Hero />

        {/* Team Section */}
        <TeamSection />

        {/* Praxis Räumlichkeiten Carousel Section */}
        <PraxisSection />

        {/* Medical Services Carousel Section */}
        <ServicesSection />

        {/* Contact & Hours Section */}
        <ContactSection />
      </main>

      {/* Comprehensive Practice Footer with Impressum and Datenschutz Modals */}
      <Footer />
    </div>
  );
}
