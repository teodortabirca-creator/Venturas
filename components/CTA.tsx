import { Check } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#00563A] px-6 py-20 lg:px-10 lg:py-24"
    >
      <div
  data-hide-navbar-cta
  className="mx-auto max-w-5xl rounded-[2rem] bg-white px-7 py-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.14)] sm:px-10 lg:px-20 lg:py-20"
>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
          Programează o discuție
        </p>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#1F0B05] sm:text-5xl lg:text-6xl">
          Hai să discutăm despre obiectivele tale comerciale.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Vom analiza contextul companiei tale, profilul clientului ideal și
          vom stabili dacă prospectarea prin outbound este potrivită pentru
          obiectivele pe care le urmărești.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 text-sm font-medium text-slate-500 sm:flex-row sm:gap-7">
          <span className="flex items-center gap-2">
            <Check
              size={18}
              strokeWidth={2.5}
              className="text-[#00563A]"
            />
            Discuție de aproximativ 30 de minute
          </span>

          <span className="flex items-center gap-2">
            <Check
              size={18}
              strokeWidth={2.5}
              className="text-[#00563A]"
            />
            Analiză a contextului comercial
          </span>

          <span className="flex items-center gap-2">
            <Check
              size={18}
              strokeWidth={2.5}
              className="text-[#00563A]"
            />
            Recomandări adaptate companiei tale
          </span>
        </div>

        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-11 inline-flex items-center justify-center rounded-xl bg-[#F05B25] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_35px_rgba(240,91,37,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94F1C] hover:shadow-[0_18px_40px_rgba(240,91,37,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F05B25] focus-visible:ring-offset-2"
        >
          Programează o discuție
        </a>
      </div>
    </section>
  );
}