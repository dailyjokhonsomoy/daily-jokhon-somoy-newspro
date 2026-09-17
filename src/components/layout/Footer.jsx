import { Facebook, Youtube, MessageCircle, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../../data/siteConfig.js";
import { editorialBoard } from "../../data/editors.js";
import { footerLinks } from "../../data/footerLinks.js";
import FooterNoticeBar from "./FooterNoticeBar.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-ink-200 mt-8">
      <FooterNoticeBar />

      <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {/* Column 1: About */}
        <div>
          <h3 className="font-banglaHeadline text-xl font-bold text-paper mb-2">
            {siteConfig.name}
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            বাংলাদেশের অন্যতম নির্ভরযোগ্য অনলাইন সংবাদমাধ্যম হিসেবে সত্য ও
            নিরপেক্ষ সংবাদ পরিবেশনে আমরা বদ্ধ পরিকর।
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-gold-400">
              <Facebook size={18} />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="hover:text-gold-400">
              <Youtube size={18} />
            </a>
            <a href={siteConfig.social.whatsapp} aria-label="WhatsApp" className="hover:text-gold-400">
              <MessageCircle size={18} />
            </a>
            <a href={siteConfig.social.twitter} aria-label="X / Twitter" className="hover:text-gold-400">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Editorial board */}
        <div>
          <h4 className="text-paper font-semibold mb-3 border-b border-navy-700 pb-2">
            সম্পাদক মন্ডলী
          </h4>
          <ul className="space-y-2 text-sm">
            {editorialBoard.map((person) => (
              <li key={person.id}>
                <p className="text-ink-100">{person.name}</p>
                <p className="text-ink-400 text-xs">{person.designation}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick links */}
        <div>
          <h4 className="text-paper font-semibold mb-3 border-b border-navy-700 pb-2">
            গুরুত্বপূর্ণ লিংক
          </h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="hover:text-gold-400 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Office / contact */}
        <div>
          <h4 className="text-paper font-semibold mb-3 border-b border-navy-700 pb-2">
            অফিস ঠিকানা
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5 text-gold-400" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gold-400" />
              <span>{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold-400" />
              <span>{siteConfig.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700 py-4">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-400">
          <p>
            © {year} {siteConfig.name} — সকল স্বত্ব সংরক্ষিত
          </p>
          <p>Design by Owner</p>
        </div>
      </div>
    </footer>
  );
}
