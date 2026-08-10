"use client";

import { useRef } from "react";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";

const clientLogos = [1, 2, 3, 4, 5, 6];

const reviews = [
  {
    quote:
      "“Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company.”",
    body: "I am delighted with our new website. A1 service and design by Reevan. You can go with the Web Design Company, and I 100% recommend them to anyone. The perfect company to go to for your ideal website and digital marketing.",
    name: "Anne Fibbiyon",
    location: "Jaipur, Rajasthan",
  },
  {
    quote:
      "“Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company.”",
    body: "I was facing multiple issues with my old website and that i discovered reevan. they resolved all the problems in the website they also helped me with marketing. which has helped me to acquire more customers. Retention on the website has also increased.",
    name: "Mayank Jhalana",
    location: "Ajamer, Rajasthan",
  },
  {
    quote:
      "“Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company.”",
    body: "I was facing multiple issues with my old website and that i discovered reevan. they resolved all the problems in the website they also helped me with marketing. which has helped me to acquire more customers. Retention on the website has also increased.",
    name: "Eric Shun",
    location: "Nagpur, India",
  },
  {
    quote:
      "“Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company.”",
    body: "I was facing multiple issues with my old website and that i discovered reevan. they resolved all the problems in the website they also helped me with marketing. which has helped me to acquire more customers. Retention on the website has also increased.",
    name: "Gene Jacket",
    location: "Tuklic, UK",
  },
  {
    quote:
      "“Reevan build my startup business a great website that really helps current and potential customers get a good feel for my company.”",
    body: "I was facing multiple issues with my old website and that i discovered reevan. they resolved all the problems in the website they also helped me with marketing. which has helped me to acquire more customers. Retention on the website has also increased.",
    name: "Marion Gaze",
    location: "Olivia, USA",
  },
];

const avatars = [
  { img: "/images/users/user5.jpg", cls: "tcc1" },
  { img: "/images/users/user4.jpg", cls: "tcc2" },
  { img: "/images/users/user3.jpg", cls: "tcc3" },
  { img: "/images/users/user2.jpg", cls: "tcc4" },
  { img: "/images/users/user1.jpg", cls: "tcc5" },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useOwlCarousel(ref, {
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    dotsContainer: "#testimonials-avatar",
    smartSpeed: 500,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
      1400: { items: 1 },
    },
  });

  return (
    <section className="r-bg-c sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-review text-center">
              <ul className="row justify-content-center text-center mb60">
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
              <h2 className="mb50">
                Our <span className="ree-text rt40">clients</span>{" "}
                <span className="ree-text rt40">praise</span> us for our great results
              </h2>
              <h3 className="visually-hidden">Client Testimonials</h3>
              <div className="testimonial-card-b owl-carousel mt30" ref={ref}>
                {reviews.map((r) => (
                  <div className="review-slider" key={r.name}>
                    <h4 className="mb20">{r.quote}</h4>
                    <p>{r.body}</p>
                    <div className="reviewers mt30">
                      <div className="reviewers-nam">
                        <h4>{r.name}</h4>
                        <p>{r.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="clients-creative-pic mt30">
                <div className="owl-dots" id="testimonials-avatar">
                  {avatars.map((a, i) => (
                    <button
                      className={`dot-c1 ${a.cls} owl-dot mt30${i === 2 ? " active" : ""}`}
                      key={a.cls}
                    >
                      <img alt="image" src={a.img} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
