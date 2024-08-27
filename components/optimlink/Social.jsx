const Social = () => {
  const socialIcons = [
    {
      href: "#",
      iconClass: "fab fa-facebook-square",
    },
    {
      href: "#",
      iconClass: "fab fa-whatsapp",
    },
    {
      href: "#",
      iconClass: "fab fa-twitter-square",
    },
    {
      href: "#",
      iconClass: "fab fa-linkedin",
    },
  ];

  return (
    <ul className="d-flex justify-content-evenly social-icon style-none">
      {socialIcons.map((socialIcon, index) => (
        <li key={index}>
          <a href={socialIcon.href}>
            <i className={`${socialIcon.iconClass} fa-2x`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
