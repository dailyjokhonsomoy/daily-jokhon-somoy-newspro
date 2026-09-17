import MostRead from "./MostRead.jsx";
import ImportantLinksWidget from "./ImportantLinksWidget.jsx";
import PrayerScheduleWidget from "./PrayerScheduleWidget.jsx";
import RamadanScheduleWidget from "./RamadanScheduleWidget.jsx";
import EpaperWidget from "./EpaperWidget.jsx";
import Advertisement from "../common/Advertisement.jsx";
import WeatherWidget from "../common/WeatherWidget.jsx";

export default function Sidebar() {
  return (
    <aside aria-label="সাইডবার" className="space-y-5">
      <MostRead />
      <div className="bg-white shadow-card p-3">
        <Advertisement size="300x250" />
      </div>
      <ImportantLinksWidget />
      <PrayerScheduleWidget />
      <RamadanScheduleWidget />
      <div className="bg-white shadow-card p-4">
        <WeatherWidget variant="light" />
      </div>
      <EpaperWidget />
    </aside>
  );
}
