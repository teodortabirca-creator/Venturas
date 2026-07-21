import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[180px_1fr] md:items-center">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-[-0.04em] text-[#00563A] transition-colors hover:text-[#F05B25]"
        >
          Venturas
        </Link>

        <div className="flex flex-col gap-3 text-sm font-medium text-slate-600 sm:flex-row sm:items-center sm:justify-end sm:gap-7">
          <a
            href="#services"
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            Servicii
          </a>

          <a
            href="#process"
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            Procesul nostru
          </a>

          <a
            href="#contact"
            className="transition-colors duration-200 hover:text-[#F05B25]"
          >
            Contact
          </a>

          <a
            href="mailto:contact@venturas.ro"
            className="ml-2 transition-colors duration-200 hover:text-[#F05B25]"
          >
            contact@venturas.ro
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Venturas SRL</p>

        <p>venturas.ro</p>
      </div>
    </footer>
  );
}