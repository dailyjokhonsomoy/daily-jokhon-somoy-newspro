import FeaturedNews from "../components/home/FeaturedNews.jsx";
import CategorySection from "../components/home/CategorySection.jsx";
import LiveBroadcast from "../components/home/LiveBroadcast.jsx";
import VideoSection from "../components/home/VideoSection.jsx";
import PhotoGallerySection from "../components/home/PhotoGallerySection.jsx";
import RegionMapWidget from "../components/home/RegionMapWidget.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Advertisement from "../components/common/Advertisement.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { siteConfig } from "../data/siteConfig.js";
import {
  getFeaturedArticles,
  getArticlesByCategory,
  getLatestArticles,
} from "../data/articles.js";

export default function Home() {
  useDocumentMeta({
    title: `${siteConfig.name} | ${siteConfig.nameEn}`,
    description: siteConfig.slogan,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
        { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      ],
    },
  });

  const featured = getFeaturedArticles();
  const [mainStory, ...secondaryPool] = featured.length
    ? featured
    : getLatestArticles(5);
  const secondaryStories = secondaryPool.length
    ? secondaryPool.slice(0, 4)
    : getLatestArticles(5).slice(1, 5);

  // Category rows — each pulled from real mock article data, laid
  // out with varied layout variants so the page doesn't repeat the
  // same block shape (per Master Spec).
  const compactRow1 = ["rajniti", "antorjatik", "orthoniti"];
  const compactRow2 = ["khela", "binodon", "projukti"];
  const compactRow3 = ["shikkha", "shastho", "dhormo"];
  const compactRow4 = ["rajdhani", "sharadesh"];

  return (
    <div className="container-page py-5">
      <h1 className="sr-only">{siteConfig.name} — সর্বশেষ সংবাদ</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
        {/* ---- Main column ---- */}
        <div className="space-y-5 min-w-0">
          <FeaturedNews mainStory={mainStory} secondaryStories={secondaryStories} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Advertisement size="728x90" />
            <Advertisement size="728x90" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compactRow1.map((slug) => (
              <CategorySection
                key={slug}
                categorySlug={slug}
                articles={getArticlesByCategory(slug)}
                layout="compact"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compactRow2.map((slug) => (
              <CategorySection
                key={slug}
                categorySlug={slug}
                articles={getArticlesByCategory(slug)}
                layout="compact"
              />
            ))}
          </div>

          {/* Multimedia row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <LiveBroadcast />
            <VideoSection />
            <PhotoGallerySection />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compactRow3.map((slug) => (
              <CategorySection
                key={slug}
                categorySlug={slug}
                articles={getArticlesByCategory(slug)}
                layout="compact"
              />
            ))}
          </div>

          <CategorySection
            categorySlug="chakri"
            articles={getArticlesByCategory("chakri")}
            layout="featured-3"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CategorySection
              categorySlug="krishi"
              articles={getArticlesByCategory("krishi")}
              layout="three-col-grid"
            />
            <CategorySection
              categorySlug="ain-o-adalot"
              articles={getArticlesByCategory("ain-o-adalot")}
              layout="large-plus-list"
            />
          </div>

          <CategorySection
            categorySlug="aporadh"
            articles={getArticlesByCategory("aporadh")}
            layout="image-plus-vertical"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compactRow4.map((slug) => (
              <CategorySection
                key={slug}
                categorySlug={slug}
                articles={getArticlesByCategory(slug)}
                layout="compact"
              />
            ))}
            <RegionMapWidget />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Advertisement size="728x90" />
            <Advertisement size="300x250" />
          </div>
        </div>

        {/* ---- Sidebar ---- */}
        <div className="lg:sticky lg:top-11 lg:self-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
