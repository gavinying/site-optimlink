const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "Blog", url: "/blog" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Startup Essentials", url: "/services" },
      { label: "Cloud Hosting", url: "/services" },
      { label: "IT Consulting", url: "/services" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "DPO Toolkit", url: "/services" },
      { label: "AI Empowerment", url: "/services" },
      { label: "IoT Solution", url: "/services" },
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
