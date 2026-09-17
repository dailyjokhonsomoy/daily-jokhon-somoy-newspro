import { Link } from "react-router-dom";
import SidebarWidget from "./SidebarWidget.jsx";
import { ePaper } from "../../data/sidebarWidgets.js";

export default function EpaperWidget() {
  return (
    <SidebarWidget title={`ই-পেপার (${ePaper.latestIssueLabel})`}>
      <div className="flex gap-3">
        <img
          src={ePaper.coverImage}
          alt="আজকের ই-পেপারের প্রচ্ছদ"
          loading="lazy"
          className="w-20 h-28 object-cover border border-ink-200"
        />
        <div className="flex flex-col gap-2 flex-1">
          <Link
            to={ePaper.readTodayHref}
            className="text-center bg-breaking-500 hover:bg-breaking-600 text-white text-xs font-semibold py-2 transition-colors"
          >
            পত্রিকা পড়ুন
          </Link>
          <Link
            to={ePaper.browseArchiveHref}
            className="text-center bg-navy-800 hover:bg-navy-700 text-white text-xs font-semibold py-2 transition-colors"
          >
            আর্কাইভ দেখুন
          </Link>
        </div>
      </div>
    </SidebarWidget>
  );
}
