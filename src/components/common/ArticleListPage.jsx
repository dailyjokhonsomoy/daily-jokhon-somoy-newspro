import { useState } from "react";
import NewsCard from "./NewsCard.jsx";
import Pagination from "./Pagination.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import Breadcrumb from "./Breadcrumb.jsx";

const ITEMS_PER_PAGE = 9;

// ============================================================
// Shared shell for any "list of articles + sidebar + pagination"
// page: Category Archive, Search Results, Author Archive, Tag
// Archive. Keeps those four pages from re-implementing the same
// grid/pagination/sidebar composition.
// ============================================================
export default function ArticleListPage({
  breadcrumbItems,
  title,
  titleAccent,
  subtitle,
  articles,
  emptyMessage = "কোনো সংবাদ পাওয়া যায়নি।",
  headerExtra,
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(articles.length / ITEMS_PER_PAGE));
  const pageItems = articles.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="container-page py-2">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 pb-8">
        <div className="min-w-0">
          <div className="mb-4 pb-3 border-b-2" style={{ borderColor: titleAccent ?? "#0F2038" }}>
            <h1 className="text-2xl font-bold text-navy-900">{title}</h1>
            {subtitle && <p className="text-ink-500 text-sm mt-1">{subtitle}</p>}
          </div>

          {headerExtra}

          {pageItems.length === 0 ? (
            <p className="text-ink-500 text-sm py-12 text-center bg-white shadow-card">
              {emptyMessage}
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pageItems.map((article) => (
                <NewsCard key={article.id} article={article} size="md" />
              ))}
            </div>
          )}

          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>

        <div className="lg:sticky lg:top-11 lg:self-start">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
