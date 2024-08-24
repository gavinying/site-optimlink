const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "Blog", url: "/optimlink/blog" },
      { label: "Contact", url: "/optimlink/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "DPO Toolkit", url: "/optimlink/services" },
      { label: "AI Empowerment", url: "/optimlink/services" },
      { label: "IoT Solution", url: "/optimlink/services" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Startup Essentials", url: "/optimlink/services" },
      { label: "Cloud Hosting", url: "/optimlink/services" },
      { label: "IT Consulting", url: "/optimlink/services" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
