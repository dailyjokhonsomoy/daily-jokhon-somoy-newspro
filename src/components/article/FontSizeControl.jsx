import { Minus, Plus, Type } from "lucide-react";

const SIZES = ["text-base", "text-lg", "text-xl"];
const LABELS = ["ছোট", "মাঝারি", "বড়"];

export default function FontSizeControl({ sizeIndex, onChange }) {
  return (
    <div className="flex items-center gap-2 text-ink-500">
      <Type size={15} />
      <span className="text-xs">লেখার আকার:</span>
      <div className="flex items-center border border-ink-200 rounded-sm overflow-hidden">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, sizeIndex - 1))}
          disabled={sizeIndex === 0}
          aria-label="লেখা ছোট করুন"
          className="px-2 py-1 hover:bg-ink-50 disabled:opacity-30 transition-colors"
        >
          <Minus size={13} />
        </button>
        <span className="px-2 text-xs text-navy-700 border-x border-ink-200 min-w-[52px] text-center">
          {LABELS[sizeIndex]}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(SIZES.length - 1, sizeIndex + 1))}
          disabled={sizeIndex === SIZES.length - 1}
          aria-label="লেখা বড় করুন"
          className="px-2 py-1 hover:bg-ink-50 disabled:opacity-30 transition-colors"
        >
          <Plus size={13} />
        </button>
      </div>
    </div>
  );
}

export const ARTICLE_FONT_SIZES = SIZES;
