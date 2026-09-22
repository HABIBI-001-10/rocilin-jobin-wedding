import React, { useState, useEffect } from 'react';
import { DimensionLine } from './EngineeringSVGs';

export default function CountdownSection() {
  // Target: 07 November 2026, 11:00 AM IST (+05:30)
  const targetDate = new Date('2026-11-07T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days, unitCode: 'T_d' },
    { label: 'HOURS', value: timeLeft.hours, unitCode: 'T_h' },
    { label: 'MINUTES', value: timeLeft.minutes, unitCode: 'T_m' },
    { label: 'SECONDS', value: timeLeft.seconds, unitCode: 'T_s' },
  ];

  return (
    <section
      id="countdown"
      style={{
        padding: '90px 24px',
        position: 'relative',
        background: 'var(--color-bg)',
      }}
    >
      <div className="container-narrow">
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <span className="dim-tag" style={{ marginBottom: '14px' }}>
            CHRONOMETRIC SYNCHRONIZATION // TIME TO T-0
          </span>
          <h2 className="section-title">The Countdown to Forever</h2>
          <p className="section-desc">
            Measuring every second until two lives converge into one.
          </p>
        </div>

        {/* Precision Dimension */}
        <div style={{ maxWidth: '520px', margin: '0 auto 36px' }}>
          <DimensionLine label="TARGET: 07.11.2026 // 11:00:00 IST" />
        </div>

        {/* Ticker Box */}
        <div
          className="eng-card"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '36px 28px',
            background: 'var(--color-surface)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              textAlign: 'center',
            }}
          >
            {units.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  padding: '16px 8px',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                {/* Micro engineering corner mark */}
                <span
                  style={{
                    position: 'absolute',
                    top: '4px',
                    left: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    color: 'var(--color-gold)',
                  }}
                >
                  {item.unitCode}
                </span>

                {/* Counter value */}
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginTop: '8px',
                  }}
                >
                  {String(item.value).padStart(2, '0')}
                </div>

                {/* Unit label */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    marginTop: '6px',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* System Calibration Status Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px dashed var(--color-border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-gold)',
              letterSpacing: '0.1em',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  display: 'inline-block',
                  animation: 'pulseSubtle 2s infinite',
                }}
              />
              PRECISION CLOCK RUNNING
            </span>
            <span>TIMEZONE: IST (UTC+05:30)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
