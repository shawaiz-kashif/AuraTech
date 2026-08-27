export default function PageBanner({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
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
