import { Link } from "react-router-dom";
import CategoryBadge from "../common/CategoryBadge.jsx";
import NewsCard from "../common/NewsCard.jsx";
import { formatArticleDateBn } from "../../utils/dateUtils.js";
import { getAuthorBySlug } from "../../data/authors.js";

export default function FeaturedNews({ mainStory, secondaryStories }) {
  if (!mainStory) return null;
  const author = getAuthorBySlug(mainStory.author);

  return (
    <section aria-label="প্রধান সংবাদ" className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-4">
      {/* Large featured story */}
      <article className="bg-white shadow-card">
        <p className="bg-breaking-500 text-white text-xs font-bold px-3 py-1.5 inline-block">
          সর্বশেষ প্রধান সংবাদ
        </p>
        <Link to={`/shongbad/${mainStory.slug}`} className="block relative">
          <img
            src={mainStory.image}
            alt={mainStory.title}
            loading="eager"
            className="w-full h-64 md:h-96 object-cover"
          />
          <span className="absolute bottom-0 left-0">
            <CategoryBadge categorySlug={mainStory.category} size="lg" />
          </span>
        </Link>
        <div className="p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 leading-snug">
            <Link to={`/shongbad/${mainStory.slug}`} className="hover:text-breaking-600 transition-colors">
              {mainStory.title}
            </Link>
          </h2>
          <p className="text-ink-600 mt-2 leading-relaxed line-clamp-2">{mainStory.excerpt}</p>
          <p className="text-ink-400 text-xs mt-3">
            {formatArticleDateBn(mainStory.publishedAt)}
            {author ? ` · ${author.name}` : ""}
          </p>
        </div>
      </article>

      {/* 2x2 secondary grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {secondaryStories.map((article, i) => (
          <div key={article.id} className="relative">
            <span className="absolute -top-2 -right-2 z-10 w-7 h-7 flex items-center justify-center bg-navy-900 text-gold-400 text-sm font-bold rounded-full border-2 border-white shadow-card">
              {i + 1}
            </span>
            <NewsCard article={article} size="md" />
          </div>
        ))}
      </div>
    </section>
  );
}
