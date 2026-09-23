import SidebarWidget from "./SidebarWidget.jsx";
import { prayerNames } from "../../data/siteConfig.js";
import { calculatePrayerTimes, DHAKA_LOCATION } from "../../utils/prayerTimes.js";
import { toBnDigits } from "../../utils/dateUtils.js";

export default function PrayerScheduleWidget() {
  const times = calculatePrayerTimes(new Date(), DHAKA_LOCATION);
  const rows = [
    { name: prayerNames[0], time: times.fajr },
    { name: "সূর্যোদয়", time: times.sunrise },
    { name: prayerNames[1], time: times.dhuhr },
    { name: prayerNames[2], time: times.asr },
    { name: prayerNames[3], time: times.maghrib },
    { name: prayerNames[4], time: times.isha },
  ];

  return (
    <SidebarWidget title={`নামাজের সময়সূচি (${DHAKA_LOCATION.label})`}>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-ink-100 last:border-0">
              <td className="py-1.5 text-ink-600">{row.name}</td>
              <td className="py-1.5 text-right font-semibold text-navy-800">
                {toBnDigits(row.time)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-ink-400 mt-2">
        জ্যোতির্বিজ্ঞান হিসাবে গণনাকৃত — সুনির্দিষ্ট সময়ের জন্য স্থানীয় মসজিদের ঘোষণা দেখুন।
      </p>
    </SidebarWidget>
  );
}
