import React, { useEffect, useState } from 'react';
import { AmbientGear, ProtractorArc, DimensionLine } from './EngineeringSVGs';

export default function HeroSection({ heroImageUrl = '/couple-hero.jpg', isEngagement }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '100px 24px 60px',
      }}
    >
      {/* Background Image Container with Parallax & Slow Zoom */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out',
          zIndex: 1,
        }}
      />

      {/* Luxury Warm Ivory & Burgundy Tint Overlay + Radial Vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at center, rgba(248, 245, 239, 0.72) 0%, rgba(248, 245, 239, 0.88) 55%, rgba(248, 245, 239, 0.97) 100%),
            linear-gradient(180deg, rgba(248, 245, 239, 0.5) 0%, rgba(142, 17, 24, 0.04) 50%, rgba(248, 245, 239, 0.95) 100%)
          `,
          zIndex: 2,
        }}
      />

      {/* SVG Engineering Construction Blueprint Elements (Floating Layer) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 3,
          overflow: 'hidden',
        }}
      >
        {/* Top-Right Ambient Gear */}
        <div style={{ position: 'absolute', top: '40px', right: '-40px', opacity: 0.45 }}>
          <AmbientGear size={280} color="var(--color-gold)" />
        </div>

        {/* Bottom-Left Ambient Reverse Gear */}
        <div style={{ position: 'absolute', bottom: '-60px', left: '-50px', opacity: 0.35 }}>
          <AmbientGear size={320} color="var(--color-gold)" reverse={true} />
        </div>

        {/* Top Left Protractor Arc */}
        <div style={{ position: 'absolute', top: '120px', left: '4%', opacity: 0.4 }}>
          <ProtractorArc size={220} color="var(--color-gold)" />
        </div>

        {/* Architectural Center Reticle Rings */}
        <svg
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '640px',
            height: '640px',
            opacity: 0.35,
          }}
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="280" stroke="var(--color-gold)" strokeWidth="0.75" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="230" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.4" />
          <circle cx="300" cy="300" r="160" stroke="var(--color-gold)" strokeWidth="0.75" strokeDasharray="2 4" />
          {/* Axis cross lines */}
          <line x1="300" y1="20" x2="300" y2="580" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="3 5" />
          <line x1="20" y1="300" x2="580" y2="300" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="3 5" />
        </svg>

        {/* Blueprint Framing Corner Ticks */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            right: '30px',
            bottom: '30px',
            border: '1px solid var(--color-border-subtle)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Main Hero Content (Foremost Layer) */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          maxWidth: '880px',
        }}
      >
        {/* Technical Title Header Tag */}
        <div style={{ marginBottom: '18px' }}>
          <span className="dim-tag">
            PROJECT R&amp;J // DWG NO. 07-11-26 // REV. 01: FOREVER
          </span>
        </div>

        {/* Bible Verse Header */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 28px',
            padding: '0 16px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif-refined)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--color-primary)',
              lineHeight: 1.5,
              letterSpacing: '0.02em',
            }}
          >
            &ldquo;Therefore what God has joined together, let no one separate.&rdquo;
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '6px',
            }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
              }}
            >
              MARK 10:9
            </span>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }} />
          </div>
        </div>

        {/* Invitation Introductory Line */}
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: '14px',
          }}
        >
          TOGETHER WITH THEIR FAMILIES, WE REQUEST THE HONOR OF YOUR BLESSINGS
        </div>

        {/* Bride & Groom Prominent Names */}
        <div style={{ position: 'relative', margin: '14px 0 24px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.8rem, 6.8vw, 5.2rem)',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: 'var(--color-primary)',
              lineHeight: 1.08,
              textTransform: 'uppercase',
            }}
          >
            ROCILIN
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-serif-refined)',
                fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--color-gold)',
                margin: '-4px 0',
                textTransform: 'lowercase',
              }}
            >
              &amp;
            </span>
            JOBIN
          </h1>
        </div>

        {/* Core Concept Sub-line */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            letterSpacing: '0.25em',
            color: 'var(--color-text)',
            marginBottom: '28px',
            fontWeight: 500,
          }}
        >
          LOVE, PRECISELY ENGINEERED.
        </div>

        {/* Dimension Line with Date */}
        <DimensionLine
          label="07 NOVEMBER 2026 // 11:00 AM IST"
          maxWidth={460}
          color="var(--color-gold)"
        />

        {/* Event Location Line */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text)',
            marginTop: '12px',
          }}
        >
          LITTLE FLOWER CHURCH, KADUVAKKULAM
        </p>

        {/* Engagement Notice Pill if Engagement View */}
        {isEngagement && (
          <div style={{ marginTop: '16px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(142, 17, 24, 0.08)',
                border: '1px solid var(--color-primary)',
                borderRadius: '20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-primary)',
                letterSpacing: '0.12em',
              }}
            >
              ✦ INCLUDES PHASE 01: BETROTHAL &amp; ENGAGEMENT CEREMONY
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '36px',
          }}
        >
          <a href="#rsvp" className="btn-primary">
            CONFIRM ATTENDANCE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#schedule" className="btn-secondary">
            EVENT TIMELINE
          </a>
        </div>

        {/* Technical Blueprint Stamps Footer on Hero */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '44px',
            paddingTop: '20px',
            borderTop: '1px dashed var(--color-border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--color-gold)',
            letterSpacing: '0.12em',
          }}
        >
          <span>SCALE: 1 : &infin;</span>
          <span>&bull;</span>
          <span>TOLERANCE: &plusmn;0.00</span>
          <span>&bull;</span>
          <span>STATUS: APPROVED FOR FOREVER</span>
        </div>
      </div>

      {/* Delicate Scroll Down Cue */}
      <a
        href="#couple"
        aria-label="Scroll to couple details"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--color-gold)',
          opacity: 0.8,
          transition: 'opacity 0.2s',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="float-gentle"
          style={{ animation: 'floatGentle 2.4s ease-in-out infinite' }}
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
