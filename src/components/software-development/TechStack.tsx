const techs = [
  { label: "Node.js", node: <i className="fab fa-node-js" style={{ fontSize: 44, color: "#339933" }}></i> },
  { label: "Python", node: <i className="fab fa-python" style={{ fontSize: 44, color: "#3776AB" }}></i> },
  { label: "PHP", node: <i className="fab fa-php" style={{ fontSize: 44, color: "#777BB4" }}></i> },
  { label: "SQL", node: <i className="fas fa-database" style={{ fontSize: 40, color: "#4479A1" }}></i> },
  { label: "Docker", node: <i className="fab fa-docker" style={{ fontSize: 44, color: "#2496ED" }}></i> },
  { label: "AWS", node: <i className="fab fa-aws" style={{ fontSize: 44, color: "#FF9900" }}></i> },
];

const track = [...techs, ...techs, ...techs, ...techs];

export default function TechStack() {
  return (
    <section className="r-bg-x sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-heading text-center">
              <h2>
                <span className="ree-text rt40">Tech Stack</span> we build with
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-marquee mt60">
        <div className="tech-marquee-track">
          {track.map((t, i) => (
            <div className="tech-marquee-item" key={`${t.label}-${i}`}>
              {t.node}
              <p>{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
