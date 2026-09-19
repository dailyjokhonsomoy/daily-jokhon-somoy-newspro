import { toBnDigits } from "./dateUtils.js";

// Rough estimate: Bangla news reading speed ~ 180-200 words/minute.
// Word count is approximated by whitespace splitting, which is a
// reasonable proxy for Bangla text (words are space-separated).
export function estimateReadingTimeBn(contentBlocks = []) {
  const text = contentBlocks
    .map((b) => b.text || b.items?.join(" ") || "")
    .join(" ");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / 190));
  return `${toBnDigits(minutes)} মিনিটে পড়ুন`;
}
