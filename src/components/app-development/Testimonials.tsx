const reasons = [
  {
    icon: "fas fa-code-branch",
    title: "Native and cross-platform, done right",
    desc: "Android, iOS, and Flutter/React Native builds — we pick the right stack for your app instead of forcing one.",
  },
  {
    icon: "fas fa-server",
    title: "Backed by real infrastructure",
    desc: "The same team that builds your app also manages the servers, networking, and uptime it depends on.",
  },
  {
    icon: "fas fa-headset",
    title: "Support after launch",
    desc: "App updates, backend maintenance, and IT support don't stop once you ship.",
  },
];

export default function Testimonials() {
  return (
    <section className="r-bg-c sec-pad">
      <div className="container">
        <div className="row mt20">
          <div className="col-lg-6 vcenter">
            <div className="quote-text">
              <h2>An app is only as good as what runs behind it.</h2>
              <p className="mt20">
                We build the app and the backend it talks to — so performance, uptime, and support
                are one team&apos;s responsibility, not three.
              </p>
            </div>
          </div>
          <div className="col-lg-6 vcenter">
            <div className="ree-card mt30">
              {reasons.map((r) => (
                <div className="ree-row-set mt20" key={r.title} style={{ display: "flex", gap: "16px" }}>
                  <i className={r.icon} style={{ fontSize: "22px", color: "#cc4925", marginTop: "4px" }}></i>
                  <div>
                    <h5 className="mb5">{r.title}</h5>
                    <p>{r.desc}</p>
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
