import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const contactDetails = [
  {
    label: "Email",
    value: "contact@venturas.ro",
    href: "mailto:contact@venturas.ro",
  },
  {
    label: "Telefon",
    value: "+40 726 125 032",
    href: "tel:+40726125032",
  },
  {
    label: "LinkedIn",
    value: "Venturas",
    href: "https://www.linkedin.com/company/127213952",
  },
  {
    label: "Locație",
    value: "București, România",
    href: null,
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
    company: (form.elements.namedItem("company") as HTMLInputElement)?.value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
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
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
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
      Mulțumim! Am primit solicitarea ta și revenim în cel mai scurt timp.
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
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-[#16221D]"
                        >
                          Nume
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Numele tău"
                          className="mt-2.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#16221D] outline-none transition-all placeholder:text-slate-400 focus:border-[#F05B25] focus:ring-4 focus:ring-[#F05B25]/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="text-sm font-semibold text-[#16221D]"
                        >
                          Companie
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          autoComplete="organization"
                          placeholder="Compania"
                          className="mt-2.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#16221D] outline-none transition-all placeholder:text-slate-400 focus:border-[#F05B25] focus:ring-4 focus:ring-[#F05B25]/10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-[#16221D]"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="nume@companie.ro"
                          className="mt-2.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#16221D] outline-none transition-all placeholder:text-slate-400 focus:border-[#F05B25] focus:ring-4 focus:ring-[#F05B25]/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold text-[#16221D]"
                        >
                          Telefon
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+40"
                          className="mt-2.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#16221D] outline-none transition-all placeholder:text-slate-400 focus:border-[#F05B25] focus:ring-4 focus:ring-[#F05B25]/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="topic"
                        className="text-sm font-semibold text-[#16221D]"
                      >
                        Subiectul discuției
                      </label>

                      <select
                        id="topic"
                        name="topic"
                        required
                        defaultValue=""
                        className="mt-2.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#16221D] outline-none transition-all focus:border-[#F05B25] focus:ring-4 focus:ring-[#F05B25]/10"
                      >
                        <option value="" disabled>
                          Selectează un subiect
                        </option>

                        {discussionTopics.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold text-[#16221D]"
                      >
                        Despre proiect
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Spune-ne câteva lucruri despre companie, oferta ta, piața urmărită și obiectivul proiectului."
                        className="mt-2.5 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#16221D] outline-none transition-all placeholder:text-slate-400 focus:border-[#F05B25] focus:ring-4 focus:ring-[#F05B25]/10"
                      />
                    </div>

                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#F05B25] focus:ring-[#F05B25]"
                      />

                      <span className="text-sm leading-6 text-slate-500">
                        Sunt de acord ca Venturas să utilizeze informațiile
                        transmise pentru a răspunde acestei solicitări.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#F05B25] px-6 py-4 font-semibold text-white shadow-[0_14px_35px_rgba(240,91,37,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94F1C] hover:shadow-[0_18px_40px_rgba(240,91,37,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F05B25] focus-visible:ring-offset-2"
                    >
                      Trimite solicitarea
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="mt-16 border-y border-slate-200 py-9">
              <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-black">
                Date de contact
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="text-center">
                    <span className="block text-sm font-semibold text-[#F05B25]">
                      {detail.label}
                    </span>

                    {detail.href ? (
                      <Link
                        href={detail.href}
                        className="mt-2 inline-block font-semibold text-[#16221D] transition-colors hover:text-[#F05B25]"
                      >
                        {detail.value}
                      </Link>
                    ) : (
                      <span className="mt-2 block font-semibold text-[#16221D]">
                        {detail.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}