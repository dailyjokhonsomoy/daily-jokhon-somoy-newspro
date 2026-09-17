// ============================================================
// Date helpers for the Top Bar.
//
// Gregorian date + weekday: computed for real via Intl, in
// Bangla digits/words — safe because Intl's Gregorian calendar
// is exact.
//
// Bangla (Bangabda) date and Hijri date are intentionally left
// as clearly-labeled placeholders. Converting to the revised
// Bangladeshi Bangla calendar and to Hijri correctly needs a
// vetted calendar library/data source — guessing at the algorithm
// risks showing readers a wrong date, which is worse than a
// placeholder. Wire these up to a proper library in a later phase.
// ============================================================

export function getGregorianDateBn(date = new Date()) {
  return new Intl.DateTimeFormat("bn-BD-u-nu-beng", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getWeekdayBn(date = new Date()) {
  return new Intl.DateTimeFormat("bn-BD-u-nu-beng", {
    weekday: "long",
  }).format(date);
}

// TODO(phase-6): replace with a proper Bangabda calendar library.
export function getBanglaDatePlaceholder() {
  return "বাংলা তারিখ শীঘ্রই যুক্ত হবে";
}

// TODO(phase-6): replace with a verified Hijri source.
export function getHijriDatePlaceholder() {
  return "আরবি তারিখ শীঘ্রই যুক্ত হবে";
}

// Bangla digit map — used to render numbers (view counts, counters)
// in Bangla numerals without pulling in a full i18n library.
const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBnDigits(value) {
  return String(value).replace(/[0-9]/g, (d) => BN_DIGITS[Number(d)]);
}

// Formats an ISO date string as a short Bangla date, e.g. "২৫ আগস্ট, ২০২৬"
export function formatArticleDateBn(isoString) {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("bn-BD-u-nu-beng", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

// Formats a view count compactly, e.g. 18400 -> "১৮.৪K"
export function formatViewsBn(count) {
  if (count >= 1000) {
    const value = (count / 1000).toFixed(1).replace(/\.0$/, "");
    return `${toBnDigits(value)}K`;
  }
  return toBnDigits(count);
}
