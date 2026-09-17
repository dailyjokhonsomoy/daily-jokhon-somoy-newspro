import { useParams } from "react-router-dom";
import ArticleListPage from "../components/common/ArticleListPage.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { getArticlesByTag } from "../data/articles.js";
import { siteConfig } from "../data/siteConfig.js";

export default function TagArchive() {
  const { tagSlug } = useParams();
  const tag = decodeURIComponent(tagSlug);
  const articles = getArticlesByTag(tag);

  useDocumentMeta({ title: `#${tag} | ${siteConfig.name}` });

  return (
    <ArticleListPage
      breadcrumbItems={[{ label: "হোম", href: "/" }, { label: `#${tag}` }]}
      title={`#${tag}`}
      subtitle={`"${tag}" ট্যাগ সংক্রান্ত সংবাদ`}
      articles={articles}
      emptyMessage="এই ট্যাগে কোনো সংবাদ পাওয়া যায়নি।"
    />
  );
}
