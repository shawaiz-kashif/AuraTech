const reasons = [
  {
    icon: "fas fa-layer-group",
    title: "One team, full stack",
    desc: "Software and the hardware it runs on, delivered by the same team — no handoffs between vendors.",
  },
  {
    icon: "fas fa-network-wired",
    title: "Real systems integration",
    desc: "EDI, warehouse management, and enterprise platforms — connected and kept running.",
  },
  {
    icon: "fas fa-headset",
    title: "Support that doesn't stop at launch",
    desc: "Active Directory, networking, and desktop support up to Level 3, on an ongoing basis.",
  },
];

export default function Testimonials() {
  return (
    <section className="r-bg-c sec-pad">
      <div className="container">
        <div className="row mt20">
          <div className="col-lg-6 vcenter">
            <div className="quote-text">
              <h2>Built to work. Supported for the long run.</h2>
              <p className="mt20">
                We don&apos;t just ship a project and disappear. From the first line of code to
                the server rack it runs on, AuraTech stays involved.
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
