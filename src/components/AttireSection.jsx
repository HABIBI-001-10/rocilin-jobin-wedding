import React from 'react';
import { DimensionLine } from './EngineeringSVGs';

/* ─── ENGAGEMENT PALETTE & CARDS (Preserved for Engagement View) ─── */
const ENGAGEMENT_COLOR_PALETTE = [
  { name: 'IVORY', hex: '#F8F5EF', label: 'Warm ivory / cream' },
  { name: 'WARM CREAM', hex: '#EFE7D8', label: 'Soft champagne' },
  { name: 'DUSTY ROSE', hex: '#D8B8B8', label: 'Muted blush' },
  { name: 'SAGE', hex: '#A8B5A0', label: 'Soft botanical green' },
  { name: 'MUTED PEACH', hex: '#E8C7B8', label: 'Warm terracotta blush' },
  { name: 'ANTIQUE GOLD', hex: '#B89B5E', label: 'Handcrafted metallic' },
];

const ENGAGEMENT_AESTHETIC_WORDS = [
  'QUIET LUXURY',
  'TIMELESS TRADITION',
  'SOFT PASTELS',
  'ARCHITECTURAL DETAILS',
  'WARM IVORY',
  'HANDCRAFTED GOLD',
  'MODERN ROMANCE',
];

