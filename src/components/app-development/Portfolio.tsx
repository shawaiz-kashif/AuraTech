"use client";

import { useRef } from "react";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";

const items = [
  {
    img: "/images/ourfinestwork1.jpg",
    bg: "#15161B",
    title: "EDI Integration — Infor WMS ↔ Company",
    tags: "Middleware, EDI, System Integration",
  },
  {
    img: "/images/ourfinestwork2.jpg",
    bg: "#F5F2DF",
    title: "WIMS — Warehouse Inventory Management",
    tags: "Invoicing, Billing, Palleting, UOM",
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
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  useOwlCarousel(ref, {
    items: 4,
    nav: true,
    dots: false,
    autoplay: false,
    loop: true,
    center: false,
    margin: 20,
    stagePadding: 90,
    autoplayTimeout: 35000,
    autoplayHoverPause: true,
    autoHeight: true,
    smartSpeed: 1000,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: { items: 1, stagePadding: 40 },
      520: { items: 1, stagePadding: 40 },
      768: { items: 2 },
      1200: { items: 3 },
      1400: { items: 4 },
      1600: { items: 4 },
    },
  });

  return (
    <section className="r-bg-f sec-pad" id="portfolio">
      <div className="container-fluid">
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
        <div className="row mt60">
          <div className="col-lg-12 vcenter">
            <div className="full-work-app owl-nv owl-carousel" ref={ref}>
              {items.map((it) => (
                <div className="fwb-main-x fwb-a" key={it.title}>
                  <div className="work-thumbnails">
                    <a href="/contact">
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "4 / 3",
                          background: it.bg,
                        }}
                      >
                        <img
                          src={it.img}
                          alt={it.title}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="work-details">
                    <p className="mb10">{it.tags}</p>
                    <h4>
                      <a href="/contact">{it.title}</a>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center mt60">
          <div className="col-lg-10">
            <div className="cta-heading-wide-bt">
              <h3 className="w-txt">Take a look of our quality work</h3>
              <a href="/contact" className="ree-btn ree-btn-grdt1 mw-80 no-shadows">
                Get In Touch <i className="fas fa-arrow-right fa-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
