import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

// items: [{ label, href? }] — last item has no href (current page)
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-ink-500 flex items-center flex-wrap gap-1 py-3">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {item.href && !isLast ? (
              <Link to={item.href} className="hover:text-breaking-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-navy-800 font-medium" : ""}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronLeft size={12} className="rotate-180 text-ink-300" />}
          </span>
        );
      })}
    </nav>
  );
}
