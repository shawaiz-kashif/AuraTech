const interests = [
  "Web Design",
  "Graphic Design",
  "App Development",
  "E-commerce Development",
  "Digital Marketing",
  "Business Growth",
  "Business Startup",
  "Other...",
];

export default function Contact() {
  return (
    <section
      className="home-contact pb120"
      style={{
        backgroundImage:
          "linear-gradient(rgba(11,11,15,.85), rgba(11,11,15,.85)), url(/images/others/office.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="contact"
    >
      <div className="container">
        <div className="row zup flx-end">
          <div className="col-right-a">
            <div className="sec-heading fourc-up-a">
              <span className="sub-heading mb15">Inquiry</span>
              <h2>
                Let&rsquo;s Get in <span className="ree-text rt40">Touch</span>
              </h2>
            </div>
            <div className="home-contact-block">
              <div className="contact-infos">
                <div className="c-infot">
                  <span>Sales Department</span>{" "}
                  <a href="tel:+911234567890">
                    <i className="fas fa-phone-alt"></i> +91 123 4567 890
                  </a>
                </div>
                <div className="c-infot">
                  <span>HR Department</span>{" "}
                  <a href="tel:+911234567890">
                    <i className="fas fa-phone-alt"></i> +91 123 4567 890
                  </a>
                </div>
              </div>
              <div className="contact-infos mt35">
                <div className="c-infot">
                  <span>Sales Department</span>{" "}
                  <a href="mailto:info@auratech-solutions.com">
                    <i className="fas fa-envelope"></i> info@auratech-solutions.com
                  </a>
                </div>
                <div className="c-infot">
                  <span>Connect on Skype</span>{" "}
                  <a href="skype:auratech.solutions">
                    <i className="fab fa-skype"></i> auratech.solutions
                  </a>
                </div>
              </div>
              <div className="live-review- mt60">
                <span>Read Our Customers Feedback</span>
                <div className="livrve">
                  <a href="#">
                    <img src="/images/icons/google-logo.svg" alt="review" />
                  </a>
                  <a href="#">
                    <img src="/images/icons/hubspot-logo.svg" alt="review" />
                  </a>
                  <a href="#">
                    <img src="/images/icons/trustpilot-logo.svg" alt="review" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-right-b">
            <div className="form-contact-hom fourc-up-b">
              <div className="form-block">
                <div className="form-head">
                  <h3>Please fill in the form below.</h3>
                </div>
                <div className="form-body">
                  <form action="#" method="post" name="feedback-form">
                    <div className="fieldsets row">
                      <div className="col-md-6">
                        <input type="text" placeholder="Full Name" name="name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="Email Address" name="email" />
                      </div>
                    </div>
                    <div className="fieldsets row">
                      <div className="col-md-6">
                        <input type="number" placeholder="Contact Number" name="phone" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Skype" name="skype" />
                      </div>
                    </div>
                    <div className="fieldsets row">
                      <div className="col-md-6">
                        <input type="text" placeholder="Subject" name="subject" />
                      </div>
                      <div className="col-md-6">
                        <select defaultValue="1">
                          <option value="1">interested in</option>
                          {interests.map((opt) => (
                            <option key={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="fieldsets">
                      <textarea placeholder="Message" name="message"></textarea>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck"
                        name="example1"
                        defaultChecked
                      />
                      <label className="custom-control-label label-f-form" htmlFor="customCheck">
                        I agree to the <a href="javascript:void(0)">Terms &amp; Conditions</a> of
                        AuraTech.
                      </label>
                    </div>
                    <div className="fieldsets mt20">
                      <button type="submit" name="submit" className="ree-btn ree-btn-grdt1 w-100">
                        Send your inquiry <i className="fas fa-arrow-right fa-btn"></i>
                      </button>
                    </div>
                    <p className="trm">
                      <i className="fas fa-lock"></i>We hate spam, and we respect your privacy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
