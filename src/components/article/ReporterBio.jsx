import { Link } from "react-router-dom";
import { User } from "lucide-react";

export default function ReporterBio({ author }) {
  if (!author) return null;

  return (
    <div className="flex items-start gap-3 bg-navy-50 border border-navy-100 rounded-md p-4 mt-6 max-w-content">
      <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center shrink-0">
        <User size={22} className="text-navy-500" />
      </div>
      <div className="min-w-0">
        <Link
          to={`/author/${author.slug}`}
          className="font-bold text-navy-900 hover:text-breaking-600 transition-colors"
        >
          {author.name}
        </Link>
        <p className="text-gold-700 text-xs font-medium mb-1">{author.designation}</p>
        <p className="text-ink-600 text-sm leading-relaxed">{author.bio}</p>
      </div>
    </div>
  );
}
