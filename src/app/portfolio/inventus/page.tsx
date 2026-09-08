import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Inventus — IT Asset Inventory System",
  description:
    "An IT asset inventory system tracking hardware specs, assignment, and location across an organization's fleet of machines.",
  path: "/portfolio/inventus",
});

export default function InventusPage() {
  return (
    <ProjectDetail
      kicker="Project"
      title="Inventus — IT Asset Inventory System"
      subtitle="A searchable inventory of every machine on the network — specs, owner, and location in one table."
      image="/images/portfolio-software/inventus.png"
      overview={[
        "Inventus keeps a live inventory of an organization's IT hardware — every workstation's serial number, installed RAM, processor, assigned user, location, and when it was last collected — searchable and sortable from one dashboard.",
        "Rather than relying on a spreadsheet someone updates by hand, Inventus is built to answer \"who has this machine, and what's in it\" on demand, which matters most exactly when it's least convenient: during an audit, an incident, or a hardware refresh.",
      ]}
      features={[
        "Full system inventory: name, serial number, processor, installed RAM, collection date",
        "Assignment tracking — which user and location each machine belongs to",
        "Searchable, sortable, resizable columns across the entire fleet",
        "Admin view for managing inventory across the organization",
      ]}
    />
  );
}
