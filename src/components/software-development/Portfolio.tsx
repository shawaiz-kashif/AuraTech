"use client";

import { useRef } from "react";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";

type PortfolioItem = {
  title: string;
  tags: string;
  href: string;
  img?: string;
  bg?: string;
};

const items: PortfolioItem[] = [
  {
    img: "/images/ourfinestwork1.jpg",
    bg: "#15161B",
    title: "PortX — EDI Integration",
    tags: "Middleware, EDI, System Integration",
    href: "/portfolio/edi-integration",
  },
  {
    img: "/images/ourfinestwork2.jpg",
    bg: "#F5F2DF",
    title: "WIMS — Warehouse Inventory Management",
    tags: "Invoicing, Billing, Palleting, UOM",
    href: "/portfolio/wims-warehouse-management",
  },
  {
    img: "/images/portfolio-software/rental-system.png",
    bg: "#ffffff",
    title: "GREENLINE Rentals — Car Rental Management",
    tags: "Next.js, Fleet & Booking Management",
    href: "/portfolio/greenline-rentals",
  },
  {
    img: "/images/portfolio-software/p2p.png",
    bg: "#ffffff",
    title: "ProcureToPay — Purchase Request Management",
    tags: "Purchase Requests, Approvals, Procurement Workflow",
    href: "/portfolio/procuretopay",
  },
  {
    img: "/images/portfolio-software/drop.png",
    bg: "#ffffff",
    title: "D.R.O.P — Data Retrieval & Operations Pipeline",
    tags: "Data Ingestion, Automated Pipelines, Reporting",
    href: "/portfolio/drop-pipeline",
  },
  {
    img: "/images/portfolio-software/inventus.png",
    bg: "#ffffff",
    title: "Inventus — IT Asset Inventory System",
    tags: "Asset Tracking, System Inventory, IT Management",
    href: "/portfolio/inventus",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  useOwlCarousel(ref, {
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    center: false,
    margin: 20,
    stagePadding: 90,
    autoplayTimeout: 4000,
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
      1400: { items: 3 },
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
                    <a
                      href={it.href}
                      target={it.href.startsWith("http") ? "_blank" : undefined}
                      rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "4 / 3",
                          background: it.bg ?? "#f4f4f4",
                          display: it.img ? undefined : "flex",
                          alignItems: it.img ? undefined : "center",
                          justifyContent: it.img ? undefined : "center",
                        }}
                      >
                        {it.img ? (
                          <img
                            src={it.img}
                            alt={it.title}
                            loading="lazy"
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                          />
                        ) : (
                          <i className="fas fa-code" style={{ fontSize: 40, color: "#c8c8c8" }}></i>
                        )}
                      </div>
                    </a>
                  </div>
                  <div className="work-details">
                    <p className="mb10">{it.tags}</p>
                    <h4>
                      <a
                        href={it.href}
                        target={it.href.startsWith("http") ? "_blank" : undefined}
                        rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {it.title}
                      </a>
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
