const benefits = [
  {
    icon: "fas fa-folder-open",
    title: "One login, everything in one place",
    desc: "Files, updates, and messages in a single dashboard — no digging through inboxes.",
  },
  {
    icon: "fas fa-comment-slash",
    title: "Fewer repeat questions",
    desc: "Clients check status themselves instead of emailing your team for updates.",
  },
  {
    icon: "fas fa-clock",
    title: "Access anytime",
    desc: "No waiting on office hours — clients log in and get what they need.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Only the right people see the right data",
    desc: "Role-based access keeps each client's information private and secure.",
  },
];

export default function ClientPortals() {
  return (
    <section className="r-bg-c sec-pad">
      <div className="container">
        <div className="row mt20">
          <div className="col-lg-6 vcenter">
            <div className="quote-text">
              <span className="sub-heading mb15">Client Portals</span>
              <h2>Give clients one place to log in — not five email threads.</h2>
              <p className="mt20">
                A client portal keeps files, updates, and requests in one secure spot, so your
                team spends less time repeating itself and clients stop waiting on replies.
              </p>
              <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80 mt30">
                Talk About Your Portal <i className="fas fa-arrow-right fa-btn"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 vcenter">
            <div className="ree-card mt30">
              {benefits.map((b) => (
                <div className="ree-row-set mt20" key={b.title} style={{ display: "flex", gap: "16px" }}>
                  <i className={b.icon} style={{ fontSize: "22px", color: "#cc4925", marginTop: "4px" }}></i>
                  <div>
                    <h5 className="mb5">{b.title}</h5>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
