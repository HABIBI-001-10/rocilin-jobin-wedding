import React from 'react';
import { ApprovedStamp, DimensionLine } from './EngineeringSVGs';

export default function FooterSection({ isEngagement }) {
  const coupleNames = isEngagement ? 'ROCILIN & JOBIN' : 'JOBIN & ROCILIN';
  const eventDateFormatted = isEngagement ? '07 • 11 • 2026' : '21 • 11 • 2026';
  const drawingNo = isEngagement ? '07-11-26-ENGAGEMENT' : '21-11-26-MATRIMONY';
  const copyrightNames = isEngagement
    ? 'ROCILIN SEBASTIAN & JOBIN MICHAEL'
    : 'JOBIN MICHAEL & ROCILIN SEBASTIAN';

  return (
    <footer
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border-subtle)',
        padding: '80px 24px 40px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div className="container">
        {/* Approved Stamp Graphic */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <ApprovedStamp />
        </div>

        {/* Scriptural Reprise */}
        <div style={{ maxWidth: '640px', margin: '0 auto 28px' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif-refined)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'var(--color-primary)',
              lineHeight: 1.6,
            }}
          >
            &ldquo;Therefore what God has joined together, let no one separate.&rdquo;
          </p>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              display: 'block',
              marginTop: '6px',
            }}
          >
            — MARK 10:9
          </span>
        </div>

        {/* Dimension Line with Date */}
        <div style={{ maxWidth: '420px', margin: '0 auto 36px' }}>
          <DimensionLine label={eventDateFormatted} />
        </div>

        {/* Names */}
        <h3
          style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            color: 'var(--color-primary)',
            letterSpacing: '0.1em',
            marginBottom: '6px',
          }}
        >
          {coupleNames}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            letterSpacing: '0.22em',
            color: 'var(--color-gold)',
            marginBottom: '48px',
          }}
        >
          LOVE, PRECISELY ENGINEERED.
        </p>

        {/* Family Greeting */}
        {(
          <div
            style={{
              maxWidth: '580px',
              margin: '0 auto 44px',
              padding: '20px 24px',
              background: 'rgba(255, 255, 255, 0.65)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              SHARING HAPPINESS WITH
            </span>
            <p
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(1.15rem, 2.4vw, 1.45rem)',
                color: 'var(--color-primary)',
                letterSpacing: '0.04em',
                margin: 0,
                fontWeight: 500,
              }}
            >
              Sicilin Sebastian, Merin Rose Sebastian, Jomol Michael
            </p>
          </div>
        )}

        {/* Engineering Blueprint Title Block (Architectural Border Format) */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            border: '1.5px solid var(--color-border-subtle)',
            background: 'rgba(255, 255, 255, 0.6)',
            padding: '16px 20px',
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-text-muted)',
              textAlign: 'left',
            }}
          >
            <div>
              <span style={{ color: 'var(--color-gold)', display: 'block' }}>PROJECT TITLE:</span>
              <strong style={{ color: 'var(--color-primary)', fontSize: '0.74rem' }}>{coupleNames} UNION</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-gold)', display: 'block' }}>DRAWING NO:</span>
              <span style={{ color: 'var(--color-text)' }}>{drawingNo}</span>
            </div>
            <div>
              <span style={{ color: 'var(--color-gold)', display: 'block' }}>SCALE:</span>
              <span style={{ color: 'var(--color-text)' }}>1 : &infin;</span>
            </div>
            <div>
              <span style={{ color: 'var(--color-gold)', display: 'block' }}>CHECKED BY:</span>
              <span style={{ color: 'var(--color-text)' }}>DIVINE GRACE</span>
            </div>
          </div>
        </div>

        {/* Copyright & Subtext */}
        <div
          style={{
            marginTop: '36px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.12em',
          }}
        >
          &copy; 2026 {copyrightNames}. ALL RIGHTS RESERVED FOR ETERNITY.
        </div>
      </div>
    </footer>
  );
}
