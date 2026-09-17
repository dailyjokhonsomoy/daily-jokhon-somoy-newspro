import { Link } from "react-router-dom";
import { getMostReadArticles } from "../../data/articles.js";
import { getCategoryBySlug } from "../../data/categories.js";
import { formatViewsBn } from "../../utils/dateUtils.js";

export default function MostRead() {
  const items = getMostReadArticles(5);

  return (
    <section aria-labelledby="most-read-heading" className="bg-white shadow-card">
      <h2
        id="most-read-heading"
        className="bg-breaking-500 text-white text-sm font-bold px-4 py-2.5"
      >
        সর্বাধিক পঠিত সংবাদ
      </h2>
      <ol className="divide-y divide-ink-100">
        {items.map((article, i) => {
          const category = getCategoryBySlug(article.category);
          return (
            <li key={article.id} className="flex gap-3 px-4 py-3">
              <span className="text-2xl font-bold text-ink-200 shrink-0 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-medium leading-snug line-clamp-2">
                  <Link
                    to={`/shongbad/${article.slug}`}
                    className="text-navy-800 hover:text-breaking-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-ink-400 text-[11px] mt-1">
                  {category?.categoryName} · {formatViewsBn(article.views)} বার পঠিত
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="px-4 pb-4">
        <Link
          to="/most-read"
          className="block text-center bg-breaking-500 hover:bg-breaking-600 text-white text-sm font-semibold py-2 transition-colors"
        >
          আরও দেখুন
        </Link>
      </div>
    </section>
  );
}
