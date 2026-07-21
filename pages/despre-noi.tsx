import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ListChecks,
  MessageSquare,
  Search,
  Send,
  Settings2,
  TrendingUp,
  Users,
  UsersRound,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TrustedBy from "../components/TrustedBy";
export default function DespreNoi() {
  const capabilities = [
    {
      title: "Cercetare",
      text: "Înțelegem piața, oferta și profilul companiilor care merită abordate.",
      icon: Search,
    },
    {
      title: "Acces la decidenți",
      text: "Identificăm persoanele potrivite din cadrul organizațiilor vizate.",
      icon: Users,
    },
    {
      title: "Outreach",
      text: "Construim și administrăm comunicarea necesară pentru deschiderea conversațiilor.",
      icon: Send,
    },
  ];

  const deliverables = [
    {
      title: "Campanii outbound configurate",
      icon: Settings2,
    },
    {
      title: "Liste de prospecți relevanți",
      icon: UsersRound,
    },
    {
      title: "Mesaje și secvențe personalizate",
      icon: MessageSquare,
    },
    {
      title: "Monitorizare și optimizare",
      icon: TrendingUp,
    },
    {
      title: "Rapoarte periodice",
      icon: BarChart3,
    },
    {
      title: "Conversații comerciale calificate",
      icon: ListChecks,
    },
  ];

  return (
    <>
      <Head>
        <title>Despre noi | Venturas</title>
        <meta
          name="description"
          content="Află mai multe despre Venturas, agenția de prospectare B2B și outbound orientată spre conversații comerciale relevante."
        />
      </Head>

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#FFF9F5] px-6 py-24 lg:px-10 lg:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,86,58,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,86,58,0.04)_1px,transparent_1px)] bg-[size:64px_64px]"
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#F05B25]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                Despre Venturas
              </p>

              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-[#16221D] sm:text-6xl lg:text-7xl">
                Construim procese de outbound clare, relevante și orientate
                spre oportunități reale.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                Venturas ajută companiile să identifice organizațiile
                potrivite, să ajungă la decidenți relevanți și să deschidă
                conversații comerciale cu potențial.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                  De ce existăm
                </p>

                <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#16221D] sm:text-5xl">
                  Pentru a susține efortul de vânzare acolo unde este nevoie.
                </h2>
              </div>

              <div className="border-l border-[#F05B25]/60 pl-7 sm:pl-10">
                <div className="space-y-6 text-lg leading-8 text-slate-600">
                  <p>
                    Multe companii au servicii solide și echipe capabile, dar
                    nu au timpul, resursele sau procesul necesar pentru a
                    construi constant un pipeline de oportunități noi.
                  </p>

                  <p>
                    Venturas preia etapele de cercetare, segmentare, prospectare
                    și outreach personalizat, astfel încât echipele comerciale
                    să se poată concentra pe conversații, ofertare și închiderea
                    contractelor.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 grid border-y border-slate-200 md:grid-cols-3">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className={`py-9 md:px-8 ${
                      index > 0
                        ? "border-t border-slate-200 md:border-l md:border-t-0"
                        : ""
                    }`}
                  >
                    <Icon
                      size={27}
                      strokeWidth={2}
                      className="text-[#F05B25]"
                    />

                    <h3 className="mt-5 text-xl font-bold tracking-[-0.025em] text-[#16221D]">
                      {capability.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {capability.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#00563A] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                  Ce primești
                </p>

                <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                  Livrabile clare. Vizibilitate asupra procesului.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                  Primești un proces comercial structurat, adaptat proiectului
                  și urmărit pe baza rezultatelor obținute.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {deliverables.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="group flex min-h-[132px] items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F05B25]/60 hover:bg-white/15 sm:p-6"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#F05B25]/30 bg-white/10">
                        <Icon
                          size={21}
                          strokeWidth={1.9}
                          className="text-[#F05B25]"
                        />
                      </div>

                      <h3 className="pt-1 text-base font-bold leading-6 text-white sm:text-lg sm:leading-7">
                        {item.title}
                      </h3>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
  data-hide-navbar-cta
  className="bg-[#FFF9F5] px-6 py-20 lg:px-10 lg:py-24"
>
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#16221D] px-8 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-14">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F05B25]/20 blur-3xl"
              />

              <div className="relative max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                  Programează o discuție
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Vrei să construim împreună un proces de outbound mai bun?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                  Pornim de la piața ta, profilul clientului ideal și
                  obiectivele comerciale pe care vrei să le atingi.
                </p>
              </div>

              <Link
                href="/contact"
                className="relative mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F05B25] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94F1C] lg:mt-0"
              >
                Programează o discuție
                <ArrowRight size={19} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </section>

        <TrustedBy />

        <section className="bg-[#FFF9F5] px-6 py-20 lg:px-10 lg:py-24"></section>
      </main>

      <Footer />
    </>
  );
}