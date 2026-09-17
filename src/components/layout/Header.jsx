import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig.js";
import LogoMark from "../common/LogoMark.jsx";
import PrayerTimes from "../common/PrayerTimes.jsx";
import WeatherWidget from "../common/WeatherWidget.jsx";
import Advertisement from "../common/Advertisement.jsx";

// ============================================================
// Masthead. Corrected in Phase 2 after reviewing the reference
// screenshots: the header itself is a WHITE band (the dark navy
// look belongs to the Top Bar and Navigation only), with the
// prayer-times/weather widgets shown as light bordered cards.
// ============================================================
export default function Header() {
  return (
    <header className="bg-paper border-b border-ink-200">
      <div className="container-page py-3 md:py-4">
        {/* ---- Desktop / tablet masthead ---- */}
        <div className="hidden md:flex items-center justify-between gap-6">
          <Link to="/" className="shrink-0 flex items-center gap-2.5">
            <LogoMark size={42} />
            <div>
              <h1 className="font-banglaHeadline text-3xl lg:text-4xl font-bold tracking-tight text-navy-900 leading-none">
                {siteConfig.name}
              </h1>
              <p className="text-ink-500 text-xs lg:text-sm mt-1">
                {siteConfig.slogan}
              </p>
            </div>
          </Link>

          <div className="hidden lg:block">
            <PrayerTimes variant="light" />
          </div>

          <div className="flex items-center gap-4">
            <WeatherWidget variant="light" />
            <div className="hidden xl:block">
              <Advertisement size="728x90" label="হেডার বিজ্ঞাপন" />
            </div>
          </div>
        </div>

        {/* ---- Mobile masthead: redesigned, not shrunk desktop ---- */}
        <div className="flex md:hidden items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <LogoMark size={34} />
            <div className="min-w-0">
              <h1 className="font-banglaHeadline text-xl font-bold text-navy-900 leading-tight truncate">
                {siteConfig.name}
              </h1>
              <p className="text-ink-500 text-[10px] mt-0.5 truncate">
                {siteConfig.slogan}
              </p>
            </div>
          </Link>
          <WeatherWidget variant="light" />
        </div>
      </div>

      {/* Header ad — shown below the masthead on smaller screens where
          it doesn't fit inline (xl breakpoint shows it inline above) */}
      <div className="xl:hidden border-t border-ink-100 py-2">
        <div className="container-page">
          <Advertisement size="responsive" label="হেডার বিজ্ঞাপন" />
        </div>
      </div>
    </header>
  );
}
