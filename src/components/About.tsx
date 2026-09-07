const stats = [
  { value: "40", suffix: "+", label: "Projects Delivered" },
  { value: "8", suffix: "", label: "Enterprise Clients" },
  { value: "3", suffix: "", label: "Team Members" },
  { value: "5", suffix: "+", label: "Years of Experience" },
];

export default function About() {
  return (
    <section className="home-about sec-pad r-bg-a" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="about-content-home m-mb60 text-center">
              <span className="sub-heading mb15">We Are AuraTech</span>
              <h2 className="mb15">
                Your <span className="ree-text rt40">Software &amp; Hardware</span> Solutions Partner
              </h2>
              <p className="mb15 demoted-h4-light">
                From custom applications to the infrastructure they run on — we cover the full
                stack.
              </p>
              <p>
                AuraTech is a software and hardware solutions company. We build custom web,
                mobile, and software applications, integrate enterprise systems like EDI and
                warehouse management, and manage the servers, networking, and infrastructure that
                keep it all running. From development through deployment to day-to-day IT
                support, we handle the technology so you can focus on your business.
              </p>
              <p className="mt15">
                Our work spans warehouse &amp; logistics operations, enterprise systems
                integration, and general IT infrastructure support.
              </p>
            </div>
          </div>
        </div>
        <div className="agency-info-ree mt100">
          <div className="agency-picture">
            <img src="/images/others/office-view.jpg" alt="img" className="img-fluid" loading="lazy" />
          </div>
          <div className="container">
            <div className="row key-and-award">
              <div className="ree-app-st-a flx-end m-order2">
                <div className="btnctm">
                  <a href="/about" className="ree-btn ree-btn-grdt3 mw-80 m-mt30">
                    Know More AuraTech <i className="fas fa-arrow-right fa-btn"></i>
                  </a>
                </div>
              </div>
              <div className="ree-app-st-b m-order1">
                <div className="quick-key-points">
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
                  <div className="agency-info-anim text-center">
                    <div className="animated-logo">
                      <img src="/AuraTechlogo.png" alt="AuraTech logo" className="logo-anim" loading="lazy" />
                      <img
                        src="/images/others/ring-text.svg"
                        alt=""
                        aria-hidden="true"
                        className="circle-anim"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
