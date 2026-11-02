import React, { useState } from 'react';
import { BackgroundNodes } from './components/BackgroundNodes';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { LeadCapture } from './components/LeadCapture';
import { CorePillars } from './components/CorePillars';
import { ReadinessRoadmap } from './components/ReadinessRoadmap';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-mbs-navy-dark bg-radial-mesh bg-grid-pattern text-slate-100 flex flex-col justify-between selection:bg-mbs-cyan selection:text-mbs-navy-dark">
      {/* Interactive Circuit Nodes Canvas */}
      <BackgroundNodes />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar onOpenContact={() => setIsContactOpen(true)} />

        {/* Main Landing Page Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onOpenContact={() => setIsContactOpen(true)} />

          {/* 30-Day Live Countdown */}
          <Countdown />

          {/* VIP Notification Capture Form */}
          <div id="notify">
            <LeadCapture />
          </div>

          {/* Core Pillars / Services Teaser */}
          <CorePillars />

          {/* Readiness & Roadmap Tracker */}
          <ReadinessRoadmap />
        </main>

        {/* Footer */}
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </div>

      {/* Direct Founder Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;

