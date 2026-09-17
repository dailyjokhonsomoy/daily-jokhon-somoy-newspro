// ============================================================
// Reusable ad slot. Phase 3 will wire this up to real creative
// data (image/link/script); for now it renders a clearly
// labeled placeholder sized correctly for its slot so the
// surrounding layout doesn't jump when real ads are added.
// ============================================================

const SIZE_MAP = {
  "970x90": "w-full max-w-[970px] h-[90px]",
  "728x90": "w-full max-w-[728px] h-[90px]",
  "300x250": "w-full max-w-[300px] h-[250px]",
  "336x280": "w-full max-w-[336px] h-[280px]",
  responsive: "w-full h-[100px] md:h-[120px]",
};

export default function Advertisement({ size = "responsive", label = "" }) {
  const sizeClasses = SIZE_MAP[size] ?? SIZE_MAP.responsive;

  return (
    <div className={`ad-slot mx-auto ${sizeClasses}`} role="complementary" aria-label="বিজ্ঞাপন">
      <span className="font-semibold tracking-wide">বিজ্ঞাপন</span>
      {label ? <span className="text-[10px] text-ink-400">{label}</span> : null}
      <span className="text-[10px] text-ink-300">{size}</span>
    </div>
  );
}
