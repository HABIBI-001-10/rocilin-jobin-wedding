import React, { useState, useEffect } from 'react';

export default function Navigation({ isEngagement, onToggleView }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ambient sound synthesizer using Web Audio API for a calm, romantic harmonic chime on toggle
  const toggleSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(isPlaying ? 220 : 440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(isPlaying ? 110 : 880, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);

      setIsPlaying(!isPlaying);
    } catch (e) {
      console.log('Audio init prevented:', e);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled
          ? 'rgba(248, 245, 239, 0.94)'
          : 'linear-gradient(to bottom, rgba(248, 245, 239, 0.85), rgba(248, 245, 239, 0))',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border-subtle)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(41, 38, 36, 0.05)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Brand & Project Specs */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              border: '1px solid var(--color-gold)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-serif-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              background: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            R&J
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '1.05rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--color-primary)',
                lineHeight: 1.1,
              }}
            >
              ROCILIN &amp; JOBIN
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                color: 'var(--color-gold)',
              }}
            >
              07.11.2026 // LITTLE FLOWER CHURCH
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav"
        >
          <a
            href="#couple"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text)',
              transition: 'color 0.2s',
            }}
          >
            The Couple
          </a>
          <a
            href="#story"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text)',
              transition: 'color 0.2s',
            }}
          >
            Our Story
          </a>
          <a
            href="#schedule"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text)',
              transition: 'color 0.2s',
            }}
          >
            Schedule
          </a>
          <a
            href="#venue"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text)',
              transition: 'color 0.2s',
            }}
          >
            Venue
          </a>
          <a
            href="#countdown"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text)',
              transition: 'color 0.2s',
            }}
          >
            Countdown
          </a>

          {/* Dynamic View Switcher Pill */}
          <button
            onClick={onToggleView}
            title="Toggle between General Guest view and Engagement Guest view"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '20px',
              border: `1px solid ${isEngagement ? 'var(--color-primary)' : 'var(--color-border-subtle)'}`,
              background: isEngagement ? 'rgba(142, 17, 24, 0.08)' : 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.08em',
              color: isEngagement ? 'var(--color-primary)' : 'var(--color-gold)',
              transition: 'all 0.25s ease',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: isEngagement ? 'var(--color-primary)' : 'var(--color-gold)',
                display: 'inline-block',
              }}
            />
            {isEngagement ? 'VIEW: ENGAGEMENT' : 'VIEW: DEFAULT'}
          </button>

          {/* Sound / Tone chime trigger */}
          <button
            onClick={toggleSound}
            title="Harmonic Tone Calibration"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid var(--color-border-subtle)',
              background: 'rgba(255, 255, 255, 0.6)',
              color: 'var(--color-primary)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          </button>

          {/* RSVP Button */}
          <a
            href="#rsvp"
            className="btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '0.74rem',
              letterSpacing: '0.14em',
            }}
          >
            RSVP
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div style={{ display: 'none' }} className="mobile-toggle-wrapper">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              padding: '8px',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border-subtle)',
            padding: '20px 24px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <a
            href="#couple"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            The Couple
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Our Story
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Schedule
          </a>
          <a
            href="#venue"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Venue
          </a>
          <a
            href="#countdown"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Countdown
          </a>

          {/* View Mode Switcher in Mobile */}
          <div style={{ paddingTop: '8px', borderTop: '1px solid var(--color-border-subtle)' }}>
            <button
              onClick={() => {
                onToggleView();
                setMobileMenuOpen(false);
              }}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--color-primary)',
                background: isEngagement ? 'rgba(142, 17, 24, 0.08)' : '#FFF',
                color: 'var(--color-primary)',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
              }}
            >
              SWITCH VIEW: {isEngagement ? 'SWITCH TO DEFAULT (MATRIMONY)' : 'SWITCH TO ENGAGEMENT VIEW'}
            </button>
          </div>

          <a
            href="#rsvp"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ textAlign: 'center', width: '100%', marginTop: '6px' }}
          >
            RSVP NOW
          </a>
        </div>
      )}

      {/* Style for responsive navigation hiding */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-wrapper {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
