import React, { useState, useEffect } from 'react';

export default function CrosshairCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for fine pointers (mouse on desktop)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="custom-crosshair-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="custom-crosshair-dot" />
      <svg className="custom-crosshair-lines" viewBox="0 0 32 32" fill="none">
        {/* Reticle circle */}
        <circle cx="16" cy="16" r="10" stroke="var(--color-gold)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.7" />
        {/* Crosshair lines with central gap */}
        <line x1="16" y1="2" x2="16" y2="11" stroke="var(--color-gold)" strokeWidth="1" />
        <line x1="16" y1="21" x2="16" y2="30" stroke="var(--color-gold)" strokeWidth="1" />
        <line x1="2" y1="16" x2="11" y2="16" stroke="var(--color-gold)" strokeWidth="1" />
        <line x1="21" y1="16" x2="30" y2="16" stroke="var(--color-gold)" strokeWidth="1" />
      </svg>
      <div className="custom-crosshair-coords">
        X:{Math.round(position.x)} | Y:{Math.round(position.y)}
      </div>
    </div>
  );
}
