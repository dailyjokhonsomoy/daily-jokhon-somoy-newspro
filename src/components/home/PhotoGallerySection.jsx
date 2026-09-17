import { Link } from "react-router-dom";
import { Images, ChevronRight } from "lucide-react";
import { photoGalleries } from "../../data/multimedia.js";

export default function PhotoGallerySection() {
  return (
    <section className="bg-white shadow-card h-full">
      <div className="flex items-center justify-between px-4 py-2.5 bg-navy-800">
        <h2 className="text-white font-bold text-sm md:text-base">ফটো গ্যালারি</h2>
        <Link to="/photo-gallery" className="flex items-center gap-0.5 text-white/90 hover:text-white text-xs">
          সব দেখুন <ChevronRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {photoGalleries.slice(0, 2).map((g) => (
          <Link key={g.id} to={`/photo-gallery/${g.slug}`} className="group relative block">
            <img src={g.cover} alt={g.title} loading="lazy" className="w-full h-20 object-cover" />
            <span className="absolute bottom-1 right-1 flex items-center gap-1 bg-navy-950/70 text-white text-[10px] px-1.5 py-0.5 rounded-sm">
              <Images size={10} /> {g.photoCount}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
