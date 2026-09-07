type FaqItem = { q: string; a: string };

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="r-bg-a sec-pad" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="sec-heading text-center">
              <span className="sub-heading mb15">FAQ</span>
              <h2>
                Common <span className="ree-text rt40">Questions</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt40">
          <div className="col-lg-9">
            {faqs.map((f) => (
              <details key={f.q} className="ree-card r-bg-c mt20" style={{ padding: "20px 30px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "18px" }}>
                  {f.q}
                </summary>
                <p className="mt15" style={{ margin: 0 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
