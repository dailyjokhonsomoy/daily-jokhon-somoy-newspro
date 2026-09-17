import { Outlet } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
import BreakingNewsBar from "./BreakingNewsBar.jsx";
import SpecialNoticeBar from "./SpecialNoticeBar.jsx";
import Footer from "./Footer.jsx";

// ============================================================
// Global page shell — the 8 regions from the Master Spec:
// 1. Top Bar  2. Header  3. Navigation  4. Breaking News
// 5. Special Notice  6. Main Content (Outlet)
// 7. Footer Notice (rendered inside Footer)  8. Footer
// ============================================================
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper-tint">
      <TopBar />
      <Header />
      <Navigation />
      <BreakingNewsBar />
      <SpecialNoticeBar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
