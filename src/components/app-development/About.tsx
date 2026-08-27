const stats = [
  { value: "40", suffix: "+", label: "Projects Delivered" },
  { value: "15", suffix: "+", label: "Enterprise Clients" },
  { value: "12", suffix: "+", label: "Team Members" },
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
                Apps Built <span className="ree-text rt40">Right</span>, From Design to Deployment
              </h2>
              <p className="mb15 demoted-h4-light">
                Native, cross-platform, and web apps — backed by the same team that builds and
                supports your backend infrastructure.
              </p>
              <p>
                AuraTech&apos;s app development team handles the full lifecycle: architecture,
                UI/UX, native and cross-platform builds, API and backend integration, and
                deployment. Because we also manage servers, networking, and enterprise systems
                in-house, your app doesn&apos;t just launch — it stays supported.
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
                  <a href="#about" className="ree-btn ree-btn-grdt2 mw-80 m-mt30">
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
