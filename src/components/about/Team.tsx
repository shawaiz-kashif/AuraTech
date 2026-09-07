const founders = [
  { name: "M. Shawaiz Kashif", initials: "SK" },
  { name: "M. Nafeel Haroon", initials: "NH" },
  { name: "M. Abeer Hamidi", initials: "AH" },
];

export default function Team() {
  return (
    <section className="sec-pad">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="sec-heading text-center">
              <span className="sub-heading mb15">Our Team</span>
              <h2>
                The <span className="ree-text rt40">Founders</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt40">
          {founders.map((f) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mt30" key={f.name}>
              <div className="text-center">
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background: "#fdece4",
                    color: "#cc4925",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: 700,
                    margin: "0 auto 16px",
                  }}
                >
                  {f.initials}
                </div>
                <h5 className="mb5">{f.name}</h5>
                <p style={{ color: "#cc4925", fontWeight: 600, fontSize: "14px" }}>Founder</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
