import FaqSection from "@/components/FaqSection";

const faqs = [
  {
    q: "Do you build native apps, cross-platform, or both?",
    a: "Both — we pick based on what the project actually needs. Native for iOS and Android when performance matters most, Flutter or React Native when one codebase across both platforms makes more sense.",
  },
  {
    q: "Do you handle App Store and Play Store submission?",
    a: "Yes. Testing, App Store and Play Store submission, and the fixes that come after launch are part of the process, not a separate ask.",
  },
  {
    q: "Does the app come with backend and infrastructure support?",
    a: "Yes — that's the difference. We handle the app and the backend/infrastructure it runs on, so performance and uptime are one team's responsibility, not split across vendors.",
  },
  {
    q: "What happens after the app is live?",
    a: "We keep maintaining it — updates, backend changes, and bug fixes included. Most agencies stop at launch; we don't.",
  },
  {
    q: "How do I get started?",
    a: "Reach out through the Contact page with your platform choices and requirements, and we'll follow up to talk through scope and timeline.",
  },
];

export default function Faq() {
  return <FaqSection faqs={faqs} />;
}
