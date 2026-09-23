// ============================================================
// Real astronomical prayer-time calculation — same solar-position
// method family used by PrayTimes.org / adhan.js (NOAA/Meeus-style
// approximation): Julian date -> sun declination + equation of
// time -> hour-angle for each prayer's sun-angle threshold.
//
// Verified against known approximate published Dhaka times across
// all four seasons (winter/spring/summer/equinox) before shipping.
//
// Calculation choices (documented so they're easy to audit/change):
//   - Fajr/Isha angle: 18° (University of Islamic Sciences, Karachi
//     method — widely used across Bangladesh/Pakistan/India)
//   - Asr: Hanafi convention (shadow factor 2), standard in
//     Bangladesh (most regional calendars use this, not the
//     Shafi'i factor-1 convention)
//
// Like any calculated time, this can differ by a minute or two from
// a given mosque's own schedule (which may add a small safety
// margin). It is NOT a substitute for local moon-sighting-based
// Ramadan/Eid announcements — see dateUtils.js's Hijri date note.
// ============================================================

const dsin = (d) => Math.sin((d * Math.PI) / 180);
const dcos = (d) => Math.cos((d * Math.PI) / 180);
const dtan = (d) => Math.tan((d * Math.PI) / 180);
const darcsin = (x) => (Math.asin(x) * 180) / Math.PI;
const darccos = (x) => (Math.acos(x) * 180) / Math.PI;
const darctan2 = (y, x) => (Math.atan2(y, x) * 180) / Math.PI;
const darccot = (x) => (Math.atan2(1, x) * 180) / Math.PI;
const fixAngle = (a) => {
  a = a % 360;
  return a < 0 ? a + 360 : a;
};
const fixHour = (h) => {
  h = h % 24;
  return h < 0 ? h + 24 : h;
};

function julianDate(year, month, day) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
}

function sunPosition(jd) {
  const D = jd - 2451545.0;
  const g = fixAngle(357.529 + 0.98560028 * D);
  const q = fixAngle(280.459 + 0.98564736 * D);
  const L = fixAngle(q + 1.915 * dsin(g) + 0.02 * dsin(2 * g));
  const e = 23.439 - 0.00000036 * D;
  const RA = darctan2(dcos(e) * dsin(L), dcos(L)) / 15;
  const eqt = q / 15 - fixHour(RA);
  const decl = darcsin(dsin(e) * dsin(L));
  return { declination: decl, equation: eqt };
}

// Unified sun-angle-crossing formula — used for Fajr/sunrise/
// Maghrib/Isha directly, and for Asr via a derived angle below.
function angleTime(angle, noon, decl, lat, beforeNoon) {
  const term = (-dsin(angle) - dsin(decl) * dsin(lat)) / (dcos(decl) * dcos(lat));
  if (term < -1 || term > 1) return null; // sun never reaches this angle here (polar edge case)
  const T = darccos(term) / 15;
  return beforeNoon ? noon - T : noon + T;
}

function asrAngle(shadowFactor, decl, lat) {
  return -darccot(shadowFactor + dtan(Math.abs(lat - decl)));
}

function hoursToClockBn(hours) {
  if (hours == null) return "—";
  hours = fixHour(hours);
  let h = Math.floor(hours);
  let m = Math.round((hours - h) * 60);
  if (m === 60) {
    m = 0;
    h += 1;
  }
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")}`;
}

const ASR_SHADOW_FACTOR = 2; // Hanafi convention (standard for Bangladesh)
const FAJR_ANGLE = 18;
const ISHA_ANGLE = 18;

/**
 * @param {Date} date
 * @param {{lat: number, lng: number, timezone: number}} location
 * @returns {{fajr,sunrise,dhuhr,asr,maghrib,isha}} times as "H:MM" strings
 */
export function calculatePrayerTimes(date, location) {
  const { lat, lng, timezone } = location;
  const jd = julianDate(date.getFullYear(), date.getMonth() + 1, date.getDate()) - lng / (15 * 24);
  const { declination: decl, equation: eqt } = sunPosition(jd);
  const noon = fixHour(12 - eqt) + timezone - lng / 15;

  return {
    fajr: hoursToClockBn(angleTime(FAJR_ANGLE, noon, decl, lat, true)),
    sunrise: hoursToClockBn(angleTime(0.833, noon, decl, lat, true)),
    dhuhr: hoursToClockBn(noon + 1 / 60),
    asr: hoursToClockBn(angleTime(asrAngle(ASR_SHADOW_FACTOR, decl, lat), noon, decl, lat, false)),
    maghrib: hoursToClockBn(angleTime(0.833, noon, decl, lat, false)),
    isha: hoursToClockBn(angleTime(ISHA_ANGLE, noon, decl, lat, false)),
  };
}

// Default: Dhaka. Sidebar/header widgets can pass a different
// { lat, lng, timezone, label } later for a district picker.
export const DHAKA_LOCATION = { lat: 23.8103, lng: 90.4125, timezone: 6, label: "ঢাকা" };
