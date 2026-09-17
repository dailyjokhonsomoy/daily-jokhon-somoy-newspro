// ============================================================
// Ticker content configuration.
// `enabled` lets each bar be toggled off entirely; `speedSeconds`
// controls scroll speed. `mode` documents where content should
// come from once this is wired to a real backend — for now every
// mode resolves to the same static `items` mock array.
// ============================================================

export const breakingNews = {
  enabled: true,
  mode: "custom", // "latest" | "selected" | "custom"
  speedSeconds: 28,
  items: [
    "রাজধানীতে মেট্রোরেলের নতুন লাইন উদ্বোধন করলেন সংশ্লিষ্ট কর্তৃপক্ষ",
    "চট্টগ্রাম বন্দরে রেকর্ড পরিমাণ কনটেইনার ওঠানামা",
    "আগামীকাল থেকে সারাদেশে বৃষ্টির সম্ভাবনা, আবহাওয়া অধিদপ্তরের পূর্বাভাস",
  ],
};

export const specialNotice = {
  enabled: true,
  speedSeconds: 32,
  items: [
    "পাঠকদের প্রতি বিশেষ অনুরোধ: সংবাদ সংক্রান্ত তথ্য যাচাই না করে শেয়ার করবেন না।",
  ],
};

export const footerNotice = {
  enabled: true,
  speedSeconds: 30,
  items: [
    "দৈনিক যখন সময়-এ প্রকাশিত সকল সংবাদ, ছবি ও ভিডিওর স্বত্ব সংরক্ষিত।",
  ],
};
