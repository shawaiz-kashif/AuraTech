import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PageBanner
        kicker="Our Work"
        title="Portfolio"
        subtitle="A look at the systems, integrations, and infrastructure work we've delivered."
      />
      <Portfolio contactHref="/contact" />
      <Footer />
    </>
  );
}
