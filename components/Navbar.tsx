import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navigationItems = [
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
];

export default function Navbar() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [shouldHideDesktopCta, setShouldHideDesktopCta] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      setHasScrolled(window.scrollY > 8);

      const ctaElements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-hide-navbar-cta]")
      );

      const navbarHeight = 80;

      const isAnyCtaVisible = ctaElements.some((element) => {
        const rect = element.getBoundingClientRect();

        return rect.bottom > navbarHeight && rect.top < window.innerHeight;
      });

      setShouldHideDesktopCta(isAnyCtaVisible);
    };

    const animationFrame = window.requestAnimationFrame(updateNavbar);

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

  const isActiveLink = (href: string) => router.pathname === href;

 const shouldShowButton =
  router.pathname !== "/contact" &&
  !shouldHideDesktopCta &&
  (router.pathname !== "/" || hasScrolled);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        hasScrolled
          ? "border-black/5 bg-white/95 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-transparent bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center px-8 lg:px-16">
        <Link
          href="/"
          aria-label="Venturas — Pagina principală"
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

        <div className="ml-auto hidden items-center lg:flex">
          <nav
            aria-label="Navigare principală"
            className="flex items-center gap-9"
          >
            {navigationItems.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
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
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div
            className={`transition-all duration-300 ${
              shouldShowButton
                ? "ml-8 w-[196px] overflow-visible opacity-100"
                : "pointer-events-none ml-0 w-0 overflow-hidden opacity-0"
            }`}
          >
            <Link
              href="/contact"
              aria-hidden={!shouldShowButton}
              tabIndex={shouldShowButton ? 0 : -1}
              className={`inline-flex w-full whitespace-nowrap items-center justify-center rounded-xl bg-[#F05B25] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(240,91,37,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94F1C] hover:shadow-[0_16px_36px_rgba(240,91,37,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F05B25] focus-visible:ring-offset-2 ${
                shouldShowButton ? "translate-y-0" : "-translate-y-2"
              }`}
            >
              Programează o discuție
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="relative ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#16221D] transition-colors hover:border-[#F05B25]/40 hover:text-[#F05B25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F05B25] focus-visible:ring-offset-2 lg:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          </span>

          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Navigare mobilă"
          className="mx-auto flex max-w-7xl flex-col px-6 py-5"
        >
          {navigationItems.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
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

          {router.pathname !== "/contact" && (
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#F05B25] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(240,91,37,0.2)] transition-colors hover:bg-[#D94F1C]"
            >
              Programează o discuție
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}