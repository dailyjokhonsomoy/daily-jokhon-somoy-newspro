import useDocumentMeta from "../hooks/useDocumentMeta.js";
import Breadcrumb from "../components/common/Breadcrumb.jsx";
import { siteConfig } from "../data/siteConfig.js";
import { editorialBoard } from "../data/editors.js";

export default function About() {
  useDocumentMeta({ title: `আমাদের সম্পর্কে | ${siteConfig.name}` });

  return (
    <div className="container-page py-2">
      <Breadcrumb items={[{ label: "হোম", href: "/" }, { label: "আমাদের সম্পর্কে" }]} />

      <div className="max-w-content bg-white shadow-card p-6 md:p-8 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-1">আমাদের সম্পর্কে</h1>
        <p className="text-gold-600 text-sm mb-6">{siteConfig.slogan}</p>

        <div className="space-y-4 text-ink-700 leading-relaxed">
          <p>
            {siteConfig.name} বাংলাদেশের একটি অনলাইন সংবাদমাধ্যম, যা নির্ভুল, নিরপেক্ষ ও
            সময়োপযোগী সংবাদ পাঠকের কাছে পৌঁছে দেওয়ার লক্ষ্যে কাজ করে। জাতীয়, আন্তর্জাতিক,
            রাজনীতি, অর্থনীতি, খেলাধুলা, বিনোদনসহ জীবনের প্রতিটি ক্ষেত্রের সংবাদ আমরা
            গুরুত্বের সঙ্গে তুলে ধরার চেষ্টা করি।
          </p>
          <p>
            সাংবাদিকতার মূলনীতি মেনে সত্য প্রকাশে আমরা সবসময় বদ্ধপরিকর। পাঠকের আস্থা অর্জনই
            আমাদের সবচেয়ে বড় অর্জন বলে আমরা বিশ্বাস করি।
          </p>
        </div>

        <h2 className="text-lg font-bold text-navy-900 mt-8 mb-3">সম্পাদক মন্ডলী</h2>
        <ul className="space-y-2">
          {editorialBoard.map((person) => (
            <li key={person.id} className="flex items-baseline gap-2 text-sm">
              <span className="font-medium text-navy-800">{person.name}</span>
              <span className="text-ink-400">—</span>
              <span className="text-ink-500">{person.designation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
