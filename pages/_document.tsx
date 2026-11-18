
import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

import type { DocumentContext } from "next/document";
import Document from "next/document";

type Props = {
  language: "ro" | "en";
};

export default function CustomDocument({
  language,
}: Props) {
  return (
    <Html lang={language}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

CustomDocument.getInitialProps = async (
  ctx: DocumentContext
) => {
  const initialProps = await Document.getInitialProps(ctx);

  const pathname = ctx.pathname || "/";

  const language =
    pathname === "/en" || pathname.startsWith("/en/")
      ? "en"
      : "ro";

  return {
    ...initialProps,
    language,
  };
};
