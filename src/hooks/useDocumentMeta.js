import { useEffect } from "react";

// ============================================================
// Minimal SEO helper. Avoids pulling in react-helmet just for a
// title/meta-description/JSON-LD update — this covers what the
// Master Spec asks for (semantic WebSite/Organization/NewsArticle/
// BreadcrumbList structures) without an extra dependency, and the
// data shape here maps directly onto WordPress SEO plugin output
// later (Yoast/RankMath both emit the same schema types).
// ============================================================
export default function useDocumentMeta({ title, description, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;

    let metaDescription;
    if (description) {
      metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }

    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [title, description, jsonLd]);
}
