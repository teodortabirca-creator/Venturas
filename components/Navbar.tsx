
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navigationItems = {
  ro: [
    {
      label: "Despre noi",
      href: "/despre-noi",
    },
    {
      label: "Servicii",
      href: "/servicii",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  en: [
    {
      label: "About Us",
      href: "/en/about",
    },
    {
      label: "Services",
      href: "/en/services",
    },
    {
      label: "Contact",
      href: "/en/contact",
    },
  ],
};

const translations = {
  ro: {
    navigationLabel: "Navigare principală",
    mobileNavigationLabel: "Navigare mobilă",
    homeLabel: "Venturas — Pagina principală",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    cta: "Programează o discuție",
    languageLabel: "Schimbă limba",
  },
  en: {
    navigationLabel: "Main Navigation",
    mobileNavigationLabel: "Mobile Navigation",
    homeLabel: "Venturas — Home",
    openMenu: "Open Menu",
    closeMenu: "Close Menu",
    cta: "Book a Consultation",
    languageLabel: "Change Language",
  },
};

const languageRoutes: Record<string, string> = {
  "/": "/en",
  "/despre-noi": "/en/about",
  "/servicii": "/en/services",
  "/contact": "/en/contact",
  "/politica-de-confidentialitate": "/en/privacy-policy",
  "/termeni-si-conditii": "/en/terms-and-conditions",

  "/en": "/",
  "/en/about": "/despre-noi",
  "/en/services": "/servicii",
  "/en/contact": "/contact",
  "/en/privacy-policy": "/politica-de-confidentialitate",
  "/en/terms-and-conditions": "/termeni-si-conditii",
};

function RomanianFlag() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 16" width="24" height="16" className="shrink-0 rounded-[2px] shadow-sm">
      <rect width="8" height="16" fill="#002B7F" />
      <rect x="8" width="8" height="16" fill="#FCD116" />
      <rect x="16" width="8" height="16" fill="#CE1126" />
    </svg>
  );
}

function BritishFlag() {
  return (
    <svg aria-hidden="true" viewBox="0 0 30 20" width="24" height="16" className="shrink-0 rounded-[2px] shadow-sm">
      <defs>
        <clipPath id="venturas-uk-flag-clip"><rect width="30" height="20" /></clipPath>
      </defs>
      <g clipPath="url(#venturas-uk-flag-clip)">
        <rect width="30" height="20" fill="#012169" />
        <path d="M0 0 30 20 M30 0 0 20" stroke="#FFF" strokeWidth="5" />
        <path d="M0 0 30 20 M30 0 0 20" stroke="#C8102E" strokeWidth="2" />
        <path d="M15 0 V20 M0 10 H30" stroke="#FFF" strokeWidth="7" />
        <path d="M15 0 V20 M0 10 H30" stroke="#C8102E" strokeWidth="3.5" />
      </g>
    </svg>
  );
}

