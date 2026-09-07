import FaqSection from "@/components/FaqSection";

const faqs = [
  {
    q: "What's your actual process for building a website?",
    a: "We start with your requirements and platform choices, design the UI/UX, build and test the site, then launch it. Once it's live, we keep maintaining it — updates, backend changes, and bug fixes included. See how we work in detail on our About page.",
  },
  {
    q: "Do you build custom sites, or do you use templates?",
    a: "Custom. Every site is built from scratch around how your business actually works — not squeezed into a template.",
  },
  {
    q: "What's a client portal, and do I need one?",
    a: "A client portal is a secure, login-protected space where your clients can check status, share files, and get answers without another email thread. If you're currently managing client updates over email or calls, it's worth talking about.",
  },
  {
    q: "Can you connect our website to systems we already use?",
    a: "Yes — CRM, ERP, or other internal systems. We connect your website or portal to the tools you already run so data stays in sync instead of being entered twice.",
  },
  {
    q: "What happens after the site launches?",
    a: "We don't disappear. Website maintenance and support — updates, fixes, and changes — are handled by the same team that built it.",
  },
];

export default function Faq() {
  return <FaqSection faqs={faqs} />;
}
