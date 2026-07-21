import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#FFF4EE] px-6 pt-20 pb-20 lg:px-10 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
            Prospectare B2B
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.03] tracking-[-0.05em] text-[#1F0B05] sm:text-6xl lg:text-7xl">
            Generăm conversații comerciale cu companiile potrivite.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Identificăm prospecții relevanți și administrăm campanii de
            outbound prin email și LinkedIn, pentru ca echipa ta să se poată
            concentra pe conversații și oportunități comerciale.
          </p>

          <div className="mt-10" data-hide-navbar-cta>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F05B25] px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d94f20] hover:shadow-[0_16px_35px_rgba(240,91,37,0.25)]"
            >
              Programează o discuție
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}