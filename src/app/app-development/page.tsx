import Header from "@/components/Header";
import Hero from "@/components/app-development/Hero";
import About from "@/components/app-development/About";
import Services from "@/components/app-development/Services";
import Portfolio from "@/components/app-development/Portfolio";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/app-development/Testimonials";
import AppDownload from "@/components/app-development/AppDownload";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "iOS & Android App Development",
  description:
    "Native and cross-platform mobile apps from architecture to App Store submission — backed by real infrastructure support.",
  path: "/app-development",
});

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
      <Footer />
    </>
  );
}
