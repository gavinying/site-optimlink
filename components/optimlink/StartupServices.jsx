import Image from "next/image";

const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "Domain Registration",
    content:
      "A business domain boosts professionalism, strengthens branding, improves online visibility, enables custom emails, and provides ownership and control over your digital presence.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: "Business Email Setup",
    content:
      "A business email enhances professionalism, builds trust, strengthens brand identity, and offers better security and control over communications.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_83.svg",
    title: "Website Design",
    content:
      "Effective website design boosts user engagement, enhances brand perception, improves navigation, and increases conversions, driving overall business success.",
  },
  {
    id: 4,
    icon: "/images/icon/icon_110.svg",
    title: "Cross-border VPN",
    content:
      "Setting up a cross-border VPN ensures secure access, bypasses geo-restrictions, protects privacy, and enables safe remote work across global locations.",
  },
];

const StartupServices = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <Image
                width={30}
                height={30}
                src={item.icon}
                alt=""
                className="me-3"
              />{" "}
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartupServices;
