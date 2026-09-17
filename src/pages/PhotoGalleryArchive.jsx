import { Link } from "react-router-dom";
import { Images } from "lucide-react";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import { photoGalleries } from "../data/multimedia.js";
import { siteConfig } from "../data/siteConfig.js";

export default function PhotoGalleryArchive() {
  useDocumentMeta({ title: `ফটো গ্যালারি | ${siteConfig.name}` });

  return (
    <div className="container-page py-2">
      <Breadcrumb items={[{ label: "হোম", href: "/" }, { label: "ফটো গ্যালারি" }]} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 pb-8">
        <div className="min-w-0">
          <div className="section-title">
            <h1 className="text-xl md:text-2xl font-bold text-navy-900">ফটো গ্যালারি</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {photoGalleries.map((g) => (
              <Link key={g.id} to={`/photo-gallery/${g.slug}`} className="group bg-white shadow-card block">
                <div className="relative">
                  <img src={g.cover} alt={g.title} loading="lazy" className="w-full h-44 object-cover" />
                  <span className="absolute bottom-2 right-2 flex items-center gap-1 bg-navy-950/70 text-white text-xs px-2 py-1 rounded-sm">
                    <Images size={12} /> {g.photoCount} টি ছবি
                  </span>
                </div>
                <div className="p-3">
                  <h2 className="text-sm font-bold text-navy-900 leading-snug">{g.title}</h2>
                  <p className="text-ink-400 text-xs mt-1">{g.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-[52px] lg:self-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
