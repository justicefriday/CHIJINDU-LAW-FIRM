import { tickerItems } from "../data/ticker";

// Duplicated once so the loop is seamless (translateX(-50%) lines up
// exactly with the second copy's start).
const loopItems = [...tickerItems, ...tickerItems];

export default function Ticker() {
  return (
    <div className="bg-brand-gold py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-flex chijindu-ticker-track">
        {loopItems.map((item, i) => (
          <span
            key={i}
            className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-brand-navyDark px-10 flex items-center gap-10 shrink-0"
          >
            <span className="opacity-60" aria-hidden="true">◆</span>
            {item}
          </span>
        ))}
      </div>

      <style>{`
        .chijindu-ticker-track {
          animation: chijindu-ticker-scroll 30s linear infinite;
        }
        @keyframes chijindu-ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .chijindu-ticker-track { animation: none; }
        }
      `}</style>
    </div>
  );
}