import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyVenturas from "../components/WhyVenturas";
import Process from "../components/Process";
import CTA from "../components/CTA";
import TrustedBy from "../components/TrustedBy";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyVenturas />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}