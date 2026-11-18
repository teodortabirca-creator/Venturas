
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Cine suntem",
    paragraphs: [
      "VENTURAS SRL, cu sediul social în Str. Dreptății nr. 8, bl. 010, sc. 2, et. 3, ap. 77, Sector 6, București, România, înregistrată la Registrul Comerțului sub nr. J40/6205/2018, având CUI 39301629, este operatorul datelor personale prelucrate prin intermediul website-ului venturas.ro.",
      "Pentru orice întrebare privind prelucrarea datelor personale, ne puteți contacta la contact@venturas.ro.",
    ],
  },
  {
    title: "2. Ce date personale colectăm",
    paragraphs: [
      "Prin formularul de contact putem colecta numele, adresa de email, denumirea companiei și informațiile incluse voluntar în mesaj.",
      "În cazul utilizării instrumentelor de analiză, pot fi prelucrate și informații tehnice privind dispozitivul, browserul, paginile vizitate și interacțiunile cu website-ul, în funcție de consimțământul exprimat și de configurarea serviciului.",
    ],
  },
  {
    title: "3. Scopurile și temeiurile prelucrării",
    paragraphs: [
      "Prelucrăm datele transmise prin formular pentru a răspunde solicitărilor, a discuta oportunități de colaborare și a gestiona comunicările comerciale inițiate de vizitatori.",
      "Temeiul juridic poate fi interesul legitim, conform art. 6 alin. (1) lit. f) din GDPR, sau efectuarea demersurilor precontractuale, conform art. 6 alin. (1) lit. b), atunci când solicitarea este făcută de persoana vizată în vederea încheierii unui contract.",
      "Pentru utilizarea Google Analytics și a tehnologiilor de analiză neesențiale, solicităm consimțământul vizitatorului înainte de activare, conform art. 6 alin. (1) lit. a) din GDPR și legislației aplicabile privind cookie-urile.",
    ],
  },
  {
    title: "4. Cui transmitem datele",
    paragraphs: [
      "Pentru transmiterea mesajelor din formularul de contact utilizăm serviciul Resend. Informațiile introduse în formular sunt transmise prin acest furnizor către adresa contact@venturas.ro.",
      "Pentru analiza traficului website-ului utilizăm Google Analytics, furnizat de Google, exclusiv în condițiile consimțământului exprimat de vizitator.",
      "Datele pot fi accesibile și furnizorilor tehnici necesari găzduirii, funcționării și securității website-ului, în măsura în care aceștia participă la prelucrare.",
      "Nu comercializăm datele personale colectate prin formularul de contact.",
    ],
  },
  {
    title: "5. Transferuri internaționale",
    paragraphs: [
      "Anumiți furnizori de servicii pot prelucra date personale în afara Spațiului Economic European. În aceste situații, transferurile trebuie realizate în baza unui mecanism legal aplicabil, precum o decizie de adecvare sau clauze contractuale standard, împreună cu măsurile suplimentare necesare, după caz.",
    ],
  },
  {
    title: "6. Cât timp păstrăm datele",
    paragraphs: [
      "Datele primite prin formularul de contact sunt păstrate, ca regulă generală, timp de 12 luni de la ultima interacțiune relevantă.",
      "În situația în care comunicarea conduce la o relație contractuală sau există obligații legale ori necesitatea justificată de a apăra drepturi, anumite informații pot fi păstrate pentru perioade mai lungi, în conformitate cu legislația aplicabilă.",
      "Datele prelucrate prin Google Analytics sunt supuse setărilor de retenție configurate în serviciul respectiv și preferințelor de consimțământ ale vizitatorului.",
    ],
  },
  {
    title: "7. Cookie-uri și tehnologii similare",
    paragraphs: [
      "Website-ul poate utiliza tehnologii strict necesare funcționării sale și, numai după exprimarea consimțământului, tehnologii de analiză a traficului prin Google Analytics.",
      "Vizitatorii pot accepta sau refuza cookie-urile neesențiale și își pot modifica ulterior preferințele prin mecanismul de gestionare a consimțământului disponibil pe website.",
      "Refuzul cookie-urilor de analiză nu împiedică utilizarea funcționalităților esențiale ale website-ului.",
    ],
  },
  {
    title: "8. Drepturile persoanelor vizate",
    paragraphs: [
      "Conform GDPR, persoanele vizate beneficiază, în condițiile prevăzute de lege, de dreptul de acces, rectificare, ștergere, restricționare a prelucrării, portabilitate a datelor și opoziție la prelucrare.",
      "Atunci când prelucrarea se bazează pe consimțământ, acesta poate fi retras în orice moment, fără a afecta legalitatea prelucrării efectuate anterior retragerii.",
      "Solicitările privind exercitarea drepturilor pot fi transmise la contact@venturas.ro. Vom răspunde în termenul prevăzut de GDPR, de regulă în cel mult o lună.",
      "Persoanele vizate au dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), prin www.dataprotection.ro, precum și de a se adresa instanțelor competente.",
    ],
  },
  {
    title: "9. Securitatea datelor",
    paragraphs: [
      "Aplicăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor personale împotriva accesului neautorizat, pierderii, divulgării sau modificării nepermise, ținând cont de natura datelor și de riscurile asociate prelucrării.",
    ],
  },
  {
    title: "10. Modificarea politicii",
    paragraphs: [
      "Putem actualiza această politică pentru a reflecta modificări legislative, tehnice sau operaționale. Versiunea actualizată va fi publicată pe această pagină, împreună cu data ultimei actualizări.",
    ],
  },
];

export default function PoliticaDeConfidentialitate() {
  return (
    <>
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
              Politica de confidențialitate
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Respectăm confidențialitatea datelor tale și explicăm
              transparent cum le utilizăm atunci când interacționezi
              cu website-ul Venturas.
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
                Ai întrebări despre datele tale?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Ne poți contacta la{" "}
                <a
                  href="mailto:contact@venturas.ro"
                  className="font-semibold text-[#00563A] underline underline-offset-4"
                >
                  contact@venturas.ro
                </a>
                .
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-xl bg-[#F05B25] px-6 py-4 font-semibold text-white transition hover:bg-[#D94F1C]"
              >
                Pagina de contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
