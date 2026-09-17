// ============================================================
// Brand mark. A simple sunrise glyph pairs with "জখন সময়"
// (jokhon = "when", shomoy = "time") — kept to the agreed
// navy/gold/red palette rather than mimicking the reference
// screenshot's orange-gradient logo, per the instruction to
// preserve identity without copying pixel-for-pixel.
// ============================================================

export default function LogoMark({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="24" r="9" fill="#D4AF37" />
      {[0, 30, 60, 120, 150, 180].map((angle) => (
        <rect
          key={angle}
          x="19"
          y="2"
          width="2"
          height="7"
          rx="1"
          fill="#D4AF37"
          transform={`rotate(${angle} 20 24)`}
        />
      ))}
      <rect x="4" y="33" width="32" height="2.5" rx="1.25" fill="#0F2038" />
    </svg>
  );
}
