import React, { useState, useEffect } from 'react';
import OpeningPage from './components/OpeningPage';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import EngagementSection from './components/EngagementSection';
import AttireSection from './components/AttireSection';
import GallerySection from './components/GallerySection';
import BlessingsSection from './components/BlessingsSection';
import RsvpSection from './components/RsvpSection';
import CountdownSection from './components/CountdownSection';
import FooterSection from './components/FooterSection';
import CrosshairCursor from './components/CrosshairCursor';

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [isEngagement, setIsEngagement] = useState(false);
  const [heroImageUrl, setHeroImageUrl] = useState(`${import.meta.env.BASE_URL}couple-hero.jpeg`);

  // Detect ?view=engagement & custom hero image from URL on mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);

      // Auto-skip opening if returning directly to a section
      if (window.location.hash && window.location.hash.length > 1) {
        setShowOpening(false);
      }

      const viewParam = params.get('view');
      if (viewParam && viewParam.toLowerCase() === 'engagement') {
        setIsEngagement(true);
      }

      const customImg = params.get('hero') || params.get('img');
      if (customImg) {
        setHeroImageUrl(customImg);
      }
    } catch (e) {
      console.error('Error parsing URL search params:', e);
    }
  }, []);

  // When opening page is dismissed, unlock body scroll
  const handleOpenInvitation = () => {
    setShowOpening(false);
    // Scroll to top when main content appears
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="wedding-app-root">
      {/* Opening invitation overlay */}
      {showOpening && <OpeningPage onOpen={handleOpenInvitation} />}

      {/* Precision Blueprint Corner Trims */}
      <div className="page-trim-tl" aria-hidden="true" />
      <div className="page-trim-tr" aria-hidden="true" />
      <div className="page-trim-bl" aria-hidden="true" />
      <div className="page-trim-br" aria-hidden="true" />

      {/* Desktop Crosshair Reticle Follower */}
      <CrosshairCursor />

      {/* Top Fixed Navigation */}
      <Navigation isEngagement={isEngagement} onToggleView={() => setIsEngagement((p) => !p)} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section with Couple Portrait */}
        <HeroSection heroImageUrl={heroImageUrl} isEngagement={isEngagement} />

        {/* 2. Bride & Groom Details */}
        <CoupleSection />

        {/* 3. The Engagement — Venue Presentation */}
        <EngagementSection />

        {/* 4. Attire & Aesthetic — Colour palette, inspiration */}
        <AttireSection />

        {/* 5. Gallery — Moments */}
        <GallerySection />

        {/* 6. Countdown */}
        <CountdownSection />

        {/* 7. Blessings */}
        <BlessingsSection />

        {/* 8. Will You Join Us? — Attendance */}
        <RsvpSection isEngagement={isEngagement} />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
