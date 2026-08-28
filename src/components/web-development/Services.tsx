const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Custom Website Design & Development",
    desc: "Every site is built from scratch around how your business actually works — not squeezed into a template.",
    delay: "100",
  },
  {
    icon: "fas fa-building",
    title: "Business & Corporate Websites",
    desc: "Professional sites that represent your company clearly, load fast, and work the same on every device.",
    delay: "300",
  },
  {
    icon: "fas fa-user-lock",
    title: "Client Portal Development",
    desc: "Secure, login-protected portals where your clients can check status, share files, and get answers — without another email thread.",
    delay: "500",
  },
  {
    icon: "fas fa-plug",
    title: "CRM & System Integration",
    desc: "We connect your website or portal to the tools you already run, so data stays in sync instead of entered twice.",
    delay: "700",
  },
  {
    icon: "fas fa-sitemap",
    title: "Enterprise Web Development",
    desc: "Role-based access, multi-team support, and integration with the systems larger organizations already depend on.",
    delay: "900",
  },
  {
    icon: "fas fa-tools",
    title: "Website Maintenance & Support",
    desc: "Sites need upkeep after launch — updates, fixes, and changes — handled by the same team that built it.",
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
                Web development that <span className="ree-text rt40">fits your business</span>.
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt30">
          {services.map((s) => (
            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={s.delay} key={s.title}>
              <div className="ree-card r-bg-c mt60">
                <div className="ree-card-img">
                  <span className="ree-card-icon-fa">
                    <i className={s.icon}></i>
                  </span>
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
      </div>
    </section>
  );
}
