// ============================================================
// Article model (mock data)
// ------------------------------------------------------------
// Content here is written to read like real Bangladeshi news
// for template/demo purposes — generic events, no real named
// public figures, nothing asserted as an actual current event.
// This is the shape a future WordPress REST/GraphQL response
// should match: id, slug, title, excerpt, content, category,
// image, author, publishedAt, updatedAt, views, tags.
//
// `content` is an array of simple content blocks so ArticleBody
// can render paragraphs, headings, lists, quotes, and images
// without dangerouslySetInnerHTML.
// ============================================================

const img = (seed, w = 900, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const articles = [
  {
    id: 1,
    slug: "podda-setu-jan-cholachol-shovabik",
    title: "পদ্মা সেতুতে যান চলাচল স্বাভাবিক, যানজটের ভোগান্তি কমেছে",
    excerpt:
      "টোল বুথের সংখ্যা বাড়ানোর ফলে পদ্মা সেতুতে দীর্ঘ সময় যান চলাচল বন্ধ থাকার প্রবণতা কমেছে বলে জানিয়েছে সংশ্লিষ্ট কর্তৃপক্ষ।",
    category: "jatiyo",
    image: img("padma-bridge"),
    author: "saiful-islam",
    publishedAt: "2026-08-25T09:12:00+06:00",
    updatedAt: "2026-08-25T12:38:00+06:00",
    views: 18400,
    comments: 27,
    tags: ["বাংলাদেশ", "অবকাঠামো", "যোগাযোগ"],
    featured: true,
    content: [
      { type: "paragraph", text: "টোল আদায়ের গতি বাড়াতে অতিরিক্ত বুথ চালুর পর থেকে পদ্মা সেতুতে যানবাহনের সারি অনেকটাই কমে এসেছে বলে জানিয়েছেন সেতু কর্তৃপক্ষের একজন কর্মকর্তা। বিশেষ করে সাপ্তাহিক ছুটির দিনগুলোতে দক্ষিণাঞ্চলমুখী যাত্রায় এই উন্নতি লক্ষণীয়।" },
      { type: "heading", text: "টোল প্রক্রিয়ায় পরিবর্তন" },
      { type: "paragraph", text: "ডিজিটাল টোল আদায় ব্যবস্থা সম্প্রসারণের ফলে নগদ লেনদেনের সময় কমে এসেছে। প্রাইভেট কার ও মোটরসাইকেলের জন্য পৃথক লেন চালু রাখায় শৃঙ্খলা কিছুটা বেড়েছে বলে দাবি কর্তৃপক্ষের।" },
      { type: "quote", text: "আমরা চাই প্রতিটি যাত্রী যেন সর্বনিম্ন সময়ে সেতু পার হতে পারেন। এ লক্ষ্যে বুথ ব্যবস্থাপনায় আরও পরিবর্তন আসছে।" },
      { type: "paragraph", text: "আসন্ন ঈদ মৌসুমে বাড়তি চাপ সামলাতে অতিরিক্ত ট্রাফিক পুলিশ ও রেকার সার্ভিস মোতায়েনের পরিকল্পনা রয়েছে বলেও জানানো হয়েছে।" },
      { type: "image", src: img("padma-bridge-2", 900, 500), caption: "পদ্মা সেতুর টোল প্লাজায় স্বাভাবিক যান চলাচল।" },
    ],
  },
  {
    id: 2,
    slug: "nirbachon-commission-karmasuchi",
    title: "নির্বাচন কমিশনের নতুন কর্মসূচি ঘোষণা",
    excerpt: "ভোটার তালিকা হালনাগাদে নতুন সময়সূচি প্রকাশ করেছে নির্বাচন কমিশন।",
    category: "rajniti",
    image: img("election-office"),
    author: "nasrin-akter",
    publishedAt: "2026-08-25T08:40:00+06:00",
    updatedAt: "2026-08-25T08:40:00+06:00",
    views: 9200,
    comments: 14,
    tags: ["নির্বাচন", "রাজনীতি"],
    featured: true,
    content: [
      { type: "paragraph", text: "আসন্ন হালনাগাদ কার্যক্রমে নতুন ভোটারদের তথ্য সংগ্রহে মাঠপর্যায়ে বাড়তি জনবল নিয়োগের সিদ্ধান্ত নিয়েছে কমিশন।" },
      { type: "paragraph", text: "জেলা পর্যায়ের কর্মকর্তাদের সঙ্গে বৈঠকে সময়সূচি চূড়ান্ত করা হয় বলে সংশ্লিষ্ট সূত্রে জানা গেছে।" },
    ],
  },
  {
    id: 3,
    slug: "fifa-ranking-bangladesh-agroshor",
    title: "ফিফা র‍্যাঙ্কিংয়ে বাংলাদেশের অগ্রগতি",
    excerpt: "সাম্প্রতিক প্রীতি ম্যাচে ভালো ফলাফলের সুবাদে র‍্যাঙ্কিংয়ে কিছুটা এগিয়েছে বাংলাদেশ জাতীয় ফুটবল দল।",
    category: "antorjatik",
    image: img("football-match"),
    author: "shahriar-kabir",
    publishedAt: "2026-08-25T07:55:00+06:00",
    updatedAt: "2026-08-25T07:55:00+06:00",
    views: 7600,
    comments: 9,
    tags: ["ফুটবল", "ফিফা"],
    featured: true,
    content: [
      { type: "paragraph", text: "সবশেষ প্রীতি ম্যাচগুলোতে ধারাবাহিক পারফরম্যান্সের সুবাদে র‍্যাঙ্কিংয়ে কয়েক ধাপ এগিয়েছে দল। কোচিং স্টাফ এই অগ্রগতিকে দীর্ঘমেয়াদী পরিকল্পনার ফল বলে অভিহিত করেছেন।" },
    ],
  },
  {
    id: 4,
    slug: "remittance-record-agosto",
    title: "রেমিট্যান্স এলো রেকর্ড পরিমাণ",
    excerpt: "চলতি মাসে প্রবাসী আয় আগের সব রেকর্ড ছাড়িয়ে গেছে বলে জানিয়েছে কেন্দ্রীয় ব্যাংক সূত্র।",
    category: "orthoniti",
    image: img("bank-money"),
    author: "nasrin-akter",
    publishedAt: "2026-08-24T18:20:00+06:00",
    updatedAt: "2026-08-24T18:20:00+06:00",
    views: 15300,
    comments: 22,
    tags: ["অর্থনীতি", "রেমিট্যান্স"],
    featured: true,
    content: [
      { type: "paragraph", text: "ব্যাংকিং চ্যানেলে প্রবাসী আয় পাঠানো সহজ হওয়ায় এবং প্রণোদনা অব্যাহত থাকায় রেমিট্যান্স প্রবাহ বেড়েছে বলে মনে করছেন সংশ্লিষ্টরা।" },
      { type: "paragraph", text: "আসন্ন উৎসব মৌসুমে এই ধারা আরও বাড়তে পারে বলে পূর্বাভাস দিয়েছেন অর্থনীতিবিদরা।" },
    ],
  },
  {
    id: 5,
    slug: "bangladesh-nari-dol-joy",
    title: "বাংলাদেশের নারী দলের দারুণ জয়",
    excerpt: "গ্রুপ পর্বের ম্যাচে প্রতিপক্ষকে হারিয়ে সেমিফাইনালের পথে এগিয়ে গেল বাংলাদেশ নারী দল।",
    category: "khela",
    image: img("cricket-women"),
    author: "shahriar-kabir",
    publishedAt: "2026-08-24T21:05:00+06:00",
    updatedAt: "2026-08-24T21:05:00+06:00",
    views: 11200,
    comments: 18,
    tags: ["ক্রিকেট", "নারী ক্রিকেট"],
    featured: true,
    content: [
      { type: "paragraph", text: "টসে জিতে ব্যাটিং নিয়ে বড় সংগ্রহ গড়ে তোলে বাংলাদেশ। এরপর বোলারদের নিয়ন্ত্রিত বোলিংয়ে সহজ জয় নিশ্চিত হয়।" },
    ],
  },
  {
    id: 6,
    slug: "notun-cinema-mukti-agroho",
    title: "নতুন সিনেমা ঘিরে দর্শকদের আগ্রহ",
    excerpt: "ঈদ উপলক্ষে মুক্তি পাওয়া নতুন সিনেমাটি প্রথম সপ্তাহেই ভালো সাড়া পেয়েছে।",
    category: "binodon",
    image: img("cinema-hall"),
    author: "farhana-yeasmin",
    publishedAt: "2026-08-24T15:00:00+06:00",
    updatedAt: "2026-08-24T15:00:00+06:00",
    views: 6400,
    comments: 11,
    tags: ["চলচ্চিত্র", "বিনোদন"],
    content: [
      { type: "paragraph", text: "প্রেক্ষাগৃহ মালিকরা জানিয়েছেন, সপ্তাহান্তে টিকিট বিক্রি প্রত্যাশার চেয়ে বেশি হয়েছে। পরিচালক এই সাফল্যের কৃতিত্ব পুরো কলাকুশলী দলকে দিয়েছেন।" },
    ],
  },
  {
    id: 7,
    slug: "5g-network-somprosaron",
    title: "পাঁচটি নতুন জেলায় ফাইভজি নেটওয়ার্ক সম্প্রসারণ",
    excerpt: "মোবাইল অপারেটরগুলোর যৌথ উদ্যোগে আরও পাঁচটি জেলা শহরে ফাইভজি সেবা চালু হয়েছে।",
    category: "projukti",
    image: img("5g-tower"),
    author: "saiful-islam",
    publishedAt: "2026-08-24T12:30:00+06:00",
    updatedAt: "2026-08-24T12:30:00+06:00",
    views: 5100,
    comments: 6,
    tags: ["প্রযুক্তি", "ইন্টারনেট"],
    content: [
      { type: "paragraph", text: "নতুন টাওয়ার স্থাপনের পাশাপাশি বিদ্যমান অবকাঠামো হালনাগাদ করে এই সম্প্রসারণ সম্ভব হয়েছে বলে জানিয়েছে সংশ্লিষ্ট নিয়ন্ত্রক সংস্থা।" },
    ],
  },
  {
    id: 8,
    slug: "hsc-result-prokash",
    title: "এইচএসসি ফলাফল প্রকাশ, পাসের হার বৃদ্ধি",
    excerpt: "এবারের এইচএসসি পরীক্ষায় সার্বিক পাসের হার গত বছরের তুলনায় বেড়েছে।",
    category: "shikkha",
    image: img("exam-hall"),
    author: "farhana-yeasmin",
    publishedAt: "2026-08-23T13:00:00+06:00",
    updatedAt: "2026-08-23T13:00:00+06:00",
    views: 22100,
    comments: 41,
    tags: ["শিক্ষা", "এইচএসসি"],
    content: [
      { type: "paragraph", text: "শিক্ষা বোর্ড কর্মকর্তারা জানিয়েছেন, বিজ্ঞান বিভাগে পাসের হার সবচেয়ে বেশি। ফল পুনর্নিরীক্ষণের আবেদন শুরু হয়েছে আজ থেকে।" },
    ],
  },
  {
    id: 9,
    slug: "dengue-protirodhe-obhijan",
    title: "ডেঙ্গু প্রতিরোধে বিশেষ অভিযান শুরু",
    excerpt: "মশক নিধন কার্যক্রম জোরদার করেছে সিটি করপোরেশন, সচেতনতা বাড়ানোর আহ্বান স্বাস্থ্য অধিদপ্তরের।",
    category: "shastho",
    image: img("mosquito-spray"),
    author: "farhana-yeasmin",
    publishedAt: "2026-08-23T10:15:00+06:00",
    updatedAt: "2026-08-23T10:15:00+06:00",
    views: 8900,
    comments: 13,
    tags: ["স্বাস্থ্য", "ডেঙ্গু"],
    content: [
      { type: "paragraph", text: "বাসাবাড়ির আশপাশে জমে থাকা পানি নিয়মিত পরিষ্কার রাখার পরামর্শ দিয়েছেন স্বাস্থ্য বিশেষজ্ঞরা।" },
    ],
  },
  {
    id: 10,
    slug: "eid-jamat-somoy-sultani",
    title: "ঈদের জামাতের সময়সূচি প্রকাশ",
    excerpt: "জাতীয় ঈদগাহসহ রাজধানীর প্রধান মসজিদগুলোতে জামাতের সময়সূচি জানিয়েছে ইসলামিক ফাউন্ডেশন।",
    category: "dhormo",
    image: img("eidgah"),
    author: "saiful-islam",
    publishedAt: "2026-08-22T09:00:00+06:00",
    updatedAt: "2026-08-22T09:00:00+06:00",
    views: 13400,
    comments: 5,
    tags: ["ধর্ম", "ঈদ"],
    content: [
      { type: "paragraph", text: "প্রথম জামাত সকাল সাড়ে সাতটায় অনুষ্ঠিত হবে। বৃষ্টি হলে বিকল্প স্থানের ব্যবস্থাও রাখা হয়েছে বলে জানানো হয়েছে।" },
    ],
  },
  {
    id: 11,
    slug: "sorkari-chakri-biggopti",
    title: "সরকারি দপ্তরে বড় নিয়োগ বিজ্ঞপ্তি",
    excerpt: "বিভিন্ন পদে জনবল নিয়োগের লক্ষ্যে বিজ্ঞপ্তি প্রকাশ করেছে সংশ্লিষ্ট মন্ত্রণালয়।",
    category: "chakri",
    image: img("job-office"),
    author: "nasrin-akter",
    publishedAt: "2026-08-22T11:20:00+06:00",
    updatedAt: "2026-08-22T11:20:00+06:00",
    views: 31200,
    comments: 63,
    tags: ["চাকরি", "নিয়োগ"],
    content: [
      { type: "paragraph", text: "আবেদন প্রক্রিয়া সম্পূর্ণ অনলাইনে সম্পন্ন করতে হবে। আবেদনের শেষ তারিখ আগামী মাসের প্রথম সপ্তাহে।" },
    ],
  },
  {
    id: 12,
    slug: "grishme-tok-babohar-poramorsho",
    title: "গ্রীষ্মে ত্বকের যত্নে কিছু পরামর্শ",
    excerpt: "গরমে ত্বক সুস্থ রাখতে বিশেষজ্ঞদের কিছু সহজ পরামর্শ তুলে ধরা হলো।",
    category: "lifestyle",
    image: img("skincare"),
    author: "farhana-yeasmin",
    publishedAt: "2026-08-21T16:40:00+06:00",
    updatedAt: "2026-08-21T16:40:00+06:00",
    views: 4300,
    comments: 3,
    tags: ["লাইফস্টাইল", "স্বাস্থ্য"],
    content: [
      { type: "paragraph", text: "পর্যাপ্ত পানি পান ও হালকা সুতির পোশাক পরার পরামর্শ দিয়েছেন চর্মরোগ বিশেষজ্ঞরা।" },
    ],
  },
  {
    id: 13,
    slug: "dhaner-notun-jat-udvabon",
    title: "খরা সহনশীল ধানের নতুন জাত উদ্ভাবন",
    excerpt: "কম পানিতেও ভালো ফলন দেয় এমন নতুন জাতের ধান উদ্ভাবন করেছেন কৃষি বিজ্ঞানীরা।",
    category: "krishi",
    image: img("rice-field"),
    author: "saiful-islam",
    publishedAt: "2026-08-21T09:30:00+06:00",
    updatedAt: "2026-08-21T09:30:00+06:00",
    views: 5600,
    comments: 8,
    tags: ["কৃষি", "গবেষণা"],
    content: [
      { type: "paragraph", text: "উত্তরাঞ্চলের খরাপ্রবণ এলাকায় পরীক্ষামূলক চাষে আশাব্যঞ্জক ফলাফল পাওয়া গেছে বলে জানিয়েছেন গবেষকরা।" },
    ],
  },
  {
    id: 14,
    slug: "high-court-ray-gurutopurno",
    title: "গুরুত্বপূর্ণ রায় দিলেন হাইকোর্ট",
    excerpt: "একটি বহুল আলোচিত রিট আবেদনের প্রেক্ষিতে গুরুত্বপূর্ণ পর্যবেক্ষণসহ রায় দিয়েছেন হাইকোর্ট।",
    category: "ain-o-adalot",
    image: img("courthouse"),
    author: "nasrin-akter",
    publishedAt: "2026-08-20T14:10:00+06:00",
    updatedAt: "2026-08-20T14:10:00+06:00",
    views: 9800,
    comments: 16,
    tags: ["আইন", "আদালত"],
    content: [
      { type: "paragraph", text: "রায়ে সংশ্লিষ্ট কর্তৃপক্ষকে নির্দিষ্ট সময়ের মধ্যে প্রতিবেদন দাখিলের নির্দেশ দেওয়া হয়েছে।" },
    ],
  },
  {
    id: 15,
    slug: "prottarito-chokro-gireptar",
    title: "প্রতারক চক্রের তিন সদস্য গ্রেপ্তার",
    excerpt: "অনলাইনে প্রতারণার অভিযোগে একটি চক্রের তিন সদস্যকে গ্রেপ্তার করেছে পুলিশ।",
    category: "aporadh",
    image: img("police-arrest"),
    author: "shahriar-kabir",
    publishedAt: "2026-08-20T10:00:00+06:00",
    updatedAt: "2026-08-20T10:00:00+06:00",
    views: 12700,
    comments: 20,
    tags: ["অপরাধ", "পুলিশ"],
    content: [
      { type: "paragraph", text: "ভুক্তভোগীদের কাছ থেকে বিভিন্ন অজুহাতে অর্থ হাতিয়ে নেওয়ার অভিযোগ রয়েছে চক্রটির বিরুদ্ধে।" },
    ],
  },
  {
    id: 16,
    slug: "metrorail-notun-line-udbodhon",
    title: "মেট্রোরেলের নতুন লাইন উদ্বোধন",
    excerpt: "রাজধানীর যানজট কমাতে মেট্রোরেলের নতুন সম্প্রসারিত লাইন উদ্বোধন করা হয়েছে।",
    category: "rajdhani",
    image: img("metro-rail"),
    author: "nasrin-akter",
    publishedAt: "2026-08-19T17:00:00+06:00",
    updatedAt: "2026-08-19T17:00:00+06:00",
    views: 16700,
    comments: 24,
    tags: ["রাজধানী", "মেট্রোরেল"],
    content: [
      { type: "paragraph", text: "নতুন লাইন চালুর ফলে পূর্বাঞ্চলের যাত্রীদের যাতায়াতের সময় উল্লেখযোগ্যভাবে কমবে বলে আশা করা হচ্ছে।" },
    ],
  },
  {
    id: 17,
    slug: "bonna-durgoto-elakay-shahajjo",
    title: "বন্যাদুর্গত এলাকায় ত্রাণ সহায়তা অব্যাহত",
    excerpt: "উত্তরাঞ্চলের বন্যাকবলিত এলাকাগুলোতে ত্রাণ বিতরণ কার্যক্রম চালিয়ে যাচ্ছে স্থানীয় প্রশাসন।",
    category: "sharadesh",
    image: img("flood-relief"),
    author: "saiful-islam",
    publishedAt: "2026-08-19T08:45:00+06:00",
    updatedAt: "2026-08-19T08:45:00+06:00",
    views: 10300,
    comments: 12,
    tags: ["সারাদেশ", "বন্যা"],
    content: [
      { type: "paragraph", text: "শুকনো খাবার ও বিশুদ্ধ পানির পাশাপাশি চিকিৎসা সহায়তা দল পাঠানো হয়েছে ক্ষতিগ্রস্ত এলাকাগুলোতে।" },
    ],
  },
  {
    id: 18,
    slug: "probashi-kollyan-notun-sheba",
    title: "প্রবাসীদের জন্য নতুন ডিজিটাল সেবা চালু",
    excerpt: "প্রবাসীদের হয়রানি কমাতে নতুন অনলাইন সেবা চালু করেছে প্রবাসী কল্যাণ মন্ত্রণালয়।",
    category: "probash",
    image: img("airport-departure"),
    author: "nasrin-akter",
    publishedAt: "2026-08-18T13:25:00+06:00",
    updatedAt: "2026-08-18T13:25:00+06:00",
    views: 7200,
    comments: 9,
    tags: ["প্রবাস", "সেবা"],
    content: [
      { type: "paragraph", text: "নতুন এই পোর্টালের মাধ্যমে প্রবাসীরা ঘরে বসেই বিভিন্ন সরকারি সেবার আবেদন করতে পারবেন।" },
    ],
  },
  {
    id: 19,
    slug: "podda-nodi-bhangon-atonko",
    title: "পদ্মা নদীর ভাঙনে আতঙ্কে নদীপাড়ের বাসিন্দারা",
    excerpt: "গত কয়েক দিনে নদী ভাঙনের মাত্রা বেড়ে যাওয়ায় দুশ্চিন্তায় পড়েছেন এলাকাবাসী।",
    category: "sharadesh",
    image: img("river-erosion"),
    author: "saiful-islam",
    publishedAt: "2026-08-05T09:00:00+06:00",
    updatedAt: "2026-08-05T09:00:00+06:00",
    views: 6100,
    comments: 7,
    tags: ["নদীভাঙন", "সারাদেশ"],
    content: [
      { type: "paragraph", text: "স্থানীয় প্রশাসন জরুরি ভিত্তিতে জিও ব্যাগ ফেলার কাজ শুরু করেছে বলে জানা গেছে।" },
    ],
  },
  {
    id: 20,
    slug: "chottogram-bajropat-sotorkota",
    title: "চট্টগ্রামে বজ্রপাতের ঝুঁকি নিয়ে সতর্কতা",
    excerpt: "আবহাওয়া অধিদপ্তরের পূর্বাভাস অনুযায়ী পরবর্তী কয়েক দিন বজ্রসহ বৃষ্টির সম্ভাবনা রয়েছে।",
    category: "jatiyo",
    image: img("lightning-storm"),
    author: "saiful-islam",
    publishedAt: "2026-08-04T07:30:00+06:00",
    updatedAt: "2026-08-04T07:30:00+06:00",
    views: 5400,
    comments: 4,
    tags: ["আবহাওয়া", "বজ্রপাত"],
    content: [
      { type: "paragraph", text: "খোলা মাঠে অবস্থানরত ব্যক্তিদের নিরাপদ আশ্রয়ে থাকার পরামর্শ দিয়েছে আবহাওয়া অধিদপ্তর।" },
    ],
  },
  {
    id: 21,
    slug: "desher-bivinno-sthane-bajrosoho-bristi-purbavash",
    title: "দেশের বিভিন্ন স্থানে বজ্রসহ বৃষ্টি পূর্বাভাস",
    excerpt:
      "আবহাওয়া অধিদপ্তর জানিয়েছে, আগামী ৩–৪ দিনে দেশের বিভিন্ন অঞ্চলে বজ্রসহ বৃষ্টি হতে পারে। বিশেষ করে ঢাকা, ময়মনসিংহ, চট্টগ্রাম ও সিলেট বিভাগে বৃষ্টির মাত্রা তুলনামূলক বেশি হতে পারে বলে পূর্বাভাসে বলা হয়েছে।",
    category: "jatiyo",
    image: img("storm-clouds-dhaka"),
    author: "saiful-islam",
    publishedAt: "2026-08-04T09:00:00+06:00",
    updatedAt: "2026-08-04T11:35:00+06:00",
    views: 12500,
    comments: 27,
    tags: ["বাংলাদেশ", "আবহাওয়া", "পূর্বাভাস", "জাতীয়"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "আবহাওয়া অধিদপ্তর জানিয়েছে, মৌসুমি বায়ুর প্রভাবে দেশের বিভিন্ন অঞ্চলে বজ্রসহ বৃষ্টি হতে পারে। বিশেষ করে ঢাকা, ময়মনসিংহ, চট্টগ্রাম ও সিলেট বিভাগের কিছু জায়গায় ভারী থেকে অতি ভারী বৃষ্টি হওয়ার সম্ভাবনা রয়েছে।",
      },
      {
        type: "paragraph",
        text: "এ ছাড়া রাজশাহী, রংপুর, খুলনা ও বরিশাল বিভাগের কিছু কিছু স্থানে বৃষ্টি হতে পারে। সারাদেশে দিনের তাপমাত্রা সামান্য কমতে পারে এবং রাতের তাপমাত্রা প্রায় অপরিবর্তিত থাকতে পারে বলে জানানো হয়েছে।",
      },
      {
        type: "paragraph",
        text: "দেশের নদ-নদীর পানি বৃদ্ধি পেতে পারে বলে আশঙ্কা করা হচ্ছে, তাই নিম্নাঞ্চলের বাসিন্দাদের সতর্ক থাকার পরামর্শ দেওয়া হয়েছে।",
      },
      { type: "heading", text: "উপকূলীয় এলাকায় সতর্কতা" },
      {
        type: "paragraph",
        text: "সমুদ্রবন্দরগুলোকে সতর্ক সংকেত দেখাতে বলা হয়েছে এবং উপকূলীয় জেলাগুলোর মৎস্যজীবীদের গভীর সমুদ্রে না যাওয়ার পরামর্শ দেওয়া হয়েছে।",
      },
      {
        type: "list",
        items: [
          "ঢাকা, ময়মনসিংহ, চট্টগ্রাম ও সিলেট বিভাগে ভারী বৃষ্টির সম্ভাবনা",
          "নিম্নাঞ্চলে জলাবদ্ধতার আশঙ্কা",
          "উপকূলীয় এলাকায় সতর্ক সংকেত",
          "মৎস্যজীবীদের গভীর সমুদ্রে যেতে নিষেধ",
        ],
      },
      {
        type: "paragraph",
        text: "নিয়মিত হালনাগাদ পূর্বাভাসের জন্য আবহাওয়া অধিদপ্তরের ওয়েবসাইট ও সরকারি ঘোষণার প্রতি নজর রাখার অনুরোধ জানানো হয়েছে।",
      },
    ],
  },
  // Additional entries so multi-item category layouts have enough
  // real, correctly-tagged articles (avoids mixing in unrelated
  // categories as filler, which would show a mismatched badge).
  {
    id: 22,
    slug: "bank-e-niyog-biggopti",
    title: "একাধিক ব্যাংকে নিয়োগ বিজ্ঞপ্তি প্রকাশ",
    excerpt: "বিভিন্ন বেসরকারি ব্যাংকে শাখা কর্মকর্তা পদে জনবল নিয়োগের বিজ্ঞপ্তি প্রকাশিত হয়েছে।",
    category: "chakri", image: img("bank-job"), author: "nasrin-akter",
    publishedAt: "2026-08-17T10:00:00+06:00", updatedAt: "2026-08-17T10:00:00+06:00",
    views: 8700, comments: 15, tags: ["চাকরি", "ব্যাংক"],
    content: [{ type: "paragraph", text: "আগ্রহী প্রার্থীদের নির্ধারিত সময়ের মধ্যে অনলাইনে আবেদন সম্পন্ন করতে হবে।" }],
  },
  {
    id: 23,
    slug: "primary-school-shikkhok-niyog",
    title: "প্রাথমিক বিদ্যালয়ে শিক্ষক নিয়োগের সার্কুলার",
    excerpt: "সারাদেশে সরকারি প্রাথমিক বিদ্যালয়ে সহকারী শিক্ষক পদে নিয়োগ বিজ্ঞপ্তি প্রকাশ করা হয়েছে।",
    category: "chakri", image: img("school-teacher-job"), author: "nasrin-akter",
    publishedAt: "2026-08-16T09:30:00+06:00", updatedAt: "2026-08-16T09:30:00+06:00",
    views: 14200, comments: 31, tags: ["চাকরি", "শিক্ষক নিয়োগ"],
    content: [{ type: "paragraph", text: "লিখিত ও মৌখিক পরীক্ষার মাধ্যমে চূড়ান্ত নিয়োগ সম্পন্ন হবে বলে জানানো হয়েছে।" }],
  },
  {
    id: 24,
    slug: "private-company-job-fair",
    title: "রাজধানীতে চাকরি মেলা, অংশ নিল শতাধিক প্রতিষ্ঠান",
    excerpt: "তরুণদের কর্মসংস্থানের সুযোগ তৈরিতে আয়োজিত মেলায় অংশ নেয় দেশের শীর্ষস্থানীয় বেসরকারি প্রতিষ্ঠানগুলো।",
    category: "chakri", image: img("job-fair"), author: "nasrin-akter",
    publishedAt: "2026-08-15T14:00:00+06:00", updatedAt: "2026-08-15T14:00:00+06:00",
    views: 6300, comments: 8, tags: ["চাকরি", "চাকরি মেলা"],
    content: [{ type: "paragraph", text: "মেলায় সরাসরি সাক্ষাৎকারের মাধ্যমে অনেকের চাকরি নিশ্চিত হয়েছে বলে জানিয়েছেন আয়োজকরা।" }],
  },
  {
    id: 25,
    slug: "sobji-chashe-notun-projukti",
    title: "সবজি চাষে নতুন প্রযুক্তির ব্যবহার বাড়ছে",
    excerpt: "কম জায়গায় বেশি ফলনের জন্য কৃষকদের মধ্যে জনপ্রিয় হচ্ছে আধুনিক গ্রিনহাউস পদ্ধতি।",
    category: "krishi", image: img("greenhouse-farming"), author: "saiful-islam",
    publishedAt: "2026-08-17T08:00:00+06:00", updatedAt: "2026-08-17T08:00:00+06:00",
    views: 4100, comments: 5, tags: ["কৃষি", "প্রযুক্তি"],
    content: [{ type: "paragraph", text: "কৃষি সম্প্রসারণ অধিদপ্তর কৃষকদের প্রশিক্ষণ দিচ্ছে বলে জানা গেছে।" }],
  },
  {
    id: 26,
    slug: "mach-chashe-safollo",
    title: "মাছ চাষে সাফল্য পাচ্ছেন দক্ষিণাঞ্চলের কৃষকরা",
    excerpt: "লবণাক্ততা সহনশীল মাছের জাত চাষে ভালো ফলন পাচ্ছেন উপকূলীয় এলাকার মৎস্যচাষিরা।",
    category: "krishi", image: img("fish-farming"), author: "saiful-islam",
    publishedAt: "2026-08-14T11:00:00+06:00", updatedAt: "2026-08-14T11:00:00+06:00",
    views: 3600, comments: 4, tags: ["কৃষি", "মৎস্য"],
    content: [{ type: "paragraph", text: "স্থানীয় মৎস্য অধিদপ্তর কারিগরি সহায়তা দিয়ে যাচ্ছে বলে জানিয়েছেন কর্মকর্তারা।" }],
  },
  {
    id: 27,
    slug: "jomi-jotil-mamla-nishpotti",
    title: "জমি সংক্রান্ত জটিল মামলা দ্রুত নিষ্পত্তির নির্দেশ",
    excerpt: "বিচারাধীন জমি সংক্রান্ত মামলাগুলো দ্রুত নিষ্পত্তির জন্য নিম্ন আদালতগুলোকে নির্দেশনা দিয়েছেন হাইকোর্ট।",
    category: "ain-o-adalot", image: img("land-dispute"), author: "nasrin-akter",
    publishedAt: "2026-08-18T10:00:00+06:00", updatedAt: "2026-08-18T10:00:00+06:00",
    views: 5200, comments: 9, tags: ["আইন", "আদালত"],
    content: [{ type: "paragraph", text: "বছরের পর বছর ধরে ঝুলে থাকা মামলার জট কমাতে এই উদ্যোগ বলে জানানো হয়েছে।" }],
  },
  {
    id: 28,
    slug: "consumer-right-mamla-joy",
    title: "ভোক্তা অধিকার লঙ্ঘনের মামলায় জরিমানা",
    excerpt: "নিম্নমানের পণ্য বিক্রির অভিযোগে একাধিক প্রতিষ্ঠানকে জরিমানা করেছে ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর।",
    category: "ain-o-adalot", image: img("consumer-court"), author: "nasrin-akter",
    publishedAt: "2026-08-13T13:00:00+06:00", updatedAt: "2026-08-13T13:00:00+06:00",
    views: 4800, comments: 6, tags: ["আইন", "ভোক্তা অধিকার"],
    content: [{ type: "paragraph", text: "ভোক্তাদের অভিযোগের ভিত্তিতে অভিযান চালানো হয় বলে জানিয়েছে অধিদপ্তর।" }],
  },
  {
    id: 29,
    slug: "shishu-adalote-rai",
    title: "শিশু আদালতে গুরুত্বপূর্ণ রায় ঘোষণা",
    excerpt: "শিশু অধিকার সুরক্ষা সংক্রান্ত একটি মামলায় গুরুত্বপূর্ণ পর্যবেক্ষণ দিয়েছেন আদালত।",
    category: "ain-o-adalot", image: img("juvenile-court"), author: "nasrin-akter",
    publishedAt: "2026-08-11T09:00:00+06:00", updatedAt: "2026-08-11T09:00:00+06:00",
    views: 3900, comments: 5, tags: ["আইন", "শিশু অধিকার"],
    content: [{ type: "paragraph", text: "রায়ে সংশ্লিষ্ট প্রতিষ্ঠানগুলোকে নির্দিষ্ট নির্দেশনা মেনে চলার কথা বলা হয়েছে।" }],
  },
  {
    id: 30,
    slug: "highway-e-chadabaji-gireptar",
    title: "মহাসড়কে চাঁদাবাজির অভিযোগে গ্রেপ্তার ৫",
    excerpt: "পণ্যবাহী ট্রাক থেকে চাঁদা আদায়ের অভিযোগে একটি চক্রের পাঁচ সদস্যকে গ্রেপ্তার করেছে হাইওয়ে পুলিশ।",
    category: "aporadh", image: img("highway-police"), author: "shahriar-kabir",
    publishedAt: "2026-08-16T12:00:00+06:00", updatedAt: "2026-08-16T12:00:00+06:00",
    views: 7100, comments: 10, tags: ["অপরাধ", "মহাসড়ক"],
    content: [{ type: "paragraph", text: "পরিবহন মালিক সমিতির অভিযোগের ভিত্তিতে বিশেষ অভিযান চালানো হয় বলে জানানো হয়েছে।" }],
  },
  {
    id: 31,
    slug: "mobile-churi-chokro-dhora",
    title: "মোবাইল ছিনতাই চক্রের সন্ধান, আটক ৪",
    excerpt: "রাজধানীর বিভিন্ন এলাকায় মোবাইল ছিনতাইয়ের সঙ্গে জড়িত সন্দেহে চারজনকে আটক করেছে গোয়েন্দা পুলিশ।",
    category: "aporadh", image: img("phone-theft"), author: "shahriar-kabir",
    publishedAt: "2026-08-12T15:30:00+06:00", updatedAt: "2026-08-12T15:30:00+06:00",
    views: 6800, comments: 9, tags: ["অপরাধ", "ছিনতাই"],
    content: [{ type: "paragraph", text: "উদ্ধার হওয়া মোবাইল ফোনগুলো প্রকৃত মালিকদের কাছে ফিরিয়ে দেওয়ার প্রক্রিয়া চলছে বলে জানিয়েছে পুলিশ।" }],
  },
];

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (categorySlug) =>
  articles.filter((a) => a.category === categorySlug);

export const getArticlesByAuthor = (authorSlug) =>
  articles.filter((a) => a.author === authorSlug);

export const getArticlesByTag = (tag) =>
  articles.filter((a) => a.tags?.includes(tag));

export const getFeaturedArticles = () => articles.filter((a) => a.featured);

export const getMostReadArticles = (limit = 5) =>
  [...articles].sort((a, b) => b.views - a.views).slice(0, limit);

export const getLatestArticles = (limit = 20) =>
  [...articles]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit);

export const getRelatedArticles = (article, limit = 4) =>
  articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, limit)
    .concat(
      articles.filter((a) => a.id !== article.id && a.category !== article.category)
    )
    .slice(0, limit);
