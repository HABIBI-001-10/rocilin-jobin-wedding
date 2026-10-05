import React, { useState } from 'react';
import { DimensionLine, ChurchBlueprintSVG } from './EngineeringSVGs';

export default function EngagementSection() {
  return (
    <section
      id="engagement"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">VENUE SPECIFICATION // BETROTHAL LOCATION</span>
          <h2 className="section-title">The Engagement</h2>
          <p className="section-desc">
            Where we begin the next chapter.
          </p>
        </div>

        {/* Architectural venue card */}
        <div
          className="eng-card"
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: '0',
            overflow: 'hidden',
          }}
        >
          {/* Blueprint-framed venue image area */}
          <div
            style={{
              position: 'relative',
              background: 'var(--color-bg)',
              borderBottom: '1px solid var(--color-border-subtle)',
              minHeight: '260px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 32px',
              overflow: 'hidden',
            }}
          >
            {/* Blueprint frame corners (inside the image area) */}
            <div style={{ position: 'absolute', top: '12px', left: '12px', width: '28px', height: '28px', borderTop: '1.5px solid var(--color-gold)', borderLeft: '1.5px solid var(--color-gold)' }} aria-hidden="true" />
            <div style={{ position: 'absolute', top: '12px', right: '12px', width: '28px', height: '28px', borderTop: '1.5px solid var(--color-gold)', borderRight: '1.5px solid var(--color-gold)' }} aria-hidden="true" />
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', width: '28px', height: '28px', borderBottom: '1.5px solid var(--color-gold)', borderLeft: '1.5px solid var(--color-gold)' }} aria-hidden="true" />
            <div style={{ position: 'absolute', bottom: '12px', right: '12px', width: '28px', height: '28px', borderBottom: '1.5px solid var(--color-gold)', borderRight: '1.5px solid var(--color-gold)' }} aria-hidden="true" />

            {/* Blueprint crosshair lines */}
            <svg
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.2 }}
              viewBox="0 0 760 260" preserveAspectRatio="none" fill="none" aria-hidden="true"
            >
              <line x1="380" y1="0" x2="380" y2="260" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1="0" y1="130" x2="760" y2="130" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="4 6" />
              <circle cx="380" cy="130" r="60" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="3 5" />
            </svg>

            {/* Church architectural graphic */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <ChurchBlueprintSVG size={200} />
              <div style={{ marginTop: '14px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--color-gold)', letterSpacing: '0.16em' }}>
                  ARCHITECTURAL ELEVATION // BETROTHAL VENUE
                </span>
              </div>
            </div>

            {/* GPS label */}
            <div style={{ position: 'absolute', bottom: '16px', right: '20px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-gold)', opacity: 0.7, letterSpacing: '0.1em' }}>
                GPS: 9.5841° N, 76.5298° E
              </span>
            </div>
          </div>

          {/* Venue details */}
          <div style={{ padding: '36px 36px 32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
              <span className="dim-tag">BETROTHAL LOCATION // PHASE 01</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-gold)' }}>REV: 01.A</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: 'var(--color-primary)',
                marginBottom: '6px',
              }}
            >
              St. Mary's Auditorium
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                color: 'var(--color-text)',
                fontWeight: 500,
                marginBottom: '20px',
                letterSpacing: '0.05em',
              }}
            >
              Bride's Parish Hall, Kaduvakkulam, Kerala
            </p>

            {/* Spec Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '20px',
                background: 'var(--color-bg)',
                padding: '22px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-subtle)',
                marginBottom: '28px',
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>DATE</span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>01 NOV 2026</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>SUNDAY</span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>TIME</span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>04:30 PM</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>IST</span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>DRESS</span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>TRADITIONAL</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>ELEGANT</span>
              </div>
            </div>

            <div style={{ maxWidth: '480px', marginBottom: '28px' }}>
              <DimensionLine label="01.11.2026 // 16:30 IST // PHASE 01" />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif-refined)',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              A solemn covenant of commitment in the presence of beloved family and elders.
              An intimate celebration of the promise that begins our forever.
            </p>

            <div style={{ borderTop: '1px dashed var(--color-border-subtle)', paddingTop: '22px' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=St+Marys+Church+Kaduvakkulam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', gap: '10px', alignItems: 'center' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                VIEW LOCATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
