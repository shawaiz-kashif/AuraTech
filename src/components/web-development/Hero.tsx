const points = [
  { icon: "fas fa-code", label: "Custom-Built, Not Templated", cls: "uca" },
  { icon: "fas fa-mobile-alt", label: "Responsive on Every Device", cls: "ucb" },
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
                Websites Built to Do Real Work
              </h1>
              <p className="zup">
                AuraTech designs and builds custom business websites and client portals — clean
                code, fast load times, and a site your team can actually manage.
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
                alt="web development"
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
