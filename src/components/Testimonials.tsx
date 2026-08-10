"use client";

import { useRef } from "react";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";

const clientLogos = [1, 2, 3, 4, 5, 6];

const reviews = [
  { name: "Lora Myka", company: "ABC Business" },
  { name: "Lora Myka", company: "ABC Business" },
];

const counters = [
  { value: 3500, suffix: "+", label: "Succeeded Projects" },
  { value: 9500, suffix: "K", label: "Working Hours" },
  { value: 184, suffix: "+", label: "Super Heroes" },
  { value: 155, suffix: "+", label: "Country Served" },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useOwlCarousel(ref, {
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    loop: true,
    center: true,
    margin: 20,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    autoHeight: true,
    smartSpeed: 2000,
  });

  return (
    <section className="dark-light-a dark-bg sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-review text-center">
              <ul className="row justify-content-center text-center">
                {clientLogos.map((n) => (
                  <li className="col-lg-2 col-md-3 col-sm-4 col-4" key={n}>
                    <div className="brand-logo">
                      <img
                        src={`/images/brand-logo/customer-logo-${n}.png`}
                        alt="clients"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt100">
          <div className="col-lg-6 vcenter">
            <div className="quote-text">
              <h2>
                We improve demand for efficiency and quality in entrepreneurship with creative
                mind.
              </h2>
            </div>
          </div>
          <div className="col-lg-6 vcenter">
            <div className="ree-card dark-deep no-shadows mt30 trust-review owl-carousel" ref={ref}>
              {reviews.map((r, i) => (
                <div className="items" key={i}>
                  <div className="review-text">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type.
                    </p>
                  </div>
                  <div className="ree-row-set mt30">
                    <div className="media vcenter">
                      <div className="ree-icon-set img-round80">
                        <img src="/images/users/user4.jpg" alt="img" className="img-fluid" loading="lazy" />
                      </div>
                      <div className="ree-details-set user-info">
                        <p className="demoted-h5">{r.name}</p>
                        <p>{r.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row mt100 dark-bg">
          {counters.map((c) => (
            <div className="col-lg-3 col-sm-6 col-6 mt30" key={c.label}>
              <div className="counter-c-a">
                <h2>
                  <span className="counter">{c.value}</span> <span>{c.suffix}</span>
                </h2>
                <p>{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
