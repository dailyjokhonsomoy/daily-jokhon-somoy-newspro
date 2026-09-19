import { useEffect, useRef, useState } from "react";
import { X, Download, Image as ImageIcon, Loader2 } from "lucide-react";
import { getCategoryBySlug } from "../../data/categories.js";
import { siteConfig } from "../../data/siteConfig.js";

const CARD_SIZE = 1080;

function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function drawCard(canvas, article, category) {
  const ctx = canvas.getContext("2d");
  canvas.width = CARD_SIZE;
  canvas.height = CARD_SIZE;

  // Base fill so there's always something behind a failed image load
  ctx.fillStyle = "#0F2038";
  ctx.fillRect(0, 0, CARD_SIZE, CARD_SIZE);

  // Background photo (cover-fit, center-cropped)
  try {
    const img = await new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = article.image;
    });
    const scale = Math.max(CARD_SIZE / img.width, CARD_SIZE / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    ctx.drawImage(img, (CARD_SIZE - w) / 2, (CARD_SIZE - h) / 2, w, h);
  } catch {
    // Image failed to load (network/CORS) — card still renders with
    // the navy fallback background and full text content below.
  }

  // Bottom gradient for text legibility
  const gradient = ctx.createLinearGradient(0, CARD_SIZE * 0.35, 0, CARD_SIZE);
  gradient.addColorStop(0, "rgba(10, 22, 38, 0)");
  gradient.addColorStop(1, "rgba(10, 22, 38, 0.96)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, CARD_SIZE, CARD_SIZE);

  const padding = 64;

  // Category badge
  if (category) {
    ctx.font = "bold 30px sans-serif";
    const badgeText = category.categoryName;
    const textWidth = ctx.measureText(badgeText).width;
    const badgeW = textWidth + 48;
    const badgeH = 56;
    const badgeY = CARD_SIZE - 420;
    ctx.fillStyle = category.categoryColor;
    drawRoundedRect(ctx, padding, badgeY, badgeW, badgeH, 4);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.textBaseline = "middle";
    ctx.fillText(badgeText, padding + 24, badgeY + badgeH / 2 + 2);
  }

  // Headline
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 56px sans-serif";
  ctx.textBaseline = "alphabetic";
  const maxTextWidth = CARD_SIZE - padding * 2;
  const lines = wrapText(ctx, article.title, maxTextWidth).slice(0, 4);
  const lineHeight = 68;
  let textY = CARD_SIZE - 300;
  lines.forEach((line) => {
    ctx.fillText(line, padding, textY);
    textY += lineHeight;
  });

  // Gold divider
  ctx.fillStyle = "#D4AF37";
  ctx.fillRect(padding, CARD_SIZE - 130, 90, 5);

  // Site name + slogan
  ctx.fillStyle = "#D4AF37";
  ctx.font = "bold 34px sans-serif";
  ctx.fillText(siteConfig.name, padding, CARD_SIZE - 88);
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.font = "22px sans-serif";
  ctx.fillText(siteConfig.slogan, padding, CARD_SIZE - 52);
}

export default function PhotoCardGenerator({ article, isOpen, onClose }) {
  const canvasRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const category = getCategoryBySlug(article.category);

  useEffect(() => {
    if (!isOpen) return;
    setStatus("loading");
    drawCard(canvasRef.current, article, category)
      .then(() => setStatus("ready"))
      .catch(() => setStatus("error"));
  }, [isOpen, article, category]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${article.slug}-photocard.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80">
      <div className="bg-white rounded-md shadow-card-hover max-w-md w-full overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-ink-200">
          <h2 className="font-bold text-navy-900 flex items-center gap-2">
            <ImageIcon size={18} /> অটো ফটোকার্ড
          </h2>
          <button type="button" onClick={onClose} aria-label="বন্ধ করুন" className="text-ink-500 hover:text-navy-900">
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <div className="relative aspect-square bg-ink-100 rounded-sm overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full object-cover" />
            {status === "loading" && (
              <div className="absolute inset-0 flex items-center justify-center bg-navy-950/40">
                <Loader2 size={28} className="text-white animate-spin" />
              </div>
            )}
          </div>

          {status === "error" && (
            <p className="text-xs text-breaking-600 mt-2">
              ছবি লোড করা যায়নি, তবে টেক্সট সহ কার্ড তৈরি হয়েছে।
            </p>
          )}

          <button
            type="button"
            onClick={handleDownload}
            disabled={status === "loading"}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-breaking-500 hover:bg-breaking-600 disabled:opacity-50 text-white font-semibold py-2.5 rounded-sm transition-colors"
          >
            <Download size={16} /> ছবি ডাউনলোড করুন
          </button>
        </div>
      </div>
    </div>
  );
}
