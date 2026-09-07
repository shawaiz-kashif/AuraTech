import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software & Hardware Solutions Company",
  description:
    "Custom software, systems integration, and IT infrastructure — built and supported by one team, not three vendors.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header dark />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Technologies />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
