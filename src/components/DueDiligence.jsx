import { useState } from "react";
import { Check } from "lucide-react";
import { ddPackages, locationsCovered } from "../data/dueDiligence";

export default function DueDiligence() {
  return (
    <section id="due-diligence" className="bg-brand-navyDark py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-gold">
            Dedicated Packages
          </span>
          <div className="w-12 h-0.5 bg-brand-gold my-4 mx-auto" />
          <h2 className="font-display font-bold text-brand-ivory text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem] mb-4">
            Due Diligence Packages
          </h2>
          <p className="font-body text-[1.05rem] sm:text-[1.1rem] text-brand-ivory/65 max-w-[640px] mx-auto">
            Before you sign, invest, or seal the deal — verify every claim
            about the property, legally and physically. Our dedicated due
            diligence packages cover root of title tracing and on-the-ground
            investigation in all parts of Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px">
          {ddPackages.map((pkg) => (
            <DDCard key={pkg.title} pkg={pkg} />
          ))}
        </div>

        <LocationsCovered />
      </div>
    </section>
  );
}

function DDCard({ pkg }) {
  return (
    <div
      className={`relative p-8 sm:p-9 border transition-all duration-300 ${
        pkg.featured
          ? "bg-brand-green border-brand-gold"
          : "bg-white/[0.04] border-brand-gold/15 hover:bg-white/[0.07] hover:border-brand-gold/40"
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-px right-6 bg-brand-gold text-brand-navyDark text-[0.6rem] font-bold tracking-[0.12em] px-3 py-1">
          MOST POPULAR
        </span>
      )}
      <div className="text-[0.68rem] tracking-[0.15em] uppercase text-brand-gold mb-4">
        {pkg.location}
      </div>
      <h3 className="font-display text-[1.4rem] text-brand-ivory mb-4">{pkg.title}</h3>
      <div className="font-display font-bold text-[2rem] text-brand-gold mb-1">
        {pkg.price}
      </div>
      <div className="text-[0.72rem] text-brand-ivory/50 mb-7">{pkg.priceNote}</div>

      <ul className="mb-8 space-y-0">
        {pkg.features.map((feat) => (
          <li
            key={feat}
            className="flex gap-2.5 items-start text-[0.84rem] text-brand-ivory/80 py-2 border-b border-white/[0.07]"
          >
            <Check size={15} className="text-brand-gold shrink-0 mt-0.5" strokeWidth={3} />
            {feat}
          </li>
        ))}
      </ul>

      <div className="text-[0.72rem] text-brand-ivory/50 mb-6">
        Turnaround: <strong className="text-brand-goldLt">{pkg.turnaround}</strong>
      </div>

      <a
        href="#consult"
        className={`block text-center text-[0.78rem] font-semibold tracking-widest uppercase px-6 py-4 no-underline transition-all duration-300 ${
          pkg.featured
            ? "bg-brand-gold text-brand-navyDark hover:bg-brand-goldLt"
            : "bg-transparent text-brand-ivory border border-brand-gold/60 hover:bg-brand-gold/10 hover:border-brand-gold"
        }`}
      >
        {pkg.ctaLabel}
      </a>
    </div>
  );
}

function LocationsCovered() {
  const [pills, setPills] = useState(locationsCovered.pills);

  const toggle = (label) => {
    setPills((prev) =>
      prev.map((p) => (p.label === label ? { ...p, active: !p.active } : p))
    );
  };

  return (
    <div className="mt-14 sm:mt-16 p-8 sm:p-10 border border-brand-gold/20 text-center">
      <h3 className="font-display text-brand-ivory text-[1.3rem] sm:text-[1.5rem] mb-4">
        {locationsCovered.heading}
      </h3>
      <p className="text-brand-ivory/65 text-[0.85rem] sm:text-[0.88rem] mb-7 max-w-[560px] mx-auto">
        {locationsCovered.body}
      </p>
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {pills.map((pill) => (
          <button
            key={pill.label}
            onClick={() => toggle(pill.label)}
            className={`px-4 sm:px-5 py-2 text-[0.75rem] sm:text-[0.78rem] tracking-wide border transition-all duration-200 ${
              pill.active
                ? "bg-brand-gold text-brand-navyDark border-brand-gold font-semibold"
                : "text-brand-ivory/80 border-brand-gold/30 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5"
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
}