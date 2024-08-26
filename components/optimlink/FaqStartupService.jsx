const Faq = () => {
  const faqData = [
    {
      question: "What is domain registration?",
      answer:
        "Domain registration is the process of acquiring a unique web address (domain name) that identifies your website on the internet. It’s essentially the first step to establishing your online presence.",
    },
    {
      question: "How long does it take to register a domain?",
      answer:
        "Domain registration is usually completed within a few minutes to a few hours. Once registered, the domain name is yours for the period specified in the registration agreement.",
    },
    {
      question: "How to setup a business email?",
      answer:
        "Business email setup involves configuring email accounts that use your domain name (e.g., yourname@yourcompany.com), providing a professional appearance and additional features compared to standard email services.",
    },
    {
      question:
        "Can I access my business email on multiple devices?",
      answer:
        "Yes, you can access your business email on multiple devices, including smartphones, tablets, and computers, using email clients or webmail.",
    },
    {
      question: "How long does it take to design a website?",
      answer:
        "The timeline for website design varies depending on complexity. A basic website may take a few weeks, while a more complex site with custom features could take several months.",
    },
    {
      question: "What is a cross-border VPN?",
      answer:
        "A cross-border VPN (Virtual Private Network) allows users to securely connect to a corporate network from different geographic locations. It encrypts your internet traffic and provides a secure connection in a company accross different regions.",
    },
  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
