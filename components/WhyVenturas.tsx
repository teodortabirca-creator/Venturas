import { Target, Mail, CalendarCheck } from "lucide-react";

export default function WhyVenturas() {
  const items = [
    {
      title: "Prospectare relevantă",
      text: "Identificăm companiile și decidenții care se potrivesc profilului clientului tău ideal.",
      icon: Target,
    },
    {
      title: "Mesaje personalizate",
      text: "Fiecare campanie este construită în jurul contextului, ofertei și pieței pe care activezi.",
      icon: Mail,
    },
    {
      title: "Conversații de calitate",
      text: "Scopul nostru este să generăm oportunități comerciale relevante, unde există interes real.",
      icon: CalendarCheck,
    },
  ];

  return (
    <section className="bg-[#FFF7F2] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
          Cum lucrăm
        </p>

        <h2 className="mt-4 max-w-2xl text-5xl font-bold text-[#1F0B05]">
          Prospectarea funcționează atunci când relevanța vine înaintea volumului.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F05B25] text-white">
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[#1F0B05]">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}