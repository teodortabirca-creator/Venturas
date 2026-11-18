
import { Target, MessageSquareText, Handshake } from "lucide-react";

type WhyVenturasProps = {
  lang?: "ro" | "en";
};

export default function WhyVenturas({
  lang = "ro",
}: WhyVenturasProps) {
  const isEnglish = lang === "en";

  const items = isEnglish
    ? [
        {
          title: "Relevant Prospecting",
          text: "We identify the companies and decision-makers that match your ideal customer profile.",
          icon: Target,
        },
        {
          title: "Tailored Approach",
          text: "We adapt every campaign and service to your company's specific context, offering, and commercial objectives.",
          icon: MessageSquareText,
        },
        {
          title: "Business Opportunities",
          text: "We generate relevant business conversations and, depending on the service selected, support opportunities through to contract signing.",
          icon: Handshake,
        },
      ]
    : [
        {
          title: "Prospectare relevantă",
          text: "Identificăm companiile și decidenții care se potrivesc profilului clientului tău ideal.",
          icon: Target,
        },
        {
          title: "Abordare personalizată",
          text: "Adaptăm fiecare campanie și serviciu la contextul, oferta și obiectivele comerciale ale companiei tale.",
          icon: MessageSquareText,
        },
        {
          title: "Oportunități comerciale",
          text: "Generăm conversații relevante și, în funcție de serviciul ales, susținem dezvoltarea acestora până la semnarea contractelor.",
          icon: Handshake,
        },
      ];

  return (
    <section className="bg-[#FFF7F2] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
          {isEnglish ? "How We Work" : "Cum lucrăm"}
        </p>

        <h2 className="mt-4 max-w-2xl text-5xl font-bold text-[#1F0B05]">
          {isEnglish
            ? "Business development starts with the right people and companies."
            : "Dezvoltarea comercială începe cu oamenii și companiile potrivite."}
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
