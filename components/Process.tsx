import {
  Crosshair,
  Building2,
  MessageSquareText,
  CalendarCheck2,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Definim direcția",
      text: "Stabilim profilul clientului ideal, obiectivele comerciale și criteriile care definesc un prospect relevant.",
      icon: Crosshair,
    },
    {
      title: "Identificăm piața",
      text: "Construim o bază de companii și decidenți care se potrivesc obiectivelor și contextului proiectului.",
      icon: Building2,
    },
    {
      title: "Deschidem conversațiile",
      text: "Lansăm campanii personalizate prin email și LinkedIn pentru a genera dialoguri comerciale relevante.",
      icon: MessageSquareText,
    },
    {
      title: "Programăm întâlniri",
      text: "Calificăm interesul și direcționăm oportunitățile către echipa ta, împreună cu contextul necesar.",
      icon: CalendarCheck2,
    },
  ];

  return (
    <section
      id="process"
className="scroll-mt-20 bg-[#00563A] px-6 py-20 lg:px-10 lg:py-24"    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
            Procesul nostru
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Un proces clar, construit în jurul relevanței.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            De la definirea profilului clientului ideal până la întâlniri
            comerciale calificate, fiecare etapă este construită pentru a
            transforma prospectarea într-un proces predictibil.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
className="group relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0B6A49] px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F05B25]/40 hover:bg-[#0D7350] hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]"              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-50 bg-[#F05B25] transition-transform duration-300 group-hover:scale-x-100"
                />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F05B25]">
                  <Icon size={28} strokeWidth={2.2} />
                </div>
                <div
  aria-hidden="true"
  className="absolute inset-x-0 bottom-0 h-[3px] origin-right scale-x-50 bg-[#F05B25] transition-transform duration-300 group-hover:scale-x-100"
/>

                <h3 className="text-xl font-bold tracking-[-0.025em] text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/75">
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}