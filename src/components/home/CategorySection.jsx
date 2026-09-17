import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getCategoryBySlug } from "../../data/categories.js";
import NewsCard from "../common/NewsCard.jsx";
import CompactNewsCard from "../common/CompactNewsCard.jsx";
import { formatArticleDateBn } from "../../utils/dateUtils.js";

// ============================================================
// Reusable category section. `layout` selects one of the five
// variants from the Master Spec so the homepage doesn't repeat
// the same block shape over and over:
//
//   compact              (E) header + up-to-4-item headline list
//   featured-3           (A) 1 featured story + 3-item list
//   three-col-grid       (B) 3 equal-weight thumbnail cards
//   large-plus-list      (C) 1 large story + text-only headlines
//   image-plus-vertical  (D) large image + vertical compact list
// ============================================================
export default function CategorySection({ categorySlug, articles, layout = "compact" }) {
  const category = getCategoryBySlug(categorySlug);
  if (!category || articles.length === 0) return null;

  const Header = (
    <div
      className="flex items-center justify-between px-4 py-2.5"
      style={{ backgroundColor: category.categoryColor }}
    >
      <h2 className="text-white font-bold text-sm md:text-base">{category.categoryName}</h2>
      <Link
        to={`/category/${category.categorySlug}`}
        className="flex items-center gap-0.5 text-white/90 hover:text-white text-xs shrink-0"
      >
        সব দেখুন <ChevronRight size={14} />
      </Link>
    </div>
  );

  if (layout === "compact") {
    return (
      <section className="bg-white shadow-card h-full">
        {Header}
        <ul className="px-4">
          {articles.slice(0, 3).map((a) => (
            <CompactNewsCard key={a.id} article={a} />
          ))}
        </ul>
      </section>
    );
  }

  if (layout === "featured-3") {
    const [main, ...rest] = articles;
    return (
      <section className="bg-white shadow-card">
        {Header}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <NewsCard article={main} size="lg" />
          <ul>
            {rest.slice(0, 3).map((a) => (
              <CompactNewsCard key={a.id} article={a} />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (layout === "three-col-grid") {
    return (
      <section className="bg-white shadow-card">
        {Header}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
          {articles.slice(0, 3).map((a) => (
            <NewsCard key={a.id} article={a} size="md" />
          ))}
        </div>
      </section>
    );
  }

  if (layout === "large-plus-list") {
    const [main, ...rest] = articles;
    return (
      <section className="bg-white shadow-card">
        {Header}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <NewsCard article={main} size="lg" />
          <ul className="divide-y divide-ink-100">
            {rest.slice(0, 5).map((a) => (
              <li key={a.id} className="py-2.5 first:pt-0">
                <Link
                  to={`/shongbad/${a.slug}`}
                  className="text-navy-800 hover:text-breaking-600 text-sm font-medium leading-snug transition-colors"
                >
                  {a.title}
                </Link>
                <p className="text-ink-400 text-[11px] mt-1">{formatArticleDateBn(a.publishedAt)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // "image-plus-vertical" (D)
  const [main, ...rest] = articles;
  return (
    <section className="bg-white shadow-card">
      {Header}
      <NewsCard article={main} size="lg" />
      <ul className="px-4">
        {rest.slice(0, 3).map((a) => (
          <CompactNewsCard key={a.id} article={a} />
        ))}
      </ul>
    </section>
  );
}
