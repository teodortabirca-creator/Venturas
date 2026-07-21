import { Search, Send, CalendarCheck2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Identificarea prospecților",
      text: "Construim liste de companii și decidenți relevanți, în funcție de profilul clientului ideal.",
      icon: Search,
    },
    {
      title: "Campanii de outbound",
      text: "Concepem și administrăm campanii personalizate prin email și LinkedIn pentru a iniția conversații comerciale.",
      icon: Send,
    },
    {
      title: "Programarea întâlnirilor",
      text: "Calificăm interesul și programăm întâlniri relevante direct în calendarul echipei tale.",
      icon: CalendarCheck2,
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[#00563A] px-6 py-20 text-white lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
            Serviciile noastre
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0B6A49] px-7 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F05B25]/40 hover:bg-[#0D7350] hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-50 bg-[#F05B25] transition-transform duration-300 group-hover:scale-x-100"
                />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F05B25]">
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/75">
                  {service.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}