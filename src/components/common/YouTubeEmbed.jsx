export default function YouTubeEmbed({ embedUrl, title }) {
  return (
    <div className="relative w-full aspect-video bg-navy-950">
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
