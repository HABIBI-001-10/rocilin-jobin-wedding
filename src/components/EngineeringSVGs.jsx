import React from 'react';

/**
 * Ambient Rotating SVG Gear
 * Romantic, delicate drafting gear with teeth, pitch circle, axle, and radius spokes.
 */
export function AmbientGear({ size = 180, className = '', color = 'var(--color-gold)', opacity = 0.35, reverse = false }) {
  const toothCount = 16;
  const outerR = 80;
  const innerR = 68;
  const rootR = 60;
  const centerR = 24;

  // Generate gear path
  const points = [];
  for (let i = 0; i < toothCount; i++) {
    const angleStep = (2 * Math.PI) / toothCount;
    const a0 = i * angleStep;
    const a1 = a0 + angleStep * 0.25;
    const a2 = a0 + angleStep * 0.45;
    const a3 = a0 + angleStep * 0.70;
    const a4 = a0 + angleStep * 0.90;

    points.push(`${100 + rootR * Math.cos(a0)},${100 + rootR * Math.sin(a0)}`);
    points.push(`${100 + innerR * Math.cos(a1)},${100 + innerR * Math.sin(a1)}`);
    points.push(`${100 + outerR * Math.cos(a2)},${100 + outerR * Math.sin(a2)}`);
    points.push(`${100 + outerR * Math.cos(a3)},${100 + outerR * Math.sin(a3)}`);
    points.push(`${100 + rootR * Math.cos(a4)},${100 + rootR * Math.sin(a4)}`);
  }

  const gearPath = `M ${points[0]} L ${points.slice(1).join(' ')} Z`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={`${reverse ? 'gear-spin-reverse' : 'gear-spin-ambient'} ${className}`}
      style={{ opacity, pointerEvents: 'none' }}
    >
      {/* Outer Pitch Circle (dashed) */}
      <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="0.75" strokeDasharray="3 3" />
      
      {/* Gear Teeth Profile */}
      <path d={gearPath} stroke={color} strokeWidth="1.2" fill="none" />
      
      {/* Pitch Diameter Reference Circle */}
      <circle cx="100" cy="100" r={innerR} stroke={color} strokeWidth="0.5" strokeDasharray="6 3" />

      {/* Internal Axle and Hub */}
      <circle cx="100" cy="100" r={centerR} stroke={color} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="10" stroke={color} strokeWidth="0.75" />
      <circle cx="100" cy="100" r="4" fill={color} />

      {/* Radial Spokes */}
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1="100"
          y1="100"
          x2={100 + rootR * Math.cos((deg * Math.PI) / 180)}
          y2={100 + rootR * Math.sin((deg * Math.PI) / 180)}
          stroke={color}
          strokeWidth="0.75"
        />
      ))}
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={`opp-${deg}`}
          x1="100"
          y1="100"
          x2={100 - rootR * Math.cos((deg * Math.PI) / 180)}
          y2={100 - rootR * Math.sin((deg * Math.PI) / 180)}
          stroke={color}
          strokeWidth="0.75"
        />
      ))}

      {/* Compass / Degree Markings */}
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

/**
 * Protractor & Angle Caliper Marking
 */
export function ProtractorArc({ size = 260, color = 'var(--color-gold)', opacity = 0.4, className = '' }) {
  const ticks = [];
  const radius = 100;
  for (let i = 0; i <= 180; i += 5) {
    const rad = (i * Math.PI) / 180;
    const isMajor = i % 15 === 0;
    const tickLen = isMajor ? 10 : 5;
    const x1 = 130 + radius * Math.cos(rad);
    const y1 = 130 - radius * Math.sin(rad);
    const x2 = 130 + (radius - tickLen) * Math.cos(rad);
    const y2 = 130 - (radius - tickLen) * Math.sin(rad);
    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={isMajor ? '1' : '0.5'}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size / 2 + 30}
      viewBox="0 0 260 160"
      fill="none"
      className={className}
      style={{ opacity, pointerEvents: 'none' }}
    >
      {/* Outer baseline */}
      <line x1="20" y1="130" x2="240" y2="130" stroke={color} strokeWidth="1" />
      {/* Semi-circle arc */}
      <path d="M 30,130 A 100,100 0 0,1 230,130" stroke={color} strokeWidth="1.2" />
      <path d="M 45,130 A 85,85 0 0,1 215,130" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" />
      {/* Ticks */}
      {ticks}
      {/* Center origin pivot */}
      <circle cx="130" cy="130" r="4" stroke={color} strokeWidth="1" />
      <circle cx="130" cy="130" r="1.5" fill={color} />
      {/* Degree labels */}
      <text x="35" y="145" fill={color} fontSize="8" fontFamily="var(--font-mono)">0°</text>
      <text x="125" y="24" fill={color} fontSize="8" fontFamily="var(--font-mono)">90°</text>
      <text x="215" y="145" fill={color} fontSize="8" fontFamily="var(--font-mono)">180°</text>
    </svg>
  );
}

/**
 * Animated Blueprint Infinity Symbol
 * Precision intersecting bezier curves forming the infinity loop.
 */