export default function Navbar() {
  const router = useRouter();

  const isEnglish =
    router.pathname === "/en" ||
    router.pathname.startsWith("/en/");

  const language = isEnglish ? "en" : "ro";

  const content = translations[language];
  const items = navigationItems[language];

  const homeHref = isEnglish ? "/en" : "/";
  const contactHref = isEnglish ? "/en/contact" : "/contact";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [shouldHideDesktopCta, setShouldHideDesktopCta] =
    useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setHasScrolled(window.scrollY > 8);

      const ctaElements = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-hide-navbar-cta]"
        )
      );

      const navbarHeight = 80;

      const isAnyCtaVisible = ctaElements.some((element) => {
        const rect = element.getBoundingClientRect();

        return (
          rect.bottom > navbarHeight &&
          rect.top < window.innerHeight
        );
      });

      setShouldHideDesktopCta(isAnyCtaVisible);
    };

    const animationFrame =
      window.requestAnimationFrame(updateNavbar);

    window.addEventListener("scroll", updateNavbar, {
      passive: true,
    });

    window.addEventListener("resize", updateNavbar);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
    };
  }, [router.asPath]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActiveLink = (href: string) =>
    router.pathname === href;

  const isHomePage = router.pathname === homeHref;
  const isContactPage = router.pathname === contactHref;

  const shouldShowButton =
    !isContactPage &&
    !shouldHideDesktopCta &&
    (!isHomePage || hasScrolled);

  const getLanguageHref = (targetLanguage: "ro" | "en") => {
    if (targetLanguage === language) {
      return router.asPath;
    }

    const currentPath = router.asPath.split(/[?#]/)[0];

    return (
      languageRoutes[currentPath] ||
      (targetLanguage === "en" ? "/en" : "/")
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        hasScrolled
          ? "border-black/5 bg-white/95 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-transparent bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center px-8 lg:px-16">
        {/* Logo */}
        <Link
          href={homeHref}
          aria-label={content.homeLabel}
          className="group inline-flex shrink-0 items-center gap-3"
        >
          <span className="relative block h-9 w-9 shrink-0">
            <Image
              src="/venturas-logo.svg"
              alt=""
              fill
              priority
              sizes="36px"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>

          <span className="text-2xl font-extrabold tracking-[-0.045em] text-[#16221D]">
            Venturas
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center lg:flex">
          <nav
            aria-label={content.navigationLabel}
            className="flex items-center gap-9"
          >
            {items.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#00563A]"
                      : "text-slate-700 hover:text-[#F05B25]"
                  }`}
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-1 mx-auto h-px rounded-full bg-[#F05B25]/80 transition-all duration-200 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div
            className={`transition-all duration-300 ${
              shouldShowButton
                ? "ml-8 w-[196px] overflow-visible opacity-100"
                : "pointer-events-none ml-0 w-0 overflow-hidden opacity-0"
            }`}
          >
            <Link
              href={contactHref}
              aria-hidden={!shouldShowButton}
              tabIndex={shouldShowButton ? 0 : -1}
              className={`inline-flex w-full whitespace-nowrap items-center justify-center rounded-xl bg-[#F05B25] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(240,91,37,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94F1C] hover:shadow-[0_16px_36px_rgba(240,91,37,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F05B25] focus-visible:ring-offset-2 ${
                shouldShowButton
                  ? "translate-y-0"
                  : "-translate-y-2"
              }`}
            >
              {content.cta}
            </Link>
          </div>

          {/* Desktop Language Switcher */}
          <div
            aria-label={content.languageLabel}
            className="ml-5 flex shrink-0 items-center gap-1 border-l border-slate-200 pl-5"
          >
            <Link
              href={getLanguageHref("ro")}
              hrefLang="ro"
              aria-label="Română"
              aria-current={!isEnglish ? "page" : undefined}
              className={`rounded-md px-1.5 py-2 text-xs font-bold transition-colors ${
                !isEnglish
                  ? "text-[#00563A]"
                  : "text-slate-400 hover:text-[#F05B25]"
              }`}
            >
              <RomanianFlag />
            </Link>

            <span
              aria-hidden="true"
              className="text-xs text-slate-300"
            >
              /
            </span>

            <Link
              href={getLanguageHref("en")}
              hrefLang="en"
              aria-label="English"
              aria-current={isEnglish ? "page" : undefined}
              className={`rounded-md px-1.5 py-2 text-xs font-bold transition-colors ${
                isEnglish
                  ? "text-[#00563A]"
                  : "text-slate-400 hover:text-[#F05B25]"
              }`}
            >
              <BritishFlag />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? content.closeMenu : content.openMenu
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setIsMenuOpen((currentValue) => !currentValue)
          }
          className="relative ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#16221D] transition-colors hover:border-[#F05B25]/40 hover:text-[#F05B25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F05B25] focus-visible:ring-offset-2 lg:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? content.closeMenu : content.openMenu}
          </span>

          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen
                  ? "translate-y-1.5 rotate-45"
                  : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen
                  ? "-translate-y-1.5 -rotate-45"
                  : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label={content.mobileNavigationLabel}
          className="mx-auto flex max-w-7xl flex-col px-6 py-5"
        >
          {items.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`border-b border-slate-100 py-4 text-base font-semibold transition-colors ${
                  isActive
                    ? "text-[#00563A]"
                    : "text-slate-700 hover:text-[#F05B25]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {!isContactPage && (
            <Link
              href={contactHref}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#F05B25] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(240,91,37,0.2)] transition-colors hover:bg-[#D94F1C]"
            >
              {content.cta}
            </Link>
          )}

          {/* Mobile Language Switcher */}
          <div
            aria-label={content.languageLabel}
            className="mt-6 flex items-center justify-center gap-4 border-t border-slate-100 pt-5"
          >
            <Link
              href={getLanguageHref("ro")}
              hrefLang="ro"
              aria-current={!isEnglish ? "page" : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                !isEnglish
                  ? "bg-[#EAF4F0] text-[#00563A]"
                  : "text-slate-500 hover:text-[#F05B25]"
              }`}
            >
              <RomanianFlag />
            </Link>

            <Link
              href={getLanguageHref("en")}
              hrefLang="en"
              aria-current={isEnglish ? "page" : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                isEnglish
                  ? "bg-[#EAF4F0] text-[#00563A]"
                  : "text-slate-500 hover:text-[#F05B25]"
              }`}
            >
              <BritishFlag />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
