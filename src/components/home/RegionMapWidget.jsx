import { MapPin } from "lucide-react";

// TODO(phase-8): replace with a real interactive Bangladesh map
// (SVG regions linked to district-level news archives).
export default function RegionMapWidget() {
  return (
    <section className="bg-white shadow-card h-full flex flex-col">
      <div className="px-4 py-2.5 bg-navy-800">
        <h2 className="text-white font-bold text-sm md:text-base">অঞ্চল অনুযায়ী সংবাদ</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-2 py-10 text-ink-400">
        <MapPin size={32} strokeWidth={1.5} />
        <p className="text-xs text-center px-4">
          জেলাভিত্তিক সংবাদ মানচিত্র শীঘ্রই যুক্ত হবে
        </p>
      </div>
    </section>
  );
}
