import { useState } from 'react';
import { DimensionLine } from './EngineeringSVGs';

export default function AttendanceSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    attendance: null, // 'yes' | 'no'
    guestCount: '1',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (val) => {
    setFormData((prev) => ({ ...prev, attendance: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.attendance) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ fullName: '', contact: '', attendance: null, guestCount: '1' });
  };

  return (
    <section
      id="attendance"
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
          <span className="section-subtitle">GUEST MANIFEST // ATTENDANCE</span>
          <h2 className="section-title">Will You Join Us?</h2>
          <p className="section-desc">
            We would love to celebrate this moment with you.
          </p>
        </div>

        <div className="eng-card" style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 36px' }}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* Header bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <span className="dim-tag">ATTENDANCE // INPUT</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-gold)' }}>
                  REQ. BEFORE: 15 OCT 2026
                </span>
              </div>

              {/* Big choice buttons */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary)',
                    marginBottom: '16px',
                  }}
                >
                  Will you be there?
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  {/* Yes card */}
                  <button
                    type="button"
                    onClick={() => handleSelect('yes')}
                    style={{
                      padding: '24px 16px',
                      border: `2px solid ${formData.attendance === 'yes' ? 'var(--color-primary)' : 'var(--color-border-subtle)'}`,
                      borderRadius: 'var(--radius-sm)',
                      background: formData.attendance === 'yes' ? 'rgba(142, 17, 24, 0.06)' : 'var(--color-bg)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: `1.5px solid ${formData.attendance === 'yes' ? 'var(--color-primary)' : 'var(--color-gold)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: formData.attendance === 'yes' ? 'var(--color-primary)' : 'var(--color-gold)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: formData.attendance === 'yes' ? 'var(--color-primary)' : 'var(--color-text)',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      YES, I'LL BE THERE
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.08em' }}>
                      Presence Confirmed
                    </span>
                  </button>

                  {/* No card */}
                  <button
                    type="button"
                    onClick={() => handleSelect('no')}
                    style={{
                      padding: '24px 16px',
                      border: `2px solid ${formData.attendance === 'no' ? 'var(--color-text-muted)' : 'var(--color-border-subtle)'}`,
                      borderRadius: 'var(--radius-sm)',
                      background: formData.attendance === 'no' ? 'rgba(138, 133, 128, 0.06)' : 'var(--color-bg)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: `1.5px solid ${formData.attendance === 'no' ? 'var(--color-text-muted)' : 'var(--color-border-subtle)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: formData.attendance === 'no' ? 'var(--color-text-muted)' : 'var(--color-text-muted)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: formData.attendance === 'no' ? 'var(--color-text-muted)' : 'var(--color-text)',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      SORRY, I CAN'T MAKE IT
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
                      Celebrating in Spirit
                    </span>
                  </button>
                </div>
              </div>

              {/* Name field */}
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  <span>Your Name *</span>
                  <span className="label-annotation">[Primary Attendee]</span>
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

              {/* Contact field */}
              <div className="form-group">
                <label className="form-label" htmlFor="contact">
                  <span>Contact *</span>
                  <span className="label-annotation">[Phone / Email]</span>
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

              {/* Guest count (if attending) */}
              {formData.attendance === 'yes' && (
                <div className="form-group">
                  <label className="form-label" htmlFor="guestCount">
                    <span>Number of Guests</span>
                    <span className="label-annotation">[Including yourself]</span>
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Persons</option>
                  </select>
                </div>
              )}

              <div style={{ maxWidth: '440px', margin: '8px auto 20px' }}>
                <DimensionLine label="07 NOVEMBER 2026 // LITTLE FLOWER CHURCH" />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '0.84rem',
                  letterSpacing: '0.18em',
                  marginTop: '4px',
                  opacity: formData.attendance ? 1 : 0.5,
                  cursor: formData.attendance ? 'pointer' : 'default',
                }}
                disabled={!formData.attendance}
              >
                SEND MY RESPONSE
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            </form>
          ) : (
            /* Confirmation state */
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              {/* Indicator icon */}
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
                  {formData.attendance === 'yes' ? (
                    <polyline points="20 6 9 17 4 12" />
                  ) : (
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  )}
                </svg>
              </div>

              <span className="dim-tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>
                RESPONSE RECEIVED
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
                {formData.attendance === 'yes'
                  ? "We Can't Wait!"
                  : "We'll Miss You."}
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
                {formData.attendance === 'yes'
                  ? "We can't wait to celebrate with you. Your presence means the world to us."
                  : "We'll miss you and send our love. You'll be close to our hearts on our special day."}
              </p>

              {/* Receipt block */}
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
                <div><span style={{ color: 'var(--color-gold)' }}>GUEST:</span> {formData.fullName}</div>
                <div>
                  <span style={{ color: 'var(--color-gold)' }}>STATUS:</span>{' '}
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    {formData.attendance === 'yes' ? 'CONFIRMED ATTENDING' : 'CELEBRATING IN SPIRIT'}
                  </span>
                </div>
                {formData.attendance === 'yes' && (
                  <div><span style={{ color: 'var(--color-gold)' }}>GUESTS:</span> {formData.guestCount}</div>
                )}
                <div><span style={{ color: 'var(--color-gold)' }}>DATE:</span> 07 NOVEMBER 2026 // 11:00 AM IST</div>
                <div><span style={{ color: 'var(--color-gold)' }}>VENUE:</span> LITTLE FLOWER CHURCH, KADUVAKKULAM</div>
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
