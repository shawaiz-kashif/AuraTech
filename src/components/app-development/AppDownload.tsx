export default function AppDownload() {
  return (
    <section className="home-app-block r-bg-x sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 vcenter">
            <div className="sec-heading pera-block">
              <span className="sub-heading mb15">Download Our App</span>
              <h2>Download our application from App Store</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
              </p>
              <div className="btn-sets mt40">
                <a href="#" className="ree-btn ree-btn-grdt1 mr20">
                  Play Store <i className="fab fa-android ml10"></i>
                </a>
                <a href="#" className="ree-btn ree-btn-grdt2 mr20">
                  iOS Store <i className="fab fa-apple ml10"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 vcenter">
            <div className="sol-image m-mt30">
              <img src="/images/others/app-ui.png" alt="our app" className="img-fluid" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
