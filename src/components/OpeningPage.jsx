import React, { useState, useEffect } from 'react';

export default function OpeningPage({ onOpen }) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setClosing(true);
    setTimeout(() => {
      onOpen();
    }, 900);
  };

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
        <path
          d="M 60,60 L 60,160 M 60,60 L 160,60"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ strokeDasharray: 200, strokeDashoffset: mounted ? 0 : 200, transition: 'stroke-dashoffset 1.8s ease 0.3s' }}
        />
        <path
          d="M 1140,60 L 1140,160 M 1040,60 L 1140,60"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ strokeDasharray: 200, strokeDashoffset: mounted ? 0 : 200, transition: 'stroke-dashoffset 1.8s ease 0.5s' }}
        />
        <path
          d="M 60,740 L 60,640 M 60,740 L 160,740"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ strokeDasharray: 200, strokeDashoffset: mounted ? 0 : 200, transition: 'stroke-dashoffset 1.8s ease 0.4s' }}
        />
        <path
          d="M 1140,740 L 1140,640 M 1040,740 L 1140,740"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ strokeDasharray: 200, strokeDashoffset: mounted ? 0 : 200, transition: 'stroke-dashoffset 1.8s ease 0.6s' }}
        />
        <line x1="100" y1="400" x2="1100" y2="400" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4" />
        <line x1="600" y1="80" x2="600" y2="720" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4" />
        <circle cx="600" cy="400" r="280" stroke="var(--color-gold)" strokeWidth="0.6" strokeDasharray="6 8" opacity="0.25"
          style={{ strokeDasharray: 1760, strokeDashoffset: mounted ? 0 : 1760, transition: 'stroke-dashoffset 2.5s ease 0.6s' }} />
        <circle cx="600" cy="400" r="200" stroke="var(--color-primary)" strokeWidth="0.4" strokeDasharray="5 7" opacity="0.15"
          style={{ strokeDasharray: 1257, strokeDashoffset: mounted ? 0 : 1257, transition: 'stroke-dashoffset 2.5s ease 0.9s' }} />
        {[200, 300, 400, 500, 700, 800, 900, 1000].map((x) => (
          <line key={`htick-${x}`} x1={x} y1="396" x2={x} y2="404" stroke="var(--color-gold)" strokeWidth="0.75" opacity="0.5" />
        ))}
        {[180, 260, 340, 460, 540, 620].map((y) => (
          <line key={`vtick-${y}`} x1="596" y1={y} x2="604" y2={y} stroke="var(--color-gold)" strokeWidth="0.75" opacity="0.5" />
        ))}
        <text x="68" y="180" fill="var(--color-gold)" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.7">DWG NO. 07-11-26 // REV. INF</text>
        <text x="68" y="730" fill="var(--color-gold)" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.7">SCALE: 1:INF // TOLERANCE: ±0.00</text>
        <text x="880" y="730" fill="var(--color-gold)" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.7">STATUS: APPROVED FOR FOREVER</text>
        <text x="870" y="180" fill="var(--color-gold)" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.7">PROJECT R+J // LOVE PRECISELY ENGINEERED</text>
      </svg>

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
          § PROJECT R&amp;J // 07.11.2026
        </div>

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
          }}
        >
          ROCILIN
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
          }}
        >
          JOBIN
        </h1>

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
            marginBottom: '52px',
            fontWeight: 500,
          }}
        >
          07 NOVEMBER 2026
        </p>

        <button
          onClick={handleOpen}
          aria-label="Open the wedding invitation"
          className="opening-cta-btn"
        >
          OPEN INVITATION
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <p
          style={{
            marginTop: '36px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            color: 'var(--color-text-muted)',
            opacity: 0.5,
          }}
        >
          LITTLE FLOWER CHURCH, KADUVAKKULAM
        </p>
      </div>
    </div>
  );
}
