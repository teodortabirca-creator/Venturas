
import Link from "next/link";

type HeroProps = {
  lang?: "ro" | "en";
};

export default function Hero({ lang = "ro" }: HeroProps) {
  const isEnglish = lang === "en";

  return (
    <section className="bg-[#FFF4EE] px-6 pt-20 pb-20 lg:px-10 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
            {isEnglish
              ? "B2B Business Development"
              : "Dezvoltare comercială B2B"}
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.03] tracking-[-0.05em] text-[#1F0B05] sm:text-6xl lg:text-7xl">
            {isEnglish
              ? "We turn business opportunities into commercial partnerships."
              : "Transformăm oportunitățile comerciale în parteneriate de business."}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {isEnglish
              ? "From identifying relevant prospects and running outbound campaigns to supporting the sales process, developing commercial strategies, and training sales teams, we deliver services tailored to your company's goals."
              : "De la identificarea prospecților relevanți și derularea campaniilor outbound până la susținerea procesului de vânzare, definirea strategiei comerciale și dezvoltarea echipelor de vânzări, oferim servicii adaptate obiectivelor companiei tale."}
          </p>

          <div className="mt-10" data-hide-navbar-cta>
            <Link
              href={isEnglish ? "/en/contact" : "/contact"}
              className="inline-flex items-center justify-center rounded-full bg-[#F05B25] px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d94f20] hover:shadow-[0_16px_35px_rgba(240,91,37,0.25)]"
            >
              {isEnglish ? "Book a Consultation" : "Programează o discuție"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
