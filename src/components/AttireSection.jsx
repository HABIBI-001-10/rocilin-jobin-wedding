import React, { useState } from 'react';
import { DimensionLine } from './EngineeringSVGs';

const COLOR_PALETTE = [
  { name: 'IVORY', hex: '#F8F5EF', label: 'Warm ivory / cream' },
  { name: 'WARM CREAM', hex: '#EFE7D8', label: 'Soft champagne' },
  { name: 'DUSTY ROSE', hex: '#D8B8B8', label: 'Muted blush' },
  { name: 'SAGE', hex: '#A8B5A0', label: 'Soft botanical green' },
  { name: 'MUTED PEACH', hex: '#E8C7B8', label: 'Warm terracotta blush' },
  { name: 'ANTIQUE GOLD', hex: '#B89B5E', label: 'Handcrafted metallic' },
];

const AESTHETIC_WORDS = [
  'QUIET LUXURY',
  'TIMELESS TRADITION',
  'SOFT PASTELS',
  'ARCHITECTURAL DETAILS',
  'WARM IVORY',
  'HANDCRAFTED GOLD',
  'MODERN ROMANCE',
];

const ATTIRE_CARDS = [
  {
    code: '01',
    title: 'OFF-WHITE',
    desc: 'Soft ivory / cream traditional wear',
    detail: 'Elegant sarees, dhotis, and formal Kerala attire in crisp ivory and cream.',
    color: '#F5F0E8',
  },
  {
    code: '02',
    title: 'PASTEL',
    desc: 'Dusty rose / sage / powder blue / muted peach',
    detail: "Soft, muted palettes that complement the wedding's colour story.",
    color: '#E8C7B8',
  },
  {
    code: '03',
    title: 'TRADITIONAL',
    desc: 'Elegant Kerala / Indian traditional silhouettes',
    detail: 'Kasavu sarees, mundum neriyathum, traditional half-sarees and formal sherwanis.',
    color: '#D4C39B',
  },
];

function ColorSwatch({ name, hex, label }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '2px',
          background: hex,
          border: '1px solid var(--color-border-subtle)',
          boxShadow: '0 4px 12px rgba(41, 38, 36, 0.06)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'default',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 24px rgba(41, 38, 36, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(41, 38, 36, 0.06)';
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-text)', textTransform: 'uppercase' }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-gold)', letterSpacing: '0.08em', marginTop: '1px' }}>{hex}</div>
        <div style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '0.78rem', fontStyle: 'italic', color: 'var(--color-text-muted)', marginTop: '2px' }}>{label}</div>
      </div>
    </div>
  );
}

export default function AttireSection() {
  return (
    <section
      id="attire"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">DRESS CODE // AESTHETIC SPECIFICATION</span>
          <h2 className="section-title">Attire &amp; Aesthetic</h2>
          <p className="section-desc">
            Come in your favourite traditional elegance.
          </p>
        </div>

        {/* Attire Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '72px',
            maxWidth: '900px',
            margin: '0 auto 72px',
          }}
        >
          {ATTIRE_CARDS.map((card) => (
            <div
              key={card.code}
              className="eng-card"
              style={{ padding: '28px 24px' }}
            >
              {/* Code tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="dim-tag">ATTIRE // {card.code}</span>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: card.color,
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: '2px',
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.5rem',
                  color: 'var(--color-primary)',
                  marginBottom: '6px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-gold)',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                {card.desc}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-serif-refined)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {card.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Inclusive note */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <DimensionLine label="DRESS IN WHAT MAKES YOU FEEL BEAUTIFUL" />
          <p
            style={{
              fontFamily: 'var(--font-serif-refined)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'var(--color-text-muted)',
              marginTop: '16px',
            }}
          >
            Traditional attire is recommended. Dress code is a suggestion, not a requirement.
          </p>
        </div>

        {/* Curated Color Palette */}
        <div style={{ maxWidth: '860px', margin: '0 auto 72px' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-subtitle">COLOUR CALIBRATION // WEDDING PALETTE</span>
            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: 'var(--color-primary)',
              }}
            >
              Our Colour Story
            </h3>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '32px',
              padding: '40px 32px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-sm)',
              position: 'relative',
            }}
          >
            {/* Blueprint corner marks */}
            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '16px', height: '16px', borderTop: '2px solid var(--color-primary)', borderLeft: '2px solid var(--color-primary)' }} />
            <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '16px', height: '16px', borderBottom: '2px solid var(--color-primary)', borderRight: '2px solid var(--color-primary)' }} />

            {COLOR_PALETTE.map((swatch) => (
              <ColorSwatch key={swatch.hex} {...swatch} />
            ))}
          </div>
        </div>

        {/* Our Aesthetic / Inspiration */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <span className="section-subtitle">VISUAL DIRECTION // THE INSPIRATION</span>
            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: 'var(--color-primary)',
              }}
            >
              Our Aesthetic
            </h3>
            <p className="section-desc">The visual language of our love story.</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            {AESTHETIC_WORDS.map((word, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px 22px',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-surface)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-gold)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-bg-alt)';
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-surface)';
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ marginRight: '8px', opacity: 0.5 }}>§</span>
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
