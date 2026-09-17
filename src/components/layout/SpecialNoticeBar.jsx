import Ticker from "../common/Ticker.jsx";
import { specialNotice } from "../../data/notices.js";

export default function SpecialNoticeBar() {
  if (!specialNotice.enabled) return null;

  return (
    <Ticker
      label="বিশেষ বিজ্ঞপ্তি"
      items={specialNotice.items}
      tone="notice"
      speedSeconds={specialNotice.speedSeconds}
    />
  );
}
