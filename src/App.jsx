import React, { useState, useEffect } from 'react';
import OpeningPage from './components/OpeningPage';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import EngagementSection from './components/EngagementSection';
import ScheduleSection from './components/ScheduleSection';
import VenueSection from './components/VenueSection';
import AttireSection from './components/AttireSection';
import GallerySection from './components/GallerySection';
import CountdownSection from './components/CountdownSection';
import BlessingsSection from './components/BlessingsSection';
import RsvpSection from './components/RsvpSection';
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

      // Auto-skip opening if returning directly to a section via hash
      if (window.location.hash && window.location.hash.length > 1) {
        setShowOpening(false);
      }

      const viewParam = params.get('view');
      if (viewParam && viewParam.toLowerCase() === 'engagement') {
        setIsEngagement(true);
        setShowOpening(false);
      }

      const customImg = params.get('hero') || params.get('img');
      if (customImg) {
        setHeroImageUrl(customImg);
      }
    } catch (e) {
      console.error('Error parsing URL params:', e);
    }
  }, []);

  const handleToggleView = () => {
    setIsEngagement((prev) => {
      const next = !prev;
      // Update URL param so the link is shareable
      const url = new URL(window.location.href);
      if (next) {
        url.searchParams.set('view', 'engagement');
      } else {
        url.searchParams.delete('view');
      }
      window.history.replaceState({}, '', url.toString());
      return next;
    });
  };

  const handleOpenInvitation = () => {
    setShowOpening(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="wedding-app-root">
      {/* Opening invitation overlay */}
      {showOpening && <OpeningPage onOpen={handleOpenInvitation} />}

      {/* Blueprint corner trims */}
      <div className="page-trim-tl" aria-hidden="true" />
      <div className="page-trim-tr" aria-hidden="true" />
      <div className="page-trim-bl" aria-hidden="true" />
      <div className="page-trim-br" aria-hidden="true" />

      {/* Precision crosshair cursor */}
      <CrosshairCursor />

      {/* Fixed navigation — passes toggle so user can switch Wedding / Engagement view */}
      <Navigation isEngagement={isEngagement} onToggleView={handleToggleView} />

      <main>
        {/* ── 1. HERO ── */}
        <HeroSection heroImageUrl={heroImageUrl} isEngagement={isEngagement} />

        {/* ── 2. COUPLE ── */}
        <CoupleSection />

        {/* ── 3. ENGAGEMENT VENUE ── */}
        <EngagementSection />

        {/* ── 4. CEREMONY TIMELINE (adapts between Wedding + Engagement views) ── */}
        <ScheduleSection isEngagement={isEngagement} />

        {/* ── 5. VENUE / LOCATION MAP (shows extra engagement venue when toggled) ── */}
        <VenueSection isEngagement={isEngagement} />

        {/* ── 6. ATTIRE & AESTHETIC ── */}
        <AttireSection />

        {/* ── 7. GALLERY ── */}
        <GallerySection />

        {/* ── 8. COUNTDOWN ── */}
        <CountdownSection />

        {/* ── 9. BLESSINGS ── */}
        <BlessingsSection />

        {/* ── 10. WILL YOU JOIN US? (Attendance) ── */}
        <RsvpSection isEngagement={isEngagement} />
      </main>

      <FooterSection />
    </div>
  );
}
