const socialIcons = ["twitter", "facebook-f", "youtube", "linkedin-in", "instagram"];

const companyLinks = ["About us", "Portfolio", "Contact Us", "Faqs", "Privacy & Policy"];

const serviceLinks = [
  "Hire Dedicated Developers",
  "Web App Development",
  "Mobile App Development",
  "Search Engine Optimization",
  "Pay-Per-Click",
  "Social Media Marketing",
];

const industryLinks = ["Healthcare", "Education", "Retail", "Logistics", "Oil & Gas", "Music & Video"];

export default function Footer() {
  return (
    <footer className="footer-a dark-deep">
      <h4 className="visually-hidden">Footer</h4>
      <div className="footer-fist-row pt40">
        <div className="container">
          <div className="row footer-deg2">
            <div className="col-5s">
              <div className="footer-ree-c">
                <div className="footer-logo pt40">
                  <a href="#">
                    <img src="/AuraTechlogo.png" alt="AuraTech" className="img" loading="lazy" />
                  </a>
                </div>
                <p className="mt15">Overall client rating is 4.9 out of 8,500 Clients for AuraTech</p>
                <ul className="footer_social mt30">
                  {socialIcons.map((icon) => (
                    <li key={icon}>
                      <a href="#" target="_blank" rel="noreferrer">
                        <i className={`fab fa-${icon}`} aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#" className="ree-btn ree-btn-grdt1 mw-80 no-shadows mt40">
                  Our Brochure <i className="fas fa-arrow-right fa-btn"></i>
                </a>
              </div>
            </div>
            <div className="col-5s">
              <h5>For Work inquiry</h5>
              <ul className="footer-links-list social-linkz">
                <li>
                  <a href="tel:+911234567890">
                    <span><i className="fas fa-phone-square-alt"></i></span> +91 123 4567 890
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+911234567890">
                    <span><i className="fab fa-whatsapp-square"></i></span> +91 123 4567 890
                  </a>
                </li>
                <li>
                  <a href="mailto:career@auratech-solutions.com">
                    <span><i className="fas fa-envelope"></i></span> career@auratech-solutions.com
                  </a>
                </li>
                <li>
                  <a href="mailto:info@auratech-solutions.com">
                    <span><i className="fas fa-envelope"></i></span> info@auratech-solutions.com
                  </a>
                </li>
                <li>
                  <a href="skype:auratech.solutions">
                    <span><i className="fab fa-skype"></i></span> auratech-skype
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-5s">
              <h5>Company</h5>
              <ul className="footer-links-list">
                {companyLinks.map((l) => (
                  <li key={l}>
                    <a href="javascript:void(0)">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-5s">
              <h5>Services</h5>
              <ul className="footer-links-list">
                {serviceLinks.map((l) => (
                  <li key={l}>
                    <a href="javascript:void(0)">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-5s">
              <h5>Industries</h5>
              <ul className="footer-links-list">
                {industryLinks.map((l) => (
                  <li key={l}>
                    <a href="javascript:void(0)">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container ft-cpy bt-top mt70">
          <div className="row">
            <div className="col-lg-5">
              <div className="ft-copyright">
                <p>We are tracking any intention of piracy.</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ft-copyright ft-r">
                <p>
                  Copyright © {new Date().getFullYear()} AuraTech. All rights reserved. Template By{" "}
                  <a href="https://themeforest.net/user/rajesh-doot/portfolio" target="_blank" rel="noreferrer">
                    Rajesh Doot
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
