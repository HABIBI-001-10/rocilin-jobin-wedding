import React from 'react';
import { DimensionLine } from './EngineeringSVGs';

export default function CoupleSection() {
  return (
    <section
      id="couple"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--color-bg)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">SPECIFICATION SHEET // THE COUPLE</span>
          <h2 className="section-title">Two Lives, One Blueprint</h2>
          <p className="section-desc">
            Two engineering minds united by grace, purpose, and everlasting devotion.
          </p>
        </div>

        {/* Dynamic Animated Dimension Line Connecting Both Profiles */}
        <div style={{ maxWidth: '720px', margin: '0 auto 48px' }}>
          <DimensionLine label="INTERSECTION OF TWO SOULS // TOLERANCE: ZERO DEVIATION" />
        </div>

        {/* Split Couple Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Bride Card */}
          <div className="eng-card" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Blueprint Header Tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span className="dim-tag">COMP. 01 // THE BRIDE</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)' }}>
                REF: RS-199x
              </span>
            </div>

            {/* Profile Avatar / Architectural Monogram Badge */}
            <div
              style={{
                width: '84px',
                height: '84px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                border: '1.5px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'rgba(248, 245, 239, 0.6)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '4px',
                  borderRadius: '50%',
                  border: '1px dashed var(--color-primary)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                }}
              >
                R
              </span>
            </div>

            {/* Bride Name & Title */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.85rem',
                  color: 'var(--color-primary)',
                  letterSpacing: '0.04em',
                  marginBottom: '4px',
                }}
              >
                ROCILIN SEBASTIAN
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                }}
              >
                ENGINEER // VELIYAMPARACH
              </p>
            </div>

            {/* Family & Heritage Blueprint Specifications */}
            <div
              style={{
                background: 'rgba(248, 245, 239, 0.6)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  PARENTS
                </span>
                <p style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '1.15rem', color: 'var(--color-text)', fontWeight: 600 }}>
                  Mr. Sebastian Mathew &amp; Mrs. Aleyamma Sebastian
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  FAMILY NAME
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.05em' }}>
                  VELIYAMPARACH
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  SHARING HAPPINESS WITH
                </span>
                <p style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '1.05rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  Sicilin Sebastian &amp; Merin Rose Sebastian
                </p>
              </div>
            </div>
          </div>

          {/* Groom Card */}
          <div className="eng-card" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Blueprint Header Tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span className="dim-tag">COMP. 02 // THE GROOM</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)' }}>
                REF: JM-199x
              </span>
            </div>

            {/* Profile Avatar / Architectural Monogram Badge */}
            <div
              style={{
                width: '84px',
                height: '84px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                border: '1.5px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'rgba(248, 245, 239, 0.6)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '4px',
                  borderRadius: '50%',
                  border: '1px dashed var(--color-primary)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                }}
              >
                J
              </span>
            </div>

            {/* Groom Name & Title */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.85rem',
                  color: 'var(--color-primary)',
                  letterSpacing: '0.04em',
                  marginBottom: '4px',
                }}
              >
                JOBIN MICHAEL
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                }}
              >
                ENGINEER // KAVALATH
              </p>
            </div>

            {/* Family & Heritage Blueprint Specifications */}
            <div
              style={{
                background: 'rgba(248, 245, 239, 0.6)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  PARENTS
                </span>
                <p style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '1.15rem', color: 'var(--color-text)', fontWeight: 600 }}>
                  Mr. Michael K A &amp; Mrs. Elsamma Michael
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  FAMILY NAME
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.05em' }}>
                  KAVALATH
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  TECHNICAL ALIGNMENT
                </span>
                <p style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '1.05rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  United in faith, common vision &amp; eternal fellowship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
