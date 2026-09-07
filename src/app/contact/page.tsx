import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import Faq from "@/components/contact/Faq";
import Footer from "@/components/Footer";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Tell us about your project — web, mobile, or software development, systems integration, or IT infrastructure support.",
  path: "/contact",
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact Us | ${SITE_NAME}`,
  url: `${SITE_URL}/contact`,
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Header />
      <PageBanner
        kicker="Get In Touch"
        title="Contact Us"
        subtitle="Tell us about your project and we'll get back to you shortly."
        image="/images/others/contact-desk.jpg"
      />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}
