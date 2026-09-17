import { Link } from "react-router-dom";
import { formatArticleDateBn } from "../../utils/dateUtils.js";

// ============================================================
// Small horizontal card: thumbnail + headline + date. Used
// inside compact category mini-blocks (list layout variant).
// ============================================================
export default function CompactNewsCard({ article }) {
  return (
    <li className="flex gap-2.5 py-2 border-b border-ink-100 last:border-0">
      <Link to={`/shongbad/${article.slug}`} className="shrink-0">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-16 h-12 md:w-20 md:h-14 object-cover"
        />
      </Link>
      <div className="min-w-0">
        <h4 className="text-sm font-medium leading-snug line-clamp-2">
          <Link to={`/shongbad/${article.slug}`} className="text-navy-800 hover:text-breaking-600 transition-colors">
            {article.title}
          </Link>
        </h4>
        <p className="text-ink-400 text-[11px] mt-1">{formatArticleDateBn(article.publishedAt)}</p>
      </div>
    </li>
  );
}
