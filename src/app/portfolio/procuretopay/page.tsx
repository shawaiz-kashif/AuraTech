import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "ProcureToPay — Purchase Request Management",
  description:
    "A purchase request and approval workflow system — department-based tracking from draft through approval.",
  path: "/portfolio/procuretopay",
});

export default function ProcureToPayPage() {
  return (
    <ProjectDetail
      kicker="Project"
      title="ProcureToPay — Purchase Request Management"
      subtitle="A procurement workflow system for tracking purchase requests from draft to approval."
      image="/images/portfolio-software/p2p.png"
      overview={[
        "ProcureToPay is a purchase request (PR) management system built to replace ad-hoc procurement tracking with a structured workflow. Each request moves through a clear status pipeline — draft, submitted, pending, approved, rejected, or returned — with full visibility into who requested what, for which department and cost center.",
        "The dashboard gives a single view across departments (Finance, IT, Administration and more), letting anyone check the status of a request without chasing an email thread.",
      ]}
      features={[
        "Purchase request lifecycle tracking: draft, submitted, pending, approved, rejected, returned",
        "Department and cost-center tagging on every request",
        "Searchable, filterable dashboard across all requests",
        "Purchase type classification (goods vs. services, and combinations)",
        "Per-user view scoped to what they've submitted or need to action",
      ]}
    />
  );
}
