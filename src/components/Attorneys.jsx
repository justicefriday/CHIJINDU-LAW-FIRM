import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { attorneys, filterCategories } from "../data/attorneys";

export default function Attorneys() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visible =
    activeFilter === "all"
      ? attorneys
      : attorneys.filter((a) => a.specialties.includes(activeFilter));

  return (
    <section id="attorneys" className="bg-brand-white py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-gold">
            The Team
          </span>
          <div className="w-12 h-0.5 bg-brand-gold my-4" />
          <h2 className="font-display font-bold text-brand-navy text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem]">
            Our Lawyers
          </h2>
        </div>

        {/* Filters — horizontally scrollable on mobile instead of wrapping awkwardly */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-10 sm:mb-12 sm:flex-wrap sm:overflow-visible -mx-5 px-5 sm:mx-0 sm:px-0">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`shrink-0 px-5 py-2 text-[0.75rem] font-medium tracking-wide border transition-all duration-200 ${
                activeFilter === cat.key
                  ? "bg-brand-navy text-brand-ivory border-brand-navy"
                  : "bg-brand-ivory text-brand-textMid border-brand-ivoryWarm hover:bg-brand-navy hover:text-brand-ivory hover:border-brand-navy"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {visible.map((attorney) => (
            <AttorneyCard
              key={attorney.id}
              attorney={attorney}
              onOpen={() => setSelected(attorney)}
            />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-brand-textMid py-16">
            No attorneys match this filter yet.
          </p>
        )}
      </div>

      {selected && <AttorneyModal attorney={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function AttorneyCard({ attorney, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="group bg-brand-white border border-brand-ivoryWarm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_12px_48px_rgba(13,31,60,0.16)] hover:-translate-y-1"
    >
      <div
        className="relative h-[240px] sm:h-[280px] flex items-end p-5"
        style={{ background: attorney.gradient }}
      >
        <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-[4rem] text-white/20">
          {attorney.initials}
        </span>
        <span className="relative z-10 text-[0.65rem] font-semibold tracking-[0.12em] uppercase bg-brand-gold text-brand-navyDark px-3 py-1">
          {attorney.role}
        </span>
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="font-display font-bold text-[1.2rem] text-brand-navy">
          {attorney.name}
        </h3>
        <div className="text-[0.72rem] text-brand-gold tracking-wide mt-0.5 mb-3">
          {attorney.credentials}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {attorney.specialtyLabels.map((label) => (
            <span
              key={label}
              className="text-[0.65rem] px-2.5 py-1 bg-brand-ivory text-brand-textMid tracking-wide"
            >
              {label}
            </span>
          ))}
        </div>
        <p className="text-[0.83rem] text-brand-textMid leading-relaxed">
          {attorney.summary}
        </p>
        <span className="inline-block mt-4 text-[0.7rem] font-semibold tracking-widest uppercase text-brand-navy border-b border-brand-gold pb-0.5 transition-colors duration-200 group-hover:text-brand-gold">
          View Full Profile
        </span>
      </div>
    </div>
  );
}

function AttorneyModal({ attorney, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto p-4 sm:p-10 bg-brand-navyDark/90 backdrop-blur-sm"
    >
      <div className="relative bg-brand-white max-w-[800px] w-full my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-5 text-2xl text-brand-ivory/60 hover:text-brand-gold transition-colors z-10"
        >
          <X size={22} />
        </button>

        <div
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-7 sm:p-10"
          style={{ background: "#0D1F3C" }}
        >
          <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] shrink-0 bg-brand-green flex items-center justify-center font-display font-bold text-[1.6rem] sm:text-[2rem] text-white/40">
            {attorney.initials}
          </div>
          <div>
            <h2 className="font-display text-[1.5rem] sm:text-[1.8rem] text-brand-ivory">
              {attorney.name}
            </h2>
            <div className="text-brand-gold text-[0.8rem] tracking-wide my-1">
              {attorney.credentials}
            </div>
            <div className="text-[0.72rem] tracking-[0.12em] uppercase text-brand-ivory/50">
              {attorney.role} — {attorney.specialtyLabels.join(", ")}
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <Section title="Biography">
            {attorney.bio.map((p, i) => (
              <p key={i} className="font-body text-[1rem] text-brand-textMid leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </Section>

          <Section title="Areas of Practice">
            <ul className="list-none">
              {attorney.practiceAreas.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[0.85rem] text-brand-textMid py-1.5 border-b border-brand-ivory"
                >
                  <span className="text-brand-gold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {attorney.education.length > 0 && (
            <Section title="Education & Credentials">
              <ul className="list-none">
                {attorney.education.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[0.85rem] text-brand-textMid py-1.5 border-b border-brand-ivory"
                  >
                    <span className="text-brand-gold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h4 className="font-display font-bold text-[1rem] text-brand-navy border-b border-brand-ivoryWarm pb-2 mb-4 tracking-wide">
        {title}
      </h4>
      {children}
    </div>
  );
}