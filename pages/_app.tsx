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
      </Head>
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