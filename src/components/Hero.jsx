import { useEffect, useState } from "react";
import { hero, heroStats } from "../data/hero";
import useCountUp from "../hooks/useCountUp";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // triggers the entrance animation a frame after mount
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-topbar min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-16 sm:py-20">
      {/* background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(26,61,43,0.20) 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 10% 90%, rgba(196,169,92,0.07) 0%, transparent 50%)",
        }}
      />
      {/* giant watermark, hidden on small screens where it just adds noise */}
      <span
        aria-hidden="true"
        className="hidden md:block absolute -right-10 -bottom-16 select-none pointer-events-none font-display font-black leading-none"
        style={{ fontSize: "28vw", color: "rgba(255,255,255,0.025)" }}
      >
        TCF
      </span>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-[760px]">
          {/* eyebrow */}
          <div
            className={`flex items-center gap-3 mb-5 transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <span className="block w-8 h-px bg-brand-gold" />
            <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-gold">
              {hero.eyebrow}
            </span>
          </div>

          {/* headline */}
          <h1
            className={`font-display font-black text-brand-ivory leading-[1.05] mb-6 sm:mb-7 text-[clamp(2.1rem,7.5vw,5.5rem)] transition-all duration-700 ease-out delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {hero.titleLine1} <em className="not-italic text-brand-gold" style={{ fontStyle: "italic" }}>{hero.titleEm1}</em>{" "}
            {hero.titleLine2}
            <br className="hidden sm:block" /> {hero.titleLine3}{" "}
            <em className="text-brand-gold" style={{ fontStyle: "italic" }}>
              {hero.titleEm2}
            </em>
          </h1>

          {/* body copy */}
          <p
            className={`font-body text-[1.05rem] sm:text-[1.2rem] text-brand-ivory/75 leading-relaxed max-w-[560px] mb-9 sm:mb-11 transition-all duration-700 ease-out delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {hero.body}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16 transition-all duration-700 ease-out delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href={hero.primaryCta.href}
              className="text-center text-[0.78rem] font-semibold tracking-widest uppercase px-8 py-4 bg-brand-gold text-brand-navyDark no-underline transition-all duration-300 hover:bg-brand-goldLt hover:-translate-y-0.5 hover:shadow-2xl"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="text-center text-[0.78rem] font-semibold tracking-widest uppercase px-8 py-4 bg-transparent text-brand-ivory border border-brand-gold/60 no-underline transition-all duration-300 hover:bg-brand-gold/10 hover:border-brand-gold"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          {/* stats */}
          <div
            className={`grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-6 sm:gap-12 pt-8 sm:pt-10 border-t border-brand-gold/20 transition-all duration-700 ease-out delay-[400ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {heroStats.map((stat) => (
              <Stat key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>

      {/* rating badge — desktop only, matches original */}
      <div
        className={`hidden lg:flex absolute bottom-[60px] right-[60px] w-[120px] h-[120px] rounded-full border border-brand-gold/40 flex-col items-center justify-center text-center bg-brand-navy/60 backdrop-blur-sm transition-all duration-700 ease-out delay-500 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="font-display font-bold text-[1.8rem] text-brand-gold leading-none">
          ★ {hero.badge.rating}
        </div>
        <div className="text-[0.6rem] tracking-[0.12em] uppercase text-brand-ivory/60 mt-1 leading-tight px-2">
          {hero.badge.label}
        </div>
      </div>
    </section>
  );
}

function Stat({ stat }) {
  const [ref, count] = useCountUp(stat.value);

  return (
    <div ref={ref}>
      <div className="font-display font-bold text-[1.9rem] sm:text-[2.4rem] text-brand-gold leading-none mb-1">
        {stat.value == null ? stat.staticText : `${count}${stat.suffix}`}
      </div>
      <div className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.12em] uppercase text-brand-ivory/50">
        {stat.label}
      </div>
    </div>
  );
}
