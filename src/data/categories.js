// ============================================================
// Category model
// ------------------------------------------------------------
// Deliberately decoupled from any WordPress category ID.
// Each entry only needs: categorySlug, categoryName, categoryColor.
// The future WordPress theme will populate `articles` dynamically
// per category via WP_Query — components must never assume this
// array is hard-coded content.
// ============================================================

export const categories = [
  { categorySlug: "jatiyo", categoryName: "জাতীয়", categoryColor: "#0F2038" },
  { categorySlug: "rajniti", categoryName: "রাজনীতি", categoryColor: "#7D1010" },
  { categorySlug: "antorjatik", categoryName: "আন্তর্জাতিক", categoryColor: "#1F3F66" },
  { categorySlug: "orthoniti", categoryName: "অর্থনীতি", categoryColor: "#96741E" },
  { categorySlug: "khela", categoryName: "খেলা", categoryColor: "#1F6640" },
  { categorySlug: "binodon", categoryName: "বিনোদন", categoryColor: "#7A1F66" },
  { categorySlug: "projukti", categoryName: "প্রযুক্তি", categoryColor: "#1F5C66" },
  { categorySlug: "shikkha", categoryName: "শিক্ষা", categoryColor: "#2F5480" },
  { categorySlug: "shastho", categoryName: "স্বাস্থ্য", categoryColor: "#1E7D6B" },
  { categorySlug: "dhormo", categoryName: "ধর্ম", categoryColor: "#4D3A10" },
  { categorySlug: "chakri", categoryName: "চাকরি", categoryColor: "#3F5E1F" },
  { categorySlug: "lifestyle", categoryName: "লাইফস্টাইল", categoryColor: "#8C4A2F" },
  { categorySlug: "krishi", categoryName: "কৃষি", categoryColor: "#3B6B1F" },
  { categorySlug: "ain-o-adalot", categoryName: "আইন ও আদালত", categoryColor: "#152D4E" },
  { categorySlug: "aporadh", categoryName: "অপরাধ", categoryColor: "#A11616" },
  { categorySlug: "rajdhani", categoryName: "রাজধানী", categoryColor: "#2F5480" },
  { categorySlug: "sharadesh", categoryName: "সারাদেশ", categoryColor: "#1F3F66" },
  { categorySlug: "probash", categoryName: "প্রবাস", categoryColor: "#6B4A1F" },
  { categorySlug: "onnanno", categoryName: "অন্যান্য", categoryColor: "#4C505A" },
];

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.categorySlug === slug);
