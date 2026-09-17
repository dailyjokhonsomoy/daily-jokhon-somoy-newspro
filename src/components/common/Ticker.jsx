// ============================================================
// Generic scrolling ticker bar.
//
// Used for Breaking News, Special Notice, and Footer Notice —
// three visually different bars that share one behavior: a
// fixed label on one side + a scrolling message on the other.
//
// Architecture note (per Master Spec): this component must
// later support ON/OFF, "latest articles" vs "selected
// articles" vs "custom text" modes, and a speed control. For
// now it renders whatever `items` it's given as mock data; the
// props are already shaped so a future admin-config object can
// swap in real content without changing this component.
// ============================================================

export default function Ticker({
  label,
  items = [],
  tone = "breaking", // "breaking" | "notice" | "footer"
  speedSeconds = 30,
}) {
  if (!items.length) return null;

  const toneClasses = {
    breaking: "bg-breaking-500 text-paper",
    notice: "bg-gold-100 text-navy-900 border-y border-gold-300",
    footer: "bg-navy-950 text-paper",
  }[tone];

  const labelToneClasses = {
    breaking: "bg-breaking-700",
    notice: "bg-gold-400 text-navy-900",
    footer: "bg-breaking-600",
  }[tone];

  return (
    <div className={`flex items-stretch ${toneClasses}`} role="region" aria-label={label}>
      <span
        className={`shrink-0 flex items-center gap-1.5 px-3 md:px-4 py-2 text-sm font-bold whitespace-nowrap ${labelToneClasses}`}
      >
        {label}
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div
          className="absolute inset-y-0 flex items-center gap-10 px-4 whitespace-nowrap animate-marquee"
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {items.map((item, i) => (
            <span key={i} className="text-sm md:text-[15px]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
