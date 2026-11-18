
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const isEnglish =
    router.pathname === "/en" ||
    router.pathname.startsWith("/en/");

  const homeHref = isEnglish ? "/en" : "/";
  const servicesHref = isEnglish ? "/en#services" : "/#services";
  const processHref = isEnglish ? "/en#process" : "/#process";
  const contactHref = isEnglish ? "/en/contact" : "/contact";

  const privacyHref = isEnglish
  ? "/en/privacy-policy"
  : "/politica-de-confidentialitate";
  const termsHref = isEnglish
  ? "/en/terms-and-conditions"
  : "/termeni-si-conditii";

  const content = isEnglish
    ? {
        services: "Services",
        process: "Our Process",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
      }
    : {
        services: "Servicii",
        process: "Procesul nostru",
        contact: "Contact",
        privacy: "Politica de confidențialitate",
        terms: "Termeni și condiții",
      };

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[180px_1fr] md:items-center">
        <Link
          href={homeHref}
          className="text-xl font-extrabold tracking-[-0.04em] text-[#00563A] transition-colors hover:text-[#F05B25]"
        >
          Venturas
        </Link>

        <div className="flex flex-col gap-3 text-sm font-medium text-slate-600 sm:flex-row sm:items-center sm:justify-end sm:gap-7">
          <Link
            href={servicesHref}
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            {content.services}
          </Link>

          <Link
            href={processHref}
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            {content.process}
          </Link>

          <Link
            href={contactHref}
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            {content.contact}
          </Link>

          <a
            href="mailto:contact@venturas.ro"
            className="transition-colors duration-200 hover:text-[#F05B25] sm:ml-2"
          >
            contact@venturas.ro
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-4 border-t border-slate-200 pt-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Venturas SRL</p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={privacyHref}
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            {content.privacy}
          </Link>

          <Link
            href={termsHref}
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            {content.terms}
          </Link>

          <Link
            href={homeHref}
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            venturas.ro
          </Link>
        </div>
      </div>
    </footer>
  );
}
