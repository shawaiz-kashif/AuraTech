import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Technologies />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
