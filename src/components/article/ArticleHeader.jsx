import { useEffect, useState } from "react";
import { Calendar, User, Eye, MessageSquare, Printer, QrCode, Volume2, Square } from "lucide-react";
import CategoryBadge from "../common/CategoryBadge.jsx";
import { getAuthorBySlug } from "../../data/authors.js";
import { formatArticleDateBn, formatViewsBn, toBnDigits } from "../../utils/dateUtils.js";

function getArticlePlainText(article) {
  const bodyText = (article.content ?? [])
    .map((block) => {
      if (block.type === "paragraph" || block.type === "heading" || block.type === "quote") {
        return block.text;
      }
      if (block.type === "list") return block.items?.join("। ");
      return "";
    })
    .filter(Boolean)
    .join("। ");
  return `${article.title}. ${article.excerpt}. ${bodyText}`;
}

export default function ArticleHeader({ article }) {
  const author = getAuthorBySlug(article.author);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    // Stop any ongoing speech if the user navigates away mid-article
    return () => {
      if (speechSupported) window.speechSynthesis.cancel();
    };
  }, [speechSupported]);

  const handleToggleSpeech = () => {
    if (!speechSupported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(getArticlePlainText(article));
    utterance.lang = "bn-BD";
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <header>
      <div className="mb-2">
        <CategoryBadge categorySlug={article.category} size="lg" />
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-900 leading-snug font-banglaHeadline">
        {article.title}
      </h1>

      <p className="text-ink-600 text-base mt-3 leading-relaxed">{article.excerpt}</p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-500 mt-4 pb-4 border-b border-ink-200">
        <span className="flex items-center gap-1.5">
          <Calendar size={13} /> {formatArticleDateBn(article.publishedAt)}
        </span>
        {author && (
          <span className="flex items-center gap-1.5">
            <User size={13} /> প্রতিবেদক: {author.name}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Eye size={13} /> {formatViewsBn(article.views)} বার দেখা হয়েছে
        </span>
        <span className="flex items-center gap-1.5">
          <MessageSquare size={13} /> {toBnDigits(article.comments ?? 0)} টি মন্তব্য
        </span>
      </div>

      {/* Action pills: print / QR / text-to-speech */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4">
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-breaking-50 border border-breaking-200 text-breaking-700 rounded-md px-3 py-2 text-sm hover:bg-breaking-100 transition-colors"
        >
          <Printer size={16} />
          <span>
            <span className="block font-semibold leading-tight">প্রিন্ট নিউজ</span>
            <span className="block text-[11px] text-breaking-500">প্রিন্ট সংস্করণ দেখুন</span>
          </span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 bg-gold-50 border border-gold-300 text-gold-800 rounded-md px-3 py-2 text-sm hover:bg-gold-100 transition-colors"
        >
          <QrCode size={16} />
          <span>
            <span className="block font-semibold leading-tight">কিউআর কোড ডাউনলোড</span>
            <span className="block text-[11px] text-gold-700">অটোমেটিক কিউআর কোড</span>
          </span>
        </button>
        <button
          type="button"
          onClick={handleToggleSpeech}
          disabled={!speechSupported}
          aria-pressed={isSpeaking}
          className="flex items-center gap-2 bg-navy-50 border border-navy-200 text-navy-800 rounded-md px-3 py-2 text-sm hover:bg-navy-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSpeaking ? <Square size={16} /> : <Volume2 size={16} />}
          <span>
            <span className="block font-semibold leading-tight">
              {isSpeaking ? "থামুন" : "অডিও শুনুন"}
            </span>
            <span className="block text-[11px] text-navy-500">
              {speechSupported ? "বাংলায় শুনুন (Text to Speech)" : "এই ব্রাউজারে সমর্থিত নয়"}
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
