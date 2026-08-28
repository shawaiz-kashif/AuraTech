const techs = [
  {
    label: "Next.js",
    node: (
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h3.2l9.4 12.7V4H19v16h-3.1L6.4 7.2V20H4V4z" fill="#fff" />
        </svg>
      </div>
    ),
  },
  {
    label: "React",
    node: <i className="fab fa-react" style={{ fontSize: 44, color: "#61DAFB" }}></i>,
  },
  {
    label: "JavaScript",
    node: (
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "12px",
          background: "#F0DB4F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fab fa-js" style={{ fontSize: 26, color: "#000" }}></i>
      </div>
    ),
  },
  {
    label: "Angular",
    node: <i className="fab fa-angular" style={{ fontSize: 44, color: "#DD0031" }}></i>,
  },
  {
    label: "HTML",
    node: <i className="fab fa-html5" style={{ fontSize: 44, color: "#E34F26" }}></i>,
  },
  {
    label: "CSS",
    node: <i className="fab fa-css3-alt" style={{ fontSize: 44, color: "#1572B6" }}></i>,
  },
  {
    label: "Tailwind CSS",
    node: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" />
      </svg>
    ),
  },
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
