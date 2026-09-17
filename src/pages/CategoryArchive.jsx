import { useParams, Navigate } from "react-router-dom";
import ArticleListPage from "../components/common/ArticleListPage.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { getCategoryBySlug } from "../data/categories.js";
import { getArticlesByCategory } from "../data/articles.js";
import { siteConfig } from "../data/siteConfig.js";

export default function CategoryArchive() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);
  const articles = category ? getArticlesByCategory(categorySlug) : [];

  useDocumentMeta({
    title: category ? `${category.categoryName} | ${siteConfig.name}` : undefined,
    description: category ? `${category.categoryName} বিভাগের সর্বশেষ সংবাদ` : undefined,
  });

  if (!category) return <Navigate to="/404" replace />;

  return (
    <ArticleListPage
      breadcrumbItems={[{ label: "হোম", href: "/" }, { label: category.categoryName }]}
      title={category.categoryName}
      titleAccent={category.categoryColor}
      subtitle={`${category.categoryName} বিভাগের সর্বশেষ সংবাদ`}
      articles={articles}
      emptyMessage="এই বিভাগে এখনো কোনো সংবাদ প্রকাশিত হয়নি।"
    />
  );
}
