# দৈনিক যখন সময় — Daily Jokhon Somoy NewsPro

সত্য প্রকাশে বদ্ধ পরিকর

Premium Bangladeshi Bangla multimedia online newspaper — React frontend,
built in phases per the Master Specification, with a clear path to a
future WordPress theme conversion (template prefix: `djs_`).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To verify a production build locally:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/fonts/     Drop real .woff2 Bangla font files here (see src/styles/fonts.css) —
                     currently 0-byte placeholders so the build resolves cleanly
  components/
    layout/          Global shell: TopBar, Header, Navigation, tickers, Footer
    common/          Shared building blocks: cards, Advertisement, Ticker, Pagination, etc.
    home/            Homepage-only sections: FeaturedNews, CategorySection, Live/Video/Photo
    article/         Single-article sections: ArticleHeader, ArticleBody, ArticleShare, RelatedNews
    sidebar/         Sidebar widgets: MostRead, PrayerSchedule, RamadanSchedule, E-paper, etc.
  data/              Structured content/config — no hard-coded strings in components
  pages/             Route-level page components
  routes/            Central route map (code-split with React.lazy)
  styles/            Tailwind entry + local @font-face declarations
  hooks/             useDocumentMeta — lightweight title/meta/JSON-LD helper
  utils/             Date/number formatting helpers
```

## Design tokens

All colors, fonts, and breakpoints live in `tailwind.config.js` — components
should always reference token names (`bg-navy-800`, `text-gold-400`,
`bg-breaking-500`, etc.), never raw hex values.

## Mock data

All article/author/category/multimedia content in `src/data/` is realistic
placeholder content for template purposes — generic events, no real named
public figures. Replace with a real API/WordPress data source when ready.

## Progress

- **Phase 1 — Design system + global layout: ✅**
- **Phase 2 — Header, top bar, navigation, mobile menu: ✅**
- **Phase 3 — Breaking news, notices, advertisement system: ✅**
- **Phase 4 — Homepage hero, news cards, Most Read: ✅**
- **Phase 5 — Category sections (5 layout variants): ✅**
- **Phase 6 — Sidebar, live broadcast, multimedia: ✅**
- **Phase 7 — Single article page: ✅**
- **Phase 8 — Category/Search/Author/Tag archives: ✅**
- **Phase 9 — About/Contact/E-paper/404: ✅**
- **Phase 10 — Responsive optimization: ✅**
- **Phase 11 — Accessibility/SEO/performance: ✅**
- **Phase 12 — Architecture cleanup + WordPress-readiness review: ✅**

See the chat conversation for the full per-phase breakdown and known
limitations (Bangla/Hijri calendar dates, prayer times, weather, and real
fonts are all placeholder/TODO — see inline `TODO(phase-N)` comments).
