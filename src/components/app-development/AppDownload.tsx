export default function AppDownload() {
  return (
    <section className="home-app-block r-bg-x sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 vcenter">
            <div className="sec-heading pera-block">
              <span className="sub-heading mb15">How We Work</span>
              <h2>From first spec to a live release</h2>
              <p>
                We start with your requirements and platform choices, design the UI/UX, build and
                test the app, and handle the App Store / Play Store submission. Once it&apos;s
                live, we keep maintaining it — updates, backend changes, and bug fixes included.
              </p>
              <div className="btn-sets mt40">
                <a href="/contact" className="ree-btn ree-btn-grdt1 mr20">
                  Start Your Project <i className="fas fa-arrow-right ml10"></i>
                </a>
                <a href="#portfolio" className="ree-btn ree-btn-grdt2 mr20">
                  View Our Work <i className="fas fa-arrow-right ml10"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 vcenter">
            <div className="sol-image m-mt30">
              <img src="/images/others/app-ui.png" alt="app interface" className="img-fluid" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
