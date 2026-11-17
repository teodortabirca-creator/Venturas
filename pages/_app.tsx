
import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import type { AppProps } from "next/app";
import CookieConsent from "../components/CookieConsent";

const SITE_URL = "https://venturas.ro";
const GA_ID = "G-75MQ4JGXBP";
const CONSENT_KEY = "venturas_cookie_consent";

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: any[]) => void;
    [key: string]: any;
  }
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

  const paths = ["/"];

  cookieNames.forEach((name) => {
    domains.forEach((domain) => {
      paths.forEach((path) => {
        document.cookie =
          `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ` +
          `path=${path}; SameSite=Lax` +
          (domain ? `; domain=${domain}` : "");
      });
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

  const currentUrl =
    normalizedPath === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${normalizedPath}`;

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
          `script[data-venturas-analytics="true"]`
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
          reject(new Error("Google Analytics nu s-a încărcat."));
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

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Venturas | Prospectare B2B și Lead Generation</title>

        <meta
          name="description"
          content="Transformăm prospectarea B2B în oportunități comerciale prin lead generation, outreach și programarea întâlnirilor cu decidenți."
        />

        <meta
          name="keywords"
          content="lead generation, prospectare B2B, generare leaduri, outbound sales, programare întâlniri, business development"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* Canonical individual pentru fiecare pagină */}
        <link
          rel="canonical"
          href={currentUrl}
          key="canonical"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Venturas" />

        <meta
          property="og:url"
          content={currentUrl}
          key="og:url"
        />

        <meta
          property="og:title"
          content="Venturas | Prospectare B2B și Lead Generation"
        />

        <meta
          property="og:description"
          content="Transformăm prospectarea B2B în oportunități comerciale prin lead generation, outreach și programarea întâlnirilor cu decidenți."
        />

        <meta
          property="og:image"
          content="https://venturas.ro/og-image.png"
        />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          property="og:image:alt"
          content="Venturas — Transformăm prospectarea B2B în oportunități comerciale"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Venturas | Prospectare B2B și Lead Generation"
        />

        <meta
          name="twitter:description"
          content="Transformăm prospectarea B2B în oportunități comerciale prin lead generation, outreach și programarea întâlnirilor cu decidenți."
        />

        <meta
          name="twitter:image"
          content="https://venturas.ro/og-image.png"
        />

        <meta
          name="twitter:image:alt"
          content="Venturas — Transformăm prospectarea B2B în oportunități comerciale"
        />

        {/* Fonts */}
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://venturas.ro/#organization",
                  name: "Venturas",
                  url: "https://venturas.ro",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://venturas.ro/og-image.png",
                  },
                  description:
                    "Venturas ajută companiile să genereze oportunități comerciale prin prospectare B2B, lead generation și appointment setting.",
                },
                {
                  "@type": "ProfessionalService",
                  "@id":
                    "https://venturas.ro/#professional-service",
                  name: "Venturas",
                  url: "https://venturas.ro",
                  description:
                    "Servicii de prospectare B2B, lead generation, outreach și programarea întâlnirilor cu decidenți.",
                  areaServed: {
                    "@type": "Country",
                    name: "România",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://venturas.ro/#website",
                  url: "https://venturas.ro",
                  name: "Venturas",
                  publisher: {
                    "@id": "https://venturas.ro/#organization",
                  },
                  inLanguage: "ro-RO",
                },
              ],
            }),
          }}
        />
      </Head>

      <Component {...pageProps} />

      <CookieConsent />
    </>
  );
}
