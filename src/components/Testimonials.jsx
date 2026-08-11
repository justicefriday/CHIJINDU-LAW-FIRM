import { useRef, useState } from "react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (card) card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActive(i);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(index);
  };

  return (
    <section className="bg-brand-navyDark py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-gold">
            Client Voices
          </span>
          <div className="w-12 h-0.5 bg-brand-gold my-4 mx-auto" />
          <h2 className="font-display font-bold text-brand-ivory text-[1.9rem] sm:text-[2.4rem]">
            What Our Clients Say
          </h2>
        </div>

        {/* mobile: swipeable snap carousel · desktop: static grid */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="chijindu-testimonial-track flex sm:grid sm:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        <style>{`
          .chijindu-testimonial-track::-webkit-scrollbar { display: none; }
          .chijindu-testimonial-track { scrollbar-width: none; -ms-overflow-style: none; }
        `}</style>

        {/* dot indicators — mobile only */}
        <div className="flex sm:hidden justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-brand-gold" : "w-2 bg-brand-gold/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="relative shrink-0 w-[85vw] sm:w-auto snap-start bg-white/[0.04] border border-brand-gold/10 p-7 sm:p-9 transition-all duration-300 hover:bg-white/[0.07] hover:border-brand-gold/30">
      <span
        aria-hidden="true"
        className="absolute top-4 right-6 font-display text-[5rem] leading-none text-brand-gold/15"
      >
        "
      </span>
      <div className="text-brand-gold text-[0.75rem] tracking-[2px] mb-4">
        {"★".repeat(t.rating)}
      </div>
      <p className="font-body text-[1rem] text-brand-ivory/75 leading-relaxed mb-6">
        {t.text}
      </p>
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full bg-brand-green flex items-center justify-center font-display font-bold text-[0.9rem] text-brand-ivory/50 shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="text-[0.85rem] font-semibold text-brand-ivory">{t.name}</div>
          <div className="text-[0.7rem] text-brand-gold tracking-wide mt-0.5">{t.role}</div>
        </div>
      </div>
    </div>
  );
}