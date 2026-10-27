import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Services from "@/components/Services";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Packages />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