const ENGAGEMENT_ATTIRE_CARDS = [
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

/* ─── WEDDING PALETTE & CARDS (Sophisticated Deep Burgundy & Dark Cherry) ─── */
const WEDDING_COLOR_PALETTE = [
  { name: 'DEEP BURGUNDY', hex: '#5E1C2C', label: 'Royal velvet wine' },
  { name: 'DARK CHERRY', hex: '#3B0100', label: 'Deep romantic dusk' },
  { name: 'BLACK CHERRY', hex: '#25071D', label: 'Midnight plum tone' },
  { name: 'MAROON', hex: '#250909', label: 'Timeless deep earth' },
  { name: 'CRIMSON', hex: '#410420', label: 'Passionate ruby warmth' },
  { name: 'WARM IVORY', hex: '#F7F3EB', label: 'Luminous contrast cream' },
];

const WEDDING_AESTHETIC_WORDS = [
  'DEEP BURGUNDY ROMANCE',
  'DARK CHERRY OPULENCE',
  'SACRED MAJESTY',
  'BLACK-CHERRY ACCENTS',
  'CRIMSON SILK & VELVET',
  'ANTIQUE GOLD EMBELLISHMENTS',
  'WARM IVORY CONTRAST',
  'REGAL EVENING ELEGANCE',
];

const WEDDING_ATTIRE_CARDS = [
  {
    code: '01',
    title: 'BURGUNDY & CRIMSON',
    desc: 'Rich wine / dark cherry / royal crimson tones',
    detail: 'Opulent Kanchipuram and Banarasi silk sarees, rich velvet lehengas, and royal bandhgalas or sherwanis in deep burgundy and crimson.',
    color: '#5E1C2C',
    accentBorder: '#8E1118',
  },
  {
    code: '02',
    title: 'WARM IVORY & GOLD',
    desc: 'Luminous contrast & antique gold metallics',
    detail: 'Crisp ivory dhotis, raw silk kurtas, and elegant cream ensembles embellished with understated antique gold kasavu borders for graceful contrast.',
    color: '#F7F3EB',
    accentBorder: '#B89B5E',
  },
  {
    code: '03',
    title: 'BLACK CHERRY & MAROON',
    desc: 'Midnight plum / deep maroon formal wear',
    detail: 'Classic tailored formal suits, midnight-cherry blazers, and stately evening attire echoing the depth of our Holy Matrimony palette.',
    color: '#25071D',
    accentBorder: '#410420',
  },
];

function ColorSwatch({ name, hex, label, isWedding }) {
  const isLight = hex.toUpperCase() === '#F7F3EB' || hex.toUpperCase() === '#F8F5EF' || hex.toUpperCase() === '#EFE7D8';

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
          width: '74px',
          height: '74px',
          borderRadius: '3px',
          background: hex,
          border: isLight
            ? '1.5px solid rgba(94, 28, 44, 0.28)'
            : '1px solid rgba(184, 155, 94, 0.45)',
          boxShadow: isWedding
            ? '0 6px 16px rgba(37, 7, 29, 0.15)'
            : '0 4px 12px rgba(41, 38, 36, 0.06)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'default',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = isWedding
            ? '0 12px 28px rgba(94, 28, 44, 0.35)'
            : '0 10px 24px rgba(41, 38, 36, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = isWedding
            ? '0 6px 16px rgba(37, 7, 29, 0.15)'
            : '0 4px 12px rgba(41, 38, 36, 0.06)';
        }}
      >
        {/* Subtle corner highlight */}
        <div
          style={{
            position: 'absolute',
            top: '4px',
            left: '4px',
            width: '6px',
            height: '6px',
            borderTop: `1px solid ${isLight ? 'rgba(94, 28, 44, 0.35)' : 'rgba(255, 255, 255, 0.4)'}`,
            borderLeft: `1px solid ${isLight ? 'rgba(94, 28, 44, 0.35)' : 'rgba(255, 255, 255, 0.4)'}`,
          }}
          aria-hidden="true"
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: isWedding ? '#3B0100' : 'var(--color-text)',
            textTransform: 'uppercase',
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            color: 'var(--color-gold)',
            letterSpacing: '0.08em',
            marginTop: '2px',
          }}
        >
          {hex}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-serif-refined)',
            fontSize: '0.8rem',
            fontStyle: 'italic',
            color: 'var(--color-text-muted)',
            marginTop: '2px',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default function AttireSection({ isEngagement = false }) {
  const isWedding = !isEngagement;

  const currentPalette = isWedding ? WEDDING_COLOR_PALETTE : ENGAGEMENT_COLOR_PALETTE;
  const currentCards = isWedding ? WEDDING_ATTIRE_CARDS : ENGAGEMENT_ATTIRE_CARDS;
  const currentWords = isWedding ? WEDDING_AESTHETIC_WORDS : ENGAGEMENT_AESTHETIC_WORDS;

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
          <span className="section-subtitle">
            {isWedding
              ? 'DRESS CODE // WEDDING AESTHETIC SPECIFICATION'
              : 'DRESS CODE // AESTHETIC SPECIFICATION'}
          </span>
          <h2 className="section-title">Attire &amp; Aesthetic</h2>
          <p className="section-desc">
            {isWedding
              ? 'Come in traditional wedding attire in rich, elegant colors that complement our palette.'
              : 'Come in your favourite traditional elegance.'}
          </p>
        </div>

        {/* Attire Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '72px',
            maxWidth: '920px',
            margin: '0 auto 72px',
          }}
        >
          {currentCards.map((card) => (
            <div
              key={card.code}
              className="eng-card"
              style={{
                padding: '30px 26px',
                position: 'relative',
                border: isWedding ? '1px solid rgba(94, 28, 44, 0.22)' : '1px solid var(--color-border-subtle)',
                background: isWedding ? 'linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 100%)' : 'var(--color-surface)',
                boxShadow: isWedding ? '0 8px 24px rgba(37, 7, 29, 0.05)' : undefined,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (isWedding) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(94, 28, 44, 0.45)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(94, 28, 44, 0.12)';
                }
              }}
              onMouseLeave={(e) => {
                if (isWedding) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(94, 28, 44, 0.22)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 7, 29, 0.05)';
                }
              }}
            >
              {/* Code tag & Color Indicator */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '18px',
                }}
              >
                <span
                  className="dim-tag"
                  style={{
                    color: isWedding ? '#5E1C2C' : undefined,
                    borderColor: isWedding ? 'rgba(94, 28, 44, 0.25)' : undefined,
                  }}
                >
                  ATTIRE // {card.code}
                </span>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: card.color,
                    border: card.color === '#F7F3EB'
                      ? '1.5px solid rgba(94, 28, 44, 0.3)'
                      : '1px solid rgba(184, 155, 94, 0.4)',
                    borderRadius: '3px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                  }}
                  title={card.title}
                />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.48rem',
                  color: isWedding ? '#3B0100' : 'var(--color-primary)',
                  marginBottom: '6px',
                  letterSpacing: '0.02em',
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
                  marginBottom: '14px',
                  textTransform: 'uppercase',
                }}
              >
                {card.desc}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-serif-refined)',
                  fontSize: '1.02rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {card.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Inclusive note */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <DimensionLine
            label={
              isWedding
                ? 'DRESS IN WHAT MAKES YOU FEEL ELEGANT & BEAUTIFUL'
                : 'DRESS IN WHAT MAKES YOU FEEL BEAUTIFUL'
            }
          />
          <p
            style={{
              fontFamily: 'var(--font-serif-refined)',
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: 'var(--color-text-muted)',
              marginTop: '16px',
            }}
          >
            {isWedding
              ? 'Traditional attire in our deep burgundy, dark cherry, or warm ivory palette is recommended. Your presence and comfort remain our greatest joy.'
              : 'Traditional attire is recommended. Dress code is a suggestion, not a requirement.'}
          </p>
        </div>

        {/* Curated Color Palette */}
        <div style={{ maxWidth: '880px', margin: '0 auto 72px' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span
              className="section-subtitle"
              style={{ color: isWedding ? '#5E1C2C' : undefined }}
            >
              {isWedding
                ? 'COLOUR CALIBRATION // SOPHISTICATED BURGUNDY PALETTE'
                : 'COLOUR CALIBRATION // WEDDING PALETTE'}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)',
                color: isWedding ? '#3B0100' : 'var(--color-primary)',
              }}
            >
              Our Colour Story
            </h3>
            {isWedding && (
              <p
                style={{
                  fontFamily: 'var(--font-serif-refined)',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  marginTop: '6px',
                }}
              >
                Deep burgundy, rich dark cherry, and black cherry tones paired with warm ivory.
              </p>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '28px',
              padding: '44px 32px',
              background: isWedding
                ? 'linear-gradient(180deg, #FFFFFF 0%, #FBF7F0 100%)'
                : 'var(--color-surface)',
              border: isWedding
                ? '1.5px solid rgba(94, 28, 44, 0.25)'
                : '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-sm)',
              position: 'relative',
              boxShadow: isWedding ? '0 10px 30px rgba(37, 7, 29, 0.06)' : undefined,
            }}
          >
            {/* Blueprint corner marks */}
            <div
              style={{
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                width: '18px',
                height: '18px',
                borderTop: `2.5px solid ${isWedding ? '#5E1C2C' : 'var(--color-primary)'}`,
                borderLeft: `2.5px solid ${isWedding ? '#5E1C2C' : 'var(--color-primary)'}`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-1px',
                right: '-1px',
                width: '18px',
                height: '18px',
                borderBottom: `2.5px solid ${isWedding ? '#5E1C2C' : 'var(--color-primary)'}`,
                borderRight: `2.5px solid ${isWedding ? '#5E1C2C' : 'var(--color-primary)'}`,
              }}
            />

            {currentPalette.map((swatch) => (
              <ColorSwatch
                key={swatch.hex}
                {...swatch}
                isWedding={isWedding}
              />
            ))}
          </div>
        </div>

        {/* Our Aesthetic / Inspiration */}
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <span
              className="section-subtitle"
              style={{ color: isWedding ? '#5E1C2C' : undefined }}
            >
              VISUAL DIRECTION // THE INSPIRATION
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)',
                color: isWedding ? '#3B0100' : 'var(--color-primary)',
              }}
            >
              Our Aesthetic
            </h3>
            <p className="section-desc">
              {isWedding
                ? 'The opulent and romantic visual language of our Holy Matrimony.'
                : 'The visual language of our love story.'}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            {currentWords.map((word, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px 22px',
                  border: isWedding
                    ? '1px solid rgba(94, 28, 44, 0.22)'
                    : '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  background: isWedding
                    ? idx % 2 === 0
                      ? 'rgba(94, 28, 44, 0.05)'
                      : 'var(--color-surface)'
                    : 'var(--color-surface)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: isWedding
                    ? idx % 2 === 0
                      ? '#5E1C2C'
                      : '#3B0100'
                    : idx % 2 === 0
                    ? 'var(--color-primary)'
                    : 'var(--color-gold)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isWedding
                    ? 'rgba(94, 28, 44, 0.12)'
                    : 'var(--color-bg-alt)';
                  e.currentTarget.style.borderColor = isWedding
                    ? '#5E1C2C'
                    : 'var(--color-gold)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isWedding
                    ? idx % 2 === 0
                      ? 'rgba(94, 28, 44, 0.05)'
                      : 'var(--color-surface)'
                    : 'var(--color-surface)';
                  e.currentTarget.style.borderColor = isWedding
                    ? 'rgba(94, 28, 44, 0.22)'
                    : 'var(--color-border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span
                  style={{
                    marginRight: '8px',
                    opacity: 0.6,
                    color: isWedding ? '#8E1118' : 'var(--color-gold)',
                  }}
                >
                  §
                </span>
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
