import NewsCard from "../common/NewsCard.jsx";

export default function RelatedNews({ articles }) {
  if (!articles.length) return null;

  return (
    <section aria-labelledby="related-news-heading" className="mt-8">
      <div className="section-title">
        <h2 id="related-news-heading">সম্পর্কিত সংবাদ</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {articles.map((a) => (
          <NewsCard key={a.id} article={a} size="md" />
        ))}
      </div>
    </section>
  );
}
