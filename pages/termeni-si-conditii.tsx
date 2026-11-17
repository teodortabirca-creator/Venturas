
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Informații generale",
    paragraphs: [
      "Website-ul venturas.ro este administrat de VENTURAS SRL, societate înregistrată în România, cu sediul social în Str. Dreptății nr. 8, bl. 010, sc. 2, et. 3, ap. 77, Sector 6, București, România, având CUI 39301629 și numărul de înregistrare la Registrul Comerțului J40/6205/2018.",
      "Pentru întrebări privind website-ul sau serviciile prezentate, ne puteți contacta la contact@venturas.ro.",
      "Prezentul document stabilește condițiile generale de accesare și utilizare a website-ului venturas.ro.",
    ],
  },
  {
    title: "2. Utilizarea website-ului",
    paragraphs: [
      "Vizitatorii pot utiliza website-ul pentru a consulta informații despre Venturas, serviciile oferite și modalitățile de contact.",
      "Utilizarea website-ului trebuie să respecte legislația aplicabilă și drepturile terților. Sunt interzise încercările de acces neautorizat, perturbarea funcționării website-ului, introducerea de cod malițios sau utilizarea abuzivă a formularului de contact.",
      "Ne rezervăm dreptul de a lua măsuri tehnice rezonabile pentru prevenirea utilizării abuzive și protejarea securității website-ului.",
    ],
  },
  {
    title: "3. Serviciile prezentate",
    paragraphs: [
      "Venturas oferă servicii destinate mediului de afaceri, precum identificarea și cercetarea prospecților, construirea listelor de contacte, campanii de prospectare B2B prin email și LinkedIn, programarea întâlnirilor comerciale și raportarea activităților desfășurate.",
      "Descrierile serviciilor publicate pe website au caracter informativ și nu reprezintă, prin ele însele, o ofertă contractuală fermă.",
      "Conținutul, livrabilele, prețurile, termenele și responsabilitățile aferente unei colaborări sunt stabilite separat, prin propuneri comerciale acceptate și/sau contracte încheiate între părți.",
    ],
  },
  {
    title: "4. Solicitări și comunicări comerciale",
    paragraphs: [
      "Transmiterea unei solicitări prin formularul de contact sau prin email nu conduce automat la încheierea unui contract și nu obligă Venturas să accepte o anumită colaborare.",
      "Ne străduim să răspundem solicitărilor într-un termen rezonabil, fără a garanta un anumit interval de răspuns.",
      "Vizitatorii sunt responsabili pentru corectitudinea informațiilor pe care aleg să ni le transmită.",
    ],
  },
  {
    title: "5. Proprietate intelectuală",
    paragraphs: [
      "Textele, elementele grafice, structura website-ului, identitatea vizuală și materialele originale publicate pe venturas.ro sunt protejate de legislația aplicabilă privind proprietatea intelectuală, în măsura în care drepturile respective aparțin Venturas sau sunt utilizate în baza unor licențe.",
      "Copierea, reproducerea, distribuirea sau exploatarea comercială neautorizată a materialelor protejate nu este permisă, cu excepția situațiilor prevăzute de lege sau autorizate în scris.",
      "Mărcile, denumirile și materialele aparținând terților rămân proprietatea titularilor lor.",
    ],
  },
  {
    title: "6. Disponibilitatea și actualizarea website-ului",
    paragraphs: [
      "Depunem eforturi rezonabile pentru menținerea funcționalității și actualității website-ului. Totuși, pot exista întreruperi temporare, operațiuni de mentenanță sau erori tehnice.",
      "Putem modifica, actualiza sau elimina informații și funcționalități ale website-ului, în limitele legislației aplicabile.",
      "Nu garantăm că website-ul va fi disponibil neîntrerupt sau că toate informațiile publicate vor fi lipsite de erori.",
    ],
  },
  {
    title: "7. Limitarea răspunderii",
    paragraphs: [
      "Informațiile de pe website sunt furnizate în scop general de prezentare. Deciziile comerciale luate exclusiv pe baza acestora aparțin persoanelor care le adoptă.",
      "În măsura permisă de lege, Venturas nu răspunde pentru prejudiciile cauzate exclusiv de utilizarea necorespunzătoare a website-ului, de indisponibilitatea temporară a acestuia sau de evenimente aflate în afara controlului său rezonabil.",
      "Nicio prevedere din prezentul document nu exclude sau limitează răspunderea în situațiile în care o asemenea excludere ori limitare este interzisă de lege.",
      "Eventualele obligații și răspunderi rezultate din prestarea serviciilor contractate sunt reglementate de acordurile încheiate între părți.",
    ],
  },
  {
    title: "8. Linkuri către website-uri externe",
    paragraphs: [
      "Website-ul poate conține linkuri către platforme sau website-uri administrate de terți, inclusiv rețele profesionale.",
      "Nu controlăm permanent conținutul, disponibilitatea sau practicile de confidențialitate ale acestor website-uri. Recomandăm consultarea propriilor condiții de utilizare și politici de confidențialitate.",
    ],
  },
  {
    title: "9. Protecția datelor personale",
    paragraphs: [
      "Prelucrarea datelor personale transmise prin website este descrisă în Politica de confidențialitate Venturas.",
      "Pentru informații privind categoriile de date colectate, scopurile prelucrării, furnizorii implicați și drepturile persoanelor vizate, vă rugăm să consultați documentul dedicat.",
    ],
  },
  {
    title: "10. Legislația aplicabilă",
    paragraphs: [
      "Prezentul document este guvernat de legislația română și de normele europene aplicabile.",
      "Eventualele neînțelegeri privind utilizarea website-ului vor fi soluționate, pe cât posibil, pe cale amiabilă. În caz contrar, acestea vor fi supuse instanțelor competente potrivit legii.",
      "Nicio prevedere nu afectează drepturile obligatorii conferite utilizatorilor de legislația aplicabilă.",
    ],
  },
  {
    title: "11. Modificarea termenilor și condițiilor",
    paragraphs: [
      "Putem actualiza prezentul document pentru a reflecta modificări legislative, tehnice sau operaționale.",
      "Versiunea actualizată va fi disponibilă pe această pagină, împreună cu data ultimei actualizări. Modificările nu afectează retroactiv drepturile și obligațiile stabilite prin contracte deja încheiate.",
    ],
  },
];

