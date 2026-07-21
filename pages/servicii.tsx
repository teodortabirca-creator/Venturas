import Head from "next/head";
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
    title: "Proiect personalizat",
    price: "Custom",
    description:
      "Proiectăm infrastructura comercială necesară unui proces de prospectare eficient.",
    features: [
      "Analiză comercială și de piață",
      "Strategie și poziționare comercială",
      "Procese și infrastructură de vânzări",
      "Materiale și active comerciale",
    ],
  },
];

const customServices = [
  
];

export default function Servicii() {
  return (
    <>
      <Head>
        <title>Servicii | Venturas</title>

        <meta
          name="description"
          content="Descoperă serviciile Venturas de setup, segmentare și execuție outbound prin email și LinkedIn."
        />
      </Head>

      <Navbar />

      <main>
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
                Putem construi o bază de prospecți, putem prelua integral activitatea de outbound sau putem discuta proiecte de poziționare strategică și identitate comercială.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative flex flex-col rounded-[2rem] border border-slate-200 bg-[#FFFCFA] p-8 text-[#16221D] transition-all duration-500 hover:-translate-y-1 hover:border-[#F05B25] hover:bg-white hover:shadow-[0_24px_70px_rgba(240,91,37,0.10)] sm:p-9"
                >
                  <div>
                    <h3 className="max-w-[14rem] text-2xl font-extrabold tracking-[-0.03em] transition-colors duration-500 ">
                      {service.title}
                    </h3>

                    <div className="mt-8 flex items-end gap-2">
                      <span className="text-4xl font-extrabold tracking-[-0.04em]">
                        {service.price}
                      </span>

                      <span className="pb-1 text-sm text-slate-500">
                        {service.billing}
                      </span>
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
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}