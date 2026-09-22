import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import StorySection from './components/StorySection';
import ScheduleSection from './components/ScheduleSection';
import VenueSection from './components/VenueSection';
import CountdownSection from './components/CountdownSection';
import RsvpSection from './components/RsvpSection';
import FooterSection from './components/FooterSection';
import CrosshairCursor from './components/CrosshairCursor';

export default function App() {
  const [isEngagement, setIsEngagement] = useState(false);
  const [heroImageUrl, setHeroImageUrl] = useState('/couple-hero.jpg');

  // Detect ?view=engagement & custom hero image from URL on mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      
      // Check view query param
      const viewParam = params.get('view');
      if (viewParam && viewParam.toLowerCase() === 'engagement') {
        setIsEngagement(true);
      }

      // Check dynamic hero image override param if provided
      const customImg = params.get('hero') || params.get('img');
      if (customImg) {
        setHeroImageUrl(customImg);
      }
    } catch (e) {
      console.error('Error parsing URL search params:', e);
    }
  }, []);

  // View toggle function with URL sync (for preview and guest switching)
  const handleToggleView = () => {
    setIsEngagement((prev) => {
      const nextState = !prev;
      const url = new URL(window.location.href);
      if (nextState) {
        url.searchParams.set('view', 'engagement');
      } else {
        url.searchParams.delete('view');
      }
      window.history.pushState({}, '', url.toString());
      return nextState;
    });
  };

  return (
    <div className="wedding-app-root">
      {/* Precision Blueprint Corner Trims */}
      <div className="page-trim-tl" aria-hidden="true" />
      <div className="page-trim-tr" aria-hidden="true" />
      <div className="page-trim-bl" aria-hidden="true" />
      <div className="page-trim-br" aria-hidden="true" />

      {/* Desktop Crosshair Reticle Follower */}
      <CrosshairCursor />

      {/* Top Fixed Navigation & View Indicator */}
      <Navigation isEngagement={isEngagement} onToggleView={handleToggleView} />

      {/* Main Sections */}
      <main>
        {/* Hero Section with Couple Portrait, SVG Gears & Verse */}
        <HeroSection heroImageUrl={heroImageUrl} isEngagement={isEngagement} />

        {/* Bride & Groom Details with Connecting Blueprint Dimension */}
        <CoupleSection />

        {/* "Designed To Last" Infinity Blueprint & Journey Milestones */}
        <StorySection />

        {/* Dynamic Schedule (Holy Matrimony +/- Engagement Cards) */}
        <ScheduleSection isEngagement={isEngagement} />

        {/* Church & Grounds Location Map with GPS Specifications */}
        <VenueSection isEngagement={isEngagement} />

        {/* Chronometric Precision Countdown to 07 Nov 2026, 11:00 AM IST */}
        <CountdownSection />

        {/* Dynamic RSVP Manifest Form with Attendance Calibration */}
        <RsvpSection isEngagement={isEngagement} />
      </main>

      {/* Footer with "APPROVED FOR FOREVER" Seal */}
      <FooterSection />
    </div>
  );
}
