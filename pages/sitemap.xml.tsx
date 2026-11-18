
import type { GetServerSideProps } from "next";

const SITE_URL = "https://venturas.ro";

const pagePairs = [
  ["/", "/en"],
  ["/despre-noi", "/en/about"],
  ["/servicii", "/en/services"],
  ["/contact", "/en/contact"],
  ["/politica-de-confidentialitate", "/en/privacy-policy"],
  ["/termeni-si-conditii", "/en/terms-and-conditions"],
];

const standalonePages = ["/procesul-nostru"];

function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateSitemap() {
  const pairedUrls = pagePairs.flatMap(([ro, en]) =>
    [ro, en].map((path) => {
      const loc = escapeXml(absoluteUrl(path));
      const roUrl = escapeXml(absoluteUrl(ro));
      const enUrl = escapeXml(absoluteUrl(en));

      return `
  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="${roUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${roUrl}" />
  </url>`;
    })
  );

  const standaloneUrls = standalonePages.map((path) => {
    const loc = escapeXml(absoluteUrl(path));

    return `
  <url>
    <loc>${loc}</loc>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...pairedUrls, ...standaloneUrls].join("\n")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
}) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  res.write(generateSitemap());
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
