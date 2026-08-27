const socialIcons = ["twitter", "facebook-f", "youtube", "linkedin-in", "instagram"];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "Machine Learning & Training",
  "UI/UX Design",
  "Rack Installation",
];

const legalLinks = ["Privacy & Policy", "Terms & Conditions", "Careers"];

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
                <p className="mt15">
                  Software and hardware solutions — development, systems integration, and IT
                  infrastructure, under one team.
                </p>
                <ul className="footer_social mt30">
                  {socialIcons.map((icon) => (
                    <li key={icon}>
                      <a href="#" target="_blank" rel="noreferrer">
                        <i className={`fab fa-${icon}`} aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80 no-shadows mt40">
                  Get In Touch <i className="fas fa-arrow-right fa-btn"></i>
                </a>
              </div>
            </div>
            <div className="col-5s">
              <h5>For Work inquiry</h5>
              <ul className="footer-links-list social-linkz">
                <li>
                  <a href="tel:+923212522077">
                    <span><i className="fas fa-phone-square-alt"></i></span> +92 321 2522 077
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+923212522077">
                    <span><i className="fab fa-whatsapp-square"></i></span> +92 321 2522 077
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
                    <span><i className="fab fa-skype"></i></span> auratech.solutions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-5s">
              <h5>Company</h5>
              <ul className="footer-links-list">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-5s">
              <h5>Services</h5>
              <ul className="footer-links-list">
                {serviceLinks.map((l) => (
                  <li key={l}>
                    <a href="/#services">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-5s">
              <h5>Legal</h5>
              <ul className="footer-links-list">
                {legalLinks.map((l) => (
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
                <p>Software &amp; Hardware Solutions.</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ft-copyright ft-r">
                <p>Copyright © {new Date().getFullYear()} AuraTech. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
