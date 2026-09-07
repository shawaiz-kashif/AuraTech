const values = [
  {
    icon: "fas fa-layer-group",
    title: "One team, full stack",
    desc: "Software and the hardware it runs on, delivered by the same team — no handoffs between vendors, no finger-pointing when something breaks.",
  },
  {
    icon: "fas fa-drafting-compass",
    title: "Built around your business, not a template",
    desc: "Every project starts with how your business actually works — architecture and design decisions follow from that, not from what's easiest to reuse.",
  },
  {
    icon: "fas fa-headset",
    title: "We stay after launch",
    desc: "Updates, maintenance, and support don't stop once something ships. If we built it, we're still around for it.",
  },
];

export default function Values() {
  return (
    <section className="r-bg-c sec-pad">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="sec-heading text-center">
              <span className="sub-heading mb15">Our Values</span>
              <h2>
                How we <span className="ree-text rt40">actually</span> operate
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt40">
          <div className="col-lg-9">
            {values.map((v) => (
              <div
                className="ree-row-set mt20"
                key={v.title}
                style={{ display: "flex", gap: "16px" }}
              >
                <i
                  className={v.icon}
                  style={{ fontSize: "22px", color: "#cc4925", marginTop: "4px" }}
                ></i>
                <div>
                  <h5 className="mb5">{v.title}</h5>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
