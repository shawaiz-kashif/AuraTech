import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "QuickMart — Grocery Shopping App",
  description:
    "A Flutter grocery shopping app with product browsing, cart, and a Firebase backend.",
  path: "/portfolio/quickmart",
});

export default function QuickMartPage() {
  return (
    <ProjectDetail
      kicker="Project"
      title="QuickMart — Grocery Shopping App"
      subtitle="A mobile grocery ordering app built with Flutter and Firebase."
      image="/images/portfolio-mobile/grocery-app-2.jpg"
      imageBg="#ffffff"
      overview={[
        "QuickMart is a Flutter-based grocery shopping app — browse categories, check current promotions, and add products to a cart from a single home screen built around location-aware shopping.",
        "The app is structured around a clean separation of shared widgets, data models, and views, with Firebase handling the backend.",
      ]}
      features={[
        "Location-aware storefront (delivery area shown up front)",
        "Category browsing with featured offers and \"hot sellers\" sections",
        "Product detail pages with quantity selection and add-to-basket",
        "Cart, favorites, and account navigation from a persistent bottom nav",
      ]}
      techStack={["Flutter", "Dart", "Firebase"]}
      githubUrl="https://github.com/shawaiz-kashif/Flutter_grocery_app"
    />
  );
}
