import { useParams, Navigate } from "react-router-dom";
import { User } from "lucide-react";
import ArticleListPage from "../components/common/ArticleListPage.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { getAuthorBySlug } from "../data/authors.js";
import { getArticlesByAuthor } from "../data/articles.js";
import { siteConfig } from "../data/siteConfig.js";

export default function AuthorArchive() {
  const { authorSlug } = useParams();
  const author = getAuthorBySlug(authorSlug);
  const articles = author ? getArticlesByAuthor(authorSlug) : [];

  useDocumentMeta({
    title: author ? `${author.name} | ${siteConfig.name}` : undefined,
    description: author?.bio,
  });

  if (!author) return <Navigate to="/404" replace />;

  return (
    <ArticleListPage
      breadcrumbItems={[{ label: "হোম", href: "/" }, { label: author.name }]}
      title={author.name}
      subtitle={author.designation}
      articles={articles}
      emptyMessage="এই লেখকের এখনো কোনো প্রতিবেদন প্রকাশিত হয়নি।"
      headerExtra={
        <div className="flex items-start gap-4 bg-white shadow-card p-4 mb-5">
          <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center shrink-0">
            <User size={28} className="text-navy-500" />
          </div>
          <div>
            <p className="font-bold text-navy-900">{author.name}</p>
            <p className="text-gold-600 text-xs font-medium mb-1.5">{author.designation}</p>
            <p className="text-ink-600 text-sm leading-relaxed">{author.bio}</p>
          </div>
        </div>
      }
    />
  );
}
