import { prayerNames } from "../../data/siteConfig.js";

// TODO(phase-6): source real times from src/data/prayerTimes.js
// (daily data for Dhaka, keyed by date).
const PLACEHOLDER_TIMES = ["৪:৩২", "১২:০১", "৪:২০", "৬:০৫", "৭:২০"];

export default function PrayerTimes({ variant = "light" }) {
  const isLight = variant === "light";

  return (
    <div
      className={
        isLight ? "rounded-md border border-ink-200 bg-white px-4 py-2" : ""
      }
    >
      <p
        className={`text-[11px] font-semibold mb-1 text-center ${
          isLight ? "text-navy-700" : "text-gold-400"
        }`}
      >
        নামাজের সময়
      </p>
      <dl className="flex items-center gap-3 text-xs">
        {prayerNames.map((name, i) => (
          <div key={name} className="flex flex-col items-center leading-tight">
            <dt className={isLight ? "text-ink-500" : "text-ink-300"}>{name}</dt>
            <dd
              className={`font-semibold ${
                isLight ? "text-navy-800" : "text-ink-100"
              }`}
            >
              {PLACEHOLDER_TIMES[i]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
