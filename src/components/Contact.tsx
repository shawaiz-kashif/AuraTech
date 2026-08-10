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
    <section className="sec-pad dark-light-a pb120" id="contact">
      <div className="container">
        <div className="row zup">
          <div className="col-right-a">
            <div className="sec-heading">
              <span className="sub-heading mb15">Inquiry</span>
              <h2>
                Let&rsquo;s Get in <span className="ree-text rt40">Touch</span>
              </h2>
            </div>
            <div className="home-contact-blocks mt60">
              <div className="contact-infos">
                <div className="c-infot">
                  <span>Software Department</span>
                  <a href="tel:+923212522077">
                    <i className="fas fa-phone-alt"></i> +92 321 2522 077
                  </a>
                </div>
                <div className="c-infot">
                  <span>IT Department</span>
                  <a href="tel:+923212522077">
                    <i className="fas fa-phone-alt"></i> +92 321 2522 077
                  </a>
                </div>
              </div>
              <div className="contact-infos mt35">
                <div className="c-infot">
                  <span>Software Department</span>
                  <a href="mailto:reevan@abc.com">
                    <i className="fas fa-envelope"></i> reevan@abc.com
                  </a>
                </div>
                <div className="c-infot">
                  <span>Connect on Skype</span>
                  <a href="skype:reevan.company">
                    <i className="fab fa-skype"></i> reevan.company
                  </a>
                </div>
              </div>
              <div className="our-map mt40">
                <p className="mb5">Our Location</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113874.29338087929!2d75.72051791246247!3d26.885346595411875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1622665314705!5m2!1sen!2sin"
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-right-b">
            <div className="form-contact-hom">
              <div className="form-blocks">
                <form action="#" method="post" name="feedback-form">
                  <h3>
                    Share your idea or <br />
                    requirement with our experts
                  </h3>
                  <div className="fieldsets row mt40">
                    <div className="col-md-6">
                      <input type="text" placeholder="Full Name" name="name" className="input-ree" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email Address" name="email" className="input-ree" />
                    </div>
                  </div>
                  <div className="fieldsets row">
                    <div className="col-md-6">
                      <input type="tel" placeholder="Contact Number" name="phone" className="input-ree" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Skype" name="skype" className="input-ree" />
                    </div>
                  </div>
                  <div className="fieldsets row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Subject" name="subject" className="input-ree" />
                    </div>
                    <div className="col-md-6">
                      <select className="input-ree" defaultValue="1">
                        <option value="1">interested in</option>
                        {interests.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="fieldsets">
                    <textarea placeholder="Message" name="message" className="input-ree"></textarea>
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
                      I agree to the <a href="javascript:void(0)">Terms &amp; Conditions</a> of Reevan.
                    </label>
                  </div>
                  <div className="fieldsets mt20">
                    <button type="submit" name="submit" className="ree-btn ree-btn-grdt1 no-shadows">
                      Send your inquiry <i className="fas fa-arrow-right fa-btn"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
