import Link from "next/link";

const FancyBanner = () => {
  const bannerData = [
    {
      title: "EVOLVING TECHNOLOGY",
      mainTitle: "Embrace IT Innovation, Step Into AI Era",
      description:
        "Leverage cutting-edge technology with OptimLink. Our expert solutions enhance your business’s growth, streamline operations, and ensure you stay ahead in today’s competitive digital landscape.",
      buttonLabel: "",
      illustration: "/images/assets/ils_07.png",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
      aos: "fade-left",
    },
    {
      title: "TRSUTED SECURITY",
      mainTitle: "Secure Your Data with Our Expertise.",
      description:
        "We prioritize user data security and privacy, use top-tier cloud platforms for robust protection, support both cloud and on-premise hosting.",
      buttonLabel: "Click here to learn more",
      illustration: "/images/assets/ils_06.png",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
      aos: "fade-right",
    },
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-200 lg-mt-100" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-5 col-lg-6 order-lg-${
                  data.illustrationPosition === "left" ? "first" : "last"
                }`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase">{data.title}</div>
                  <h2 className="main-title tx-dark fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-20 lh-lg mt-35 lg-mt-20">{data.description}</p>
                {data.buttonLabel !== "" && (
                  <Link
                    href="/services"
                    className="btn-fifteen fw-500 position-relative d-inline-flex align-items-center"
                  >
                    <span>{data.buttonLabel}</span>
                    <img
                      src="/images/icon/icon_69.svg"
                      alt={data.illustrationAlt}
                      className="ms-2"
                    />
                  </Link>
                )}
              </div>
              <div
                className={`col-xl-7 col-lg-6 col-md-8 m-auto order-lg-${
                  data.illustrationPosition === "left" ? "last" : "first"
                }`}
                data-aos={data.aos}
              >
                <div className="illustration-holder md-mt-60">
                  <img
                    src={data.illustration}
                    alt={data.illustrationAlt}
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
