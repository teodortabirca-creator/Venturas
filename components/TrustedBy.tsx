import Image from "next/image";

export default function TrustedBy() {
  const companies = [
    {
      name: "Axes Software",
      logo: "/logos/logo-axes.svg",
    },
    {
      name: "Human Direct",
      logo: "/logos/HD_final.svg",
    },
    {
      name: "FOTC",
      logo: "/logos/logo-fotc.svg",
    },
  ];

  return (
    <section className="border-t border-slate-200 bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
     

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-[#1F0B05] sm:text-5xl">
            Au avut încredere în noi
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {companies.map((company) => (
              <div
                key={company.name}
                className="group flex h-36 items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F05B25]/40 hover:shadow-lg"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={170}
                  height={60}
                  className="max-h-14 w-auto object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}