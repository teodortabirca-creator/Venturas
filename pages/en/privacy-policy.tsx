
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sections = [
  {
    title: "1. Who We Are",
    paragraphs: [
      "VENTURAS SRL, with its registered office at Str. Dreptății No. 8, Building 010, Entrance 2, Floor 3, Apartment 77, Sector 6, Bucharest, Romania, registered with the Romanian Trade Register under No. J40/6205/2018, having the Unique Registration Code (CUI) 39301629, is the controller of the personal data processed through the venturas.ro website.",
      "For any questions regarding the processing of personal data, you may contact us at contact@venturas.ro.",
    ],
  },
  {
    title: "2. What Personal Data We Collect",
    paragraphs: [
      "Through our contact form, we may collect your name, email address, company name, and any information you voluntarily include in your message.",
      "When analytics tools are used, technical information concerning your device, browser, visited pages, and interactions with the website may also be processed, depending on your consent and the configuration of the relevant services.",
    ],
  },
  {
    title: "3. Purposes and Legal Bases for Processing",
    paragraphs: [
      "We process information submitted through our contact form to respond to inquiries, discuss potential collaborations, and manage business communications initiated by visitors.",
      "The legal basis for processing may be legitimate interests, under Article 6(1)(f) of the GDPR, or taking steps prior to entering into a contract, under Article 6(1)(b), where the request is made by the data subject for the purpose of entering into a contract.",
      "For Google Analytics and non-essential analytics technologies, we request visitors' consent before activation, in accordance with Article 6(1)(a) of the GDPR and applicable cookie legislation.",
    ],
  },
  {
    title: "4. Who We Share Your Data With",
    paragraphs: [
      "We use Resend to transmit messages submitted through the contact form. Information entered into the form is transmitted through this provider to contact@venturas.ro.",
      "We use Google Analytics, provided by Google, to analyze website traffic, exclusively where the visitor has provided the relevant consent.",
      "Data may also be accessible to technical service providers involved in website hosting, operation, and security, to the extent necessary for their processing activities.",
      "We do not sell personal data collected through the contact form.",
    ],
  },
  {
    title: "5. International Data Transfers",
    paragraphs: [
      "Certain service providers may process personal data outside the European Economic Area.",
      "In such cases, transfers must be based on an applicable legal mechanism, such as an adequacy decision or Standard Contractual Clauses, together with any necessary supplementary safeguards, where applicable.",
    ],
  },
  {
    title: "6. How Long We Retain Your Data",
    paragraphs: [
      "As a general rule, data received through the contact form is retained for 12 months following the last relevant interaction.",
      "Where communications lead to a contractual relationship, or where legal obligations or a legitimate need to defend legal rights exist, certain information may be retained for longer periods, in accordance with applicable legislation.",
      "Data processed through Google Analytics is subject to the retention settings configured within that service and the visitor's consent preferences.",
    ],
  },
  {
    title: "7. Cookies and Similar Technologies",
    paragraphs: [
      "The website may use technologies strictly necessary for its operation and, only after consent has been provided, traffic analytics technologies through Google Analytics.",
      "Visitors may accept or reject non-essential cookies and subsequently change their preferences through the consent management mechanism available on the website.",
      "Rejecting analytics cookies does not prevent visitors from using the website's essential features.",
    ],
  },
  {
    title: "8. Your Rights",
    paragraphs: [
      "Under the GDPR, data subjects have, subject to applicable legal conditions, the right of access, rectification, erasure, restriction of processing, data portability, and objection to processing.",
      "Where processing is based on consent, that consent may be withdrawn at any time without affecting the lawfulness of processing carried out before its withdrawal.",
      "Requests to exercise these rights may be submitted to contact@venturas.ro. We will respond within the timeframe established by the GDPR, generally within one month.",
      "Data subjects also have the right to lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP), through www.dataprotection.ro, and to seek remedies before the competent courts.",
    ],
  },
  {
    title: "9. Data Security",
    paragraphs: [
      "We implement appropriate technical and organizational measures to protect personal data against unauthorized access, loss, disclosure, or unauthorized modification, taking into account the nature of the data and the risks associated with processing.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    paragraphs: [
      "We may update this policy to reflect legislative, technical, or operational changes.",
      "The updated version will be published on this page, together with the date of the latest update.",
    ],
  },
];

export default function PrivacyPolicyEnglish() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFF9F5]">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
          <div
            aria-hidden="true"
            className="absolute -right-32 -top-20 h-80 w-80 rounded-full bg-[#F05B25]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
              Legal Information
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.05em] text-[#16221D] sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We respect your privacy and explain transparently how
              we use your personal data when you interact with the
              Venturas website.
            </p>

            <p className="mt-6 text-sm text-slate-500">
              Last updated: November 17, 2026
            </p>
          </div>
        </section>

        {/* Policy Sections */}
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

            {/* Contact CTA */}
            <div className="mt-12 rounded-3xl bg-[#FFF4EE] p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-[#16221D]">
                Questions About Your Personal Data?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                You can contact us at{" "}
                <a
                  href="mailto:contact@venturas.ro"
                  className="font-semibold text-[#00563A] underline underline-offset-4"
                >
                  contact@venturas.ro
                </a>
                .
              </p>

              <Link
                href="/en/contact"
                className="mt-6 inline-flex rounded-xl bg-[#F05B25] px-6 py-4 font-semibold text-white transition hover:bg-[#D94F1C]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
