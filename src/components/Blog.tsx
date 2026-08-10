const posts = [
  {
    img: "/images/blogs/blog-img-1.jpg",
    title: "Best Technology for Mobile Application Development",
    delay: "200",
  },
  {
    img: "/images/blogs/blog-img-1a.jpg",
    title: "Exploring the Key Features of Laravel 7 Framework",
    delay: "500",
  },
  {
    img: "/images/blogs/blog-img-1b.jpg",
    title: "Best Technology for Mobile Application Development",
    delay: "800",
  },
];

export default function Blog({ className = "sec-pad" }: { className?: string }) {
  return (
    <section className={className} id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-heading text-center">
              <span className="sub-heading mb15">Latest from blog</span>
              <h2 className="mb15">
                <span className="ree-text rt40">Read</span> stories, tips, and our opinions on
                everything
              </h2>
              <p>
                Get updated with the latest trends in technology and know how your business can
                benefit from these technologies.
              </p>
            </div>
          </div>
        </div>
        <h3 className="visually-hidden">Blog Posts</h3>
        <div className="row mt30">
          {posts.map((p, i) => (
            <div className="col-lg-4 mt30" data-aos="fade-up" data-aos-delay={p.delay} key={i}>
              <div className="half-blog-card">
                <div className="half-blog-img">
                  <a href="#blog">
                    <img src={p.img} alt="blogs" className="img-fluid" loading="lazy" />
                  </a>
                </div>
                <div className="half-blog-content">
                  <div className="blog-quick-inf mb20">
                    <span>
                      <i className="far fa-calendar-alt"></i> 12 March 21
                    </span>{" "}
                    <span>
                      <i className="fas fa-clock"></i> 5 Min Read
                    </span>
                  </div>
                  <h4 className="mb15">
                    <a href="#blog">{p.title}</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
