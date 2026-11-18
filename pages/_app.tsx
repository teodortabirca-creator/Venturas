
import "../styles/globals.css";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import type { AppProps } from "next/app";

import CookieConsent from "../components/CookieConsent";

const SITE_URL = "https://venturas.ro";
const GA_ID = "G-75MQ4JGXBP";
const CONSENT_KEY = "venturas_cookie_consent";

type Language = "ro" | "en";

type SeoEntry = {
  title: string;
  description: string;
  language: Language;
  alternatePath: string;
};

const seoPages: Record<string, SeoEntry> = {
  "/": {
    title: "Venturas – Dezvoltare Comercială B2B & Outreach",
    description:
      "Dezvoltăm oportunități comerciale B2B prin prospectare, campanii outbound, suport în vânzări și strategie comercială.",
    language: "ro",
    alternatePath: "/en",
  },

  "/procesul-nostru": {
    title: "Procesul nostru | Prospectare B2B – Venturas",
    description:
      "Descoperă procesul Venturas: definirea profilului clientului ideal, identificarea prospecților, campanii outbound personalizate și programarea întâlnirilor B2B.",
    language: "ro",
    alternatePath: "",
  },

  "/despre-noi": {
    title: "Despre Venturas – Partenerul Tău Comercial B2B",
    description:
      "Descoperă cum Venturas ajută companiile să identifice oportunități, să contacteze decidenți și să își dezvolte activitatea comercială.",
    language: "ro",
    alternatePath: "/en/about",
  },
  "/servicii": {
    title: "Servicii Outreach & Support B2B – Venturas",
    description:
      "Descoperă serviciile Venturas de prospectare B2B, campanii outbound, suport comercial, strategie, reprezentare și training de vânzări.",
    language: "ro",
    alternatePath: "/en/services",
  },
  "/contact": {
    title: "Contact Venturas – Dezvoltare Comercială B2B",
    description:
      "Contactează Venturas pentru a discuta obiectivele tale comerciale și serviciile de Outreach sau Support potrivite companiei tale.",
    language: "ro",
    alternatePath: "/en/contact",
  },
  "/politica-de-confidentialitate": {
    title: "Politica de confidențialitate | Venturas",
    description:
      "Află cum Venturas colectează, prelucrează, protejează și păstrează datele personale transmise prin website.",
    language: "ro",
    alternatePath: "/en/privacy-policy",
  },
  "/termeni-si-conditii": {
    title: "Termeni și condiții | Venturas",
    description:
      "Consultă termenii de utilizare a website-ului Venturas și informațiile generale despre serviciile oferite.",
    language: "ro",
    alternatePath: "/en/terms-and-conditions",
  },

  "/en": {
    title: "Venturas | B2B Business Development & Outreach",
    description:
      "Grow your business with B2B prospecting, outbound campaigns, sales support, and commercial strategy services tailored to your goals.",
    language: "en",
    alternatePath: "/",
  },
  "/en/about": {
    title: "About Venturas | Your B2B Growth Partner",
    description:
      "Discover how Venturas helps companies generate opportunities, reach decision-makers, and strengthen their commercial activities.",
    language: "en",
    alternatePath: "/despre-noi",
  },
  "/en/services": {
    title: "B2B Outreach & Sales Support Services | Venturas",
    description:
      "Explore B2B prospecting, outbound campaigns, sales support, event representation, commercial strategy, and sales training.",
    language: "en",
    alternatePath: "/servicii",
  },
  "/en/contact": {
    title: "Contact Venturas | B2B Business Development",
    description:
      "Get in touch with Venturas to discuss your commercial objectives and explore the right Outreach or Support services.",
    language: "en",
    alternatePath: "/contact",
  },
  "/en/privacy-policy": {
    title: "Privacy Policy | Venturas",
    description:
      "Learn how Venturas collects, processes, protects, and retains personal data submitted through its website.",
    language: "en",
    alternatePath: "/politica-de-confidentialitate",
  },
  "/en/terms-and-conditions": {
    title: "Terms & Conditions | Venturas",
    description:
      "Read the terms governing the use of the Venturas website and information about the services we provide.",
    language: "en",
    alternatePath: "/termeni-si-conditii",
  },
};

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: any[]) => void;
    [key: string]: any;
  }
}

function getAbsoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function deleteAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter(
      (name) =>
        name === "_ga" ||
        name.startsWith("_ga_") ||
        name === "_gid" ||
        name === "_gat" ||
        name.startsWith("_gat_")
    );

  const hostname = window.location.hostname;

  const domains = [
    "",
    hostname,
    `.${hostname}`,
    ".venturas.ro",
    "venturas.ro",
  ];

  cookieNames.forEach((name) => {
    domains.forEach((domain) => {
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ` +
        "path=/; SameSite=Lax" +
        (domain ? `; domain=${domain}` : "");
    });
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [analyticsReady, setAnalyticsReady] = useState(false);

  const scriptPromise = useRef<Promise<void> | null>(null);
  const previousPath = useRef<string | null>(null);

  const pathname = router.asPath.split(/[?#]/)[0] || "/";

  const normalizedPath =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  const seo = seoPages[normalizedPath];

  const language: Language =
    seo?.language ??
    (normalizedPath === "/en" || normalizedPath.startsWith("/en/")
      ? "en"
      : "ro");

  const title =
    seo?.title ??
    (language === "en"
      ? "Venturas | B2B Business Development"
      : "Venturas | Dezvoltare Comercială B2B");

  const description =
    seo?.description ??
    (language === "en"
      ? "B2B outreach, sales support, and commercial strategy services."
      : "Servicii de prospectare B2B, outbound și dezvoltare comercială.");

  const currentUrl = getAbsoluteUrl(normalizedPath);

  const romanianPath =
    language === "ro"
      ? normalizedPath
      : seo?.alternatePath;

  const englishPath =
    language === "en"
      ? normalizedPath
      : seo?.alternatePath;

  const ogImage = `${SITE_URL}/og-image.png`;

  useEffect(() => {
    const initializeGtag = () => {
      window.dataLayer = window.dataLayer || [];

      window.gtag = function () {
        window.dataLayer?.push(arguments);
      };

      window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });

      window.gtag("js", new Date());
    };

    initializeGtag();

    const updateConsent = () => {
      const allowed =
        localStorage.getItem(CONSENT_KEY) === "accepted";

      if (allowed) {
        window.gtag?.("consent", "update", {
          analytics_storage: "granted",
        });

        setAnalyticsAllowed(true);
      } else {
        window.gtag?.("consent", "update", {
          analytics_storage: "denied",
        });

        window[`ga-disable-${GA_ID}`] = true;

        deleteAnalyticsCookies();

        setAnalyticsAllowed(false);
      }
    };

    updateConsent();

    window.addEventListener(
      "venturas-consent-changed",
      updateConsent
    );

    return () => {
      window.removeEventListener(
        "venturas-consent-changed",
        updateConsent
      );
    };
  }, []);

  useEffect(() => {
    if (!analyticsAllowed) {
      setAnalyticsReady(false);
      return;
    }

    window[`ga-disable-${GA_ID}`] = false;

    if (!scriptPromise.current) {
      scriptPromise.current = new Promise<void>((resolve, reject) => {
        const existingScript = document.querySelector(
          'script[data-venturas-analytics="true"]'
        );

        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement("script");

        script.src =
          `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

        script.async = true;
        script.dataset.venturasAnalytics = "true";

        script.onload = () => resolve();

        script.onerror = () => {
          scriptPromise.current = null;
          reject(
            new Error("Google Analytics could not be loaded.")
          );
        };

        document.head.appendChild(script);
      });
    }

    scriptPromise.current
      .then(() => {
        setAnalyticsReady(true);
      })
      .catch((error) => {
        console.error(error);
        setAnalyticsReady(false);
      });
  }, [analyticsAllowed]);

  useEffect(() => {
    if (!analyticsAllowed || !analyticsReady) return;

    if (previousPath.current === router.asPath) return;

    previousPath.current = router.asPath;

    window.gtag?.("config", GA_ID, {
      page_path: router.asPath,
      send_page_view: true,
    });
  }, [analyticsAllowed, analyticsReady, router.asPath]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Venturas",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: ogImage,
        },
        description:
          "Venturas provides B2B prospecting, outreach, business development, and commercial support services.",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: "Venturas",
        url: SITE_URL,
        description:
          "B2B prospecting, outbound campaigns, sales support, commercial strategy, event representation, and sales training.",
        areaServed: {
          "@type": "Country",
          name: "Romania",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Venturas",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: ["ro-RO", "en"],
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="site-title">{title}</title>

        <meta
          name="description"
          content={description}
          key="site-description"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />

        <link
          rel="canonical"
          href={currentUrl}
          key="canonical"
        />

        {romanianPath && englishPath && (
          <>
            <link
              rel="alternate"
              hrefLang="ro"
              href={getAbsoluteUrl(romanianPath)}
              key="hreflang-ro"
            />

            <link
              rel="alternate"
              hrefLang="en"
              href={getAbsoluteUrl(englishPath)}
              key="hreflang-en"
            />

            <link
              rel="alternate"
              hrefLang="x-default"
              href={getAbsoluteUrl(romanianPath)}
              key="hreflang-default"
            />
          </>
        )}

        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Venturas"
        />

        <meta
          property="og:locale"
          content={language === "en" ? "en_US" : "ro_RO"}
          key="og-locale"
        />

        <meta
          property="og:url"
          content={currentUrl}
          key="og-url"
        />

        <meta
          property="og:title"
          content={title}
          key="og-title"
        />

        <meta
          property="og:description"
          content={description}
          key="og-description"
        />

        <meta
          property="og:image"
          content={ogImage}
        />

        <meta
          property="og:image:width"
          content="1200"
        />

        <meta
          property="og:image:height"
          content="630"
        />

        <meta
          property="og:image:alt"
          content={
            language === "en"
              ? "Venturas — B2B Business Development & Outreach"
              : "Venturas — Dezvoltare Comercială B2B"
          }
          key="og-image-alt"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={title}
          key="twitter-title"
        />

        <meta
          name="twitter:description"
          content={description}
          key="twitter-description"
        />

        <meta
          name="twitter:image"
          content={ogImage}
        />

        <meta
          name="twitter:image:alt"
          content={
            language === "en"
              ? "Venturas — B2B Business Development & Outreach"
              : "Venturas — Dezvoltare Comercială B2B"
          }
          key="twitter-image-alt"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </Head>

      <Component {...pageProps} />

      <CookieConsent />
    </>
  );
}
