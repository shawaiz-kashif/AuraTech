import FaqSection from "@/components/FaqSection";

const faqs = [
  {
    q: "What's the best way to reach AuraTech?",
    a: "Phone, WhatsApp, email, or Skype — whichever's easiest for you. All the channels are listed on this page.",
  },
  {
    q: "What should I include in my message?",
    a: "A short description of your project, what you need built or fixed, and any timeline you're working with. More context means a faster, more useful response.",
  },
  {
    q: "Do you handle both software and hardware/infrastructure inquiries here?",
    a: "Yes — whether it's a web, mobile, or software project, systems integration, or server and network support, this is the right place to start.",
  },
  {
    q: "I'm not sure which service I need — can I still reach out?",
    a: "Yes. Tell us what you're trying to solve and we'll help figure out the right approach.",
  },
];

export default function Faq() {
  return <FaqSection faqs={faqs} />;
}
