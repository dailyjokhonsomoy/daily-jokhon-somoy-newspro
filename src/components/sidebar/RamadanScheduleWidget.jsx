import SidebarWidget from "./SidebarWidget.jsx";
import { ramadanSchedule } from "../../data/sidebarWidgets.js";

export default function RamadanScheduleWidget() {
  return (
    <SidebarWidget title="রোজার সময়সূচি">
      <div className="grid grid-cols-2 gap-3 text-center">
        <div>
          <p className="text-ink-500 text-xs mb-1">সেহরি শেষ</p>
          <p className="text-lg font-bold text-navy-800">{ramadanSchedule.sehri}</p>
        </div>
        <div>
          <p className="text-ink-500 text-xs mb-1">ইফতার</p>
          <p className="text-lg font-bold text-navy-800">{ramadanSchedule.iftar}</p>
        </div>
      </div>
      <a href="/prayer-times" className="block text-xs text-breaking-600 hover:underline mt-3 text-center">
        সকল জেলার সময় দেখুন ›
      </a>
    </SidebarWidget>
  );
}
