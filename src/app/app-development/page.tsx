import Header from "@/components/Header";
import Hero from "@/components/app-development/Hero";
import About from "@/components/app-development/About";
import Services from "@/components/app-development/Services";
import Portfolio from "@/components/app-development/Portfolio";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/app-development/Testimonials";
import AppDownload from "@/components/app-development/AppDownload";
import Contact from "@/components/app-development/Contact";
import Locations from "@/components/app-development/Locations";
import Footer from "@/components/Footer";

export default function AppDevelopment() {
  return (
    <>
      <Header dark={false} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <Testimonials />
      <AppDownload />
      <Contact />
      <Locations />
      <Footer />
    </>
  );
}
