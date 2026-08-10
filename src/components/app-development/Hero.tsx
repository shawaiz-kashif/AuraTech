const points = [
  { icon: "fas fa-users", label: "100k User Engagement", cls: "uca" },
  { icon: "fab fa-app-store-ios", label: "100+ Featured App", cls: "ucb" },
  { icon: "fas fa-rocket", label: "600+ App Published", cls: "ucc" },
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
                Top Mobile App Development Company in India
              </h1>
              <p className="zup" data-aos="fade-in" data-aos-delay="500">
                AuraTech solve the world&apos;s biggest problems with Expertise. AuraTech helps
                global brand with digital products on web, mobile and connected platforms.
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
                <a href="#contact" className="ree-btn ree-btn-grdt1 mw-80 mr20 mt20">
                  Talk to Our Expert <i className="fas fa-arrow-right fa-btn"></i>
                </a>
                <div className="media vcenter mt20">
                  <div className="ree-icon-set img-round80">
                    <img src="/images/users/user4.jpg" alt="img" className="img-fluid" />
                  </div>
                  <div className="ree-details-set user-info">
                    <p className="demoted-h5-light">Kamlesh Happy</p>
                    <p>Business Head</p>
                  </div>
                </div>
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
