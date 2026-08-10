const techs = [
  { icon: "/images/icons/apple.svg", label: "iOS" },
  { icon: "/images/icons/android.svg", label: "Android" },
  { icon: "/images/icons/flutterio-icon.svg", label: "Flutter" },
  { icon: "/images/icons/java.svg", label: "Java" },
  { icon: "/images/icons/physics.svg", label: "React Native" },
  { icon: "/images/icons/apple.svg", label: "Python" },
  { icon: "/images/icons/java.svg", label: "Java" },
  { icon: "/images/icons/swift.svg", label: "Swift" },
  { icon: "/images/icons/pwa.svg", label: "PWA" },
];

export default function Technologies() {
  return (
    <section className="dark-deep dark-bg sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-heading text-center">
              <h2>
                <span className="ree-text rt40">Technologies</span> we work with
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt30">
          {techs.map((t, i) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={`${t.label}-${i}`}>
              <div className="icon-with-title">
                <a href="javascript:void(0)">
                  <div className="iwt-icon">
                    <img src={t.icon} alt={t.label} loading="lazy" />
                  </div>
                  <div className="iwt-content">
                    <p>{t.label}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
