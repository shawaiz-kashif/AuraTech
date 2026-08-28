const services = [
  {
    icon: "fas fa-sitemap",
    title: "Custom ERP Development",
    desc: "ERP systems built around how your business actually runs — inventory, billing, and operations in one place, not scattered across spreadsheets.",
    delay: "100",
  },
  {
    icon: "fas fa-address-book",
    title: "CRM Systems",
    desc: "Track leads, manage sales, and keep customer data in one place instead of five different tools.",
    delay: "300",
  },
  {
    icon: "fas fa-edit",
    title: "CMS & Content Platforms",
    desc: "Content management systems your team can update without waiting on a developer for every change.",
    delay: "500",
  },
  {
    icon: "fas fa-exchange-alt",
    title: "EDI & Systems Integration",
    desc: "Connecting ERP, WMS, and CRM systems so data moves automatically instead of by hand — work we've actually shipped, not theory.",
    delay: "700",
  },
  {
    icon: "fas fa-server",
    title: "Custom Backend & API Development",
    desc: "The backend, database, and APIs behind your software — built to handle real load, not just a demo.",
    delay: "900",
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Migration & Hosting",
    desc: "Moving your systems to the cloud, or managing the servers they already run on — either way, we handle the infrastructure.",
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
                Software that <span className="ree-text rt40">fits your business</span>.
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
