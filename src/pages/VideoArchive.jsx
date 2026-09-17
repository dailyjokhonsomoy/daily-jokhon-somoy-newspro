import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import { videos } from "../data/multimedia.js";
import { siteConfig } from "../data/siteConfig.js";

export default function VideoArchive() {
  useDocumentMeta({ title: `ভিডিও | ${siteConfig.name}` });

  return (
    <div className="container-page py-2">
      <Breadcrumb items={[{ label: "হোম", href: "/" }, { label: "ভিডিও" }]} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 pb-8">
        <div className="min-w-0">
          <div className="section-title">
            <h1 className="text-xl md:text-2xl font-bold text-navy-900">ভিডিও</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((v) => (
              <Link key={v.id} to={`/video/${v.slug}`} className="group bg-white shadow-card block">
                <div className="relative">
                  <img src={v.thumbnail} alt={v.title} loading="lazy" className="w-full h-44 object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-navy-950/30 group-hover:bg-navy-950/50 transition-colors">
                    <Play size={36} className="text-white" fill="white" />
                  </span>
                </div>
                <div className="p-3">
                  <h2 className="text-sm font-bold text-navy-900 leading-snug">{v.title}</h2>
                  <p className="text-ink-400 text-xs mt-1">{v.date}</p>
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
