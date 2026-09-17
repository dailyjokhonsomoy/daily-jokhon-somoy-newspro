import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Home, Search, LayoutGrid } from "lucide-react";
import { primaryMenu } from "../../data/menu.js";
import { categories } from "../../data/categories.js";

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = primaryMenu.filter((item) => item.id !== "home");

  // Lock body scroll while the mobile drawer is open, and let
  // Escape close whichever overlay is open — basic keyboard-friendly
  // behavior shared across the drawer, search box, and category panel.
  useEffect(() => {
    if (!isDrawerOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      setIsDrawerOpen(false);
      setIsSearchOpen(false);
      setIsAllCategoriesOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = new FormData(e.target).get("q");
    if (query?.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const linkClasses = ({ isActive }) =>
    [
      "block px-3 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2",
      isActive
        ? "text-gold-400 border-gold-400"
        : "text-paper border-transparent hover:text-gold-300 hover:border-gold-300",
    ].join(" ");

  return (
    <nav
      className="sticky top-0 z-40 bg-navy-950 shadow-card relative"
      aria-label="প্রধান মেনু"
    >
      <div className="container-page flex items-center justify-between">
        <div className="flex items-center min-w-0">
          {/* Home icon button — matches the reference's icon-first
              treatment instead of a text "হোম" link */}
          <NavLink
            to="/"
            end
            aria-label="হোম"
            className={({ isActive }) =>
              [
                "flex items-center justify-center w-11 h-11 shrink-0 transition-colors",
                isActive ? "bg-gold-500 text-navy-900" : "bg-navy-800 text-paper hover:bg-navy-700",
              ].join(" ")
            }
          >
            <Home size={18} />
          </NavLink>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center overflow-x-auto no-scrollbar">
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink to={item.href} className={linkClasses}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          {/* Desktop: all-categories + search triggers */}
          <div className="hidden md:flex items-center border-l border-navy-700">
            <button
              type="button"
              aria-label="সব ক্যাটাগরি"
              aria-expanded={isAllCategoriesOpen}
              onClick={() => {
                setIsAllCategoriesOpen((v) => !v);
                setIsSearchOpen(false);
              }}
              className="flex items-center justify-center w-11 h-11 text-paper hover:text-gold-400 transition-colors"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              type="button"
              aria-label="সংবাদ খুঁজুন"
              aria-expanded={isSearchOpen}
              onClick={() => {
                setIsSearchOpen((v) => !v);
                setIsAllCategoriesOpen(false);
              }}
              className="flex items-center justify-center w-11 h-11 text-paper hover:text-gold-400 transition-colors"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Mobile: hamburger trigger */}
          <button
            type="button"
            className="md:hidden flex items-center gap-2 px-3 py-3 text-paper"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu size={22} />
            <span className="text-sm font-medium">মেনু</span>
          </button>
        </div>
      </div>

      {/* Inline search bar (desktop) */}
      {isSearchOpen && (
        <div className="hidden md:block border-t border-navy-700 bg-navy-900">
          <form onSubmit={handleSearchSubmit} className="container-page py-3 flex items-center gap-2">
            <input
              ref={searchInputRef}
              type="search"
              name="q"
              placeholder="সংবাদ খুঁজুন..."
              className="flex-1 bg-white text-navy-900 placeholder:text-ink-400 rounded-sm px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            />
            <button
              type="submit"
              className="bg-gold-500 text-navy-900 text-sm font-semibold px-4 py-2 rounded-sm hover:bg-gold-400 transition-colors"
            >
              খুঁজুন
            </button>
          </form>
        </div>
      )}

      {/* All-categories flyout (desktop) — surfaces all 19 categories,
          since the curated top menu only fits 14 */}
      {isAllCategoriesOpen && (
        <div className="hidden md:block border-t border-navy-700 bg-navy-900">
          <div className="container-page py-4 grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
            {categories.map((cat) => (
              <NavLink
                key={cat.categorySlug}
                to={`/category/${cat.categorySlug}`}
                onClick={() => setIsAllCategoriesOpen(false)}
                className="flex items-center gap-2 py-1.5 text-sm text-paper hover:text-gold-400 transition-colors"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: cat.categoryColor }}
                  aria-hidden="true"
                />
                {cat.categoryName}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {isDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            type="button"
            aria-label="মেনু বন্ধ করুন"
            className="absolute inset-0 bg-navy-950/70"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="প্রধান মেনু"
            className="absolute right-0 top-0 h-full w-[82%] max-w-xs bg-navy-800 shadow-card-hover flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-navy-600">
              <span className="text-gold-400 font-semibold">মেনু</span>
              <button
                type="button"
                aria-label="মেনু বন্ধ করুন"
                onClick={() => setIsDrawerOpen(false)}
                className="text-paper p-1"
                autoFocus
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 px-4 py-3 border-b border-navy-700">
              <input
                type="search"
                name="q"
                placeholder="সংবাদ খুঁজুন..."
                className="flex-1 bg-white text-navy-900 placeholder:text-ink-400 rounded-sm px-3 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                aria-label="খুঁজুন"
                className="bg-gold-500 text-navy-900 p-2 rounded-sm"
              >
                <Search size={16} />
              </button>
            </form>

            <ul className="overflow-y-auto py-2">
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setIsDrawerOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block px-5 py-3 text-[15px] border-l-4",
                      isActive
                        ? "text-gold-400 border-gold-400 bg-navy-700/60"
                        : "text-paper border-transparent",
                    ].join(" ")
                  }
                >
                  হোম
                </NavLink>
              </li>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={({ isActive }) =>
                      [
                        "block px-5 py-3 text-[15px] border-l-4",
                        isActive
                          ? "text-gold-400 border-gold-400 bg-navy-700/60"
                          : "text-paper border-transparent",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="border-t border-navy-700 mt-2 pt-2">
                <p className="px-5 pb-1 text-xs text-ink-400">সকল ক্যাটাগরি</p>
                <div className="grid grid-cols-2 gap-x-2">
                  {categories.map((cat) => (
                    <NavLink
                      key={cat.categorySlug}
                      to={`/category/${cat.categorySlug}`}
                      onClick={() => setIsDrawerOpen(false)}
                      className="flex items-center gap-2 px-5 py-2 text-sm text-paper hover:text-gold-400"
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: cat.categoryColor }}
                        aria-hidden="true"
                      />
                      {cat.categoryName}
                    </NavLink>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
