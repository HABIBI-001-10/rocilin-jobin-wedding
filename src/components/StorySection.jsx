import React from 'react';
import { BlueprintInfinity, DimensionLine } from './EngineeringSVGs';

export default function StorySection() {
  const milestones = [
    {
      step: '01',
      phase: 'INITIAL CALIBRATION',
      title: 'The Meeting of Minds',
      desc: 'Two distinct trajectories intersected. What began as kindred intellectual respect evolved into an undeniable, effortless resonance.',
    },
    {
      step: '02',
      phase: 'HARMONIC RESONANCE',
      title: 'Synchronized Frequencies',
      desc: 'Through conversations, shared dreams, challenges, and laughter, every variable aligned. A bond tested and proven indestructible.',
    },
    {
      step: '03',
      phase: 'STRUCTURAL UNION',
      title: 'Forever As One',
      desc: 'Under God\'s divine architecture, choosing to build an eternal life together—grounded in faith, deep mutual respect, and infinite love.',
    },
  ];

  return (
    <section
      id="story"
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
          <span className="section-subtitle">PROJECT NARRATIVE // OUR STORY</span>
          <h2 className="section-title">Designed to Last</h2>
          <p
            style={{
              fontFamily: 'var(--font-serif-refined)',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
              fontStyle: 'italic',
              color: 'var(--color-primary)',
              marginTop: '8px',
            }}
          >
            &ldquo;Two paths. One direction. A lifetime of alignment.&rdquo;
          </p>
        </div>

        {/* Animated Blueprint Infinity Graphic */}
        <div style={{ margin: '40px auto 50px', textAlign: 'center' }}>
          <BlueprintInfinity width={320} height={160} />
          <div style={{ maxWidth: '480px', margin: '16px auto 0' }}>
            <DimensionLine label="CONTINUOUS LOOP // NO DISCONTINUITY DETECTED" />
          </div>
        </div>

        {/* Engineering Milestones Timeline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          {milestones.map((item, index) => (
            <div
              key={index}
              className="eng-card"
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                padding: '28px 28px',
              }}
            >
              {/* Step indicator */}
              <div
                style={{
                  minWidth: '56px',
                  height: '56px',
                  borderRadius: '2px',
                  border: '1px solid var(--color-gold)',
                  background: 'var(--color-bg)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.1em',
                  }}
                >
                  PHASE
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                  }}
                >
                  {item.step}
                </span>
              </div>

              {/* Text content */}
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  {item.phase}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.4rem',
                    color: 'var(--color-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text)',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
