"use client";

import { useRef } from "react";
import { useOwlCarousel } from "@/hooks/useOwlCarousel";

const items = [
  {
    img: "/images/portfolio-web/peopleorg-solutions.jpg",
    title: "People & Organization Solutions — HR Consulting Website",
    tags: "Business Website, Consulting",
    href: "https://peopleorgsolutions.com/",
  },
  {
    img: "/images/portfolio-web/aik-solutions.jpg",
    title: "AK Solutions — ISP Business Website",
    tags: "Business Website, Lead Generation",
    href: "https://aiksolutionsllc.com/",
  },
  {
    img: "/images/portfolio-web/meridian-logistics.jpg",
    title: "Meridian Logistics — Corporate Website",
    tags: "Corporate Website, Freight & Logistics",
    href: "https://meridianlogistics.com.pk/",
  },
  {
    img: "/images/portfolio-web/finrisers.jpg",
    title: "Finrisers — Financial Advisory Website",
    tags: "Business Website, Consulting",
    href: "https://finrisers.com/",
  },
  {
    img: "/images/portfolio-web/solesavvy.jpg",
    title: "SoleSavvy — E-Commerce Storefront",
    tags: "E-Commerce, Frontend, UI/UX",
    href: "https://shawaiz-kashif.github.io/SoleSavvy/",
  },
  {
    img: "/images/portfolio-web/grocery-rbac.jpg",
    title: "Grocery Store RBAC Dashboard",
    tags: "Flask, SQL Server, Role-Based Access Control",
    href: "https://shawaiz-kashif.github.io/grocery-store-rbac-dashboard/",
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
              <span className="sub-heading mb15">OUR WORK</span>
              <h2 className="w-txt">
                Sites we&apos;ve <span className="ree-text rt40">built</span>
              </h2>
            </div>
          </div>
        </div>
        <h3 className="visually-hidden">Web Development Portfolio</h3>
        <div className="row mt60">
          <div className="col-lg-12 vcenter">
            <div className="full-work-app owl-nv owl-carousel" ref={ref}>
              {items.map((it) => (
                <div className="fwb-main-x fwb-a" key={it.title}>
                  <div className="work-thumbnails">
                    <a href={it.href} target="_blank" rel="noopener noreferrer">
                      <div style={{ width: "100%", aspectRatio: "4 / 3" }}>
                        <img
                          src={it.img}
                          alt={it.title}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="work-details">
                    <p className="mb10">{it.tags}</p>
                    <h4>
                      <a href={it.href} target="_blank" rel="noopener noreferrer">
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
              <h3 className="w-txt">Want a site like this for your business?</h3>
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
