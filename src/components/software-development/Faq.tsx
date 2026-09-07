import FaqSection from "@/components/FaqSection";

const faqs = [
  {
    q: "Do you build custom software, or work with off-the-shelf platforms?",
    a: "Custom, built around how your business actually runs — inventory, billing, and operations in one place, not scattered across spreadsheets or forced into a generic template.",
  },
  {
    q: "Can you integrate our new system with what we already use?",
    a: "Yes — that's a core part of what we do. We connect ERP, WMS, and CRM systems so data moves automatically instead of by hand. It's work we've actually shipped, not theory — see our EDI integration case study.",
  },
  {
    q: "Do you handle both the software and where it runs?",
    a: "Yes. We build the backend, database, and APIs, and we also manage cloud migration and hosting — one team responsible for the whole stack, not separate vendors for the app and the infrastructure.",
  },
  {
    q: "What if we need a CMS our team can actually manage ourselves?",
    a: "That's the point of a content management system done right — your team updates content without waiting on a developer for every change.",
  },
  {
    q: "How do I get started?",
    a: "Reach out through the Contact page with a bit about your systems and what's not working. We'll follow up to talk through scope and next steps.",
  },
];

export default function Faq() {
  return <FaqSection faqs={faqs} />;
}
