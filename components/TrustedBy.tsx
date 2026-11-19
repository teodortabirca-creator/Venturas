
import Image from "next/image";
import { useRouter } from "next/router";

const companies = [
  {
    name: "Axes Software",
    logo: "/logos/logo-axes.svg",
    scale: 1,
    offsetY: 0,
  },
  {
    name: "Human Direct",
    logo: "/logos/HD_final.svg",
    scale: 1,
    offsetY: 0,
  },
  {
    name: "FOTC",
    logo: "/logos/logo-fotc.svg",
    scale: 1,
    offsetY: 0,
  },
  {
    name: "La Fleur Bohème",
    logo: "/logos/la-fleur-boheme.svg",
    scale: 3.5,
    offsetY: 22,
  },
  {
    name: "Mikon Systems",
    logo: "/logos/logo-mikon.svg",
    scale: 1,
    offsetY: 0,
  },
  {
    name: "Strata",
    logo: "/logos/logo-strata.svg",
    scale: 1,
    offsetY: 0,
  },
];

export default function TrustedBy() {
  const router = useRouter();

  const isEnglish =
    router.pathname === "/en" ||
    router.pathname.startsWith("/en/");

  const repeatedCompanies = [...companies, ...companies];

  return (
    <section className="overflow-hidden border-t border-slate-200 bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-extrabold tracking-[-0.04em] text-[#1F0B05] sm:text-5xl">
          {isEnglish ? "Trusted By" : "Au avut încredere în noi"}
        </h2>

        <div className="logo-viewport overflow-hidden">
          <div className="logo-track flex w-max gap-5">
            {repeatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="group flex h-36 w-[250px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#F05B25]/40 hover:shadow-lg sm:w-[280px] lg:w-[300px]"
              >
                {company.name === "Strata" ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={254}
                      height={47}
                      className="block h-auto w-full max-w-[240px] object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={200}
                    height={80}
                    style={{
                      transform: `translateY(${company.offsetY}px) scale(${company.scale})`,
                    }}
                    className="max-h-16 max-w-[75%] w-auto object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-track {
          animation: slideLogos 36s linear infinite;
        }

        .logo-viewport:hover .logo-track {
          animation-play-state: paused;
        }

        @keyframes slideLogos {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
