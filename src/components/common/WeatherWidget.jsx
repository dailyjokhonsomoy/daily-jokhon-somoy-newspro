import { CloudSun, Cloud, CloudRain, CloudLightning, CloudFog, Sun, Loader2 } from "lucide-react";
import useWeather from "../../hooks/useWeather.js";
import { toBnDigits } from "../../utils/dateUtils.js";

const ICONS = {
  sun: Sun,
  "cloud-sun": CloudSun,
  cloud: Cloud,
  rain: CloudRain,
  storm: CloudLightning,
  fog: CloudFog,
};

export default function WeatherWidget({ variant = "light" }) {
  const isLight = variant === "light";
  const { status, data, locationLabel } = useWeather();
  const Icon = data ? ICONS[data.icon] ?? CloudSun : CloudSun;

  return (
    <div
      className={`flex items-center gap-2 ${
        isLight ? "rounded-md border border-ink-200 bg-white px-3 py-2" : ""
      }`}
    >
      {status === "loading" ? (
        <Loader2 size={26} strokeWidth={1.5} className="text-gold-500 shrink-0 animate-spin" />
      ) : (
        <Icon size={26} strokeWidth={1.5} className="text-gold-500 shrink-0" />
      )}
      <div className="leading-tight">
        <p className={`text-xs ${isLight ? "text-ink-500" : "text-ink-300"}`}>
          {locationLabel}
        </p>
        {status === "ready" ? (
          <p className={`text-sm font-semibold ${isLight ? "text-navy-800" : "text-paper"}`}>
            {toBnDigits(data.temperatureC)}°সে · {data.label}
          </p>
        ) : status === "error" ? (
          <p className={`text-xs ${isLight ? "text-ink-400" : "text-ink-300"}`}>
            আবহাওয়ার তথ্য লোড করা যায়নি
          </p>
        ) : (
          <p className={`text-xs ${isLight ? "text-ink-400" : "text-ink-300"}`}>লোড হচ্ছে...</p>
        )}
      </div>
    </div>
  );
}
