import { CloudSun } from "lucide-react";

// TODO(phase-6): wire to a real weather source via src/data/weather.js
export default function WeatherWidget({ variant = "light" }) {
  const isLight = variant === "light";

  return (
    <div
      className={`flex items-center gap-2 ${
        isLight ? "rounded-md border border-ink-200 bg-white px-3 py-2" : ""
      }`}
    >
      <CloudSun size={26} strokeWidth={1.5} className="text-gold-500 shrink-0" />
      <div className="leading-tight">
        <p className={`text-xs ${isLight ? "text-ink-500" : "text-ink-300"}`}>
          ঢাকা, বাংলাদেশ
        </p>
        <p
          className={`text-sm font-semibold ${
            isLight ? "text-navy-800" : "text-paper"
          }`}
        >
          ৩২°সে · আংশিক মেঘলা
        </p>
      </div>
    </div>
  );
}
