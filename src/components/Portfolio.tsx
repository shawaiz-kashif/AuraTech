type PortfolioItem = {
  title: string;
  tags: string;
  wide?: boolean;
  img?: string;
  icon?: string;
  bg?: string;
  fg?: string;
  href?: string;
};

const items: PortfolioItem[] = [
  {
    img: "/images/ourfinestwork1.jpg",
    bg: "#15161B",
    title: "EDI Integration — Infor WMS ↔ Company",
    tags: "Middleware, EDI, System Integration",
    href: "/portfolio/edi-integration",
  },
  {
    img: "/images/ourfinestwork2.jpg",
    bg: "#F5F2DF",
    title: "WIMS — Warehouse Inventory Management",
    tags: "Invoicing, Billing, Palleting, UOM",
    href: "/portfolio/wims-warehouse-management",
  },
  {
    img: "/images/ourfinestwork3.jpg",
    bg: "#FBFCF7",
    title: "Server Rack Maintenance",
    tags: "Switches, Firewalls, Access Points",
  },
  {
    img: "/images/ourfinestwork4.jpg",
    bg: "#131F37",
    title: "Server Installation & IT Support",
    tags: "Active Directory, Networking, Desktop & L3 Support",
    wide: true,
  },
];

export default function Portfolio({ contactHref = "#contact" }: { contactHref?: string }) {
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
        <div className="row mt20 dark-bg">
          {items.map((it) => (
            <div
              className={`${it.wide ? "col-lg-12" : "col-lg-4 col-sm-6"} mt40 img-hover`}
              key={it.title}
            >
              <div className="work-thumbnail">
                <a href={it.href ?? contactHref}>
                  {it.img ? (
                    <div
                      style={{
                        aspectRatio: it.wide ? "9 / 2" : "4 / 3",
                        background: it.bg,
                      }}
                    >
                      <img
                        src={it.img}
                        alt={it.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: it.wide ? "9 / 2" : "4 / 3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: it.bg,
                        color: it.fg,
                      }}
                    >
                      <i className={it.icon} style={{ fontSize: it.wide ? "44px" : "36px" }}></i>
                    </div>
                  )}
                </a>
              </div>
              <div className="port-title mt20">
                <h4 className="mb5">
                  <a href={it.href ?? contactHref}>{it.title}</a>
                </h4>
                <p>{it.tags}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center text-center mt60">
          <div className="col-lg-10">
            <div className="cta-heading-wide-bt">
              <h3 className="w-txt">Take a look of our quality work</h3>
              <a href={contactHref} className="ree-btn ree-btn-grdt1 mw-80 no-shadows">
                Get In Touch <i className="fas fa-arrow-right fa-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
