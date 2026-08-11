import { practiceAreas } from "../data/practice";

export default function PracticeAreas() {
  return (
    <section id="practice" className="bg-brand-ivory py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-gold">
            What We Do
          </span>
          <div className="w-12 h-0.5 bg-brand-gold my-4" />
          <h2 className="font-display font-bold text-brand-navy text-[1.9rem] sm:text-[2.4rem] lg:text-[3rem]">
            Practice Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {practiceAreas.map((area) => (
            <PracticeCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PracticeCard({ area }) {
  return (
    <div className="group bg-brand-white p-8 sm:p-9 shadow-[0_4px_24px_rgba(13,31,60,0.10)] border-b-[3px] border-transparent transition-all duration-300 hover:border-brand-gold hover:shadow-[0_12px_48px_rgba(13,31,60,0.16)] hover:-translate-y-1 cursor-default">
      <div className="w-[52px] h-[52px] bg-brand-navy flex items-center justify-center text-[1.4rem] mb-6 transition-transform duration-300 group-hover:scale-110">
        {area.icon}
      </div>
      <h3 className="font-display font-bold text-[1.2rem] text-brand-navy mb-3">
        {area.title}
      </h3>
      <p className="text-[0.88rem] text-brand-textMid leading-relaxed mb-5">
        {area.body}
      </p>
      <a
        href={area.href}
        className="text-[0.72rem] font-semibold tracking-widest uppercase text-brand-greenAcc no-underline transition-colors duration-200 hover:text-brand-gold"
      >
        {area.linkLabel}
      </a>
    </div>
  );
}