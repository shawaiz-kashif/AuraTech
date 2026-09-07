import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Company from "@/components/about/Company";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import Method from "@/components/about/Method";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Why AuraTech exists and how we work — one team building the software and running the infrastructure behind it.",
  path: "/about",
});

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
      <Team />
      <Values />
      <Method />
      <Footer />
    </>
  );
}