export function BlueprintInfinity({ width = 280, height = 140, color = 'var(--color-primary)', accentColor = 'var(--color-gold)' }) {
  return (
    <div style={{ position: 'relative', width, height, margin: '0 auto' }}>
      <svg width={width} height={height} viewBox="0 0 280 140" fill="none">
        <defs>
          <linearGradient id="infGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} />
            <stop offset="50%" stopColor={color} />
            <stop offset="100%" stopColor={accentColor} />
          </linearGradient>
        </defs>

        {/* Precision construction grid behind infinity */}
        <line x1="20" y1="70" x2="260" y2="70" stroke={accentColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.5" />
        <line x1="80" y1="20" x2="80" y2="120" stroke={accentColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.5" />
        <line x1="200" y1="20" x2="200" y2="120" stroke={accentColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.5" />
        <line x1="140" y1="30" x2="140" y2="110" stroke={accentColor} strokeWidth="0.75" strokeDasharray="2 3" opacity="0.6" />

        {/* Orbit reference circles */}
        <circle cx="80" cy="70" r="40" stroke={accentColor} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
        <circle cx="200" cy="70" r="40" stroke={accentColor} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />

        {/* Infinity Curve */}
        <path
          d="M 140,70 C 170,30 240,30 240,70 C 240,110 170,110 140,70 C 110,30 40,30 40,70 C 40,110 110,110 140,70 Z"
          stroke="url(#infGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Intersection Crosshair */}
        <circle cx="140" cy="70" r="6" stroke={color} strokeWidth="1" fill="none" opacity="0.8" />
        <circle cx="140" cy="70" r="2" fill={color} />

        {/* Precision Callout Tag */}
        <text x="140" y="132" textAnchor="middle" fill={accentColor} fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="0.18em">
          EQUATION: (x² + y²)² = 2a²(x² - y²)
        </text>
      </svg>
    </div>
  );
}

/**
 * Precision Dimension Line with End Ticks and Arrowheads
 */
export function DimensionLine({ label, width = '100%', maxWidth = 400, color = 'var(--color-gold)' }) {
  return (
    <div style={{ width, maxWidth, margin: '14px auto', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '10px', borderLeft: `1.5px solid ${color}`, borderTop: `1.5px solid ${color}`, transform: 'rotate(-45deg)' }} />
        <div style={{ flex: 1, height: '1px', background: color, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-4px', left: 0, width: '1px', height: '9px', background: color }} />
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.14em', color, whiteSpace: 'nowrap', padding: '0 4px' }}>
          {label}
        </span>
        <div style={{ flex: 1, height: '1px', background: color, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-4px', right: 0, width: '1px', height: '9px', background: color }} />
        </div>
        <div style={{ width: '8px', height: '10px', borderRight: `1.5px solid ${color}`, borderTop: `1.5px solid ${color}`, transform: 'rotate(45deg)' }} />
      </div>
    </div>
  );
}

/**
 * Architectural Church Blueprint Graphic (Minimal SVG)
 */
export function ChurchBlueprintSVG({ size = 160, color = 'var(--color-primary)', accentColor = 'var(--color-gold)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" style={{ margin: '0 auto', display: 'block' }}>
      {/* Background blueprint coordinate grid */}
      <rect x="10" y="10" width="140" height="140" stroke={accentColor} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="80" cy="80" r="65" stroke={accentColor} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

      {/* Cross at the apex */}
      <line x1="80" y1="18" x2="80" y2="34" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="74" y1="24" x2="86" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Church Bell Tower / Steeple */}
      <polygon points="80,34 68,64 92,64" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="70" y="64" width="20" height="26" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Arched Belfry Window */}
      <path d="M 76,82 L 76,74 A 4,4 0 0,1 84,74 L 84,82 Z" stroke={accentColor} strokeWidth="1.2" fill="none" />

      {/* Church Main Nave & Sanctuary Facade */}
      <polygon points="80,50 35,90 125,90" stroke={accentColor} strokeWidth="1" strokeDasharray="3 2" fill="none" />
      <rect x="42" y="90" width="76" height="52" stroke={color} strokeWidth="1.8" fill="none" />

      {/* Main Church Arched Portico / Portal */}
      <path d="M 70,142 L 70,114 A 10,10 0 0,1 90,114 L 90,142 Z" stroke={color} strokeWidth="1.6" fill="none" />
      <line x1="80" y1="114" x2="80" y2="142" stroke={accentColor} strokeWidth="0.75" />

      {/* Side Gothic Arched Windows */}
      <path d="M 50,126 L 50,110 A 5,5 0 0,1 60,110 L 60,126 Z" stroke={accentColor} strokeWidth="1" fill="none" />
      <path d="M 100,126 L 100,110 A 5,5 0 0,1 110,110 L 110,126 Z" stroke={accentColor} strokeWidth="1" fill="none" />

      {/* Steps / Foundation Plinth */}
      <line x1="32" y1="142" x2="128" y2="142" stroke={color} strokeWidth="2" />
      <line x1="38" y1="145" x2="122" y2="145" stroke={accentColor} strokeWidth="1" />

      {/* Dimension callouts */}
      <line x1="28" y1="90" x2="28" y2="142" stroke={accentColor} strokeWidth="0.75" />
      <circle cx="28" cy="90" r="1.5" fill={accentColor} />
      <circle cx="28" cy="142" r="1.5" fill={accentColor} />
    </svg>
  );
}

/**
 * Engineering Wax / Blueprint Stamp: APPROVED FOR FOREVER
 */
export function ApprovedStamp({ className = '' }) {
  return (
    <div className={`forever-stamp ${className}`}>
      <div className="forever-stamp-inner">
        <span className="forever-stamp-text-top">SPEC. VERIFIED</span>
        <div className="forever-stamp-center">APPROVED</div>
        <div style={{ width: '40px', height: '1px', background: 'var(--color-primary)', margin: '3px 0' }} />
        <span className="forever-stamp-text-sub">FOR FOREVER</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '6.5px', color: 'var(--color-gold)', marginTop: '2px', letterSpacing: '0.12em' }}>
          07.11.2026
        </span>
      </div>
    </div>
  );
}
