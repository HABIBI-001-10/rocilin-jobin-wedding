import React, { useState, useEffect } from 'react';

export default function Navigation({ isEngagement }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const navLinks = isEngagement
    ? [
        { label: 'Home', href: '#hero' },
        { label: 'Couple', href: '#couple' },
        { label: 'The Engagement', href: '#engagement' },
        { label: 'Attire', href: '#attire' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Blessings', href: '#blessings' },
      ]
    : [
        { label: 'Home', href: '#hero' },
        { label: 'Couple', href: '#couple' },
        { label: 'Schedule', href: '#schedule' },
        { label: 'Sanctuary', href: '#venue' },
        { label: 'Attire', href: '#attire' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Blessings', href: '#blessings' },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinkStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.78rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--color-text)',
    transition: 'color 0.2s',
    textDecoration: 'none',
  };

  const mobileLinkStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    color: 'var(--color-text)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textDecoration: 'none',
    display: 'block',
    padding: '4px 0',
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
        {/* Brand */}
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
            {isEngagement ? 'R&J' : 'J&R'}
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
              {isEngagement ? 'ROCILIN & JOBIN' : 'JOBIN & ROCILIN'}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                color: 'var(--color-gold)',
              }}
            >
              {isEngagement
                ? "07.11.2026 // LITTLE FLOWER CHURCH, KADUVAKKULAM"
                : "21.11.2026 // ST. JOSEPH'S CHURCH, THABORE, KANNUR"}
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
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={navLinkStyle}>
              {link.label}
            </a>
          ))}

          {/* Sound button */}
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
              cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </button>

          {/* Will You Join Us CTA */}
          <a
            href="#attendance"
            className="btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '0.74rem',
              letterSpacing: '0.14em',
            }}
          >
            WILL YOU JOIN US?
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div style={{ display: 'none' }} className="mobile-toggle-wrapper">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            style={{
              padding: '8px',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
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
            gap: '14px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={mobileLinkStyle}
            >
              {link.label}
            </a>
          ))}

          <div style={{ paddingTop: '8px', borderTop: '1px solid var(--color-border-subtle)' }}>
            <a
              href="#attendance"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ textAlign: 'center', width: '100%', marginTop: '6px', display: 'flex', justifyContent: 'center' }}
            >
              WILL YOU JOIN US?
            </a>
          </div>
        </div>
      )}

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
