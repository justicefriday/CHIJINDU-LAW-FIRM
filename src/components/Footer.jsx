import {
  footerAbout,
  socials,
  footerPracticeLinks,
  firmLinks,
  contactBlocks,
  legalLinks,
  disclaimer,
} from "../data/footer";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navyDark">
      <div className="border-b border-white/[0.07] py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 sm:gap-12">
          {/* brand + socials */}
          <div>
            <a href="#" className="block font-display font-bold text-[1.4rem] text-brand-ivory no-underline mb-1">
              The Chijindu Law Firm
            </a>
            <div className="text-[0.62rem] tracking-[0.2em] uppercase text-brand-gold mb-5">
              Barristers &amp; Solicitors
            </div>
            <p className="text-[0.83rem] text-brand-ivory/55 leading-relaxed mb-6 max-w-[300px]">
              {footerAbout}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-brand-gold/25 flex items-center justify-center text-brand-ivory/50 text-[0.85rem] no-underline transition-all duration-200 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/10 hover:-translate-y-0.5"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Practice Areas" links={footerPracticeLinks} />
          <FooterLinkColumn title="The Firm" links={firmLinks} />

          {/* contact */}
          <div>
            <h4 className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-5">
              Contact
            </h4>
            {contactBlocks.map((block, i) => (
              <div key={i} className="flex gap-3 mb-4 items-start">
                <span className="text-brand-gold text-[0.9rem] mt-0.5 shrink-0">{block.icon}</span>
                <div className="text-[0.82rem] text-brand-ivory/55 leading-relaxed">
                  {block.lines.map((line, li) => (
                    <span key={li} className={block.bold === li ? "text-brand-ivory/80 font-medium" : ""}>
                      {line}
                      {li < block.lines.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-[0.73rem] text-brand-ivory/35">
            © {year} The Chijindu Law Firm. All rights reserved. RC No. [Firm Registration Number].
          </div>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[0.73rem] text-brand-ivory/35 no-underline transition-colors duration-200 hover:text-brand-ivory/70"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="py-7 border-t border-white/[0.04]">
          <p className="text-[0.72rem] text-brand-ivory/25 leading-relaxed">
            <strong className="text-brand-ivory/35">Legal Disclaimer:</strong> {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-5">
        {title}
      </h4>
      <ul className="list-none space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[0.82rem] text-brand-ivory/55 no-underline transition-colors duration-200 hover:text-brand-ivory"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}