import { Download } from "lucide-react";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { ePaper } from "../data/sidebarWidgets.js";
import { getWeekdayBn, getGregorianDateBn } from "../utils/dateUtils.js";

export default function EPaper() {
  useDocumentMeta({ title: `ই-পেপার | ${siteConfig.name}` });
  const today = new Date();

  return (
    <div className="container-page py-2">
      <Breadcrumb items={[{ label: "হোম", href: "/" }, { label: "ই-পেপার" }]} />

      <div className="max-w-2xl mx-auto text-center bg-white shadow-card p-6 md:p-10 mb-10">
        <h1 className="text-2xl font-bold text-navy-900 mb-1">{ePaper.latestIssueLabel}</h1>
        <p className="text-ink-500 text-sm mb-6">
          {getWeekdayBn(today)}, {getGregorianDateBn(today)}
        </p>

        <img
          src={ePaper.coverImage}
          alt="আজকের ই-পেপারের প্রচ্ছদ"
          loading="eager"
          className="mx-auto w-64 shadow-card-hover border border-ink-200 mb-6"
        />

        <div className="flex items-center justify-center gap-3">
          <button className="flex items-center gap-2 bg-breaking-500 hover:bg-breaking-600 text-white font-semibold px-5 py-2.5 rounded-sm transition-colors">
            পত্রিকা পড়ুন
          </button>
          <button className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-5 py-2.5 rounded-sm transition-colors">
            <Download size={16} /> ডাউনলোড
          </button>
        </div>

        <p className="text-ink-400 text-xs mt-6">
          পূর্ণাঙ্গ পিডিএফ ভিউয়ার ও আর্কাইভ ব্রাউজিং পরবর্তী ধাপে যুক্ত করা হবে।
        </p>
      </div>
    </div>
  );
}
