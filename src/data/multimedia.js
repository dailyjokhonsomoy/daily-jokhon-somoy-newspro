const img = (seed, w = 640, h = 400) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const videos = [
  { id: 1, slug: "podda-setu-toll-flow", title: "পদ্মা সেতুতে টোল আদায়ের নতুন পদ্ধতি", category: "jatiyo", thumbnail: img("video-bridge"), date: "২৫ আগস্ট, ২০২৬", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, slug: "cricket-highlights-womens-match", title: "নারী ক্রিকেট দলের ম্যাচের সেরা মুহূর্ত", category: "khela", thumbnail: img("video-cricket"), date: "২৪ আগস্ট, ২০২৬", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, slug: "hsc-result-reaction", title: "এইচএসসি ফলাফলে শিক্ষার্থীদের প্রতিক্রিয়া", category: "shikkha", thumbnail: img("video-exam"), date: "২৩ আগস্ট, ২০২৬", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 4, slug: "weather-forecast-update", title: "সাপ্তাহিক আবহাওয়ার পূর্বাভাস", category: "jatiyo", thumbnail: img("video-weather"), date: "৪ আগস্ট, ২০২৬", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

export const photoGalleries = [
  { id: 1, slug: "bonna-durgoto-chobi", title: "বন্যাদুর্গত এলাকার ছবি", category: "sharadesh", cover: img("gallery-flood"), photoCount: 12, date: "১৯ আগস্ট, ২০২৬" },
  { id: 2, slug: "eid-jamat-chobi", title: "ঈদের জামাতের ছবি", category: "dhormo", cover: img("gallery-eid"), photoCount: 18, date: "২২ আগস্ট, ২০২৬" },
  { id: 3, slug: "bristi-o-jonojibon", title: "বৃষ্টি ও জনজীবন", category: "jatiyo", cover: img("gallery-rain"), photoCount: 9, date: "৪ আগস্ট, ২০২৬" },
];

// Article photo-gallery strip (used within the single article page)
export const weatherArticleGallery = [
  img("rain-street"),
  img("rain-umbrella"),
  img("rain-leaf"),
  img("lightning-bolt"),
  img("rain-drop"),
];

export const liveStreams = {
  youtube: {
    enabled: true,
    title: "সরাসরি সম্প্রচার — ইউটিউব",
    thumbnail: img("live-youtube"),
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCxxxxx",
  },
  obs: {
    enabled: false,
    title: "সরাসরি সম্প্রচার — স্টুডিও",
    thumbnail: img("live-obs"),
    embedUrl: "",
  },
};
