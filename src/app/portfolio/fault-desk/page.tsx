import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fault Desk — Issue Ticketing System",
  description:
    "A role-based IT issue ticketing system built with Flutter and Supabase, with automated email notifications.",
  path: "/portfolio/fault-desk",
});

export default function FaultDeskPage() {
  return (
    <ProjectDetail
      kicker="Project"
      title="Fault Desk — Issue Ticketing System"
      subtitle="An internal IT ticketing system with role-based access and automated notifications."
      image="/images/portfolio-mobile/issue-ticketing.png"
      imageBg="#ffffff"
      overview={[
        "Fault Desk is an IT issue ticketing system built for internal office use — employees report problems through a simple form, and admins track, prioritize, and resolve them from a dedicated panel.",
        "Role-based login sends admins straight to a dashboard and everyone else to the ticket submission form. When a ticket comes in, Supabase triggers an automated email notification via EmailJS so nothing sits unnoticed.",
      ]}
      features={[
        "Role-based authentication — separate flows for admins and regular users",
        "Admin dashboard with live stat cards and a tickets-per-department chart",
        "Ticket management: view, update status and priority on every submitted ticket",
        "User management — assign roles, create accounts, no public signup",
        "Automated email notification on ticket submission via EmailJS",
        "Row-Level Security on the database so access is scoped by role",
      ]}
      techStack={["Flutter", "Dart", "Supabase", "EmailJS"]}
      githubUrl="https://github.com/shawaiz-kashif/Issue-Ticketing-System"
    />
  );
}
