const stats = [
  { value: "40", suffix: "+", label: "Projects Delivered" },
  { value: "8", suffix: "", label: "Enterprise Clients" },
  { value: "3", suffix: "", label: "Team Members" },
  { value: "5", suffix: "+", label: "Years of Experience" },
];

export default function Company() {
  return (
    <section className="home-about sec-pad" id="company">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="about-content-home m-mb60 text-center">
              <span className="sub-heading mb15">Who We Are</span>
              <h2 className="mb15">
                A <span className="ree-text rt40">Software &amp; Hardware</span> Solutions Company
              </h2>
              <p>
                AuraTech builds custom web, mobile, and software applications, integrates
                enterprise systems like EDI and warehouse management, and manages the servers,
                networking, and infrastructure that keep it all running. Most agencies stop at the
                app. We don&apos;t — because software that isn&apos;t backed by solid
                infrastructure is only half a solution.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt40">
          <div className="col-lg-9">
            <div className="about-stats-card">
              <div className="key-highlights">
                {stats.map((s) => (
                  <div className="key-highlt-b" key={s.label}>
                    <h3>
                      <span>{s.value}</span> <span>{s.suffix}</span>
                    </h3>
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center mt40">
          <div className="col-lg-9">
            <a href="/#services" className="ree-btn ree-btn-grdt2 mw-80">
              See What We Build <i className="fas fa-arrow-right fa-btn"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
