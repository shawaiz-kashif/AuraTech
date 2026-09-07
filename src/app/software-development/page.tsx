import Header from "@/components/Header";
import Hero from "@/components/software-development/Hero";
import Services from "@/components/software-development/Services";
import TechStack from "@/components/software-development/TechStack";
import Portfolio from "@/components/software-development/Portfolio";
import Faq from "@/components/software-development/Faq";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Custom Software Development",
  description:
    "ERP, CRM, and CMS systems, plus the integrations that connect them — software shaped around how your business runs.",
  path: "/software-development",
});

export default function SoftwareDevelopment() {
  return (
    <>
      <Header dark={false} />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Faq />
      <Footer />
    </>
  );
}
