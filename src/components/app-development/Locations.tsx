const locations = [
  {
    icon: "/images/icons/new-delhi.svg",
    name: "India",
    address: "Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456",
  },
  {
    icon: "/images/icons/burj-al-arab.svg",
    name: "Dubai",
    address: "Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456",
  },
  {
    icon: "/images/icons/big-ben.svg",
    name: "UK",
    address: "Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456",
  },
];

const contactIcons = [
  { icon: "fas fa-map-marker-alt", title: "Map Location" },
  { icon: "fas fa-phone-alt", title: "Phone Number" },
  { icon: "fas fa-envelope", title: "Email Address" },
  { icon: "fab fa-skype", title: "Skype Id" },
];

export default function Locations() {
  return (
    <div className="location-home sec-pad">
      <div className="container">
        <div className="row justify-content-center">
          {locations.map((loc) => (
            <div className="col-lg-4" key={loc.name}>
              <div className="location-block- mt60">
                <div className="loc-icon-nam">
                  <img src={loc.icon} alt={loc.name} />
                  <p>
                    <span className="ree-text rt40">{loc.name}</span>
                  </p>
                </div>
                <p className="pt20 pb20">{loc.address}</p>
                <div className="loc-contct">
                  {contactIcons.map((c) => (
                    <a
                      href="javascript:void(0)"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline rount-btn"
                      title={c.title}
                      key={c.title}
                    >
                      <i className={c.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
