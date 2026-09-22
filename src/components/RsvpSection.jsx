import React, { useState } from 'react';
import { ApprovedStamp, DimensionLine } from './EngineeringSVGs';

export default function RsvpSection({ isEngagement }) {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    attendance: 'attending', // attending | declining
    eventChoice: isEngagement ? 'both' : 'matrimony', // matrimony | engagement | both
    guestCount: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;

    // Generate technical serial receipt number
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const id = `SPEC-RJ-${randomHex}`;
    setTicketId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      contact: '',
      attendance: 'attending',
      eventChoice: isEngagement ? 'both' : 'matrimony',
      guestCount: '1',
      message: '',
    });
  };

  return (
    <section
      id="rsvp"
      style={{
        padding: '100px 24px',
        position: 'relative',
        background: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">GUEST MANIFEST // ATTENDANCE SPECIFICATION</span>
          <h2 className="section-title">RSVP &amp; Blessings</h2>
          <p className="section-desc">
            Your presence is our highest honor. Kindly confirm your attendance to assist our seating calibration.
          </p>
        </div>

        {/* Form Container */}
        <div className="eng-card" style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 32px' }}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span className="dim-tag">INPUT FORM // ATTENDANCE DATA</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-gold)' }}>
                  REQ. DEADLINE: 15 OCT 2026
                </span>
              </div>

              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  <span>Guest Full Name(s) *</span>
                  <span className="label-annotation">[String: Primary Attendee]</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g., Dr. Abraham Varghese & Family"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Contact (Phone / Email) */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact">
                  <span>Contact Information *</span>
                  <span className="label-annotation">[Phone / Email for Updates]</span>
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  placeholder="+91 98765 43210 or yourname@example.com"
                  value={formData.contact}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Attendance Status Selection */}
              <div className="form-group">
                <label className="form-label">
                  <span>Attendance Calibration *</span>
                  <span className="label-annotation">[Binary Status]</span>
                </label>
                <div className="radio-options-grid">
                  <label
                    className={`radio-card-label ${formData.attendance === 'attending' ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="attending"
                      checked={formData.attendance === 'attending'}
                      onChange={handleChange}
                    />
                    <span className="radio-card-title">✦ Joyfully Attending</span>
                    <span className="radio-card-desc">Presence confirmed</span>
                  </label>

                  <label
                    className={`radio-card-label ${formData.attendance === 'declining' ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="declining"
                      checked={formData.attendance === 'declining'}
                      onChange={handleChange}
                    />
                    <span className="radio-card-title">Regretfully Declining</span>
                    <span className="radio-card-desc">Celebrating in spirit</span>
                  </label>
                </div>
              </div>

              {/* Dynamic Event Choice (ONLY in Engagement View and when Attending) */}
              {isEngagement && formData.attendance === 'attending' && (
                <div className="form-group" style={{ background: 'var(--color-bg)', padding: '16px', borderRadius: '4px', border: '1px solid var(--color-border-subtle)' }}>
                  <label className="form-label">
                    <span>Select Events to Attend *</span>
                    <span className="label-annotation">[Dynamic Route: Engagement Active]</span>
                  </label>
                  <div className="radio-options-grid">
                    <label
                      className={`radio-card-label ${formData.eventChoice === 'both' ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="eventChoice"
                        value="both"
                        checked={formData.eventChoice === 'both'}
                        onChange={handleChange}
                      />
                      <span className="radio-card-title">Both Ceremonies</span>
                      <span className="radio-card-desc">Engagement &amp; Matrimony</span>
                    </label>

                    <label
                      className={`radio-card-label ${formData.eventChoice === 'matrimony' ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="eventChoice"
                        value="matrimony"
                        checked={formData.eventChoice === 'matrimony'}
                        onChange={handleChange}
                      />
                      <span className="radio-card-title">Holy Matrimony Only</span>
                      <span className="radio-card-desc">07 Nov 2026, 11:00 AM</span>
                    </label>

                    <label
                      className={`radio-card-label ${formData.eventChoice === 'engagement' ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="eventChoice"
                        value="engagement"
                        checked={formData.eventChoice === 'engagement'}
                        onChange={handleChange}
                      />
                      <span className="radio-card-title">Engagement Only</span>
                      <span className="radio-card-desc">01 Nov 2026, 04:30 PM</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Total Guest Count (if attending) */}
              {formData.attendance === 'attending' && (
                <div className="form-group">
                  <label className="form-label" htmlFor="guestCount">
                    <span>Total Number of Attendees</span>
                    <span className="label-annotation">[Integer Count]</span>
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="1">1 Person (Sole Specification)</option>
                    <option value="2">2 Persons (Couple)</option>
                    <option value="3">3 Persons (Family Unit)</option>
                    <option value="4">4 Persons (Family Unit)</option>
                    <option value="5+">5+ Persons (Large Delegation)</option>
                  </select>
                </div>
              )}

              {/* Message / Blessings */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  <span>Note or Prayers for Rocilin &amp; Jobin</span>
                  <span className="label-annotation">[Optional]</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Leave a heartfelt note, blessing, or dietary consideration..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              {/* Submit Button with Engineering Precision */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '0.85rem',
                  letterSpacing: '0.18em',
                  marginTop: '10px',
                }}
              >
                CONFIRM PRESENCE
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            </form>
          ) : (
            /* Submission Confirmation / Receipt Card */
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{ margin: '0 auto 20px', display: 'flex', justifyContent: 'center' }}>
                <ApprovedStamp />
              </div>

              <span className="dim-tag" style={{ marginBottom: '12px' }}>
                STATUS: SPECIFICATION RECORDED
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.9rem',
                  color: 'var(--color-primary)',
                  marginBottom: '8px',
                  marginTop: '8px',
                }}
              >
                Thank You, {formData.fullName.split(' ')[0]}!
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-serif-refined)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-muted)',
                  maxWidth: '480px',
                  margin: '0 auto 24px',
                }}
              >
                {formData.attendance === 'attending'
                  ? 'Your presence has been precisely calibrated in our guest manifest. We eagerly await celebrating this holy union with you.'
                  : 'We have received your warm wishes. You will remain close to our hearts in prayer on our wedding day.'}
              </p>

              {/* Manifest Receipt Details */}
              <div
                style={{
                  background: 'var(--color-bg)',
                  padding: '20px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-subtle)',
                  textAlign: 'left',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  lineHeight: '1.8',
                  color: 'var(--color-text)',
                  marginBottom: '28px',
                }}
              >
                <div>
                  <span style={{ color: 'var(--color-gold)' }}>MANIFEST REF:</span> {ticketId}
                </div>
                <div>
                  <span style={{ color: 'var(--color-gold)' }}>NAME:</span> {formData.fullName}
                </div>
                <div>
                  <span style={{ color: 'var(--color-gold)' }}>STATUS:</span>{' '}
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    {formData.attendance === 'attending' ? 'CONFIRMED ATTENDING' : 'REGRETFULLY DECLINED'}
                  </span>
                </div>
                {formData.attendance === 'attending' && (
                  <>
                    <div>
                      <span style={{ color: 'var(--color-gold)' }}>EVENT(S):</span>{' '}
                      {isEngagement
                        ? formData.eventChoice === 'both'
                          ? 'Both Events (Engagement & Matrimony)'
                          : formData.eventChoice === 'engagement'
                          ? 'Engagement Ceremony Only'
                          : 'Holy Matrimony Only'
                        : 'Holy Matrimony Ceremony'}
                    </div>
                    <div>
                      <span style={{ color: 'var(--color-gold)' }}>GUEST SEATS:</span> {formData.guestCount}
                    </div>
                  </>
                )}
                <div>
                  <span style={{ color: 'var(--color-gold)' }}>TIMESTAMP:</span> {new Date().toLocaleDateString()}
                </div>
              </div>

              <button onClick={handleReset} className="btn-secondary">
                SUBMIT ANOTHER RESPONSE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
