
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sections = [
  {
    title: "1. General Information",
    paragraphs: [
      "The venturas.ro website is operated by VENTURAS SRL, a company registered in Romania, with its registered office at Str. Dreptății No. 8, Building 010, Entrance 2, Floor 3, Apartment 77, Sector 6, Bucharest, Romania, having the Unique Registration Code (CUI) 39301629 and Trade Register registration number J40/6205/2018.",
      "For questions regarding the website or the services presented, you may contact us at contact@venturas.ro.",
      "This document establishes the general terms governing access to and use of the venturas.ro website.",
    ],
  },
  {
    title: "2. Use of the Website",
    paragraphs: [
      "Visitors may use the website to access information about Venturas, the services offered, and available contact methods.",
      "Use of the website must comply with applicable legislation and the rights of third parties. Unauthorized access attempts, interference with website functionality, introduction of malicious code, and abusive use of the contact form are prohibited.",
      "We reserve the right to implement reasonable technical measures to prevent misuse and protect the security of the website.",
    ],
  },
  {
    title: "3. Services Presented",
    paragraphs: [
      "Venturas provides business-to-business services organized into two main categories:",
      "Outreach, including B2B prospect research, contact database development, outbound email and LinkedIn campaigns, cold calling, sales meeting scheduling, and commercial follow-up.",
      "Support, including commercial strategy development, sales process consulting, representation at industry events, and sales training.",
      "Service descriptions published on the website are provided for informational purposes and do not, in themselves, constitute a binding contractual offer.",
      "The specific scope of services, deliverables, prices, deadlines, and responsibilities associated with a collaboration are established separately through accepted commercial proposals and/or agreements concluded between the parties.",
    ],
  },
  {
    title: "4. Inquiries and Business Communications",
    paragraphs: [
      "Submitting an inquiry through the contact form or by email does not automatically result in the conclusion of a contract and does not oblige Venturas to accept a particular collaboration.",
      "We aim to respond to inquiries within a reasonable timeframe, without guaranteeing a specific response time.",
      "Visitors are responsible for the accuracy of the information they choose to submit.",
    ],
  },
  {
    title: "5. Intellectual Property",
    paragraphs: [
      "The text, graphics, website structure, visual identity, and original materials published on venturas.ro are protected by applicable intellectual property legislation, to the extent that the relevant rights belong to Venturas or the materials are used under appropriate licenses.",
      "Unauthorized copying, reproduction, distribution, or commercial exploitation of protected materials is prohibited, except where permitted by law or expressly authorized in writing.",
      "Trademarks, names, and materials belonging to third parties remain the property of their respective owners.",
    ],
  },
  {
    title: "6. Website Availability and Updates",
    paragraphs: [
      "We make reasonable efforts to maintain the functionality and accuracy of the website. However, temporary interruptions, maintenance activities, or technical errors may occur.",
      "We may modify, update, or remove website information and features, subject to applicable legislation.",
      "We do not guarantee uninterrupted website availability or that all published information will be free from errors.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    paragraphs: [
      "Information published on the website is provided for general informational purposes. Commercial decisions made solely on the basis of this information remain the responsibility of those making them.",
      "To the extent permitted by law, Venturas shall not be liable for damages arising exclusively from improper use of the website, its temporary unavailability, or events beyond its reasonable control.",
      "Nothing in this document excludes or limits liability where such exclusion or limitation is prohibited by law.",
      "Any obligations and liabilities arising from the provision of contracted services are governed by the agreements concluded between the parties.",
    ],
  },
  {
    title: "8. Links to External Websites",
    paragraphs: [
      "The website may contain links to platforms or websites operated by third parties, including professional networking platforms.",
      "We do not continuously control the content, availability, or privacy practices of these websites. We recommend reviewing their respective terms of use and privacy policies.",
    ],
  },
  {
    title: "9. Personal Data Protection",
    paragraphs: [
      "The processing of personal data submitted through the website is described in the Venturas Privacy Policy.",
      "For information regarding the categories of data collected, processing purposes, service providers involved, and the rights of data subjects, please consult the dedicated policy.",
    ],
  },
  {
    title: "10. Applicable Law",
    paragraphs: [
      "This document is governed by Romanian law and applicable European Union legislation.",
      "Any disputes concerning the use of the website shall, where possible, be resolved amicably. Otherwise, they shall be submitted to the competent courts in accordance with applicable law.",
      "Nothing in this document affects the mandatory rights granted to users under applicable legislation.",
    ],
  },
  {
    title: "11. Changes to the Terms & Conditions",
    paragraphs: [
      "We may update this document to reflect legislative, technical, or operational changes.",
      "The updated version will be available on this page, together with the date of the latest update.",
      "Changes shall not retroactively affect rights and obligations established under agreements already concluded.",
    ],
  },
];

export default function TermsAndConditionsEnglish() {
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
              Terms &amp; Conditions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Information regarding the use of the Venturas website,
              the services presented, and the applicable general terms.
            </p>

            <p className="mt-6 text-sm text-slate-500">
              Last updated: November 17, 2026
            </p>
          </div>
        </section>

        {/* Terms Sections */}
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

            {/* Final CTA */}
            <div className="mt-12 rounded-3xl bg-[#FFF4EE] p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-[#16221D]">
                Have Questions?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                For further information, contact us at{" "}
                <a
                  href="mailto:contact@venturas.ro"
                  className="font-semibold text-[#00563A] underline underline-offset-4"
                >
                  contact@venturas.ro
                </a>
                .
              </p>

              <Link
                href="/en/privacy-policy"
                className="mt-6 inline-flex rounded-xl bg-[#F05B25] px-6 py-4 font-semibold text-white transition hover:bg-[#D94F1C]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
