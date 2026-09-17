import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/Home.jsx";

// ============================================================
// Central route map. Mirrors the future WordPress template
// structure 1:1 so Phase 12's conversion can map each route to
// its .php counterpart without guesswork:
//
//   /                        -> front-page.php
//   /shongbad/:slug          -> single.php
//   /category/:categorySlug  -> category.php
//   /search                  -> search.php
//   /author/:authorSlug      -> author.php
//   /tag/:tagSlug            -> tag.php
//   /video, /photo-gallery   -> archive.php variants
//   /e-paper, /about,
//   /contact                 -> page.php variants
//   *                        -> 404.php
//
// Everything except the homepage is code-split with React.lazy —
// a first-time visitor's initial bundle only needs the shell +
// homepage; secondary pages load on demand.
// ============================================================
const Article = lazy(() => import("../pages/Article.jsx"));
const CategoryArchive = lazy(() => import("../pages/CategoryArchive.jsx"));
const Search = lazy(() => import("../pages/Search.jsx"));
const AuthorArchive = lazy(() => import("../pages/AuthorArchive.jsx"));
const TagArchive = lazy(() => import("../pages/TagArchive.jsx"));
const VideoArchive = lazy(() => import("../pages/VideoArchive.jsx"));
const PhotoGalleryArchive = lazy(() => import("../pages/PhotoGalleryArchive.jsx"));
const EPaper = lazy(() => import("../pages/EPaper.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

function RouteLoadingFallback() {
  return (
    <div className="container-page py-24 flex items-center justify-center text-ink-400 text-sm">
      লোড হচ্ছে...
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shongbad/:slug" element={<Article />} />
          <Route path="/category/:categorySlug" element={<CategoryArchive />} />
          <Route path="/search" element={<Search />} />
          <Route path="/author/:authorSlug" element={<AuthorArchive />} />
          <Route path="/tag/:tagSlug" element={<TagArchive />} />
          <Route path="/video" element={<VideoArchive />} />
          <Route path="/photo-gallery" element={<PhotoGalleryArchive />} />
          <Route path="/e-paper" element={<EPaper />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
