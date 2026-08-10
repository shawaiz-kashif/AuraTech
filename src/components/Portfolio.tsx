const items = [
  { img: "/images/portfolio/creative-work-1.jpg", col: "col-lg-4 col-sm-4" },
  { img: "/images/portfolio/creative-work-2.jpg", col: "col-lg-4 col-sm-4" },
  { img: "/images/portfolio/creative-work-3.jpg", col: "col-lg-4 col-sm-4" },
  { img: "/images/portfolio/creative-work-4.jpg", col: "col-lg-8 col-sm-8" },
  { img: "/images/portfolio/creative-work-5.jpg", col: "col-lg-4 col-sm-4" },
];

export default function Portfolio() {
  return (
    <section className="dark-light-a sec-pad" id="portfolio">
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
          {items.map((it, i) => (
            <div className={`${it.col} mt40 img-hover`} key={i}>
              <div className="work-thumbnail">
                <a href="#">
                  <img src={it.img} alt="portfolio reevan" className="img-fluid" loading="lazy" />
                </a>
              </div>
              <div className="port-title mt20">
                <h4 className="mb5">
                  <a href="#">Creative business card</a>
                </h4>
                <p>UX, UI, Graphic Design</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center text-center mt60">
          <div className="col-lg-10">
            <div className="cta-heading-wide-bt">
              <h3 className="w-txt">Take a look of our quality work</h3>
              <a href="#portfolio" className="ree-btn ree-btn-grdt1 mw-80 no-shadows">
                View All Work <i className="fas fa-arrow-right fa-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
