
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhyVenturas from "../../components/WhyVenturas";
import Process from "../../components/Process";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export default function HomeEnglish() {
  return (
    <>
      <Navbar />

      <main>
        <Hero lang="en" />
        <WhyVenturas lang="en" />
        <Process lang="en" />
        <CTA lang="en" />
      </main>

      <Footer />
    </>
  );
}
