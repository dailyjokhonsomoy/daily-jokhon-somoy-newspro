import { Play } from "lucide-react";
import { liveStreams } from "../../data/multimedia.js";

function LivePanel({ stream, sourceLabel }) {
  return (
    <div className="relative bg-navy-900">
      <img
        src={stream.thumbnail}
        alt={stream.title}
        loading="lazy"
        className={`w-full h-24 object-cover ${stream.enabled ? "" : "opacity-40 grayscale"}`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        <span className="bg-navy-900/80 text-[10px] font-semibold text-white px-2 py-0.5 rounded-sm">
          {sourceLabel}
        </span>
        {stream.enabled ? (
          <button
            type="button"
            className="flex items-center gap-1 bg-breaking-500 hover:bg-breaking-600 text-white text-xs font-semibold px-3 py-1.5 rounded-sm transition-colors"
          >
            <Play size={12} fill="currentColor" /> দেখুন
          </button>
        ) : (
          <span className="text-white/80 text-xs">এই মুহূর্তে সম্প্রচার বন্ধ আছে</span>
        )}
      </div>
    </div>
  );
}

export default function LiveBroadcast() {
  return (
    <section className="bg-white shadow-card h-full">
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-800">
        <h2 className="text-white font-bold text-sm md:text-base">লাইভ সম্প্রচার</h2>
      </div>
      <div className="grid grid-cols-2 gap-0.5 bg-ink-100">
        <LivePanel stream={liveStreams.youtube} sourceLabel="YouTube Live" />
        <LivePanel stream={liveStreams.obs} sourceLabel="OBS Live" />
      </div>
    </section>
  );
}
