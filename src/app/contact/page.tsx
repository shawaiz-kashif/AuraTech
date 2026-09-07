import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Tell us about your project — web, mobile, or software development, systems integration, or IT infrastructure support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageBanner
        kicker="Get In Touch"
        title="Contact Us"
        subtitle="Tell us about your project and we'll get back to you shortly."
        image="/images/others/contact-desk.jpg"
      />
      <Contact />
      <Footer />
    </>
  );
}
