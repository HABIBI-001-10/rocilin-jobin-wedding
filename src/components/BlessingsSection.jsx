import React, { useState } from 'react';
import { DimensionLine } from './EngineeringSVGs';

export default function BlessingsSection() {
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
    setSenderName('');
  };

  return (
    <section
      id="blessings"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">MESSAGES // BLESSINGS ARCHIVE</span>
          <h2 className="section-title">Leave Your Blessings</h2>
          <p className="section-desc">
            Your words will become part of our story.
          </p>
        </div>

        <div className="eng-card" style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 36px' }}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* Header bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <span className="dim-tag">BLESSINGS // INPUT FORM</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)' }}>
                  07.11.2026
                </span>
              </div>

              {/* Name field */}
              <div className="form-group">
                <label className="form-label" htmlFor="blessingName">
                  <span>Your Name</span>
                  <span className="label-annotation">[Optional]</span>
                </label>
                <input
                  id="blessingName"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g., Abraham & Family"
                  className="form-input"
                />
              </div>

              {/* Message field */}
              <div className="form-group">
                <label className="form-label" htmlFor="blessingMessage">
                  <span>Your Blessing *</span>
                  <span className="label-annotation">[Heartfelt Message]</span>
                </label>
                <textarea
                  id="blessingMessage"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message for RociLin & Jobin..."
                  className="form-textarea"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
                {/* Character count hint */}
                <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-gold)', marginTop: '6px' }}>
                  {message.length} CHARS
                </div>
              </div>

              {/* Dimension line */}
              <div style={{ maxWidth: '440px', margin: '4px auto 20px' }}>
                <DimensionLine label="WORDS BECOME PART OF OUR STORY" />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '0.84rem', letterSpacing: '0.18em', marginTop: '4px' }}
              >
                SEND BLESSINGS
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
              </button>
            </form>
          ) : (
            /* Submitted confirmation */
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              {/* Animated heart checkmark */}
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  margin: '0 auto 24px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--color-bg)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '6px',
                    borderRadius: '50%',
                    border: '1px dashed var(--color-primary)',
                    opacity: 0.5,
                  }}
                />
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>

              <span className="dim-tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>
                BLESSINGS RECEIVED
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.9rem',
                  color: 'var(--color-primary)',
                  marginBottom: '12px',
                  marginTop: '12px',
                }}
              >
                {senderName ? `Thank You, ${senderName.split(' ')[0]}!` : 'Thank You!'}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-serif-refined)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  maxWidth: '440px',
                  margin: '0 auto 28px',
                  lineHeight: 1.7,
                }}
              >
                Your blessings have been received with love.
              </p>

              <div style={{ maxWidth: '400px', margin: '0 auto 28px' }}>
                <DimensionLine label="ARCHIVED WITH LOVE // 07.11.2026" />
              </div>

              <button onClick={handleReset} className="btn-secondary">
                SEND ANOTHER BLESSING
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
