import Ticker from "../common/Ticker.jsx";
import { breakingNews } from "../../data/notices.js";

export default function BreakingNewsBar() {
  if (!breakingNews.enabled) return null;

  return (
    <Ticker
      label="🔴 ব্রেকিং নিউজ"
      items={breakingNews.items}
      tone="breaking"
      speedSeconds={breakingNews.speedSeconds}
    />
  );
}
