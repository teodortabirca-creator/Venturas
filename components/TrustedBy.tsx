
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

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

const repeatedCompanies = [...companies, ...companies, ...companies];

export default function TrustedBy() {
  const router = useRouter();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const dragRef = useRef({
    active: false,
    lastX: 0,
  });

  const isEnglish =
    router.pathname === "/en" ||
    router.pathname.startsWith("/en/");

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const getSegmentWidth = () => track.scrollWidth / 3;

    const initialize = () => {
      const segmentWidth = getSegmentWidth();

      if (segmentWidth > 0) {
        viewport.scrollLeft = segmentWidth;
      }
    };

    const normalize = () => {
      const segmentWidth = getSegmentWidth();
      if (!segmentWidth) return;

      if (viewport.scrollLeft < segmentWidth * 0.5) {
        viewport.scrollLeft += segmentWidth;
      } else if (viewport.scrollLeft >= segmentWidth * 1.5) {
        viewport.scrollLeft -= segmentWidth;
      }
    };

    initialize();

    viewport.addEventListener("scroll", normalize, { passive: true });

    const resizeObserver = new ResizeObserver(initialize);
    resizeObserver.observe(viewport);

    return () => {
      viewport.removeEventListener("scroll", normalize);
      resizeObserver.disconnect();
    };
  }, []);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    dragRef.current.active = true;
    dragRef.current.lastX = event.clientX;

    viewport.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    const delta = event.clientX - dragRef.current.lastX;
    dragRef.current.lastX = event.clientX;

    viewport.scrollLeft -= delta;
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    dragRef.current.active = false;

    const viewport = viewportRef.current;

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <section className="overflow-hidden border-t border-slate-200 bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-extrabold tracking-[-0.04em] text-[#1F0B05] sm:text-5xl">
          {isEnglish ? "Trusted By" : "Au avut încredere în noi"}
        </h2>

        <div
          ref={viewportRef}
          className="logo-viewport cursor-grab overflow-x-auto overflow-y-hidden active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          aria-label={
            isEnglish
              ? "Client and partner logos. Swipe horizontally to explore."
              : "Logo-urile clienților și partenerilor. Glisează orizontal pentru a le explora."
          }
        >
          <div ref={trackRef} className="flex w-max gap-5">
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
                      draggable={false}
                      className="block h-auto w-full max-w-[240px] object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={200}
                    height={80}
                    draggable={false}
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
        .logo-viewport::-webkit-scrollbar {
          display: none;
        }

        .logo-viewport {
          overscroll-behavior-x: contain;
        }

        @media (pointer: coarse) {
          .logo-viewport {
            cursor: auto;
          }
        }
      `}</style>
    </section>
  );
}
