"use client";

import { useActiveStep } from "@/hooks/useActiveStep";

const steps = [
  {
    label: "Discover",
    body: "We start with how your business actually works today — the workflows, the constraints, the systems already in place — before writing a line of code.",
  },
  {
    label: "Design & Build",
    body: "Architecture, UI, and development proceed deliberately. Every decision — native or hybrid, custom or off-the-shelf — has a reason, not a template.",
  },
  {
    label: "Integrate & Test",
    body: "We connect it to the systems you already run — ERP, WMS, CRM — and test under real conditions, not just a staging demo.",
  },
  {
    label: "Support",
    body: "Launch isn't the finish line. We maintain the software, monitor the infrastructure, and keep both running long after release.",
  },
];

export default function Method() {
  const { active, setRef } = useActiveStep(steps.length);

  return (
    <section className="about-method sec-pad r-bg-a">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="method-sticky">
              <span className="sub-heading mb15">Our Method</span>
              <h2 className="mb15">
                From brief to <span className="ree-text rt40">running system</span>.
              </h2>
              <p className="demoted-h4-light">
                Four steps, always in order. Each one finished before the next begins.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="method-steps">
              {steps.map((step, i) => (
                <div
                  key={step.label}
                  ref={setRef(i)}
                  className={`method-step${i === active ? " is-active" : ""}`}
                >
                  <span className="method-step-num">
                    {String(i + 1).padStart(2, "0")} &middot; {step.label.toUpperCase()}
                  </span>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
