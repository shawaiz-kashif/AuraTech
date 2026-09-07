import Header from "@/components/Header";
import Hero from "@/components/web-development/Hero";
import Services from "@/components/web-development/Services";
import TechStack from "@/components/web-development/TechStack";
import Portfolio from "@/components/web-development/Portfolio";
import ClientPortals from "@/components/web-development/ClientPortals";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web Development Services",
  description:
    "Custom business websites and client portals — clean code, fast load times, and a site your team can actually manage.",
  path: "/web-development",
});

export default function WebDevelopment() {
  return (
    <>
      <Header dark={false} />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <ClientPortals />
      <Footer />
    </>
  );
}
