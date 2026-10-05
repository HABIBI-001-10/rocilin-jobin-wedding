import React, { useState, useCallback } from 'react';

// Images must be in /public and prefixed with BASE_URL for Vite subpath deployments
const BASE = import.meta.env.BASE_URL;

const GALLERY_ITEMS = [
  {
    id: 'g1',
    src: `${BASE}couple_potrait.jpeg`,
    alt: 'Rocilin & Jobin — couple portrait',
    aspectRatio: '3/4',
    isReal: true,
    caption: 'ROCILIN & JOBIN',
  },
  {
    id: 'g2',
    src: `${BASE}cherished_moment.jpeg`,
    alt: 'A cherished moment',
    aspectRatio: '4/3',
    isReal: true,
    caption: 'A CHERISHED MOMENT',
  },
  {
    id: 'g3',
    src: `${BASE}together.jpeg`,
    alt: 'Together',
    aspectRatio: '1/1',
    isReal: true,
    caption: 'TOGETHER',
  },
  {
    id: 'g4',
    src: `${BASE}quiet_luxury.jpeg`,
    alt: 'Quiet luxury',
    aspectRatio: '3/4',
    isReal: true,
    caption: 'QUIET LUXURY',
  },
  {
    id: 'g5',
    src: `${BASE}timeless_tradition.jpeg`,
    alt: 'Timeless tradition',
    aspectRatio: '16/9',
    isReal: true,
    caption: 'TIMELESS TRADITION',
  },
  {
    id: 'g6',
    src: `${BASE}modern_romance.jpeg`,
    alt: 'Modern romance',
    aspectRatio: '4/3',
    isReal: true,
    caption: 'MODERN ROMANCE',
  },
];

function PlaceholderFrame({ caption }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg-alt)',
        position: 'relative',
        gap: '12px',
      }}
    >
      {/* Blueprint corner marks */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', width: '20px', height: '20px', borderTop: '1px solid var(--color-gold)', borderLeft: '1px solid var(--color-gold)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '20px', height: '20px', borderTop: '1px solid var(--color-gold)', borderRight: '1px solid var(--color-gold)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '20px', height: '20px', borderBottom: '1px solid var(--color-gold)', borderLeft: '1px solid var(--color-gold)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '20px', height: '20px', borderBottom: '1px solid var(--color-gold)', borderRight: '1px solid var(--color-gold)', opacity: 0.5 }} />

      {/* Crosshair */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08, pointerEvents: 'none' }} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <line x1="50" y1="0" x2="50" y2="100" stroke="var(--color-gold)" strokeWidth="0.5" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="var(--color-gold)" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="25" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>

      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1" opacity="0.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--color-gold)', opacity: 0.6, textTransform: 'uppercase' }}>
        {caption}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', color: 'var(--color-text-muted)', opacity: 0.4 }}>
        [IMAGE COMING SOON]
      </span>
    </div>
  );
}

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image lightbox"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        background: 'rgba(41, 38, 36, 0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      {/* Content container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '900px',
          maxHeight: '90vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image / placeholder */}
        <div
          style={{
            width: '100%',
            maxHeight: '70vh',
            border: '1px solid rgba(181, 155, 101, 0.3)',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            background: 'var(--color-bg-alt)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
          }}
        >
          {item.isReal && item.src ? (
            <img
              src={item.src}
              alt={item.alt}
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', display: 'block' }}
            />
          ) : (
            <div style={{ width: '100%', minHeight: '300px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1" opacity="0.4" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-gold)', opacity: 0.6, letterSpacing: '0.14em' }}>{item.caption}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>[IMAGE PLACEHOLDER]</span>
            </div>
          )}
        </div>

        {/* Caption */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            color: 'rgba(181, 155, 101, 0.8)',
            textTransform: 'uppercase',
          }}
        >
          {item.caption}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            onClick={onPrev}
            aria-label="Previous image"
            style={{
              padding: '10px 20px',
              border: '1px solid rgba(181, 155, 101, 0.4)',
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(181, 155, 101, 0.9)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
            }}
          >
            ← PREV
          </button>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
            {activeIndex + 1} / {items.length}
          </span>
          <button
            onClick={onNext}
            aria-label="Next image"
            style={{
              padding: '10px 20px',
              border: '1px solid rgba(181, 155, 101, 0.4)',
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(181, 155, 101, 0.9)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
            }}
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px',
          border: '1px solid rgba(181, 155, 101, 0.4)',
          background: 'rgba(255,255,255,0.06)',
          color: 'rgba(181, 155, 101, 0.9)',
          borderRadius: 'var(--radius-sm)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length), []);
  const goNext = useCallback(() => setLightboxIndex((i) => (i + 1) % GALLERY_ITEMS.length), []);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  return (
    <section
      id="gallery"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">VISUAL ARCHIVE // MOMENTS</span>
          <h2 className="section-title">Moments</h2>
          <p className="section-desc">A few frames from our story.</p>
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(idx)}
              aria-label={`Open gallery image: ${item.caption}`}
              style={{
                aspectRatio: item.aspectRatio,
                cursor: 'pointer',
                background: 'none',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                padding: 0,
                display: 'block',
                width: '100%',
                position: 'relative',
              }}
            >
              {item.isReal && item.src ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  {/* Overlay on hover */}
                  <div
                    className="gallery-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(142, 17, 24, 0.08)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '14px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = 0; }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#FFF', letterSpacing: '0.12em', background: 'rgba(142, 17, 24, 0.7)', padding: '4px 8px', borderRadius: '2px' }}>
                      {item.caption}
                    </span>
                  </div>
                </>
              ) : (
                <PlaceholderFrame caption={item.caption} />
              )}
            </button>
          ))}
        </div>

        {/* Technical note */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', opacity: 0.7 }}>
            § MORE MOMENTS TO BE ARCHIVED SOON
          </span>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={GALLERY_ITEMS}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
