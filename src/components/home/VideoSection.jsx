import { Link } from "react-router-dom";
import { Play, ChevronRight } from "lucide-react";
import { videos } from "../../data/multimedia.js";

export default function VideoSection() {
  return (
    <section className="bg-white shadow-card h-full">
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-800">
        <h2 className="text-white font-bold text-sm md:text-base">ভিডিও</h2>
        <Link to="/video" className="flex items-center gap-0.5 text-white/90 hover:text-white text-xs">
          সব দেখুন <ChevronRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {videos.slice(0, 2).map((v) => (
          <Link key={v.id} to={`/video/${v.slug}`} className="group relative block">
            <img src={v.thumbnail} alt={v.title} loading="lazy" className="w-full h-20 object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-navy-950/30 group-hover:bg-navy-950/50 transition-colors">
              <Play size={22} className="text-white" fill="white" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
