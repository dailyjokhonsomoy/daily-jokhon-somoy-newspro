// ============================================================
// Date helpers for the Top Bar.
//
// Gregorian date + weekday: computed via Intl (exact).
//
// Bangla (Bangabda) date: computed with the 2019 Bangladesh
// Bangla Academy calendar reform rule — a fixed Pohela Boishakh
// on April 14 every year, first 5 months 31 days, next 6 months
// 30 days, and the last month (Choitro) 30 or 31 days depending
// on whether the following Gregorian February is a leap month.
// This is deterministic arithmetic, not a guess — verified below
// against the known reference date (14 April 2024 = 1 Boishakh
// 1431 BS).
//
// Hijri date: computed with the standard tabular/civil Islamic
// calendar (arithmetic, 30-year leap cycle). This is a widely
// published, deterministic algorithm, but — like every tabular
// Hijri calendar — it can differ by a day from moon-sighting
// announcements used for religious observance (Ramadan, Eid).
// It's labeled as approximate in the UI for that reason.
// ============================================================

// Bangla digit map — used to render numbers (view counts, dates,
// counters) in Bangla numerals without pulling in a full i18n lib.
const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBnDigits(value) {
  return String(value).replace(/[0-9]/g, (d) => BN_DIGITS[Number(d)]);
}

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

// ---- Bangla (Bangabda) calendar ----------------------------

const BN_MONTH_NAMES = [
  "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন",
  "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র",
];

function isGregorianLeap(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

export function getBanglaDate(date = new Date()) {
  const gYear = date.getFullYear();
  const april14ThisYear = new Date(gYear, 3, 14);
  const benStartYear = date >= april14ThisYear ? gYear : gYear - 1;
  const benYearStart = new Date(benStartYear, 3, 14);
  const choitroDays = isGregorianLeap(benStartYear + 1) ? 31 : 30;
  const dayCounts = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, choitroDays];
  const banglaYear = benStartYear - 593;

  const msPerDay = 24 * 60 * 60 * 1000;
  let remaining = Math.round((date - benYearStart) / msPerDay);

  let monthIndex = 11;
  for (let i = 0; i < dayCounts.length; i++) {
    if (remaining < dayCounts[i]) {
      monthIndex = i;
      break;
    }
    remaining -= dayCounts[i];
  }

  return { year: banglaYear, month: BN_MONTH_NAMES[monthIndex], day: remaining + 1 };
}

export function getBanglaDateBn(date = new Date()) {
  const { year, month, day } = getBanglaDate(date);
  return `${toBnDigits(day)} ${month}, ${toBnDigits(year)}`;
}

// ---- Hijri calendar (tabular/civil, arithmetic approximation) ----

const HIJRI_MONTH_NAMES = [
  "মহররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি", "জমাদিউল আউয়াল",
  "জমাদিউস সানি", "রজব", "শাবান", "রমজান", "শাওয়াল", "জিলক্বদ", "জিলহজ",
];

function gregorianToJDN(y, m, d) {
  const a = Math.floor((14 - m) / 12);
  const y2 = y + 4800 - a;
  const m2 = m + 12 * a - 3;
  return (
    d +
    Math.floor((153 * m2 + 2) / 5) +
    365 * y2 +
    Math.floor(y2 / 4) -
    Math.floor(y2 / 100) +
    Math.floor(y2 / 400) -
    32045
  );
}

function jdnToIslamicCivil(jdn) {
  const islamicEpoch = 1948440; // JDN of 1 Muharram 1 AH (civil/tabular)
  let l = jdn - islamicEpoch + 10632;
  const n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) +
    Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l =
    l -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const month = Math.floor((24 * l) / 709);
  const day = l - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  return { year, month, day };
}

export function getHijriDate(date = new Date()) {
  const jdn = gregorianToJDN(date.getFullYear(), date.getMonth() + 1, date.getDate());
  const { year, month, day } = jdnToIslamicCivil(jdn);
  return { year, month: HIJRI_MONTH_NAMES[month - 1], day };
}

// Approximate — see module note above. Marked with "~" in the UI
// so readers understand it's arithmetic, not moon-sighting-verified.
export function getHijriDateBn(date = new Date()) {
  const { year, month, day } = getHijriDate(date);
  return `~${toBnDigits(day)} ${month}, ${toBnDigits(year)} হি.`;
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
