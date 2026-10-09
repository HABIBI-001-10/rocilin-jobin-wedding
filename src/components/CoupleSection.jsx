import React from 'react';
import { DimensionLine } from './EngineeringSVGs';

export default function CoupleSection({ isEngagement }) {
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

        {/* ── ENGAGEMENT VIEW (original, untouched) ── */}
        {isEngagement && (
          <>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span className="dim-tag">COMP. 01 // THE BRIDE</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)' }}>
                    REF: RS-199x
                  </span>
                </div>

                <div
                  style={{
                    width: '84px', height: '84px', margin: '0 auto 20px',
                    borderRadius: '50%', border: '1.5px solid var(--color-gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', background: 'rgba(248, 245, 239, 0.6)',
                  }}
                >
                  <div style={{ position: 'absolute', inset: '4px', borderRadius: '50%', border: '1px dashed var(--color-primary)' }} />
                  <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    R
                  </span>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', color: 'var(--color-primary)', letterSpacing: '0.04em', marginBottom: '4px' }}>
                    ROCILIN SEBASTIAN
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                    THE BRIDE
                  </p>
                </div>

                <div style={{ background: 'rgba(248, 245, 239, 0.6)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>BRIDE'S PARENTS</span>
                    <p style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '1.15rem', color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.4 }}>
                      D/o Mr. Sebastian Mathew &amp; Mrs. Aleyamma Sebastian
                    </p>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>FAMILY ADDRESS</span>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.02em' }}>
                      Veliyampara (H), Chingavanam, Kottayam
                    </p>
                  </div>
                </div>
              </div>

              {/* Groom Card */}
              <div className="eng-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span className="dim-tag">COMP. 02 // THE GROOM</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)' }}>
                    REF: JM-199x
                  </span>
                </div>

                <div
                  style={{
                    width: '84px', height: '84px', margin: '0 auto 20px',
                    borderRadius: '50%', border: '1.5px solid var(--color-gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', background: 'rgba(248, 245, 239, 0.6)',
                  }}
                >
                  <div style={{ position: 'absolute', inset: '4px', borderRadius: '50%', border: '1px dashed var(--color-primary)' }} />
                  <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    J
                  </span>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', color: 'var(--color-primary)', letterSpacing: '0.04em', marginBottom: '4px' }}>
                    JOBIN MICHAEL
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                    THE GROOM
                  </p>
                </div>

                <div style={{ background: 'rgba(248, 245, 239, 0.6)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>GROOM'S PARENTS</span>
                    <p style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '1.15rem', color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.4 }}>
                      S/o Mr. Michael K A &amp; Mrs. Elsamma Michael
                    </p>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>FAMILY ADDRESS</span>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.02em' }}>
                      Kavalath (H), Thabore, Kannur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── WEDDING VIEW (Jobin first, wedding-specific copy) ── */}
        {!isEngagement && (
          <>
            {/* Section Header */}
            <div className="section-header">
              <span className="section-subtitle">HOLY MATRIMONY // THE COUPLE</span>
              <h2 className="section-title">Jobin &amp; Rocilin</h2>
              <p className="section-desc">
                United in faith, love, and the sacred covenant of Holy Matrimony on 21 November 2026.
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
              {/* Groom Card — shown first in wedding view */}
              <div className="eng-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span className="dim-tag">COMP. 01 // THE GROOM</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)' }}>
                    REF: JM-199x
                  </span>
                </div>

                <div
                  style={{
                    width: '84px', height: '84px', margin: '0 auto 20px',
                    borderRadius: '50%', border: '1.5px solid var(--color-gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', background: 'rgba(248, 245, 239, 0.6)',
                  }}
                >
                  <div style={{ position: 'absolute', inset: '4px', borderRadius: '50%', border: '1px dashed var(--color-primary)' }} />
                  <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    J
                  </span>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', color: 'var(--color-primary)', letterSpacing: '0.04em', marginBottom: '4px' }}>
                    JOBIN MICHAEL
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                    THE GROOM
                  </p>
                </div>

                <div style={{ background: 'rgba(248, 245, 239, 0.6)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>GROOM'S PARENTS</span>
                    <p style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '1.15rem', color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.4 }}>
                      S/o Mr. Michael K A &amp; Mrs. Elsamma Michael
                    </p>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>FAMILY ADDRESS</span>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.02em' }}>
                      Kavalath (H), Thabore, Kannur
                    </p>
                  </div>
                </div>
              </div>

              {/* Bride Card — shown second in wedding view */}
              <div className="eng-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span className="dim-tag">COMP. 02 // THE BRIDE</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)' }}>
                    REF: RS-199x
                  </span>
                </div>

                <div
                  style={{
                    width: '84px', height: '84px', margin: '0 auto 20px',
                    borderRadius: '50%', border: '1.5px solid var(--color-gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', background: 'rgba(248, 245, 239, 0.6)',
                  }}
                >
                  <div style={{ position: 'absolute', inset: '4px', borderRadius: '50%', border: '1px dashed var(--color-primary)' }} />
                  <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                    R
                  </span>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.85rem', color: 'var(--color-primary)', letterSpacing: '0.04em', marginBottom: '4px' }}>
                    ROCILIN SEBASTIAN
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.15em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                    THE BRIDE
                  </p>
                </div>

                <div style={{ background: 'rgba(248, 245, 239, 0.6)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>BRIDE'S PARENTS</span>
                    <p style={{ fontFamily: 'var(--font-serif-refined)', fontSize: '1.15rem', color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.4 }}>
                      D/o Mr. Sebastian Mathew &amp; Mrs. Aleyamma Sebastian
                    </p>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>FAMILY ADDRESS</span>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.02em' }}>
                      Veliyampara (H), Chingavanam, Kottayam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
