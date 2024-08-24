"use client";

import Slider from "react-slick";

const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  const partnerLogos = [
    "/images/logo/google-cloud-logo2.png",
    "/images/logo/aws-logo2.png",
    "/images/logo/microsoft-azure-logo2.png",
    "/images/logo/cloudflare-logo2.png",
    "/images/logo/alibaba-logo2.png",
  ];

  return (
    <Slider {...settings} arrows={false}>
      {partnerLogos.map((logo, index) => (
        <div className="item" key={index}>
          <img src={logo} alt="" className="m-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default Partner;
