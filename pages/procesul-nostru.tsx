
import Head from "next/head";
import Process from "../components/Process";

export default function ProcesulNostruPage() {
  return (
    <>
      <Head>
        <title>Procesul nostru | Venturas</title>
        <meta
          name="description"
          content="Descoperă procesul Venturas: definirea profilului clientului ideal, identificarea prospecților, campanii personalizate și programarea întâlnirilor B2B."
        />
        <link
          rel="canonical"
          href="https://venturas.ro/procesul-nostru"
        />
      </Head>

      <main>
        <Process />
      </main>
    </>
  );
}
