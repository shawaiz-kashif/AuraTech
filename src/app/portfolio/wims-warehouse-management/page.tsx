import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Study: WIMS Warehouse & Billing Platform",
  description:
    "How we built WiMS — a platform unifying warehouse operations, rate management, and client billing for a global 3PL provider.",
  path: "/portfolio/wims-warehouse-management",
});

const challenges = [
  "Rate structures and contract terms for each client lived outside any system of record, making them slow to update and easy to apply inconsistently.",
  "Storage billing that depends on fluctuating warehouse space usage is inherently hard to track by hand, and small errors compound quickly across a large client base.",
  "Producing accurate, auditable invoices required manual reconciliation between operations data and finance records, which slowed down billing cycles and made errors harder to catch.",
  "There was no centralized, role-based way to manage who could see or act on which warehouse's data.",
];

const solution = [
  {
    icon: "fas fa-database",
    title: "Master data management",
    desc: "A single source of truth for warehouses, clients, suppliers, unit-of-measure standards, and organizational structures, with role-based access control so users only see the warehouses and data relevant to them.",
  },
  {
    icon: "fas fa-warehouse",
    title: "Warehouse operations",
    desc: "Digitized tracking of inbound receipts and outbound orders, handling documentation, and the variable space-utilization data that storage billing depends on.",
  },
  {
    icon: "fas fa-file-contract",
    title: "Rate and contract management",
    desc: "A structured way to define and maintain client-specific rate sheets (storage, handling, and accessorial charges), with a review/approval step before rates go live.",
  },
  {
    icon: "fas fa-file-invoice-dollar",
    title: "Billing and invoicing",
    desc: "Automated generation of client invoices and consolidated group invoices, tied to configurable billing calendars and periods, along with tax and remarks handling for real-world invoicing edge cases.",
  },
];

const techStack = ["Angular", "AG Grid", ".NET Web API", "SQL Server", "JWT / OIDC"];

const impact = [
  "Rate and contract changes go through a single, controlled workflow instead of being edited ad hoc across scattered files.",
  "Storage and handling charges are calculated from the same operational data used to run the warehouse, cutting down the reconciliation work between operations and finance.",
  "Invoicing is faster to produce and easier to audit, since every invoice traces back to the underlying rate sheet and operational activity that generated it.",
  "Access to sensitive rate and financial data is scoped by role and warehouse, rather than being an all-or-nothing spreadsheet share.",
];

export default function WimsCaseStudy() {
  return (
    <>
      <Header />
      <PageBanner
        kicker="Case Study"
        title="Modernizing 3PL Warehouse Operations and Billing: The WiMS Platform"
        subtitle="A single system of record unifying warehouse master data, day-to-day operations, and client billing for a global logistics and contract-warehousing provider."
      />

      <section className="sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="sec-heading">
                <h2 className="mb15">Overview</h2>
              </div>
              <p>
                Third-party logistics (3PL) providers sit at an unusual intersection of two
                disciplines: warehouse operations and complex, contract-driven billing. Every
                client (or &ldquo;storer,&rdquo; in warehousing terms) can have its own storage
                rates, handling charges, accessorial fees, and invoicing cadence. Managing that
                complexity across dozens of clients and multiple warehouses is where most 3PLs
                either scale gracefully or drown in spreadsheets.
              </p>
              <p>
                WiMS (Warehouse Information Management System) was built to solve exactly that
                problem for a global logistics and contract-warehousing provider. It&apos;s a
                browser-based platform that unifies warehouse master data, day-to-day operations,
                and client billing into a single system of record — replacing a patchwork of
                manual processes and disconnected tools.
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
                <h2 className="mb15">The Challenge</h2>
              </div>
              <p className="mb15">
                Before WiMS, warehouse operations and finance teams relied on manual, largely
                spreadsheet-based processes to track inbound and outbound activity, calculate
                variable storage charges, and generate client invoices. This created a few
                recurring problems common to growing 3PL operators:
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {challenges.map((c) => (
                  <li key={c} className="mt15" style={{ display: "flex", gap: "12px" }}>
                    <i
                      className="fas fa-exclamation-circle"
                      style={{ color: "#cc4925", marginTop: "5px" }}
                    ></i>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt15">
                None of these problems are unique to this client — they&apos;re endemic to the 3PL
                and contract-logistics industry, which is part of why a purpose-built platform
                made sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="sec-heading">
                <h2 className="mb15">The Solution</h2>
              </div>
              <p className="mb30">
                WiMS was designed as a modular web application spanning the core functions a 3PL
                back office needs:
              </p>
              {solution.map((s) => (
                <div
                  className="ree-row-set mt20"
                  key={s.title}
                  style={{ display: "flex", gap: "16px" }}
                >
                  <i
                    className={s.icon}
                    style={{ fontSize: "22px", color: "#cc4925", marginTop: "4px" }}
                  ></i>
                  <div>
                    <h5 className="mb5">{s.title}</h5>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
              <p className="mt30">
                The result is a system where operational activity in the warehouse flows through
                to billing without manual re-entry or reconciliation — and where every rate change
                and invoice is tracked, rather than living in someone&apos;s inbox or spreadsheet
                history.
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
                <h2 className="mb15">Technical Approach</h2>
              </div>
              <p className="mb20">
                WiMS is a modern web application: an Angular single-page front end (using AG Grid
                for the data-heavy tables the domain demands) backed by a .NET Web API, with SQL
                Server as the system of record. Authentication uses JWT/OIDC-based identity, and
                reporting/export relies on server-side Excel generation so finance teams can still
                work with the data formats they&apos;re used to. The system is organized into
                clean functional areas — master data, operations, and finance — which keeps the
                platform maintainable as new client requirements come in.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {techStack.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#fff",
                      border: "1px solid #eee",
                      borderRadius: "6px",
                      padding: "6px 14px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#30303c",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="sec-heading">
                <h2 className="mb15">Impact</h2>
              </div>
              <p className="mb15">
                By consolidating rate management, warehouse operations, and invoicing into one
                platform, the client moved from manual, spreadsheet-dependent processes to a
                governed, auditable system:
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {impact.map((i) => (
                  <li key={i} className="mt15" style={{ display: "flex", gap: "12px" }}>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#cc4925", marginTop: "5px" }}
                    ></i>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="r-bg-c sec-pad">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="sec-heading">
                <h2 className="mb15">Conclusion</h2>
              </div>
              <p className="mb30">
                WiMS shows how a purpose-built platform can take a 3PL&apos;s messiest back-office
                problem — reconciling operations with contract-specific billing — and turn it into
                a governed, repeatable process. For an industry where margin often comes down to
                billing accuracy and operational efficiency, that shift matters well beyond IT.
              </p>
              <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80">
                Talk to Us About Your Platform <i className="fas fa-arrow-right fa-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
