"use client";

import { useRef } from "react";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";

const services = [
  {
    href: "#services",
    img: "/images/others/service-1.jpg",
    kicker: "Development",
    title: "Web, Mobile & Software Development",
    tags: ["WEB", "MOBILE", "SOFTWARE", "ML & TRAINING"],
  },
  {
    href: "#services",
    img: "/images/others/service-2.jpg",
    kicker: "Integration",
    title: "EDI & Warehouse Systems Integration",
    tags: ["EDI", "WMS", "MIDDLEWARE"],
  },
  {
    href: "#services",
    img: "/images/others/service-3.jpg",
    kicker: "Infrastructure",
    title: "Server, Network & Rack Infrastructure",
    tags: ["RACKS", "NETWORKING", "IT SUPPORT"],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  useOwlCarousel(ref, {
    items: 3,
    nav: false,
    dots: false,
    autoplay: false,
    loop: true,
    center: false,
    margin: 20,
    autoplayTimeout: 2500000,
    autoplayHoverPause: true,
    autoHeight: true,
    smartSpeed: 1500,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: { items: 1 },
      520: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
      1400: { items: 3 },
      1600: { items: 3 },
    },
  });

  return (
    <div className="creative-service r-bg-x" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="visually-hidden">Our Services</h2>
            <div className="ree-ca-service owl-carousel" ref={ref}>
              {services.map((s) => (
                <div className="ree-full-bg-card img-hover" key={s.title}>
                  <a href={s.href} className="full-card-link bd-rds">
                    <div className="img-full-bgimg">
                      <img src={s.img} alt="img" className="img-hor" />
                    </div>
                    <div className="full-card--title dark-bg sevctxt">
                      <span className="sub-heading2 mb15">{s.kicker}</span>
                      <h3>{s.title}</h3>
                    </div>
                  </a>
                  <div className="bottom-tags">
                    {s.tags.map((tag, i) => (
                      <span key={tag}>
                        {i > 0 && "|"}
                        <a href="#">{tag}</a>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
