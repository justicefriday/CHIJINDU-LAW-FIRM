
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { practiceLinks, navLinks } from "../data/navigation";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Clean up dropdown timer
  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    closeTimer.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobilePracticeOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-[100] border-b border-brand-gold/20 transition-[background,box-shadow] duration-300 ${
        scrolled
          ? "bg-brand-navy/95 shadow-2xl"
          : "bg-brand-navy"
      }`}
    >
      <div
        className="
          max-w-[1280px]
          mx-auto
          flex
          items-center
          justify-between
          min-h-[72px]
          px-4
          sm:px-6
          gap-3
        "
      >
        {/* LOGO */}
        <Logo />

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden xl:flex items-center gap-0 list-none m-0 p-0 shrink-0">
          {/* PRACTICE AREAS */}
          <li
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleCloseDropdown}
          >
            <a
              href="#practice"
              className="
                flex
                items-center
                h-[72px]
                px-4
                text-[0.78rem]
                font-medium
                tracking-wider
                uppercase
                text-brand-ivory/80
                hover:text-brand-gold
                transition-colors
                no-underline
                whitespace-nowrap
              "
            >
              Practice Areas

              <ChevronDown
                size={13}
                className={`ml-1 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </a>

            {/* DESKTOP DROPDOWN */}
            <div
              className={`
                absolute
                top-[72px]
                left-0
                min-w-[240px]
                bg-brand-navyDark
                border-t-2
                border-brand-gold
                border-b
                border-brand-gold/20
                shadow-2xl
                z-[200]
                transition-all
                duration-200
                ${
                  dropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1.5"
                }
              `}
            >
              {practiceLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="
                    block
                    px-5
                    py-3
                    text-[0.76rem]
                    text-brand-ivory/75
                    border-b
                    border-white/5
                    tracking-wide
                    no-underline
                    transition-all
                    duration-200
                    hover:bg-brand-gold/10
                    hover:text-brand-gold
                    hover:pl-7
                  "
                >
                  {label}
                </a>
              ))}
            </div>
          </li>

          {/* OTHER NAV LINKS */}
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="
                  flex
                  items-center
                  h-[72px]
                  px-4
                  text-[0.78rem]
                  font-medium
                  tracking-wider
                  uppercase
                  text-brand-ivory/80
                  hover:text-brand-gold
                  transition-colors
                  no-underline
                  whitespace-nowrap
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <a
          href="#consult"
          className="
            hidden
            xl:inline-flex
            items-center
            justify-center
            shrink-0
            text-[0.78rem]
            font-semibold
            tracking-widest
            uppercase
            px-7
            py-3.5
            bg-brand-gold
            text-brand-navyDark
            no-underline
            transition-all
            duration-300
            hover:bg-brand-goldLt
            hover:-translate-y-0.5
            whitespace-nowrap
          "
        >
          Book Consultation
        </a>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="
            xl:hidden
            shrink-0
            flex
            items-center
            justify-center
            bg-transparent
            border-0
            text-brand-ivory
            p-2
            -mr-2
            cursor-pointer
          "
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
      <div
        className={`
          xl:hidden
          overflow-hidden
          bg-brand-navyDark
          transition-[max-height]
          duration-300
          ${
            mobileOpen
              ? "max-h-[90vh] overflow-y-auto border-t border-brand-gold/20"
              : "max-h-0"
          }
        `}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-5">
          {/* PRACTICE AREAS */}
          <button
            type="button"
            aria-expanded={mobilePracticeOpen}
            onClick={() =>
              setMobilePracticeOpen((open) => !open)
            }
            className="
              w-full
              flex
              justify-between
              items-center
              bg-transparent
              border-0
              text-brand-ivory
              text-sm
              py-3
              border-b
              border-white/10
              cursor-pointer
            "
          >
            Practice Areas

            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                mobilePracticeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* PRACTICE LINKS */}
          <div
            className={`
              overflow-hidden
              transition-[max-height]
              duration-300
              ${
                mobilePracticeOpen
                  ? "max-h-[500px]"
                  : "max-h-0"
              }
            `}
          >
            {practiceLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobileMenu}
                className="
                  block
                  py-2.5
                  pl-4
                  text-[0.84rem]
                  text-brand-ivory/70
                  no-underline
                  hover:text-brand-gold
                  transition-colors
                "
              >
                {label}
              </a>
            ))}
          </div>

          {/* OTHER LINKS */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobileMenu}
                className="
                  block
                  py-3
                  text-sm
                  text-brand-ivory
                  no-underline
                  border-b
                  border-white/10
                  hover:text-brand-gold
                  transition-colors
                "
              >
                {label}
              </a>
            ))}
          </div>

          {/* MOBILE CTA */}
          <a
            href="#consult"
            onClick={closeMobileMenu}
            className="
              block
              text-center
              mt-5
              py-3.5
              bg-brand-gold
              text-brand-navyDark
              no-underline
              text-[0.8rem]
              font-semibold
              tracking-widest
              uppercase
            "
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}

/* =========================================================
   RESPONSIVE LOGO
========================================================= */

function Logo() {
  return (
    <a
      href="#"
      className="
        flex
        items-center
        gap-2.5
        sm:gap-3
        no-underline
        min-w-0
        flex-1
        xl:flex-none
      "
    >
      {/* LOGO MARK */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="20"
          r="19"
          fill="none"
          stroke="#C4A95C"
          strokeWidth="1.5"
        />

        <circle
          cx="20"
          cy="20"
          r="15.5"
          fill="#0D1F3C"
          stroke="#C4A95C"
          strokeWidth="0.75"
        />

        <text
          x="20"
          y="25"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontWeight="700"
          fontSize="13"
          fill="#C4A95C"
        >
          TCF
        </text>
      </svg>

      {/* LOGO TEXT */}
      <span
        className="
          flex
          flex-col
          justify-center
          leading-tight
          min-w-0
          max-w-[220px]
          sm:max-w-[300px]
          md:max-w-[360px]
          xl:max-w-none
        "
      >
        {/* FIRM NAME */}
        <span
          className="
            font-display
            font-bold
            text-[0.88rem]
            xs:text-[0.95rem]
            sm:text-[1.1rem]
            md:text-[1.15rem]
            xl:text-[1.05rem]
            text-brand-ivory
            break-words
          "
        >
          The Chijindu Law Firm
        </span>

        {/* SUBTITLE */}
        <span
          className="
            text-[0.5rem]
            sm:text-[0.55rem]
            md:text-[0.6rem]
            font-normal
            tracking-[0.1em]
            sm:tracking-[0.14em]
            uppercase
            text-brand-gold
            mt-1
            leading-tight
          "
        >
          Barristers &amp; Solicitors
        </span>
      </span>
    </a>
  );
}

