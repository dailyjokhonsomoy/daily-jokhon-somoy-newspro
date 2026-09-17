import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { siteConfig } from "../data/siteConfig.js";

export default function NotFound() {
  useDocumentMeta({ title: `পাওয়া যায়নি | ${siteConfig.name}` });

  return (
    <div className="container-page py-16 md:py-24 text-center">
      <p className="text-6xl md:text-8xl font-bold text-navy-100 mb-2">৪০৪</p>
      <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">দুঃখিত!</h1>
      <p className="text-ink-500 max-w-md mx-auto mb-8">
        আপনি যে সংবাদটি খুঁজছেন সেটি পাওয়া যায়নি।
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-5 py-2.5 rounded-sm transition-colors"
        >
          <Home size={16} /> হোমে ফিরে যান
        </Link>
        <Link
          to="/search"
          className="flex items-center gap-2 bg-breaking-500 hover:bg-breaking-600 text-white font-semibold px-5 py-2.5 rounded-sm transition-colors"
        >
          <Search size={16} /> সংবাদ খুঁজুন
        </Link>
      </div>
    </div>
  );
}
