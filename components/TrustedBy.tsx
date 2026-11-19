
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

const repeatedCompanies = [
  ...companies,
  ...companies,
  ...companies,
];

const AUTO_SPEED = 0.55;
const RESUME_DELAY = 2000;

export default function TrustedBy() {
  const router = useRouter();

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const dragRef = useRef({
    active: false,
    lastX: 0,
    pointerId: -1,
  });

  const pauseUntilRef = useRef(0);
  const lastFrameRef = useRef(0);

  const isEnglish =
    router.pathname === "/en" ||
    router.pathname.startsWith("/en/");

  function pauseAutoScroll() {
    pauseUntilRef.current =
      performance.now() + RESUME_DELAY;
  }

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    let frameId = 0;
    let resizeObserver: ResizeObserver | null = null;

    const getSegmentWidth = () =>
      track.scrollWidth / 3;

    const normalizeScroll = () => {
      const segmentWidth = getSegmentWidth();

      if (!segmentWidth) return;

      if (viewport.scrollLeft < segmentWidth * 0.5) {
        viewport.scrollLeft += segmentWidth;
      } else if (
        viewport.scrollLeft >= segmentWidth * 1.5
      ) {
        viewport.scrollLeft -= segmentWidth;
      }
    };

    const initialize = () => {
      const segmentWidth = getSegmentWidth();

      if (segmentWidth) {
        viewport.scrollLeft = segmentWidth;
      }
    };

    initialize();

    resizeObserver = new ResizeObserver(() => {
      normalizeScroll();
    });

    resizeObserver.observe(viewport);

    const handleWheel = (event: WheelEvent) => {
      if (
        Math.abs(event.deltaX) >
        Math.abs(event.deltaY)
      ) {
        pauseAutoScroll();
        return;
      }

      event.preventDefault();

      viewport.scrollLeft += event.deltaY;
      pauseAutoScroll();
      normalizeScroll();
    };

    const handleTouchStart = () => {
      pauseAutoScroll();
    };

    const handleTouchMove = () => {
      pauseAutoScroll();
    };

    const handleTouchEnd = () => {
      pauseAutoScroll();
    };

    viewport.addEventListener(
      "wheel",
      handleWheel,
      { passive: false }
    );

    viewport.addEventListener(
      "touchstart",
      handleTouchStart,
      { passive: true }
    );

    viewport.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true }
    );

    viewport.addEventListener(
      "touchend",
      handleTouchEnd,
      { passive: true }
    );

    const animate = (time: number) => {
      if (!lastFrameRef.current) {
        lastFrameRef.current = time;
      }

      const delta = Math.min(
        time - lastFrameRef.current,
        50
      );

      lastFrameRef.current = time;

      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      const shouldPause =
        dragRef.current.active ||
        time < pauseUntilRef.current ||
        reducedMotion ||
        document.hidden;

      if (!shouldPause) {
        viewport.scrollLeft +=
          AUTO_SPEED * (delta / 16.67);
      }

      normalizeScroll();

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);

      resizeObserver?.disconnect();

      viewport.removeEventListener(
        "wheel",
        handleWheel
      );

      viewport.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      viewport.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      viewport.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      lastFrameRef.current = 0;
    };
  }, []);

  function handlePointerDown(
    event: ReactPointerEvent<HTMLDivElement>
  ) {
    pauseAutoScroll();

    if (
      event.pointerType !== "mouse" ||
      event.button !== 0
    ) {
      return;
    }

    const viewport = viewportRef.current;

    if (!viewport) return;

    dragRef.current = {
      active: true,
      lastX: event.clientX,
      pointerId: event.pointerId,
    };

    viewport.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(
    event: ReactPointerEvent<HTMLDivElement>
  ) {
    if (!dragRef.current.active) return;

    const viewport = viewportRef.current;

    if (!viewport) return;

    const delta =
      event.clientX - dragRef.current.lastX;

    dragRef.current.lastX = event.clientX;

    viewport.scrollLeft -= delta;

    pauseAutoScroll();
  }

  function handlePointerUp(
    event: ReactPointerEvent<HTMLDivElement>
  ) {
    dragRef.current.active = false;

    pauseAutoScroll();

    const viewport = viewportRef.current;

    if (
      viewport?.hasPointerCapture(event.pointerId)
    ) {
      viewport.releasePointerCapture(
        event.pointerId
      );
    }
  }

  return (
    <section className="overflow-hidden border-t border-slate-200 bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-extrabold tracking-[-0.04em] text-[#1F0B05] sm:text-5xl">
          {isEnglish
            ? "Trusted By"
            : "Au avut încredere în noi"}
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
          onClick={pauseAutoScroll}
          aria-label={
            isEnglish
              ? "Client and partner logos. Scroll or swipe horizontally to explore."
              : "Logo-urile clienților și partenerilor. Derulează sau glisează pentru a le explora."
          }
        >
          <div
            ref={trackRef}
            className="flex w-max gap-5"
          >
            {repeatedCompanies.map(
              (company, index) => (
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
              )
            )}
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
