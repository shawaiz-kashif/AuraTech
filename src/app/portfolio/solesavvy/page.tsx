import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SoleSavvy — E-Commerce Storefront",
  description:
    "A footwear e-commerce storefront concept — product browsing, cart, and favorites across men's, women's, and kids' categories.",
  path: "/portfolio/solesavvy",
});

export default function SoleSavvyPage() {
  return (
    <ProjectDetail
      kicker="Project"
      title="SoleSavvy — E-Commerce Storefront"
      subtitle="A footwear retail storefront concept, front to back — browsing, cart, and favorites."
      image="/images/portfolio-web/solesavvy.jpg"
      overview={[
        "SoleSavvy is an e-commerce storefront built around a footwear retailer — browsing by category (men, women, kids), product detail views, a shopping cart, and a favorites list.",
        "The build focuses on a clean shopping flow: category navigation, testimonials, and service highlights (shipping, quality assurance, support) laid out the way a real retail storefront would present them.",
      ]}
      features={[
        "Category-based product browsing (men's, women's, kids')",
        "Shopping cart and favorites/wishlist functionality",
        "Customer testimonials and service-highlight sections",
        "Newsletter signup and contact/about pages",
      ]}
    />
  );
}
