import { prayerNames } from "../../data/siteConfig.js";
import { calculatePrayerTimes, DHAKA_LOCATION } from "../../utils/prayerTimes.js";
import { toBnDigits } from "../../utils/dateUtils.js";

export default function PrayerTimes({ variant = "light" }) {
  const isLight = variant === "light";
  const times = calculatePrayerTimes(new Date(), DHAKA_LOCATION);
  const values = [times.fajr, times.dhuhr, times.asr, times.maghrib, times.isha];

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
        নামাজের সময় ({DHAKA_LOCATION.label})
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
              {toBnDigits(values[i])}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
