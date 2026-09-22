import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import useDocumentMeta from "../hooks/useDocumentMeta.js";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import { siteConfig } from "../data/siteConfig.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useDocumentMeta({ title: `যোগাযোগ | ${siteConfig.name}` });

  const buildMailtoHref = () => {
    const subject = form.subject || `${siteConfig.name} ওয়েবসাইট থেকে বার্তা`;
    const body = `নাম: ${form.name}\nইমেইল: ${form.email}\n\n${form.message}`;
    return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No custom backend exists yet, so rather than faking a "sent to
    // our server" confirmation, this opens the reader's own email
    // client with the message pre-filled — genuinely functional
    // today, no signup or server needed. A real form-handling
    // endpoint can replace this later without changing the UI.
    window.location.href = buildMailtoHref();
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <div className="container-page py-2">
      <Breadcrumb items={[{ label: "হোম", href: "/" }, { label: "যোগাযোগ" }]} />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 pb-8 max-w-container">
        <div className="bg-white shadow-card p-6">
          <h1 className="text-2xl font-bold text-navy-900 mb-4">যোগাযোগ করুন</h1>

          {submitted && (
            <div className="bg-gold-50 border border-gold-300 text-navy-800 text-sm rounded-md p-4 mb-4">
              আপনার ইমেইল অ্যাপ খোলার চেষ্টা করা হয়েছে, বার্তাটি আগে থেকেই পূরণ করা আছে —
              শুধু পাঠান বাটনে চাপুন। যদি অ্যাপটি নিজে থেকে না খোলে,{" "}
              <a href={buildMailtoHref()} className="underline font-medium">
                এখানে ক্লিক করুন
              </a>{" "}
              অথবা সরাসরি {siteConfig.contact.email}-এ ইমেইল করুন।
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                আপনার নাম
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange("name")}
                className="w-full border border-ink-300 rounded-sm px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                ইমেইল
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange("email")}
                className="w-full border border-ink-300 rounded-sm px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">
                বিষয়
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange("subject")}
                className="w-full border border-ink-300 rounded-sm px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                বার্তা
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                className="w-full border border-ink-300 rounded-sm px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-2.5 rounded-sm transition-colors"
            >
              <Send size={16} /> বার্তা পাঠান
            </button>
          </form>
        </div>

        <div className="bg-white shadow-card p-5 h-fit space-y-4">
          <h2 className="font-bold text-navy-900 border-b border-ink-200 pb-2">অফিসের তথ্য</h2>
          <div className="flex items-start gap-2.5 text-sm text-ink-700">
            <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
            {siteConfig.contact.address}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-ink-700">
            <Phone size={16} className="text-gold-500 shrink-0" />
            {siteConfig.contact.phone}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-ink-700">
            <Mail size={16} className="text-gold-500 shrink-0" />
            {siteConfig.contact.email}
          </div>
        </div>
      </div>
    </div>
  );
}
