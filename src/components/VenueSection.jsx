import React from 'react';
import { ChurchBlueprintSVG, DimensionLine } from './EngineeringSVGs';

export default function VenueSection({ isEngagement }) {
  return (
    <section
      id="venue"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">SITE COORDINATES // LOCATION MAP</span>
          <h2 className="section-title">The Sanctuary &amp; Grounds</h2>
          <p className="section-desc">
            Geographic positioning for our wedding ceremony and fellowship.
          </p>
        </div>

        {/* Venues Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isEngagement ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
            maxWidth: isEngagement ? '1080px' : '720px',
            margin: '0 auto',
            gap: '32px',
          }}
        >
          {/* Holy Matrimony Church Venue (Always visible) */}
          <div className="eng-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="dim-tag">MATRIMONY SANCTUARY</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-gold)' }}>
                GPS: 9.5532° N, 76.5414° E
              </span>
            </div>

            {/* Architectural Church Drawing */}
            <div
              style={{
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-subtle)',
                padding: '24px 16px',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              <ChurchBlueprintSVG size={180} />
              <div style={{ marginTop: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.14em' }}>
                  ARCHITECTURAL ELEVATION // LITTLE FLOWER CHURCH
                </span>
              </div>
            </div>

            {/* Venue Details */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.6rem',
                    color: 'var(--color-primary)',
                    marginBottom: '6px',
                  }}
                >
                  Little Flower Church
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    color: 'var(--color-text)',
                    marginBottom: '16px',
                    fontWeight: 500,
                  }}
                >
                  Kaduvakkulam, Kottayam District, Kerala
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-serif-refined)',
                    fontSize: '1.05rem',
                    color: 'var(--color-text-muted)',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  Located in the serene landscapes of Kottayam. Adequate parking and guest assistance will be available on premises.
                </p>
              </div>

              <div style={{ borderTop: '1px dashed var(--color-border-subtle)', paddingTop: '18px' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Little+Flower+Church+Kaduvakkulam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  NAVIGATE VIA GOOGLE MAPS
                </a>
              </div>
            </div>
          </div>

          {/* Engagement Venue (Visible ONLY if isEngagement is true) */}
          {isEngagement && (
            <div className="eng-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="dim-tag">BETROTHAL LOCATION</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-gold)' }}>
                  GPS: 9.5841° N, 76.5298° E
                </span>
              </div>

              {/* Architectural Graphic */}
              <div
                style={{
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-subtle)',
                  padding: '24px 16px',
                  textAlign: 'center',
                  marginBottom: '24px',
                }}
              >
                <ChurchBlueprintSVG size={180} />
                <div style={{ marginTop: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.14em' }}>
                    AUDITORIUM BLUEPRINT // BRIDE'S PARISH
                  </span>
                </div>
              </div>

              {/* Venue Details */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.6rem',
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
                      marginBottom: '16px',
                      fontWeight: 500,
                    }}
                  >
                    Bride's Parish Hall, Kaduvakkulam
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif-refined)',
                      fontSize: '1.05rem',
                      color: 'var(--color-text-muted)',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    An intimate fellowship hall for the solemn betrothal blessing, exchange of rings, and celebratory evening banquet.
                  </p>
                </div>

                <div style={{ borderTop: '1px dashed var(--color-border-subtle)', paddingTop: '18px' }}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=St+Marys+Church+Kaduvakkulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    NAVIGATE VIA GOOGLE MAPS
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
