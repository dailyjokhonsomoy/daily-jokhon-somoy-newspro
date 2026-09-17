import { Facebook, Youtube, MessageCircle } from "lucide-react";
import { topBarLinks, siteConfig } from "../../data/siteConfig.js";
import {
  getGregorianDateBn,
  getWeekdayBn,
  getBanglaDatePlaceholder,
  getHijriDatePlaceholder,
} from "../../utils/dateUtils.js";

export default function TopBar() {
  const today = new Date();

  return (
    <div className="bg-navy-900 text-ink-100 text-xs md:text-sm">
      <div className="container-page flex items-center justify-between gap-4 py-1.5">
        {/* Left: date cluster — hidden on the smallest screens to
            avoid crowding, first item stays visible everywhere */}
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span>{getWeekdayBn(today)}</span>
          <span className="hidden xs:inline text-navy-500">|</span>
          <span className="hidden xs:inline">{getGregorianDateBn(today)}</span>
          <span className="hidden md:inline text-navy-500">|</span>
          <span className="hidden md:inline text-ink-300">
            {getBanglaDatePlaceholder()}
          </span>
          <span className="hidden lg:inline text-navy-500">|</span>
          <span className="hidden lg:inline text-ink-300">
            {getHijriDatePlaceholder()}
          </span>
        </div>

        {/* Right: quick links + social */}
        <div className="flex items-center gap-4">
          <nav aria-label="দ্রুত লিংক" className="hidden sm:flex items-center gap-4">
            {topBarLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 border-l border-navy-700 pl-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="ফেসবুকে দৈনিক যখন সময়"
              className="hover:text-gold-400 transition-colors"
            >
              <Facebook size={15} strokeWidth={2} />
            </a>
            <a
              href={siteConfig.social.youtube}
              aria-label="ইউটিউবে দৈনিক যখন সময়"
              className="hover:text-gold-400 transition-colors"
            >
              <Youtube size={15} strokeWidth={2} />
            </a>
            <a
              href={siteConfig.social.whatsapp}
              aria-label="হোয়াটসঅ্যাপে যোগাযোগ"
              className="hover:text-gold-400 transition-colors"
            >
              <MessageCircle size={15} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
