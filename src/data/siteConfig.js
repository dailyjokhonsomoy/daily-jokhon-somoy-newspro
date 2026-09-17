// ============================================================
// Site-wide configuration. Components must read from here
// instead of hard-coding text, so this can later map directly
// onto WordPress Customizer / ACF options fields.
// ============================================================

export const siteConfig = {
  name: "দৈনিক যখন সময়",
  nameEn: "Daily Jokhon Somoy",
  slogan: "সত্য প্রকাশে বদ্ধ পরিকর",
  url: "https://www.dailyjokhonsomoy.com/",
  contact: {
    address: "১২৩, প্রেস ক্লাব রোড, মতিঝিল, ঢাকা-১০০০, বাংলাদেশ",
    phone: "+৮৮০১৭০০০০০০০০",
    email: "info@dailyjokhonsomoy.com",
  },
  social: {
    facebook: "https://facebook.com/dailyjokhonsomoy",
    youtube: "https://youtube.com/@dailyjokhonsomoy",
    whatsapp: "https://wa.me/8801700000000",
    twitter: "https://x.com/dailyjokhonsomoy",
  },
};

// Right-hand quick links in the Top Bar. Structured as data so
// the set can grow/shrink without touching the TopBar component.
export const topBarLinks = [
  { id: "epaper", label: "ই-পেপার", href: "/e-paper" },
  { id: "advertise", label: "বিজ্ঞাপন দিন", href: "/contact" },
  { id: "about", label: "আমাদের সম্পর্কে", href: "/about" },
];

// Prayer names in display order — actual times populate this
// in a later phase from src/data/prayerTimes.js
export const prayerNames = ["ফজর", "যোহর", "আসর", "মাগরিব", "এশা"];
