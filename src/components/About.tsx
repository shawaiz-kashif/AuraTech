const stats = [
  { value: "7500", suffix: "+", label: "Project Delivered" },
  { value: "3500", suffix: "+", label: "Enterprise Clients" },
  { value: "540", suffix: "+", label: "Experts Team" },
  { value: "20", suffix: "%", label: "Success Years" },
];

const awards = [
  { logo: "/images/brand-logo/top-it.png", label: "Top App Developer Genuine Quality" },
  { logo: "/images/brand-logo/appfutura-logo.png", label: "Top App Developer Genuine Quality" },
  { logo: "/images/brand-logo/goodfirm-logo.png", label: "Top App Developer Genuine Quality" },
  { logo: "/images/brand-logo/clutch-logo.png", label: "Top App Developer Genuine Quality" },
  { logo: "/images/brand-logo/mobile-app-logo.png", label: "Top App Developer Genuine Quality" },
];

export default function About() {
  return (
    <section className="home-about sec-pad dark-bg" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="about-content-home m-mb60 text-center">
              <span className="sub-heading mb15">We Are AuraTech</span>
              <h2 className="mb15">
                <span className="ree-text rt40">Award</span> Winning Creative Agency.
              </h2>
              <p className="mb15 demoted-h4">
                #1 Mobile App Company, Awarded for its Top Features/Editor Apps Delivered.
              </p>
              <p>
                AuraTech started its operation in the year 1999. We are Worldwide, based Web, App
                and Digital Marketing Company. Our main Domain is Web Design, App Development,
                Digital Marketing, Product Design and Cloud Services. Customer Satisfaction and
                the Highest rate of Customer Repeatability make us one of the pioneers in the
                field. So, what are you waiting for? Let us discuss your ideas and our
                innovation in detail because catering your requirement and converting it into a
                final product is our main goal.
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
                  <a href="#about" className="ree-btn ree-btn-grdt3 mw-80 m-mt30">
                    Know More AuraTech <i className="fas fa-arrow-right fa-btn"></i>
                  </a>
                </div>
              </div>
              <div className="ree-app-st-b m-order1">
                <div className="quick-key-points dark-light-a">
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
                        src="/images/others/app-development.webp"
                        alt="AuraTech logo"
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
        <div className="container mt60">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="app-awards owl-carousesl">
                {awards.map((a) => (
                  <div className="award-achivt" key={a.logo}>
                    <a href="#">
                      <img src={a.logo} alt="top it" className="img-fluid" loading="lazy" />
                    </a>
                    <p>{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
