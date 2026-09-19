import { useEffect, useRef, useState } from "react";

// ============================================================
// Tracks actual scroll position against the height of the
// article element passed in via `targetRef`, not a fake/static
// bar — progress genuinely reflects how far the reader has
// scrolled through the article body.
// ============================================================
export default function ReadingProgressBar({ targetRef }) {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const el = targetRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const viewportH = window.innerHeight;
          const total = rect.height - viewportH;
          const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
          setProgress(total > 0 ? (scrolled / total) * 100 : 0);
        }
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetRef]);

  return (
    <div className="sticky top-11 z-30 h-[3px] bg-ink-100" aria-hidden="true">
      <div
        className="h-full bg-breaking-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
