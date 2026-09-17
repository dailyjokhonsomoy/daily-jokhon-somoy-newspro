// ============================================================
// Author model — used by article bylines and the Author
// Archive page. Ready for future WordPress author archive.
// ============================================================

export const authors = [
  {
    slug: "saiful-islam",
    name: "মো: সাইফুল ইসলাম",
    designation: "স্টাফ রিপোর্টার",
    bio: "আবহাওয়া, দুর্যোগ ব্যবস্থাপনা ও পরিবেশ বিষয়ে নিয়মিত প্রতিবেদন করেন। সাংবাদিকতায় ১০ বছরের বেশি অভিজ্ঞতা রয়েছে।",
    avatar: null,
  },
  {
    slug: "nasrin-akter",
    name: "নাসরিন আক্তার",
    designation: "জ্যেষ্ঠ প্রতিবেদক",
    bio: "রাজনীতি ও অর্থনীতি বিষয়ক সংবাদ কভার করেন। এর আগে জাতীয় দৈনিকে কর্মরত ছিলেন।",
    avatar: null,
  },
  {
    slug: "shahriar-kabir",
    name: "শাহরিয়ার কবির",
    designation: "বার্তা সম্পাদক",
    bio: "খেলাধুলা ও আন্তর্জাতিক ডেস্কের দায়িত্বে রয়েছেন।",
    avatar: null,
  },
  {
    slug: "farhana-yeasmin",
    name: "ফারহানা ইয়াসমিন",
    designation: "প্রতিবেদক",
    bio: "স্বাস্থ্য, শিক্ষা ও লাইফস্টাইল বিষয়ে লেখেন।",
    avatar: null,
  },
];

export const getAuthorBySlug = (slug) => authors.find((a) => a.slug === slug);
