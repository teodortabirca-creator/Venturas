
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const services = [
  {
    title: "Prospecting",
    price: "€250",
    billing: "One-time fee",
    description:
      "We build a structured database of companies and decision-makers aligned with your project's commercial criteria.",
    features: [
      "Defining prospect selection criteria",
      "Identifying relevant companies",
      "Identifying key decision-makers",
      "Delivering a structured prospect database",
    ],
  },
  {
    title: "Execution",
    price: "€500",
    billing: "/ Month",
    description:
      "We establish the foundation needed to launch consistent, measurable outbound campaigns.",
    features: [
      "Clarifying your offering and objectives",
      "Executing outbound email and LinkedIn campaigns",
      "Campaign monitoring and optimization",
      "Weekly reporting",
      "Scheduling sales meetings",
    ],
  },
  {
    title: "Sales",
    price: "€1,000",
    billing: "/ Month",
    description:
      "We manage the B2B prospecting process through email, LinkedIn, and phone calls, participate in the sales meetings generated, and actively follow up on opportunities through to contract signing.",
    features: [
      "Email & LinkedIn campaigns",
      "Cold calling",
      "Sales meeting support",
      "Follow-up through to contract signing",
    ],
  },
];

const supportServices = [
  {
    title: "Commercial Strategy",
    price: "Custom Pricing",
    billing: "",
    description:
      "We design the commercial infrastructure needed to build effective prospecting and sales processes, tailored to your company's objectives and business model.",
    features: [
      "Commercial and market analysis",
      "Commercial strategy and positioning",
      "Sales processes and infrastructure",
      "Sales materials and commercial assets",
    ],
  },
  {
    title: "Event Representation",
    price: "€100",
    billing: "/ Day + 5% of contracts signed at the booth",
    description:
      "We familiarize ourselves with your brand, products, and services and represent your company at industry events, with the goal of generating business opportunities and securing new contracts.",
    features: [
      "On-site booth representation",
      "Proactive visitor engagement",
      "Contact information collection",
      "Company and product presentations",
      "Follow-up to arrange sales meetings",
    ],
  },
  {
    title: "Sales Training",
    price: "€1,000",
    billing: "/ 3 Days",
    description:
      "A sales training program tailored to your company's specific needs, structured across three days of theory, practical application, and evaluation, with a focus on sales methodologies, communication, and the development of commercial skills.",
    features: [
      "Training in sales methodologies, soft skills, and context-specific commercial approaches",
      "Day 1 – Theory: Sales principles, procedures, and methodologies",
      "Day 2 – Practice: Applying sales methodologies through relevant exercises and business scenarios",
      "Day 3 – Evaluation: Assessing skills, providing feedback, and identifying improvements",
      "A training manual covering the methodologies, exercises, and materials presented",
      "A follow-up evaluation meeting two months after the training",
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
  const isCustomPrice = service.price === "Custom Pricing";

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
        href="/en/contact"
        className="mt-10 inline-flex items-center justify-center rounded-xl border border-[#F05B25]/45 bg-[#FFFCFA] px-5 py-3.5 text-sm font-semibold text-[#16221D] transition-all duration-300 hover:border-[#F05B25] hover:text-[#F05B25]"
      >
        Book a Consultation
      </Link>
    </article>
  );
}

export default function ServicesEnglish() {
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
                Our Services
              </p>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[#16221D] sm:text-5xl lg:text-6xl">
                Business development services tailored to your goals.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                From identifying prospects and generating sales meetings to
                supporting the sales process, developing commercial
                strategies, and training sales teams, we offer services
                built around your company&apos;s needs.
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
                We identify the right companies, initiate conversations
                with relevant decision-makers, and generate business
                opportunities through personalized outbound campaigns.
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
                We help companies strengthen their commercial activities
                through strategy, direct representation, and sales
                training, with services tailored to each organization&apos;s
                needs.
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
