export default function SidebarWidget({ title, children, tone = "navy" }) {
  const headerTone = {
    navy: "bg-navy-800 text-white",
    gold: "bg-gold-400 text-navy-900",
  }[tone];

  return (
    <section className="bg-white shadow-card">
      <h2 className={`text-sm font-bold px-4 py-2.5 ${headerTone}`}>{title}</h2>
      <div className="p-4">{children}</div>
    </section>
  );
}
