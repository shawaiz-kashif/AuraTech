import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Company from "@/components/about/Company";
import Method from "@/components/about/Method";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageBanner
        kicker="About Us"
        title="Software & Hardware, One Team"
        subtitle="Why AuraTech exists, and how we actually work."
        image="/images/others/server-room.jpg"
      />
      <Company />
      <Method />
      <Footer />
    </>
  );
}
