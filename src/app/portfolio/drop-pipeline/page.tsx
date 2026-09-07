import ProjectDetail from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "D.R.O.P — Data Retrieval & Operations Pipeline",
  description:
    "A data ingestion and reporting pipeline — monitors runs, tracks change volume, and logs every insert, update, and delete.",
  path: "/portfolio/drop-pipeline",
});

export default function DropPipelinePage() {
  return (
    <ProjectDetail
      kicker="Project"
      title="D.R.O.P — Data Retrieval & Operations Pipeline"
      subtitle="An automated data ingestion pipeline with run monitoring and change tracking built in."
      image="/images/portfolio-software/drop.png"
      overview={[
        "D.R.O.P (Data Retrieval & Operations Pipeline) automates recurring data ingestion jobs — pulling records from a source system on a schedule and logging exactly what changed on every run.",
        "The dashboard tracks ingestion activity end to end: how many runs have completed, the success rate, how many rows were retrieved, and a breakdown of inserts, updates, and deletes per run — so a failed or partial sync is visible immediately instead of discovered days later.",
      ]}
      features={[
        "Scheduled ingestion runs with pass/fail tracking and a success-rate metric",
        "Insert / update / delete change volume charted per run",
        "Rows-retrieved tracking to catch partial or truncated syncs",
        "Run history with the ability to re-run a job on demand",
        "Aging report and storage detail views for the underlying data",
      ]}
      githubUrl="https://github.com/CSC-P2P/D.R.O.P"
    />
  );
}
