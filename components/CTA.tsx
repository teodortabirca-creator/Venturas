
import Link from "next/link";
import { Check } from "lucide-react";

type CTAProps = {
  lang?: "ro" | "en";
};

export default function CTA({ lang = "ro" }: CTAProps) {
  const isEnglish = lang === "en";

  const benefits = isEnglish
    ? [
        "Approximately 30-minute consultation",
        "Assessment of your commercial context",
        "Recommendations tailored to your business",
      ]
    : [
        "Discuție de aproximativ 30 de minute",
        "Analiză a contextului comercial",
        "Recomandări adaptate companiei tale",
      ];

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
          {isEnglish ? "Book a Consultation" : "Programează o discuție"}
        </p>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#1F0B05] sm:text-5xl lg:text-6xl">
          {isEnglish
            ? "Let's discuss your business development goals."
            : "Hai să discutăm despre obiectivele tale comerciale."}
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          {isEnglish
            ? "We start by understanding your company's context and needs to identify how Venturas can contribute to your commercial growth."
            : "Pornim de la contextul și nevoile companiei tale pentru a identifica serviciile prin care Venturas poate contribui la dezvoltarea activității comerciale."}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 text-sm font-medium text-slate-500 sm:flex-row sm:gap-7">
          {benefits.map((benefit) => (
            <span key={benefit} className="flex items-center gap-2">
              <Check
                size={18}
                strokeWidth={2.5}
                className="text-[#00563A]"
              />
              {benefit}
            </span>
          ))}
        </div>

        <Link
          href={isEnglish ? "/en/contact" : "/contact"}
          className="mt-11 inline-flex items-center justify-center rounded-xl bg-[#F05B25] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_35px_rgba(240,91,37,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94F1C] hover:shadow-[0_18px_40px_rgba(240,91,37,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F05B25] focus-visible:ring-offset-2"
        >
          {isEnglish ? "Book a Consultation" : "Programează o discuție"}
        </Link>
      </div>
    </section>
  );
}
