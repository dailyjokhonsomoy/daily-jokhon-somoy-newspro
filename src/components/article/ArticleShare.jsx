import { useState } from "react";
import { Facebook, MessageCircle, Twitter, Link2, Check } from "lucide-react";
import { siteConfig } from "../../data/siteConfig.js";

export default function ArticleShare({ article }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url.replace(/\/$/, "")}/shongbad/${article.slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail without permission/HTTPS — fail silently,
      // the URL is still visible in the address bar as a fallback.
    }
  };

  const shareLinks = [
    {
      id: "facebook",
      label: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      classes: "bg-[#1877F2] hover:bg-[#1461cc]",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${article.title} - ${url}`)}`,
      classes: "bg-[#25D366] hover:bg-[#1fb855]",
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`,
      classes: "bg-navy-800 hover:bg-navy-700",
    },
  ];

  return (
    <div>
      <p className="text-sm font-semibold text-navy-800 mb-2">শেয়ার করুন</p>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map(({ id, label, icon: Icon, href, classes }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-white text-sm font-medium px-3 py-1.5 rounded-sm transition-colors ${classes}`}
          >
            <Icon size={15} /> {label}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 bg-ink-500 hover:bg-ink-600 text-white text-sm font-medium px-3 py-1.5 rounded-sm transition-colors"
        >
          {copied ? <Check size={15} /> : <Link2 size={15} />}
          {copied ? "কপি হয়েছে" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
