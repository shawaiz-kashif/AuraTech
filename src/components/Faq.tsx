const faqs = [
  {
    q: "What does AuraTech actually do?",
    a: "We build custom software — web, mobile, and business systems — integrate enterprise systems like EDI and warehouse management, and manage the servers, networking, and infrastructure that keep it all running. One team, not separate vendors for each piece.",
  },
  {
    q: "Do you only build the app, or do you also handle the infrastructure it runs on?",
    a: "Both. We handle the full lifecycle — architecture, development, deployment, and the servers, networking, and IT support afterward. Most agencies stop at launch; we don't.",
  },
  {
    q: "What kind of work have you actually delivered?",
    a: "Real projects in warehouse and inventory management, EDI integration between enterprise systems, and IT infrastructure support. See our Portfolio for the specific work.",
  },
  {
    q: "Do you offer support after a project launches?",
    a: "Yes. Software updates, backend maintenance, and IT support don't stop once you ship — that's part of how we work, not an add-on.",
  },
  {
    q: "How do I get started?",
    a: "Reach out through the Contact page with a bit about your project. We'll follow up to talk through scope, timeline, and next steps.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
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
