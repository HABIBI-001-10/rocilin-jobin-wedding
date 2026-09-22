import React, { useState } from 'react';
import { DimensionLine } from './EngineeringSVGs';

export default function ScheduleSection({ isEngagement }) {
  const [activeTab, setActiveTab] = useState(isEngagement ? 'engagement' : 'matrimony');

  // Calendar event download helper (.ics format)
  const downloadIcs = (event) => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Rocilin & Jobin Wedding//Love Precisely Engineered//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      `DTSTART:${event.dtStart}`,
      `DTEND:${event.dtEnd}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.filename}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const matrimonyEvent = {
    title: 'Holy Matrimony: Rocilin & Jobin',
    description: 'The Wedding Ceremony of Rocilin Sebastian & Jobin Michael at Little Flower Church, Kaduvakkulam.',
    location: 'Little Flower Church, Kaduvakkulam, Kerala',
    dtStart: '20261107T053000Z', // 11:00 AM IST
    dtEnd: '20261107T093000Z',   // 03:00 PM IST
    filename: 'Rocilin_Jobin_Holy_Matrimony',
  };

  const engagementEvent = {
    title: 'Betrothal & Engagement: Rocilin & Jobin',
    description: 'The Betrothal & Engagement Ceremony of Rocilin Sebastian & Jobin Michael.',
    location: "St. Mary's Parish Auditorium, Kaduvakkulam",
    dtStart: '20261101T110000Z', // 04:30 PM IST
    dtEnd: '20261101T143000Z',   // 08:00 PM IST
    filename: 'Rocilin_Jobin_Engagement',
  };

  return (
    <section
      id="schedule"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--color-bg)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">PROJECT SCHEDULE // SEQUENCE OF EVENTS</span>
          <h2 className="section-title">Schedule of Celebrations</h2>
          <p className="section-desc">
            Engineered with precise timing, prayerful reverence, and joyful celebration.
          </p>
        </div>

        {/* Dynamic Tab Switcher if in Engagement View */}
        {isEngagement && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            <button
              onClick={() => setActiveTab('engagement')}
              style={{
                padding: '12px 24px',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
                border: activeTab === 'engagement' ? '1px solid var(--color-primary)' : '1px solid var(--color-border-subtle)',
                background: activeTab === 'engagement' ? 'var(--color-primary)' : 'var(--color-surface)',
                color: activeTab === 'engagement' ? '#FFF' : 'var(--color-text)',
                boxShadow: activeTab === 'engagement' ? 'var(--shadow-card)' : 'none',
              }}
            >
              PHASE 01: ENGAGEMENT
            </button>
            <button
              onClick={() => setActiveTab('matrimony')}
              style={{
                padding: '12px 24px',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
                border: activeTab === 'matrimony' ? '1px solid var(--color-primary)' : '1px solid var(--color-border-subtle)',
                background: activeTab === 'matrimony' ? 'var(--color-primary)' : 'var(--color-surface)',
                color: activeTab === 'matrimony' ? '#FFF' : 'var(--color-text)',
                boxShadow: activeTab === 'matrimony' ? 'var(--shadow-card)' : 'none',
              }}
            >
              PHASE 02: HOLY MATRIMONY
            </button>
          </div>
        )}

        {/* Schedule Display Grid */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* If Engagement View & activeTab is 'engagement' */}
          {isEngagement && activeTab === 'engagement' && (
            <div className="eng-card" style={{ padding: '42px 36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="dim-tag">PHASE 01 // BETROTHAL &amp; ENGAGEMENT</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-gold)' }}>
                  REV: 01.A
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                  color: 'var(--color-primary)',
                  marginBottom: '8px',
                }}
              >
                The Betrothal &amp; Engagement
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-serif-refined)',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  marginBottom: '28px',
                }}
              >
                A solemn covenant of commitment in the presence of beloved family and elders.
              </p>

              {/* Dimension Specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  background: 'var(--color-bg)',
                  padding: '24px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-subtle)',
                  marginBottom: '28px',
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                    DATE CALIBRATION
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    01 NOVEMBER 2026
                  </p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                    SUNDAY
                  </span>
                </div>

                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                    COMMENCEMENT
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    04:30 PM IST
                  </p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                    TOLERANCE: ON TIME
                  </span>
                </div>

                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                    VENUE VENUE SPEC
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)' }}>
                    ST. MARY'S AUDITORIUM
                  </p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                    BRIDE'S PARISH
                  </span>
                </div>
              </div>

              {/* Timeline Sequence */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', color: 'var(--color-gold)', marginBottom: '14px' }}>
                  OPERATIONAL SEQUENCE
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', minWidth: '70px', fontWeight: 600 }}>
                      04:30 PM
                    </span>
                    <span style={{ width: '1px', height: '16px', background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem' }}>
                      Gathering &amp; Opening Prayer
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', minWidth: '70px', fontWeight: 600 }}>
                      05:00 PM
                    </span>
                    <span style={{ width: '1px', height: '16px', background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem' }}>
                      Solemn Betrothal Liturgy &amp; Ring Exchange
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', minWidth: '70px', fontWeight: 600 }}>
                      06:30 PM
                    </span>
                    <span style={{ width: '1px', height: '16px', background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem' }}>
                      Family Fellowship &amp; Traditional Feast
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={() => downloadIcs(engagementEvent)} className="btn-secondary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  ADD TO CALENDAR (.ICS)
                </button>
                <a href="#rsvp" className="btn-primary">
                  CONFIRM FOR ENGAGEMENT
                </a>
              </div>
            </div>
          )}

          {/* Matrimony Card (Shown if activeTab === 'matrimony' or in default view) */}
          {(!isEngagement || activeTab === 'matrimony') && (
            <div className="eng-card" style={{ padding: '42px 36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="dim-tag">
                  {isEngagement ? 'PHASE 02 // HOLY MATRIMONY' : 'PRINCIPAL CEREMONY // HOLY MATRIMONY'}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-gold)' }}>
                  FINAL SPEC // REV. ∞
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                  color: 'var(--color-primary)',
                  marginBottom: '8px',
                }}
              >
                The Holy Matrimony
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-serif-refined)',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  marginBottom: '28px',
                }}
              >
                The sacred covenant of holy marriage before God and our cherished community.
              </p>

              {/* Dimension Specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  background: 'var(--color-bg)',
                  padding: '24px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-subtle)',
                  marginBottom: '28px',
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                    DATE SPECIFICATION
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    07 NOVEMBER 2026
                  </p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                    SATURDAY
                  </span>
                </div>

                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                    CEREMONY TIME
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    11:00 AM IST
                  </p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                    GUESTS SEATED BY 10:45 AM
                  </span>
                </div>

                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                    SANCTUARY
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)' }}>
                    LITTLE FLOWER CHURCH
                  </p>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                    KADUVAKKULAM, KERALA
                  </span>
                </div>
              </div>

              {/* Timeline Sequence */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', color: 'var(--color-gold)', marginBottom: '14px' }}>
                  OPERATIONAL SEQUENCE
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', minWidth: '70px', fontWeight: 600 }}>
                      10:45 AM
                    </span>
                    <span style={{ width: '1px', height: '16px', background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem' }}>
                      Arrival of Guests &amp; Pre-service Organ Preludes
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', minWidth: '70px', fontWeight: 600 }}>
                      11:00 AM
                    </span>
                    <span style={{ width: '1px', height: '16px', background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem' }}>
                      Solemn Nuptial High Mass &amp; Sacred Crowning Rite
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', minWidth: '70px', fontWeight: 600 }}>
                      12:15 PM
                    </span>
                    <span style={{ width: '1px', height: '16px', background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem' }}>
                      Exchange of Vows, Manthrakodi Blessing &amp; Signing of the Register
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', minWidth: '70px', fontWeight: 600 }}>
                      01:00 PM
                    </span>
                    <span style={{ width: '1px', height: '16px', background: 'var(--color-gold)' }} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem' }}>
                      Wedding Feast &amp; Reception Celebration
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={() => downloadIcs(matrimonyEvent)} className="btn-secondary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  ADD TO CALENDAR (.ICS)
                </button>
                <a href="#venue" className="btn-secondary">
                  VIEW LOCATION MAP
                </a>
                <a href="#rsvp" className="btn-primary">
                  CONFIRM ATTENDANCE
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
