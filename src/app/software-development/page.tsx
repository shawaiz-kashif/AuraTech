import Header from "@/components/Header";
import Hero from "@/components/software-development/Hero";
import Services from "@/components/software-development/Services";
import TechStack from "@/components/software-development/TechStack";
import Portfolio from "@/components/software-development/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function SoftwareDevelopment() {
  return (
    <>
      <Header dark={false} />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
