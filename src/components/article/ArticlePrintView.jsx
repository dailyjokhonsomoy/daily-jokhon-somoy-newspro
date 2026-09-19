import { X, Printer } from "lucide-react";
import { getCategoryBySlug } from "../../data/categories.js";
import { getAuthorBySlug } from "../../data/authors.js";
import { formatArticleDateBn } from "../../utils/dateUtils.js";
import { siteConfig } from "../../data/siteConfig.js";

function ClippingBody({ blocks }) {
  return blocks.map((block, i) => {
    if (block.type === "heading") {
      return (
        <h2 key={i} className="text-lg font-bold text-black mt-4 mb-2">
          {block.text}
        </h2>
      );
    }
    if (block.type === "quote") {
      return (
        <p key={i} className="italic border-r-2 border-black pr-3 my-3">
          {block.text}
        </p>
      );
    }
    if (block.type === "list") {
      return (
        <ul key={i} className="list-disc pr-6 my-2 space-y-1">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    if (block.type === "image") return null; // clipping stays text-focused for print economy
    return (
      <p key={i} className="mb-3 leading-[1.9] text-justify">
        {block.text}
      </p>
    );
  });
}

export default function ArticlePrintView({ article, isOpen, onClose }) {
  if (!isOpen) return null;

  const category = getCategoryBySlug(article.category);
  const author = getAuthorBySlug(article.author);

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/80 overflow-y-auto py-6 px-4">
      <div className="no-print flex items-center justify-end gap-2 max-w-3xl mx-auto mb-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-breaking-500 hover:bg-breaking-600 text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors"
        >
          <Printer size={15} /> ডাউনলোড / প্রিন্ট করুন
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="বন্ধ করুন"
          className="bg-white text-navy-900 p-2 rounded-sm"
        >
          <X size={18} />
        </button>
      </div>

      <p className="no-print text-white/70 text-xs text-center max-w-3xl mx-auto mb-3">
        "ডাউনলোড / প্রিন্ট করুন" চাপলে ব্রাউজারের প্রিন্ট ডায়ালগ খুলবে — সেখানে
        প্রিন্টারের বদলে "Save as PDF" বেছে নিলে ফাইল হিসেবে ডাউনলোড হয়ে যাবে।
      </p>

      <article className="print-clipping bg-white max-w-3xl mx-auto p-8 md:p-12 border border-ink-200 text-black">
        <header className="text-center border-b-2 border-black pb-4 mb-6">
          <h1 className="font-banglaHeadline text-2xl font-bold">{siteConfig.name}</h1>
          <p className="text-xs mt-1">{siteConfig.slogan}</p>
          <p className="text-xs mt-1">{formatArticleDateBn(article.publishedAt)}</p>
        </header>

        <p className="text-xs uppercase font-bold tracking-wide mb-1">
          {category?.categoryName}
        </p>
        <h2 className="text-2xl font-bold leading-snug mb-2">{article.title}</h2>
        <p className="text-sm italic text-ink-700 mb-3">{article.excerpt}</p>
        <p className="text-xs text-ink-500 mb-4 pb-3 border-b border-ink-300">
          {author ? `প্রতিবেদক: ${author.name} · ` : ""}
          {formatArticleDateBn(article.publishedAt)}
        </p>

        <img src={article.image} alt={article.title} className="w-full mb-4 grayscale" />

        <div className="text-[15px] columns-1 md:columns-2 gap-8">
          <ClippingBody blocks={article.content} />
        </div>

        <footer className="mt-6 pt-3 border-t border-ink-300 text-[10px] text-ink-400 text-center">
          {siteConfig.url} — সকল স্বত্ব সংরক্ষিত
        </footer>
      </article>
    </div>
  );
}
