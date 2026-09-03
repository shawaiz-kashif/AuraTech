export default function PageBanner({
  kicker,
  title,
  subtitle,
  image,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  if (image) {
    return (
      <section className="r-bg-a sec-pad" style={{ paddingTop: "170px" }}>
        <div className="container">
          <div className="row vcenter">
            <div className="col-lg-6">
              <div className="sec-heading">
                <span className="sub-heading mb15">{kicker}</span>
                <h1 className="mb15">{title}</h1>
                {subtitle && <p>{subtitle}</p>}
              </div>
            </div>
            <div className="col-lg-6 m-mt30">
              <img
                src={image}
                alt=""
                className="img-fluid"
                style={{ borderRadius: "16px", width: "100%" }}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="r-bg-a sec-pad" style={{ paddingTop: "170px" }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="sec-heading text-center">
              <span className="sub-heading mb15">{kicker}</span>
              <h1 className="mb15">{title}</h1>
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
