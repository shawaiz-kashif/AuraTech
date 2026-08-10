const services = [
  {
    icon: "/images/icons/android.svg",
    title: "Android Development",
    desc: "Our software house has been recognised by google for outstanding android application quality.",
    imgClass: "ree-card-img shadows",
    delay: "100",
  },
  {
    icon: "/images/icons/apple.svg",
    title: "iOS Development",
    desc: "At AuraTech, We offer pixel perfect responsive website design services which are built around aesthetics and usability.",
    delay: "300",
  },
  {
    icon: "/images/icons/cube.svg",
    title: "Hybrid App Development",
    desc: "AuraTech’s product design services cover entire product design lifecycle, From prototyping to fully functional design.",
    delay: "500",
  },
  {
    icon: "/images/icons/smartwatch.svg",
    title: "Wearable Development",
    desc: "Increase conversions. Increase leads. Increase sales. Increase revenue. That's digital marketing services from AuraTech.",
    delay: "700",
  },
  {
    icon: "/images/icons/ux-interface.svg",
    title: "UI/UX Designing",
    desc: "Our highly experienced designers comprehend your vision and business objectives in order to create the designs.",
    delay: "900",
  },
  {
    icon: "/images/icons/app-development.svg",
    title: "Web App Development",
    desc: "Our highly experienced designers comprehend your vision and business objectives in order to create the designs.",
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
                We build modern <span className="ree-text rt40">creative</span>{" "}
                <span className="ree-text rt40">mobile</span> experiences.
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
                    <a href="#services">{s.title}</a>
                  </h3>
                  <p>{s.desc}</p>
                </div>
                <div className="ree-card-content-link">
                  <a href="#services" className="ree-card-link mt40">
                    Read More <i className="fas fa-arrow-right fa-btn"></i>
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
                  Hire World-Class <span className="ree-text rt40">Developers</span>
                </h3>
                <a href="#contact" className="ree-btn ree-btn-grdt1 mw-80">
                  Hire Now <i className="fas fa-arrow-right fa-btn"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
