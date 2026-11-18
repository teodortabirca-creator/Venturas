
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

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TrustedBy from "../../components/TrustedBy";

export default function AboutEnglish() {
  const capabilities = [
    {
      title: "B2B Prospecting",
      text: "We identify relevant companies and decision-makers and develop personalized outreach campaigns.",
      icon: Search,
    },
    {
      title: "Business Development",
      text: "We generate sales meetings and, depending on the level of involvement selected, support commercial opportunities through to contract signing.",
      icon: Users,
    },
    {
      title: "Strategic & Operational Support",
      text: "We help companies develop their commercial strategies, capabilities, and sales activities.",
      icon: Send,
    },
  ];

  const deliverables = [
    {
      title: "Relevant prospect and decision-maker databases",
      icon: UsersRound,
    },
    {
      title: "Personalized outbound campaigns",
      icon: MessageSquare,
    },
    {
      title: "Qualified sales meetings",
      icon: ListChecks,
    },
    {
      title: "Sales process support",
      icon: TrendingUp,
    },
    {
      title: "Commercial strategy and infrastructure",
      icon: Settings2,
    },
    {
      title: "Event representation and sales training",
      icon: BarChart3,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#FFF4EE]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#FFF4EE] px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                About Venturas
              </p>

              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-[#16221D] sm:text-6xl lg:text-7xl">
                We support B2B business development through prospecting,
                strategy, and hands-on sales involvement.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                Venturas helps companies identify new business opportunities,
                reach the right decision-makers, and grow their sales
                operations through Outreach and Support services tailored to
                each business&apos;s objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="bg-[#FFF4EE] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                  Why We Exist
                </p>

                <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#16221D] sm:text-5xl">
                  To support sales efforts where they&apos;re needed most.
                </h2>
              </div>

              <div className="border-l border-[#F05B25]/60 pl-7 sm:pl-10">
                <div className="space-y-6 text-lg leading-8 text-slate-600">
                  <p>
                    Many companies offer competitive products and services
                    but don&apos;t always have the time, resources, or
                    commercial expertise needed to consistently identify
                    new opportunities and turn them into business
                    relationships.
                  </p>

                  <p>
                    Venturas complements these resources through
                    prospecting, outbound campaigns, sales process
                    support, commercial strategy consulting, event
                    representation, and sales training.
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

        {/* What You Get */}
        <section className="bg-[#00563A] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F05B25]">
                  What You Get
                </p>

                <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                  Clearly defined services. Support tailored to your goals.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                  Whether you need a prospect database, fully managed
                  outbound campaigns, or support in developing your
                  commercial activities, each service comes with clearly
                  defined objectives and deliverables.
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

        {/* Book a Consultation */}
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
                  Book a Consultation
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Ready to take your business development further?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                  We start by understanding your objectives, challenges,
                  and available resources to identify the right approach
                  for our collaboration.
                </p>
              </div>

              <Link
                href="/en/contact"
                className="relative mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F05B25] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94F1C] lg:mt-0"
              >
                Book a Consultation
                <ArrowRight size={19} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <div className="bg-[#FFF4EE]">
          <TrustedBy />
        </div>
      </main>

      <Footer />
    </>
  );
}