export default function TermeniSiConditii() {
  return (
    <>
      <Head>
        <title>Termeni și condiții | Venturas</title>
        <meta
          name="description"
          content="Consultă termenii și condițiile de utilizare a website-ului Venturas, informații despre serviciile B2B, proprietatea intelectuală și legislația aplicabilă."
        />
      </Head>

      <Navbar />

      <main className="bg-[#FFF9F5]">
        <section className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-20 h-80 w-80 rounded-full bg-[#F05B25]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
              Informații juridice
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.05em] text-[#16221D] sm:text-5xl lg:text-6xl">
              Termeni și condiții
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Informații privind utilizarea website-ului Venturas,
              serviciile prezentate și condițiile generale aplicabile.
            </p>

            <p className="mt-6 text-sm text-slate-500">
              Ultima actualizare: 17 noiembrie 2026
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-12">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="border-b border-slate-100 pb-10 last:border-b-0"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-[#00563A]">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="leading-8 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-[#FFF4EE] p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-[#16221D]">
                Ai întrebări?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Pentru informații suplimentare ne poți scrie la{" "}
                <a
                  href="mailto:contact@venturas.ro"
                  className="font-semibold text-[#00563A] underline underline-offset-4"
                >
                  contact@venturas.ro
                </a>
                .
              </p>

              <Link
                href="/politica-de-confidentialitate"
                className="mt-6 inline-flex rounded-xl bg-[#F05B25] px-6 py-4 font-semibold text-white transition hover:bg-[#D94F1C]"
              >
                Politica de confidențialitate
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
