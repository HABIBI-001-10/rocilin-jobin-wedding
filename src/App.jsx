import React, { useState, useEffect, useMemo } from 'react';
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

function detectInvitationMode() {
  if (typeof window === 'undefined') return 'wedding';

  const pathname = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const viewParam = (params.get('view') || params.get('event') || '').toLowerCase();

  // Bride's invitation path
  if (pathname.includes('/engagement') || hash.includes('engagement') || viewParam === 'engagement' || search.includes('engagement')) {
    return 'engagement';
  }

  // Groom's invitation path or default
  return 'wedding';
}

export default function App() {
  const mode = useMemo(() => detectInvitationMode(), []);
  const isEngagement = mode === 'engagement';

  const [showOpening, setShowOpening] = useState(true);
  const [heroImageUrl, setHeroImageUrl] = useState(`${import.meta.env.BASE_URL}couple-hero.jpeg`);

  useEffect(() => {
    // Set document title specifically for the isolated event
    if (isEngagement) {
      document.title = 'Rocilin & Jobin — Engagement Ceremony | Invitation';
    } else {
      document.title = 'Jobin & Rocilin — Holy Matrimony | Wedding Invitation';
    }

    try {
      const params = new URLSearchParams(window.location.search);
      // Auto-skip opening animation only if user is deep-linking to an anchor section
      if (window.location.hash && window.location.hash.length > 1 && !window.location.hash.includes('engagement') && !window.location.hash.includes('wedding')) {
        setShowOpening(false);
      }

      const customImg = params.get('hero') || params.get('img');
      if (customImg) {
        setHeroImageUrl(customImg);
      }
    } catch (e) {
      console.error('Error reading URL settings:', e);
    }
  }, [isEngagement]);

  const handleOpenInvitation = () => {
    setShowOpening(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="wedding-app-root">
      {/* Opening invitation overlay — isolated to single event with direct open button */}
      {showOpening && <OpeningPage onOpen={handleOpenInvitation} isEngagement={isEngagement} />}

      {/* Blueprint corner trims */}
      <div className="page-trim-tl" aria-hidden="true" />
      <div className="page-trim-tr" aria-hidden="true" />
      <div className="page-trim-bl" aria-hidden="true" />
      <div className="page-trim-br" aria-hidden="true" />

      {/* Precision crosshair cursor */}
      <CrosshairCursor />

      {/* Navigation — route-locked with no cross-event links or toggle */}
      <Navigation isEngagement={isEngagement} />

      <main>
        {/* ── 1. HERO — isolated names, date & location ── */}
        <HeroSection heroImageUrl={heroImageUrl} isEngagement={isEngagement} />

        {/* ── 2. COUPLE — bride first for engagement, groom first for wedding ── */}
        <CoupleSection isEngagement={isEngagement} />

        {/* ── 3. ENGAGEMENT VENUE & TIMELINE — only shown for bride's family invitation ── */}
        {isEngagement && <EngagementSection />}

        {/* ── 4. HOLY MATRIMONY CEREMONY TIMELINE — only shown for groom's family invitation ── */}
        {!isEngagement && <ScheduleSection isEngagement={false} />}

        {/* ── 5. WEDDING SANCTUARY / LOCATION MAP — only shown for groom's family invitation ── */}
        {!isEngagement && <VenueSection isEngagement={false} />}

        {/* ── 6. ATTIRE & AESTHETIC ── */}
        <AttireSection isEngagement={isEngagement} />

        {/* ── 7. GALLERY ── */}
        <GallerySection />

        {/* ── 8. COUNTDOWN — synchronized to the specific event's date and time ── */}
        <CountdownSection isEngagement={isEngagement} />

        {/* ── 9. BLESSINGS ARCHIVE — personalized couple names and date ── */}
        <BlessingsSection isEngagement={isEngagement} />

        {/* ── 10. WILL YOU JOIN US? (Attendance) — specific event date & venue ── */}
        <RsvpSection isEngagement={isEngagement} />
      </main>

      {/* Footer block with event-specific blueprint specifications */}
      <FooterSection isEngagement={isEngagement} />
    </div>
  );
}

