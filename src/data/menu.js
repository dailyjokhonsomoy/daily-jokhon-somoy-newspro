// ============================================================
// Primary navigation menu
// ------------------------------------------------------------
// This is intentionally its own data set, separate from
// src/data/categories.js — the header menu is a curated,
// ordered subset of sections (mirrors what an editor would
// build with WordPress's Appearance → Menus), not a dump of
// every category that exists.
//
// `children` is reserved for future dropdown submenus.
// ============================================================

export const primaryMenu = [
  { id: "home", label: "হোম", href: "/" },
  { id: "jatiyo", label: "জাতীয়", href: "/category/jatiyo" },
  { id: "rajniti", label: "রাজনীতি", href: "/category/rajniti" },
  { id: "antorjatik", label: "আন্তর্জাতিক", href: "/category/antorjatik" },
  { id: "orthoniti", label: "অর্থনীতি", href: "/category/orthoniti" },
  { id: "khela", label: "খেলা", href: "/category/khela" },
  { id: "binodon", label: "বিনোদন", href: "/category/binodon" },
  { id: "projukti", label: "প্রযুক্তি", href: "/category/projukti" },
  { id: "shikkha", label: "শিক্ষা", href: "/category/shikkha" },
  { id: "shastho", label: "স্বাস্থ্য", href: "/category/shastho" },
  { id: "dhormo", label: "ধর্ম", href: "/category/dhormo" },
  { id: "chakri", label: "চাকরি", href: "/category/chakri" },
  { id: "lifestyle", label: "লাইফস্টাইল", href: "/category/lifestyle" },
  { id: "video", label: "ভিডিও", href: "/video" },
];
