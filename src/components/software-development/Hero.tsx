const points = [
  { icon: "fas fa-cubes", label: "Built Around Your Workflow", cls: "uca" },
  { icon: "fas fa-exchange-alt", label: "Systems That Talk to Each Other", cls: "ucb" },
  { icon: "fas fa-server", label: "Backed by Real Infrastructure", cls: "ucc" },
];

export default function Hero() {
  return (
    <section className="home-app hero-sec r-bg-x">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 vcenter">
            <div className="hero-content-a">
              <div className="shape-dot-bg">
                <img src="/images/shape/svg_dot.svg" alt="shape" />
              </div>
              <h1 className="mb30 zup">
                Custom Software That Fits How You Work
              </h1>
              <p className="zup">
                AuraTech builds ERP, CRM, and CMS systems, plus the integrations that connect
                them — software shaped around your business, not the other way around.
              </p>

              <div className="uniq-points mt40">
                {points.map((p) => (
                  <div className={`uniq-card ${p.cls}`} key={p.label}>
                    <i className={p.icon}></i>
                    <p>{p.label}</p>
                  </div>
                ))}
              </div>
              <div className="btn-sets2 vcenter mt20">
                <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80 mr20 mt20">
                  Talk to Our Expert <i className="fas fa-arrow-right fa-btn"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 vcenter">
            <div className="sol-image m-mt30">
              <img
                src="/images/others/service-1.jpg"
                alt="custom software development"
                className="img-fluid"
                style={{ borderRadius: "16px" }}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
