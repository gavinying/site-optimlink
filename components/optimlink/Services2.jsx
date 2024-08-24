import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData = [
  {
    id: 1,
    icon: "/images/icon/icon_63.svg",
    iconSrc: "/images/icon/icon_02.svg",
    bgColor: "rgba(100, 219, 226, 0.18)",
    title: "Startup Essentials",
    description:
      "Domain Registration, Business Email Setup, Website Design, VPN Setup.",
    delay: 0,
  },
  {
    id: 2,
    icon: "/images/icon/icon_64.svg",
    iconSrc: "/images/icon/icon_156.svg",
    bgColor: "rgba(255, 171, 51, 0.18)",
    title: "Managed IT Services",
    description:
      "Cloud Hosting, Network Management, Cybersecurity, Data Backup and Recovery.",
    delay: 200,
  },
  {
    id: 3,
    icon: "/images/icon/icon_65.svg",
    iconSrc: "/images/icon/icon_157.svg",
    bgColor: "rgba(255, 160, 194, 0.18)",
    title: "DPO Toolkit",
    description:
      "Data Protection Policy Templates, Compliance Checklists, Data Mapping Tools.",
    delay: 300,
  },
  {
    id: 4,
    icon: "/images/icon/icon_66.svg",
    iconSrc: "/images/icon/icon_158.svg",
    bgColor: "rgba(56, 232, 255, 0.1)",
    title: "AI Empowerment",
    description:
      "Sales Bot Design, Customer Support Bot Design, Private Assistant Agent Design.",
    delay: 0,
  },
  {
    id: 5,
    icon: "/images/icon/icon_67.svg",
    iconSrc: "/images/icon/icon_159.svg",
    bgColor: "rgba(108, 55, 221, 0.1)",
    title: "IoT Solutions",
    description:
      "IoT Connectivity Design, Remote Device Management, Digital Twins.",
    delay: 200,
  },
  {
    id: 6,
    icon: "/images/icon/icon_68.svg",
    iconSrc: "/images/icon/icon_160.svg",
    bgColor: "rgba(68, 255, 0, 0.18)",
    title: "IT Consulting and Strategy",
    description:
      "Technology Assessments, Digital Transformation Advisory, Virtual CIO Services.",
    delay: 300,
  },
];

const Block2 = () => {
  return (
    <>
      {cardData.map((card) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={card.delay}
          key={card.id}
        >
          <div className="card-style-one pe-xxl-5 position-relative mb-90 md-mb-70">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: card.bgColor }}
            >
              <Image
                width={32}
                height={40}
                src={card.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              <Link
                href="/pages-menu/service-details"
                className="tran3s tx-dark"
              >
                {card.title}
              </Link>
            </h5>
            <p className="mb-25">{card.description}</p>
            <Link href="/pages-menu/service-details">
              <Image
                width={41}
                height={14}
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
    </>
  );
};

export default Block2;
