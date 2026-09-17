import Ticker from "../common/Ticker.jsx";
import { footerNotice } from "../../data/notices.js";

export default function FooterNoticeBar() {
  if (!footerNotice.enabled) return null;

  return (
    <Ticker
      label="🔴 বিজ্ঞপ্তি"
      items={footerNotice.items}
      tone="footer"
      speedSeconds={footerNotice.speedSeconds}
    />
  );
}
