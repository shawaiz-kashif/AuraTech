import Header from "@/components/Header";
import Hero from "@/components/web-development/Hero";
import Services from "@/components/web-development/Services";
import TechStack from "@/components/web-development/TechStack";
import Portfolio from "@/components/web-development/Portfolio";
import ClientPortals from "@/components/web-development/ClientPortals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function WebDevelopment() {
  return (
    <>
      <Header dark={false} />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <ClientPortals />
      <Contact />
      <Footer />
    </>
  );
}
