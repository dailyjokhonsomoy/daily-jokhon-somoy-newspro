import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import ArticleListPage from "../components/common/ArticleListPage.jsx";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import { articles as allArticles } from "../data/articles.js";
import { siteConfig } from "../data/siteConfig.js";

function searchArticles(query) {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  return allArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags?.some((t) => t.toLowerCase().includes(q))
  );
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(query);

  const results = searchArticles(query);

  useDocumentMeta({ title: `"${query}" এর জন্য অনুসন্ধান ফলাফল | ${siteConfig.name}` });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(inputValue.trim() ? { q: inputValue.trim() } : {});
  };

  return (
    <ArticleListPage
      breadcrumbItems={[{ label: "হোম", href: "/" }, { label: "সংবাদ খুঁজুন" }]}
      title="সংবাদ খুঁজুন"
      subtitle={query ? `"${query}" এর জন্য ${results.length} টি ফলাফল পাওয়া গেছে` : "অনুসন্ধান করতে নিচের বক্সে লিখুন"}
      articles={results}
      emptyMessage={
        query ? `"${query}" এর সাথে মিলে এমন কোনো সংবাদ পাওয়া যায়নি।` : "একটি শব্দ লিখে অনুসন্ধান শুরু করুন।"
      }
      headerExtra={
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-5 max-w-lg">
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="সংবাদ খুঁজুন..."
            className="flex-1 border border-ink-300 rounded-sm px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 bg-navy-800 hover:bg-navy-700 text-white text-sm font-semibold px-4 py-2.5 rounded-sm transition-colors"
          >
            <SearchIcon size={15} /> খুঁজুন
          </button>
        </form>
      }
    />
  );
}
