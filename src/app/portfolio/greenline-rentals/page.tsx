import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "GREENLINE Rentals — Car Rental Management",
  description:
    "A car rental fleet and booking management system built with Next.js — dashboard, quick booking flow, customer and payment tracking.",
  path: "/portfolio/greenline-rentals",
});

export default function GreenlineRentalsPage() {
  return (
    <ProjectDetail
      kicker="Project"
      title="GREENLINE Rentals — Car Rental Management"
      subtitle="A fleet and booking management system for a car rental operation."
      image="/images/portfolio-software/rental-system.png"
      overview={[
        "GREENLINE Rentals is a car rental management platform covering the day-to-day operations of running a rental fleet — bookings, vehicle registration, customer records, payments, and maintenance — from a single admin dashboard.",
        "The dashboard's Quick Booking flow lets an operator pick rental dates, check live vehicle availability, and create a booking in a few clicks, with the booking cart and estimated totals updating as cars are selected.",
      ]}
      features={[
        "Quick Booking flow with live availability checking across the fleet",
        "Customer and car registration, with per-customer rental history",
        "Payments and maintenance tracking tied to each vehicle",
        "Investor, agreement, and user management modules for back-office operations",
        "Role-based administration and reporting",
      ]}
      techStack={["Next.js"]}
      githubUrl="https://github.com/Rental-System-m/rental-next"
    />
  );
}
