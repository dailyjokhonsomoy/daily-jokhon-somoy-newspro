import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getLatestArticles } from "../../data/articles.js";

// Uses publish-date order across all articles as the "adjacent
// article" sequence — a simple, predictable definition of
// next/previous that a future WordPress query can replicate
// with a plain date-ordered adjacent-post lookup.
export default function ArticleNav({ currentArticle }) {
  const ordered = getLatestArticles(9999);
  const index = ordered.findIndex((a) => a.id === currentArticle.id);
  const newer = index > 0 ? ordered[index - 1] : null;
  const older = index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null;

  if (!newer && !older) return null;

  return (
    <nav
      aria-label="পূর্ববর্তী ও পরবর্তী সংবাদ"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 max-w-content"
    >
      {older ? (
        <Link
          to={`/shongbad/${older.slug}`}
          className="group flex items-center gap-3 bg-white border border-ink-200 hover:border-navy-300 rounded-md p-3 transition-colors"
        >
          <ChevronRight size={18} className="text-ink-400 shrink-0" />
          <div className="min-w-0">
            <p className="text-[11px] text-ink-400">পূর্ববর্তী সংবাদ</p>
            <p className="text-sm font-medium text-navy-800 group-hover:text-breaking-600 line-clamp-1 transition-colors">
              {older.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {newer && (
        <Link
          to={`/shongbad/${newer.slug}`}
          className="group flex items-center gap-3 justify-end text-right bg-white border border-ink-200 hover:border-navy-300 rounded-md p-3 transition-colors"
        >
          <div className="min-w-0">
            <p className="text-[11px] text-ink-400">পরবর্তী সংবাদ</p>
            <p className="text-sm font-medium text-navy-800 group-hover:text-breaking-600 line-clamp-1 transition-colors">
              {newer.title}
            </p>
          </div>
          <ChevronLeft size={18} className="text-ink-400 shrink-0" />
        </Link>
      )}
    </nav>
  );
}
