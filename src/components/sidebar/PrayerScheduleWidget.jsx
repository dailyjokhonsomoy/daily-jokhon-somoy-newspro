import SidebarWidget from "./SidebarWidget.jsx";
import { prayerNames } from "../../data/siteConfig.js";

// TODO(phase-6): source real times from src/data/prayerTimes.js
const PLACEHOLDER_TIMES = ["৪:৩২", "১২:০১", "৪:২০", "৬:০৫", "৭:২০"];

export default function PrayerScheduleWidget() {
  return (
    <SidebarWidget title="নামাজের সময়সূচি">
      <table className="w-full text-sm">
        <tbody>
          {prayerNames.map((name, i) => (
            <tr key={name} className="border-b border-ink-100 last:border-0">
              <td className="py-1.5 text-ink-600">{name}</td>
              <td className="py-1.5 text-right font-semibold text-navy-800">
                {PLACEHOLDER_TIMES[i]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/prayer-times" className="block text-xs text-breaking-600 hover:underline mt-2">
        সকল জেলার সময় দেখুন ›
      </a>
    </SidebarWidget>
  );
}
