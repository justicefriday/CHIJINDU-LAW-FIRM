import { useEffect, useRef, useState } from "react";
import { about, aboutCards } from "../data/about";

export default function About() {
  return (
    <section id="about" className="bg-brand-white py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-start">
        <AboutCopy />
        <div className="flex flex-col gap-5 sm:gap-6">
          {aboutCards.map((card, i) => (
            <AboutCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCopy() {
  return (
    <div>
      <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-gold">
        {about.eyebrow}
      </span>
      <div className="w-12 h-0.5 bg-brand-gold my-4" />
      <h2 className="font-display font-bold text-brand-navy text-[1.9rem] sm:text-[2.4rem] leading-tight mb-6">
        {about.heading}
      </h2>

      {about.paragraphs.map((p, i) => (
        <p key={i} className="font-body text-[1.05rem] text-brand-textMid leading-relaxed mb-5">
          {p}
        </p>
      ))}

      <blockquote className="mt-8 pl-6 pr-6 py-6 border-l-[3px] border-brand-gold bg-brand-ivory">
        <p className="font-body italic text-[1.02rem] text-brand-navy leading-relaxed">
          "{about.quote.text}"
        </p>
        <cite className="block mt-3 text-[0.7rem] tracking-wider uppercase text-brand-textLt not-italic">
          — {about.quote.cite}
        </cite>
      </blockquote>

      <a
        href={about.ctaHref}
        className="inline-block mt-8 text-[0.78rem] font-semibold tracking-widest uppercase px-8 py-4 bg-brand-navy text-brand-ivory no-underline transition-all duration-300 hover:bg-brand-navyMid hover:-translate-y-0.5"
      >
        {about.ctaLabel}
      </a>
    </div>
  );
}

function AboutCard({ card, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-brand-navy text-brand-ivory p-6 sm:p-7 transition-transform duration-300 hover:translate-x-1.5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
      }}
    >
      <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-gold" />
      <h3 className="font-display font-bold text-[1.1rem] sm:text-[1.15rem] text-brand-goldLt mb-2 flex items-center gap-2">
        <span aria-hidden="true">{card.icon}</span>
        {card.title}
      </h3>
      <p className="text-[0.85rem] text-brand-ivory/75 leading-relaxed">{card.body}</p>
    </div>
  );
}