import { trustStats } from "../data/about";

export default function TrustBar() {
  return (
    <div className="bg-brand-ivory border-b border-brand-ivoryWarm">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y divide-brand-ivoryWarm lg:divide-y-0 lg:divide-x">
        {trustStats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-8 sm:px-10 sm:py-9 transition-colors duration-300 hover:bg-brand-ivoryMid"
          >
            <div className="font-display font-bold text-[2rem] sm:text-[2.8rem] text-brand-navy leading-none">
              {stat.num}
            </div>
            <div className="text-[0.68rem] sm:text-[0.72rem] tracking-wider uppercase text-brand-textLt mt-1.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}