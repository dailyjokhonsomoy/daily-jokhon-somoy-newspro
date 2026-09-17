import { Link2 } from "lucide-react";
import SidebarWidget from "./SidebarWidget.jsx";
import { importantLinks } from "../../data/sidebarWidgets.js";

export default function ImportantLinksWidget() {
  return (
    <SidebarWidget title="গুরুত্বপূর্ণ লিংক">
      <ul className="space-y-2.5">
        {importantLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="flex items-center justify-between text-sm text-navy-700 hover:text-breaking-600 transition-colors"
            >
              {link.label}
              <Link2 size={14} className="text-ink-300 shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </SidebarWidget>
  );
}
