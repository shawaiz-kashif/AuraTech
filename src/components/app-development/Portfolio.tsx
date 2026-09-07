const items = [
  {
    img: "/images/portfolio-mobile/grocery-app-2.jpg",
    bg: "#f4f4f4",
    title: "QuickMart — Grocery Shopping App",
    tags: "Flutter, Firebase, Mobile Commerce",
    href: "/portfolio/quickmart",
  },
  {
    img: "/images/portfolio-mobile/issue-ticketing.png",
    bg: "#f4f4f4",
    title: "Fault Desk — Issue Ticketing System",
    tags: "Flutter, Supabase, Role-Based Access",
    href: "/portfolio/fault-desk",
  },
];

export default function Portfolio() {
  return (
    <section className="r-bg-f sec-pad" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-8 vcenter text-center">
            <div className="heading-hz-btn">
              <span className="sub-heading mb15">QUALITY WORK</span>
              <h2 className="w-txt">
                Some of our <span className="ree-text rt40">Finest</span> Work
              </h2>
            </div>
          </div>
        </div>
        <h3 className="visually-hidden">Featured Work</h3>
        <div className="row mt60 justify-content-center">
          {items.map((it) => (
            <div className="col-lg-5 col-md-6" key={it.title}>
              <div className="fwb-main-x fwb-a">
                <div className="work-thumbnails">
                  <a href={it.href}>
                    <div style={{ width: "100%", aspectRatio: "4 / 3", background: it.bg }}>
                      <img
                        src={it.img}
                        alt={it.title}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </div>
                  </a>
                </div>
                <div className="work-details">
                  <p className="mb10">{it.tags}</p>
                  <h4>
                    <a href={it.href}>
                      {it.title}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center text-center mt60">
          <div className="col-lg-10">
            <div className="cta-heading-wide-bt">
              <h3 className="w-txt">Take a look of our quality work</h3>
              <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80 no-shadows">
                Get In Touch <i className="fas fa-arrow-right fa-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
