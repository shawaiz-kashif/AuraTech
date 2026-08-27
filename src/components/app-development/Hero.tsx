const points = [
  { icon: "fas fa-mobile-alt", label: "Native & Cross-Platform", cls: "uca" },
  { icon: "fab fa-app-store-ios", label: "iOS, Android & Web", cls: "ucb" },
  { icon: "fas fa-rocket", label: "Full Lifecycle Support", cls: "ucc" },
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
              <h1 className="mb30 zup" data-aos="fade-in" data-aos-delay="200">
                Mobile &amp; Web App Development
              </h1>
              <p className="zup" data-aos="fade-in" data-aos-delay="500">
                AuraTech designs and builds native and cross-platform apps end-to-end — from
                architecture and UI to deployment and the backend systems they run on.
              </p>

              <div className="uniq-points mt40" data-aos="fade-in" data-aos-delay="800">
                {points.map((p) => (
                  <div className={`uniq-card ${p.cls}`} key={p.label}>
                    <i className={p.icon}></i>
                    <p>{p.label}</p>
                  </div>
                ))}
              </div>
              <div className="btn-sets2 vcenter mt20" data-aos="fade-in" data-aos-delay="1100">
                <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80 mr20 mt20">
                  Talk to Our Expert <i className="fas fa-arrow-right fa-btn"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 vcenter">
            <div className="sol-image m-mt30">
              <img
                src="/images/sliders/app-mockup.png"
                alt="web development"
                className="img-fluid"
                data-aos="fade-in"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
