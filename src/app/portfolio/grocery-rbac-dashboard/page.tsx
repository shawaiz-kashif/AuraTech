import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Grocery Store RBAC Dashboard",
  description:
    "A full-stack grocery store management dashboard with role-based access control, built with Flask and SQL Server.",
  path: "/portfolio/grocery-rbac-dashboard",
});

export default function GroceryRbacPage() {
  return (
    <ProjectDetail
      kicker="Project"
      title="Grocery Store RBAC Dashboard"
      subtitle="A full-stack management system with role-specific access for every level of staff."
      image="/images/portfolio-web/grocery-rbac.jpg"
      overview={[
        "This is a full-stack grocery store management dashboard built around Role-Based Access Control (RBAC) — different staff members (admin, manager, clerk, staff) see and can act on only what their role allows, from a single point-of-sale and inventory system.",
        "Secure login handles authentication, and the dashboard covers inventory management, billing, and reporting — the day-to-day operations a retail store actually needs, not just a demo CRUD app.",
      ]}
      features={[
        "Secure, role-based login with four distinct access levels (admin, manager, clerk, staff)",
        "Inventory management — add, update, and remove products by category",
        "Billing and transaction tracking",
        "Reporting for sales and business performance analysis",
      ]}
      techStack={["Flask", "Python", "SQL Server", "pyodbc", "HTML/CSS/JavaScript"]}
      githubUrl="https://github.com/shawaiz-kashif/grocery-store-rbac-dashboard"
    />
  );
}
