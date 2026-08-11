import { articles } from "../data/knowledge";

export default function Knowledge() {
  const feature = articles.find((a) => a.size === "feature");
  const tall = articles.filter((a) => a.size === "tall");
  const grid = articles.filter((a) => a.size === "grid");

  return (
    <section id="knowledge" className="bg-brand-ivory py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12">
          <div>
            <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-gold">
              Legal Intelligence
            </span>
            <div className="w-12 h-0.5 bg-brand-gold my-4" />
            <h2 className="font-display font-bold text-brand-navy text-[1.9rem] sm:text-[2.4rem]">
              Knowledge Centre
            </h2>
          </div>
          <a
            href="#"
            className="self-start sm:self-auto text-[0.78rem] font-semibold tracking-widest uppercase px-7 py-3.5 bg-brand-navy text-brand-ivory no-underline transition-all duration-300 hover:bg-brand-navyMid hover:-translate-y-0.5"
          >
            View All Guides
          </a>
        </div>

        {/* feature + tall pair */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-px mb-px">
          {feature && <ArticleCard article={feature} imgHeight="h-[220px] sm:h-[360px]" />}
          <div className="grid grid-cols-1 gap-px">
            {tall.map((a) => (
              <ArticleCard key={a.title} article={a} imgHeight="h-[180px] sm:h-[218px]" />
            ))}
          </div>
        </div>

        {/* standard 3-up row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {grid.map((a) => (
            <ArticleCard key={a.title} article={a} imgHeight="h-[180px] sm:h-[220px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article, imgHeight }) {
  return (
    <a
      href="#"
      className="group block bg-brand-white no-underline overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_48px_rgba(13,31,60,0.16)]"
    >
      <div className={`overflow-hidden ${imgHeight}`}>
        <div
          className="w-full h-full flex items-center justify-center text-[2.5rem] sm:text-[3rem] transition-transform duration-500 group-hover:scale-105"
          style={{ background: article.gradient }}
        >
          {article.icon}
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <div className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-brand-gold mb-2">
          {article.category}
        </div>
        <h3 className="font-display font-bold text-[1.05rem] sm:text-[1.15rem] text-brand-navy leading-snug mb-2 transition-colors duration-200 group-hover:text-brand-greenAcc">
          {article.title}
        </h3>
        <p className="text-[0.83rem] text-brand-textMid leading-relaxed">
          {article.excerpt}
        </p>
        <div className="text-[0.7rem] text-brand-textLt mt-4">
          {article.author} · {article.readTime}
        </div>
      </div>
    </a>
  );
}