import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="পেজিনেশন" className="flex items-center justify-center gap-1.5 py-6">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="আগের পাতা"
        className="w-9 h-9 flex items-center justify-center border border-ink-200 text-navy-700 disabled:opacity-40 hover:bg-ink-50 transition-colors"
      >
        <ChevronRight size={16} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`w-9 h-9 flex items-center justify-center text-sm font-medium border transition-colors ${
            page === currentPage
              ? "bg-navy-800 text-white border-navy-800"
              : "border-ink-200 text-navy-700 hover:bg-ink-50"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="পরের পাতা"
        className="w-9 h-9 flex items-center justify-center border border-ink-200 text-navy-700 disabled:opacity-40 hover:bg-ink-50 transition-colors"
      >
        <ChevronLeft size={16} />
      </button>
    </nav>
  );
}
