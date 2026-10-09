import React, { useState, useEffect } from 'react';

/* Blueprint scan-line keyframe — injected once, reused by the SVG line element */
const SCAN_STYLE = `
  @keyframes blueprintScan {
    0%   { transform: translateY(-100%); opacity: 0; }
    8%   { opacity: 1; }
    92%  { opacity: 1; }
    100% { transform: translateY(800px); opacity: 0; }
  }
`;

export default function OpeningPage({ onOpen, isEngagement }) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = (viewOverride) => {
    setClosing(true);
    setTimeout(() => {
      onOpen(viewOverride);
    }, 900);
  };

  // Names and date driven by which view was pre-selected (URL param)
  const primaryName   = isEngagement ? 'ROCILIN' : 'JOBIN';
  const secondaryName = isEngagement ? 'JOBIN'   : 'ROCILIN';
  const dateLabel     = isEngagement ? '07 NOVEMBER 2026' : '21 NOVEMBER 2026';
  const venueLabel    = isEngagement ? "LITTLE FLOWER CHURCH, KADUVAKKULAM, KOTTAYAM" : "ST. JOSEPH'S CHURCH, THABORE, KANNUR";

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Wedding invitation opening screen"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: closing ? 0 : mounted ? 1 : 0,
        transform: closing ? 'scale(1.04)' : 'scale(1)',
        transition: closing
          ? 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
          : 'opacity 0.8s ease',
      }}
    >
      {/* Inject scan-line keyframe */}
      <style>{SCAN_STYLE}</style>
      {/* ── Blueprint SVG background — enhanced draw-on animation ── */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.45,
        }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {/* Corner bracket — top-left */}
        <path
          d="M 60,60 L 60,160 M 60,60 L 160,60"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ strokeDasharray: 200, strokeDashoffset: mounted ? 0 : 200, transition: 'stroke-dashoffset 1.4s ease 0.2s' }}
        />
        {/* Corner bracket — top-right */}
        <path
          d="M 1140,60 L 1140,160 M 1040,60 L 1140,60"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ strokeDasharray: 200, strokeDashoffset: mounted ? 0 : 200, transition: 'stroke-dashoffset 1.4s ease 0.35s' }}
        />
        {/* Corner bracket — bottom-left */}
        <path
          d="M 60,740 L 60,640 M 60,740 L 160,740"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ strokeDasharray: 200, strokeDashoffset: mounted ? 0 : 200, transition: 'stroke-dashoffset 1.4s ease 0.3s' }}
        />
        {/* Corner bracket — bottom-right */}
        <path
          d="M 1140,740 L 1140,640 M 1040,740 L 1140,740"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ strokeDasharray: 200, strokeDashoffset: mounted ? 0 : 200, transition: 'stroke-dashoffset 1.4s ease 0.45s' }}
        />

        {/* Horizontal center axis — draws in from center */}
        <line x1="100" y1="400" x2="1100" y2="400"
          stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4"
          style={{ strokeDasharray: 1000, strokeDashoffset: mounted ? 0 : 1000, transition: 'stroke-dashoffset 2s ease 0.6s' }} />

        {/* Vertical center axis */}
        <line x1="600" y1="80" x2="600" y2="720"
          stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4"
          style={{ strokeDasharray: 640, strokeDashoffset: mounted ? 0 : 640, transition: 'stroke-dashoffset 2s ease 0.7s' }} />

        {/* Outer circle — draws clockwise */}
        <circle cx="600" cy="400" r="280"
          stroke="var(--color-gold)" strokeWidth="0.6" opacity="0.25"
          style={{ strokeDasharray: 1760, strokeDashoffset: mounted ? 0 : 1760, transition: 'stroke-dashoffset 2.4s cubic-bezier(0.4,0,0.2,1) 0.5s' }} />

        {/* Inner circle */}
        <circle cx="600" cy="400" r="200"
          stroke="var(--color-primary)" strokeWidth="0.4" opacity="0.15"
          style={{ strokeDasharray: 1257, strokeDashoffset: mounted ? 0 : 1257, transition: 'stroke-dashoffset 2.4s cubic-bezier(0.4,0,0.2,1) 0.8s' }} />

        {/* Innermost circle */}
        <circle cx="600" cy="400" r="120"
          stroke="var(--color-gold)" strokeWidth="0.3" opacity="0.12"
          style={{ strokeDasharray: 754, strokeDashoffset: mounted ? 0 : 754, transition: 'stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1) 1.0s' }} />

        {/* Horizontal tick marks */}
        {[200, 300, 400, 500, 700, 800, 900, 1000].map((x) => (
          <line key={`htick-${x}`} x1={x} y1="396" x2={x} y2="404"
            stroke="var(--color-gold)" strokeWidth="0.75" opacity={mounted ? 0.5 : 0}
            style={{ transition: `opacity 0.4s ease ${0.9 + (x - 200) * 0.001}s` }} />
        ))}
        {/* Vertical tick marks */}
        {[180, 260, 340, 460, 540, 620].map((y) => (
          <line key={`vtick-${y}`} x1="596" y1={y} x2="604" y2={y}
            stroke="var(--color-gold)" strokeWidth="0.75" opacity={mounted ? 0.5 : 0}
            style={{ transition: `opacity 0.4s ease ${1.0 + (y - 180) * 0.001}s` }} />
        ))}

        {/* Blueprint title block lines — top */}
        <line x1="68" y1="165" x2="400" y2="165"
          stroke="var(--color-gold)" strokeWidth="0.4" opacity="0.3"
          style={{ strokeDasharray: 332, strokeDashoffset: mounted ? 0 : 332, transition: 'stroke-dashoffset 1.2s ease 1.2s' }} />
        <line x1="800" y1="165" x2="1132" y2="165"
          stroke="var(--color-gold)" strokeWidth="0.4" opacity="0.3"
          style={{ strokeDasharray: 332, strokeDashoffset: mounted ? 0 : 332, transition: 'stroke-dashoffset 1.2s ease 1.3s' }} />

        {/* Annotation text */}
        <text x="68" y="180" fill="var(--color-gold)" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity={mounted ? 0.7 : 0} style={{ transition: 'opacity 0.6s ease 1.4s' }}>
          DWG NO. {isEngagement ? '07-11-26' : '21-11-26'} // REV. INF
        </text>
        <text x="68" y="730" fill="var(--color-gold)" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity={mounted ? 0.7 : 0} style={{ transition: 'opacity 0.6s ease 1.5s' }}>
          SCALE: 1:INF // TOLERANCE: ±0.00
        </text>
        <text x="880" y="730" fill="var(--color-gold)" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity={mounted ? 0.7 : 0} style={{ transition: 'opacity 0.6s ease 1.6s' }}>
          STATUS: APPROVED FOR FOREVER
        </text>
        <text x="820" y="180" fill="var(--color-gold)" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity={mounted ? 0.7 : 0} style={{ transition: 'opacity 0.6s ease 1.4s' }}>
          PROJECT R+J // LOVE PRECISELY ENGINEERED
        </text>

        {/* Scanning grid line — subtle horizontal sweep effect */}
        <line x1="60" y1="400" x2="1140" y2="400"
          stroke="var(--color-gold)" strokeWidth="0.3" opacity={mounted ? 0 : 0.6}
          style={{ transition: 'opacity 1.5s ease 0.3s' }} />

        {/* Upper horizontal depth line */}
        <line x1="100" y1="200" x2="1100" y2="200"
          stroke="var(--color-gold)" strokeWidth="0.3" strokeDasharray="8 12" opacity="0.18"
          style={{ strokeDasharray: 1000, strokeDashoffset: mounted ? 0 : 1000, transition: 'stroke-dashoffset 1.8s ease 1.1s' }} />

        {/* Lower horizontal depth line */}
        <line x1="100" y1="600" x2="1100" y2="600"
          stroke="var(--color-gold)" strokeWidth="0.3" strokeDasharray="8 12" opacity="0.18"
          style={{ strokeDasharray: 1000, strokeDashoffset: mounted ? 0 : 1000, transition: 'stroke-dashoffset 1.8s ease 1.3s' }} />
      </svg>

      {/* Blueprint scan-line — sweeps top-to-bottom once on mount, like a plotter drawing */}
      {mounted && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, var(--color-gold) 30%, rgba(181,155,101,0.9) 50%, var(--color-gold) 70%, transparent 100%)',
            boxShadow: '0 0 8px 2px rgba(181,155,101,0.35)',
            pointerEvents: 'none',
            zIndex: 3,
            animation: 'blueprintScan 2.2s cubic-bezier(0.4, 0, 0.6, 1) 0.3s 1 forwards',
            opacity: 0,
          }}
        />
      )}

      {/* ── Main content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1.2s ease 0.4s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
        }}
      >
        {/* Project tag */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '32px',
            opacity: 0.85,
          }}
        >
          § PROJECT R&amp;J // {isEngagement ? '07.11.2026' : '21.11.2026'}
        </div>

        {/* Top rule — draws in */}
        <div
          style={{
            width: mounted ? '200px' : '0px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            margin: '0 auto 24px',
            transition: 'width 1.4s ease 0.8s',
          }}
          aria-hidden="true"
        />

        {/* Primary name */}
        <h1
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: 'var(--color-primary)',
            lineHeight: 1,
            textTransform: 'uppercase',
            margin: 0,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
          }}
        >
          {primaryName}
        </h1>

        <div
          style={{
            fontFamily: 'var(--font-serif-refined)',
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--color-gold)',
            lineHeight: 1.4,
            margin: '4px 0',
          }}
        >
          &amp;
        </div>

        {/* Secondary name */}
        <h1
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: 'var(--color-primary)',
            lineHeight: 1,
            textTransform: 'uppercase',
            margin: 0,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s ease 0.65s, transform 1s ease 0.65s',
          }}
        >
          {secondaryName}
        </h1>

        {/* Bottom rule */}
        <div
          style={{
            width: mounted ? '200px' : '0px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            margin: '24px auto 28px',
            transition: 'width 1.4s ease 1s',
          }}
          aria-hidden="true"
        />

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.65rem, 1.2vw, 0.82rem)',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: '8px',
          }}
        >
          A STORY, DESIGNED TO LAST.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.75rem, 1.4vw, 0.95rem)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '44px',
            fontWeight: 500,
          }}
        >
          {dateLabel}
        </p>

        {/* ── Direct entry button — opens only this invitation ── */}
        <button
          onClick={() => handleOpen()}
          aria-label={isEngagement ? "Open engagement invitation" : "Open wedding invitation"}
          className="opening-cta-btn"
        >
          OPEN INVITATION
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* Venue tag */}
        <p
          style={{
            marginTop: '36px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            color: 'var(--color-text-muted)',
            opacity: 0.5,
            textTransform: 'uppercase',
          }}
        >
          {venueLabel}
        </p>
      </div>
    </div>
  );
}
