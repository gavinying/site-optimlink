import Link from "next/link";

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
    title: "IoT Solution",
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

const Services = () => {
  return (
    <>
      {cardData.map((service, index) => (
        <div
          className="col-lg-4 col-sm-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={service.delay}
          key={index}
        >
          <div className="card-style-eleven text-center text-lg-start w-100 mt-110 lg-mt-50 xs-mt-40">
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <img
                src={service.icon}
                alt="icon"
                className="lazy-img m-auto"
              />
            </div>
            <h4 className="mt-30 mb-20 lg-mb-10">{service.title}</h4>
            <p>{service.description}</p>
            <Link
              href="/pages-menu/service-details"
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Services;
