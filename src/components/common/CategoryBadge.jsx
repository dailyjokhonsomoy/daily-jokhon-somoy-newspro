import { Link } from "react-router-dom";
import { getCategoryBySlug } from "../../data/categories.js";

export default function CategoryBadge({ categorySlug, size = "sm" }) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const sizeClasses = size === "lg" ? "text-xs px-2.5 py-1" : "text-[11px] px-2 py-0.5";

  return (
    <Link
      to={`/category/${category.categorySlug}`}
      className={`inline-block font-semibold text-white uppercase tracking-wide ${sizeClasses}`}
      style={{ backgroundColor: category.categoryColor }}
    >
      {category.categoryName}
    </Link>
  );
}
