import { Link } from "react-router-dom";
import CategoryBadge from "./CategoryBadge.jsx";
import { formatArticleDateBn } from "../../utils/dateUtils.js";

// ============================================================
// Image-led card: thumbnail with a category ribbon overlaid on
// the top-left corner, headline below. Used in the hero's 2x2
// grid and as the "featured" slot inside category sections.
// ============================================================
export default function NewsCard({ article, size = "md" }) {
  const isLarge = size === "lg";

  return (
    <article className="group bg-white shadow-card hover:shadow-card-hover transition-shadow">
      <Link to={`/shongbad/${article.slug}`} className="block relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className={`w-full object-cover ${isLarge ? "h-56 md:h-80" : "h-32 md:h-36"}`}
        />
        <span className="absolute top-0 left-0">
          <CategoryBadge categorySlug={article.category} size={isLarge ? "lg" : "sm"} />
        </span>
      </Link>
      <div className={isLarge ? "p-4" : "p-2.5"}>
        <h3 className={isLarge ? "text-xl md:text-2xl font-bold leading-snug" : "text-sm font-bold leading-snug"}>
          <Link to={`/shongbad/${article.slug}`} className="text-navy-900 hover:text-breaking-600 transition-colors">
            {article.title}
          </Link>
        </h3>
        {isLarge && (
          <p className="text-ink-600 text-sm mt-2 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        )}
        <p className={`text-ink-400 ${isLarge ? "text-xs mt-3" : "text-[11px] mt-1.5"}`}>
          {formatArticleDateBn(article.publishedAt)}
        </p>
      </div>
    </article>
  );
}
