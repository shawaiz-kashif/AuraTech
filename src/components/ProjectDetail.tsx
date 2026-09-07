import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export type ProjectDetailProps = {
  kicker?: string;
  title: string;
  subtitle: string;
  image: string;
  imageBg?: string;
  overview: string[];
  features: string[];
  techStack?: string[];
  githubUrl: string;
};

export default function ProjectDetail({
  kicker = "Project",
  title,
  subtitle,
  image,
  imageBg = "#f4f4f4",
  overview,
  features,
  techStack,
  githubUrl,
}: ProjectDetailProps) {
  return (
    <>
      <Header />
      <PageBanner kicker={kicker} title={title} subtitle={subtitle} />

      <section className="sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div
                style={{
                  background: imageBg,
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginBottom: "40px",
                }}
              >
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div className="sec-heading">
                <h2 className="mb15">Overview</h2>
              </div>
              {overview.map((p, i) => (
                <p key={i} className={i > 0 ? "mt15" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="r-bg-a sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="sec-heading">
                <h2 className="mb15">Key Features</h2>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {features.map((f) => (
                  <li key={f} className="mt15" style={{ display: "flex", gap: "12px" }}>
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#cc4925", marginTop: "5px" }}
                    ></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {techStack && techStack.length > 0 && (
        <section className="sec-pad">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="sec-heading">
                  <h2 className="mb15">Tech Stack</h2>
                </div>
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
      )}

      <section className="r-bg-c sec-pad">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ree-btn ree-btn-grdt1 mw-80 mr20 mt20"
              >
                View Source Code <i className="fab fa-github fa-btn"></i>
              </a>
              <a href="/contact" className="ree-btn ree-btn-grdt2 mw-80 mt20">
                Talk to Us About Your Project <i className="fas fa-arrow-right fa-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
