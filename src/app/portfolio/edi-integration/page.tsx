import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Study: EDI Integration",
  description:
    "How we built an automated, two-way EDI pipeline connecting a global healthcare distributor's ERP to Infor CloudSuite WMS.",
  path: "/portfolio/edi-integration",
});

const approach = [
  {
    icon: "fas fa-download",
    title: "Inbound flow",
    desc: "Order and shipment files sent by the client are automatically picked up, validated, and converted into the format our warehouse system understands.",
  },
  {
    icon: "fas fa-upload",
    title: "Outbound flow",
    desc: "Shipment confirmations, inventory balances, and order status updates are automatically generated and delivered back to the client's ERP.",
  },
  {
    icon: "fas fa-lock",
    title: "Secure file exchange",
    desc: "A dedicated, access-controlled SFTP server was set up specifically for this integration, following best practices for isolating client data.",
  },
  {
    icon: "fas fa-list-ol",
    title: "Structured rollout",
    desc: "Rather than attempting all interfaces at once, we prioritized the highest-impact document types first, validated each one against live data, and expanded coverage incrementally.",
  },
];

const interfaces = [
  "Inbound sales orders and advance shipment notices",
  "Outbound order confirmations and shipment notifications",
  "Inventory balance and stock status updates",
  "Sales return confirmations",
];

const results = [
  "Eliminated manual file handling for order and shipment data",
  "Reduced turnaround time between order receipt and warehouse processing",
  "Improved data accuracy by removing manual re-keying of order information",
  "Established a scalable integration framework that can extend to additional document types as the client's needs grow",
];

export default function EdiCaseStudy() {
  return (
    <>
      <Header />
      <PageBanner
        kicker="Case Study"
        title="Streamlining EDI Integration for a Global Healthcare Distribution Client"
        subtitle="An automated, two-way EDI pipeline connecting an ERP to a warehouse management platform — built for high-volume, time-sensitive shipments."
      />

      <section className="sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="sec-heading">
                <h2 className="mb15">The Challenge</h2>
              </div>
              <p>
                A global healthcare and pharmaceutical distribution company needed a reliable way
                to exchange order and inventory data between their ERP system and our client&apos;s
                warehouse management platform. Their existing process relied on manual file
                handling and ad-hoc data exchange, which slowed down operations and increased the
                risk of errors in high-volume, time-sensitive shipments.
              </p>
              <p>
                The goal was to build an automated, secure EDI (Electronic Data Interchange)
                pipeline that could handle multiple document types — purchase orders, sales
                orders, shipment confirmations, inventory updates, and stock adjustments — without
                manual intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="r-bg-a sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="sec-heading">
                <h2 className="mb15">Our Approach</h2>
              </div>
              <p className="mb30">
                We designed and implemented a two-way EDI integration connecting the client&apos;s
                ERP system with our warehouse management system (Infor CloudSuite WMS).
              </p>
              {approach.map((a) => (
                <div
                  className="ree-row-set mt20"
                  key={a.title}
                  style={{ display: "flex", gap: "16px" }}
                >
                  <i
                    className={a.icon}
                    style={{ fontSize: "22px", color: "#cc4925", marginTop: "4px" }}
                  ></i>
                  <div>
                    <h5 className="mb5">{a.title}</h5>
                    <p>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <div className="sec-heading">
                    <h2 className="mb15">Key Interfaces Delivered</h2>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {interfaces.map((item) => (
                      <li key={item} className="mt15" style={{ display: "flex", gap: "12px" }}>
                        <i
                          className="fas fa-check-circle"
                          style={{ color: "#cc4925", marginTop: "5px" }}
                        ></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6 m-mt30">
                  <div className="sec-heading">
                    <h2 className="mb15">Results</h2>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {results.map((item) => (
                      <li key={item} className="mt15" style={{ display: "flex", gap: "12px" }}>
                        <i
                          className="fas fa-check-circle"
                          style={{ color: "#cc4925", marginTop: "5px" }}
                        ></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="r-bg-c sec-pad">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="sec-heading">
                <h2 className="mb15">Why It Matters</h2>
              </div>
              <p className="mb30">
                For distribution and logistics operations, EDI isn&apos;t just about moving files
                — it&apos;s about making sure the right data reaches the right system, in the
                right format, at the right time. This project shows what we mean when we say we
                build enterprise-grade integrations that fit into a client&apos;s existing
                technology landscape with minimal disruption.
              </p>
              <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80">
                Talk to Us About Your Integration <i className="fas fa-arrow-right fa-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
