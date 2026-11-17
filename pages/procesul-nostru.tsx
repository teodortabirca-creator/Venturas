
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Process from "../components/Process";
import TrustedBy from "../components/TrustedBy";

export default function ProcesulNostru() {
  return (
    <>
      <Head>
        <title>Procesul nostru | Venturas</title>

        <meta
          name="description"
          content="Descoperă procesul Venturas: definirea profilului clientului ideal, identificarea prospecților, campanii outbound personalizate și programarea întâlnirilor B2B."
        />
      </Head>

      <Navbar />

      <main>
        <Process />

        <section
          data-hide-navbar-cta
          className="bg-[#FFF4EE] px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#16221D] px-8 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-14">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F05B25]/20 blur-3xl"
              />

              <div className="relative max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                  Hai să discutăm
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Pregătit să transformi prospectarea într-un proces clar?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                  Pornim de la obiectivele tale comerciale și construim
                  împreună o abordare adaptată pieței și clienților pe
                  care vrei să îi atragi.
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

        <div className="bg-[#FFF4EE]">
          <TrustedBy />
        </div>
      </main>

      <Footer />
    </>
  );
}
