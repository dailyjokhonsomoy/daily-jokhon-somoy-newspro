import { useParams, Link, Navigate } from "react-router-dom";
import { Images } from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import ArticleHeader from "../components/article/ArticleHeader.jsx";
import ArticleBody from "../components/article/ArticleBody.jsx";
import ArticleShare from "../components/article/ArticleShare.jsx";
import RelatedNews from "../components/article/RelatedNews.jsx";
import YouTubeEmbed from "../components/common/YouTubeEmbed.jsx";
import Advertisement from "../components/common/Advertisement.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { getArticleBySlug, getRelatedArticles } from "../data/articles.js";
import { getCategoryBySlug } from "../data/categories.js";
import { weatherArticleGallery, videos } from "../data/multimedia.js";
import { siteConfig } from "../data/siteConfig.js";

export default function Article() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  // Hooks must run unconditionally — compute safe fallbacks first,
  // then redirect to 404 below if the article truly doesn't exist.
  const category = article ? getCategoryBySlug(article.category) : null;
  const related = article ? getRelatedArticles(article, 4) : [];
  const inlineVideo = videos.find((v) => v.category === article?.category) ?? videos[0];

  useDocumentMeta({
    title: article ? `${article.title} | ${siteConfig.name}` : undefined,
    description: article?.excerpt,
    jsonLd: article
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "NewsArticle",
              headline: article.title,
              description: article.excerpt,
              image: [article.image],
              datePublished: article.publishedAt,
              dateModified: article.updatedAt,
              author: { "@type": "Person", name: article.author },
              publisher: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "হোম", item: siteConfig.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: category?.categoryName ?? "বিস্তারিত",
                  item: `${siteConfig.url.replace(/\/$/, "")}/category/${article.category}`,
                },
                { "@type": "ListItem", position: 3, name: article.title },
              ],
            },
          ],
        }
      : undefined,
  });

  if (!article) return <Navigate to="/404" replace />;

  return (
    <div className="container-page py-2">
      <Breadcrumb
        items={[
          { label: "হোম", href: "/" },
          { label: category?.categoryName ?? "বিস্তারিত", href: `/category/${article.category}` },
          { label: "বিস্তারিত" },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 pb-8">
        <article className="min-w-0">
          <ArticleHeader article={article} />

          <img
            src={article.image}
            alt={article.title}
            loading="eager"
            className="w-full max-h-[480px] object-cover my-4"
          />

          <ArticleBody blocks={article.content} />

          {/* Inline media: image + YouTube embed side by side */}
          {inlineVideo && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6 max-w-content">
              <img
                src={weatherArticleGallery[0]}
                alt=""
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <YouTubeEmbed embedUrl={inlineVideo.embedUrl} title={inlineVideo.title} />
            </div>
          )}

          {/* Photo gallery strip */}
          <div className="mt-6 max-w-content">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-bold text-navy-900">ছবি গ্যালারি</h2>
              <Link to="/photo-gallery" className="text-xs text-breaking-600 hover:underline flex items-center gap-1">
                <Images size={13} /> সব ছবি দেখুন
              </Link>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
              {weatherArticleGallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-16 md:h-20 object-cover"
                />
              ))}
            </div>
          </div>

          <div className="mt-6 max-w-content">
            <ArticleShare article={article} />
          </div>

          {article.tags?.length > 0 && (
            <div className="mt-4 max-w-content flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/tag/${encodeURIComponent(tag)}`}
                  className="text-xs bg-ink-100 hover:bg-ink-200 text-ink-600 px-2.5 py-1 rounded-full transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          <RelatedNews articles={related} />

          <div className="mt-6">
            <Advertisement size="728x90" />
          </div>
        </article>

        <div className="lg:sticky lg:top-[52px] lg:self-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
