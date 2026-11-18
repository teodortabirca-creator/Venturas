
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "Prospectare",
    price: "€250",
    billing: "tarif unic",
    description:
      "Construim o bază de companii și decidenți aliniată criteriilor comerciale ale proiectului.",
    features: [
      "Definirea criteriilor de selecție",
      "Identificarea companiilor potrivite",
      "Identificarea decidenților relevanți",
      "Livrarea bazei structurate",
    ],
  },
  {
    title: "Execuție",
    price: "€500",
    billing: "lunar",
    description:
      "Pregătim fundația necesară lansării unei campanii coerente și măsurabile.",
    features: [
      "Clarificarea ofertei și a obiectivelor",
      "Execuția campaniilor de outbound pe Email & LinkedIn",
      "Monitorizarea și optimizarea campaniilor",
      "Raportare săptămânală",
      "Stabilirea întâlnirilor",
    ],
  },
  {
    title: "Vânzări",
    price: "€1.000",
    billing: "lunar",
    description:
      "Susținem întregul proces de prospectare B2B prin email, LinkedIn și apeluri telefonice, participăm la întâlnirile comerciale generate și urmărim activ oportunitățile până la semnarea contractelor.",
    features: [
      "Campanii email & LinkedIn",
      "Cold calling",
      "Susținerea întâlnirilor comerciale",
      "Follow-up până la semnare",
    ],
  },
];

const supportServices = [
  {
    title: "Strategie comercială",
    price: "Preț personalizat",
    billing: "",
    description:
      "Proiectăm infrastructura comercială necesară unui proces de prospectare și vânzare eficient, adaptată obiectivelor și specificului companiei.",
    features: [
      "Analiză comercială și de piață",
      "Strategie și poziționare comercială",
      "Procese și infrastructură de vânzări",
      "Materiale și active comerciale",
    ],
  },
  {
    title: "Reprezentare evenimente",
    price: "€100",
    billing: "/ zi + 5% din contractele semnate la stand",
    description:
      "Ne familiarizăm cu brandul, produsele și serviciile companiei și o reprezentăm în cadrul evenimentelor de profil, cu scopul generării de oportunități comerciale și al încheierii de contracte.",
    features: [
      "Prezență la stand",
      "Abordarea activă a vizitatorilor",
      "Colectarea datelor de contact",
      "Prezentarea companiei și a produselor",
      "Urmărirea stabilirii întâlnirilor comerciale",
    ],
  },
  {
    title: "Training vânzări",
    price: "€1.000",
    billing: "/ 3 zile",
    description:
      "Training de vânzări adaptat specificului companiei, structurat în trei zile de teorie, practică și evaluare, cu accent pe metodologii comerciale, comunicare și dezvoltarea competențelor de vânzare.",
    features: [
      "Instruirea echipei în metodologii de vânzare, soft skills și abordări comerciale contextualizate",
      "Ziua 1 – Teorie: principii, proceduri și metodologii de vânzare",
      "Ziua 2 – Practică: aplicarea metodologiilor în scenarii comerciale și exerciții relevante",
      "Ziua 3 – Evaluare: verificarea competențelor, feedback și ajustări",
      "Manual de training cu metodologiile, exercițiile și informațiile predate",
      "Întâlnire de verificare la două luni după finalizarea trainingului",
    ],
  },
];

type Service = {
  title: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
};

function ServiceCard({ service }: { service: Service }) {
  const isCustomPrice = service.price === "Preț personalizat";

  return (
    <article className="group relative flex flex-col rounded-[2rem] border border-slate-200 bg-[#FFFCFA] p-8 text-[#16221D] transition-all duration-500 hover:-translate-y-1 hover:border-[#F05B25] hover:bg-white hover:shadow-[0_24px_70px_rgba(240,91,37,0.10)] sm:p-9">
      <div>
        <h3 className="max-w-[17rem] text-2xl font-extrabold tracking-[-0.03em] transition-colors duration-500">
          {service.title}
        </h3>

        <div className="mt-8 min-h-[52px]">
          <span
            className={`font-extrabold tracking-[-0.04em] ${
              isCustomPrice ? "text-3xl" : "text-4xl"
            }`}
          >
            {service.price}
          </span>

          {service.billing && (
            <span className="ml-2 text-sm leading-6 text-slate-500">
              {service.billing}
            </span>
          )}
        </div>

        <p className="mt-6 leading-7 text-slate-600">
          {service.description}
        </p>
      </div>

      <ul className="mt-8 flex-1 space-y-4">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm font-semibold"
          >
            <span
              aria-hidden="true"
              className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF4F0]"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-3 w-3 text-[#00563A]"
              >
                <path
                  d="M5 10.5 8.3 14 15 6.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="mt-10 inline-flex items-center justify-center rounded-xl border border-[#F05B25]/45 bg-[#FFFCFA] px-5 py-3.5 text-sm font-semibold text-[#16221D] transition-all duration-300 hover:border-[#F05B25] hover:text-[#F05B25]"
      >
        Programează o discuție
      </Link>
    </article>
  );
}

export default function Servicii() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#FFF9F5] px-6 py-20 lg:px-10 lg:py-28">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,86,58,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,86,58,0.04)_1px,transparent_1px)] bg-[size:64px_64px]"
          />

          <div
            aria-hidden="true"
            className="absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-[#F05B25]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                Servicii
              </p>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[#16221D] sm:text-5xl lg:text-6xl">
                Conversații comerciale cu companiile potrivite.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                Putem construi o bază de prospecți, putem prelua integral
                activitatea de outbound sau putem discuta proiecte de
                poziționare strategică și identitate comercială.
              </p>
            </div>
          </div>
        </section>

        {/* Outreach */}
        <section className="bg-[#FFF4EE] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#16221D] sm:text-5xl">
                Outreach
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Identificăm companiile potrivite, deschidem conversații cu
                decidenții relevanți și generăm oportunități comerciale
                prin campanii outbound personalizate.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="bg-[#FFF4EE] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#16221D] sm:text-5xl">
                Support
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Susținem dezvoltarea activității comerciale prin strategie,
                reprezentare directă și instruirea echipelor de vânzări,
                cu servicii adaptate specificului fiecărei companii.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {supportServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
