import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { BriefcaseBusiness, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const contactDetails = [
  {
    icon: Mail,
    value: "contact@venturas.ro",
    href: "mailto:contact@venturas.ro",
  },
  {
    icon: Phone,
    value: "+40 726 125 032",
    href: "tel:+40726125032",
  },
  {
    icon: FaLinkedinIn,
    value: "Venturas",
    href: "https://www.linkedin.com/company/127213952",
  },
  {
    icon: MapPin,
    value: "București, România",
    href: "https://maps.google.com/?q=Bucharest,Romania",
  },
];

const discussionTopics = [
  "Campanii outbound",
  "Listă de prospecți",
  "Proiect personalizat",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const form = event.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Eroare la trimitere");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "A apărut o eroare la trimiterea mesajului."
      );

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Venturas</title>

        <meta
          name="description"
          content="Contactează Venturas pentru a discuta despre prospectare B2B, campanii outbound prin email și LinkedIn sau proiecte personalizate."
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

          <div
            aria-hidden="true"
            className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#00563A]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                Contact
              </p>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[#16221D] sm:text-5xl lg:text-6xl">
                Hai să discutăm despre piața pe care vrei să o deschizi.
              </h1>
            </div>
          </div>
        </section>

        <section
          id="contact-form-section"
          className="bg-white px-6 py-20 lg:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-9 lg:p-12">
              {submitted ? (
                <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4F0] text-[#00563A]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8"
                    >
                      <path
                        d="M5 12.5 9.2 17 19 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h2 className="mt-7 text-3xl font-extrabold tracking-[-0.035em] text-[#16221D]">
                    Mesajul a fost trimis.
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    Mulțumim! Am primit solicitarea ta și revenim în cel mai
                    scurt timp.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F05B25]">
                      Trimite-ne un mesaj
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#16221D] sm:text-4xl">
                      Spune-ne ce vrei să obții.
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      Completează formularul, iar noi revenim pentru a stabili
                      dacă și cum putem construi proiectul.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                                        <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-semibold text-[#16221D]"
                        >
                          Nume
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Numele tău"
                          className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#F05B25]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="mb-3 block text-sm font-semibold text-[#16221D]"
                        >
                          Companie
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Compania"
                          className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#F05B25]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-semibold text-[#16221D]"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="email@companie.ro"
                          className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#F05B25]"
                        />
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-semibold text-[#16221D]">
                          Interes
                        </label>

                        <select
                          name="topic"
                          className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-[#F05B25]"
                        >
                          {discussionTopics.map((topic) => (
                            <option key={topic}>{topic}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-semibold text-[#16221D]"
                      >
                        Mesaj
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={7}
                        placeholder="Spune-ne câteva detalii despre proiect..."
                        className="w-full resize-none rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#F05B25]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center rounded-xl bg-[#F05B25] px-8 py-4 font-semibold text-white transition hover:bg-[#D94F1C] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Se trimite..." : "Trimite mesajul"}
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="mt-16 border-y border-slate-200 py-12">
              <h3 className="mb-10 text-center text-sm font-bold uppercase tracking-[0.3em] text-[#16221D]">
                Date de contact
              </h3>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.value}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex flex-col items-center text-center transition"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4EE] text-[#F05B25] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#F05B25] group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <p className="mt-5 font-semibold text-[#16221D]">
                        {item.value}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}