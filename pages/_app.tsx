import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: any) {
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

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href="https://venturas.ro" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Venturas" />
        <meta property="og:url" content="https://venturas.ro" />

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />

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
                  "@id": "https://venturas.ro/#professional-service",
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

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-75MQ4JGXBP"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            window.dataLayer.push(arguments);
          }

          gtag('js', new Date());

          gtag('config', 'G-75MQ4JGXBP', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}