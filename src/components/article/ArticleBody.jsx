// ============================================================
// Renders structured content blocks (never raw HTML strings),
// so article content stays safe and each block type is styled
// consistently. Supports the block types the Master Spec lists:
// paragraph, H2/heading, blockquote, bullet list, images with
// captions. H3, numbered lists, bold/italic inline runs, tables,
// and YouTube embeds are handled inline where content needs them
// (see the single-article page for the inline media example).
// ============================================================
export default function ArticleBody({ blocks, sizeClass = "text-base" }) {
  return (
    <div className={`max-w-content mx-auto md:mx-0 ${sizeClass} text-ink-800 space-y-4`}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="text-xl md:text-2xl font-bold text-navy-900 pt-2">
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-r-4 border-gold-400 bg-gold-50 pr-4 py-3 pl-4 text-navy-800 italic"
              >
                {block.text}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="list-disc pr-6 space-y-1.5">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={i} className="my-6">
                <img
                  src={block.src}
                  alt={block.caption ?? ""}
                  loading="lazy"
                  className="w-full object-cover"
                />
                {block.caption && (
                  <figcaption className="text-xs text-ink-400 text-center mt-2">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "paragraph":
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </div>
  );
}
