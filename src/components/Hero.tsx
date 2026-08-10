export default function Hero() {
  return (
    <section
      className="home-creative-agency hero-sec dark-bg"
      data-background="/images/hero/office-team.jpg"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.3) 55%, rgba(0,0,0,.1) 100%), url(/images/hero/office-team.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 vcenter">
            <div className="hero-content-a zup">
              <h1 className="h1 mb30" data-aos="fade-in" data-aos-delay="200">
                Creativity Can Light Your Brand
              </h1>
              <p data-aos="fade-in" data-aos-delay="500">
                AuraTech solve the world&apos;s biggest problems with Expertise. AuraTech helps
                global brand with digital products on web, mobile and connected platforms.
              </p>
              <div className="btn-sets2 vcenter mt20" data-aos="fade-in" data-aos-delay="1100">
                <a href="#portfolio" className="ree-btn ree-btn-grdt1 no-shadows mw-80 mr20 mt20">
                  View Portfolio <i className="fas fa-arrow-right fa-btn"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 vcenter"></div>
        </div>
      </div>
    </section>
  );
}
