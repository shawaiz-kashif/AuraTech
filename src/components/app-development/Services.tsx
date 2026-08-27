const services = [
  {
    icon: "/images/icons/android.svg",
    title: "Android Development",
    desc: "Native Android apps built with modern architecture, from first prototype to Play Store release.",
    imgClass: "ree-card-img shadows",
    delay: "100",
  },
  {
    icon: "/images/icons/apple.svg",
    title: "iOS Development",
    desc: "Native iOS apps built for App Store guidelines and long-term maintainability, not just launch day.",
    delay: "300",
  },
  {
    icon: "/images/icons/cube.svg",
    title: "Hybrid App Development",
    desc: "Cross-platform apps with Flutter and React Native — one codebase, native performance on iOS and Android.",
    delay: "500",
  },
  {
    icon: "/images/icons/smartwatch.svg",
    title: "Machine Learning & Training",
    desc: "Custom ML features built into your app, plus hands-on training to bring your team up to speed.",
    delay: "700",
  },
  {
    icon: "/images/icons/ux-interface.svg",
    title: "UI/UX Designing",
    desc: "Interfaces designed around how people actually use your product, not just how it looks in a mockup.",
    delay: "900",
  },
  {
    icon: "/images/icons/app-development.svg",
    title: "Web App Development",
    desc: "Full-stack web applications — frontend, backend, and the APIs that connect them.",
    delay: "1100",
  },
];

export default function Services() {
  return (
    <section className="r-bg-i sec-pad" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-heading text-center">
              <span className="sub-heading mb15">AuraTech Services</span>
              <h2>
                We build <span className="ree-text rt40">apps</span> people actually use.
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt30">
          {services.map((s) => (
            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={s.delay} key={s.title}>
              <div className="ree-card r-bg-c mt60">
                <div className={s.imgClass ?? "ree-card-img"}>
                  <img src={s.icon} alt="services" />
                </div>
                <div className="ree-card-content mt40">
                  <h3 className="mb15">
                    <a href="/contact">{s.title}</a>
                  </h3>
                  <p>{s.desc}</p>
                </div>
                <div className="ree-card-content-link">
                  <a href="/contact" className="ree-card-link mt40">
                    Get In Touch <i className="fas fa-arrow-right fa-btn"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-block-wide mt100">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 vcenter">
              <div className="cta-heading-wide-bt">
                <h3>
                  Ready to Build Your <span className="ree-text rt40">App</span>?
                </h3>
                <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80">
                  Get In Touch <i className="fas fa-arrow-right fa-btn"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
