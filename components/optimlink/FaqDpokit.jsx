const Faq = () => {
  const faqData = [
    {
      question: "My business is not data-centric, why do I need a DPO?",
      answer:
        "Having a DPO is a legal requirement, even if you handle minimal personal information. As an SME, data-related practices like customer data collection, sharing with third-party vendors, and managing websites are common. OptimLink will help you identify the key areas that need attention to avoid fines and penalties.",
    },
    {
      question: "What is the DPO toolkit?",
      answer:
        "The DPO toolkit is a set of essential resources designed to help Data Protection Officers manage data protection and compliance efficiently. It includes checklists, policy templates, risk assessment guides, and more.",
    },
    {
      question: "Why the toolkit can help DPOs?",
      answer:
        "The DPO toolkit streamlines data protection tasks by providing key resources in one place. With OptimLink's DPO Toolkit, DPOs can have a good starting base to ensure compliance, manage risks, and respond to data breaches effectively, backed by the latest regulatory tools and templates.",
    },
    {
      question: "How does the DPO Toolkit help with PDPA compliance?",
      answer:
        "The DPO Toolkit provides step-by-step guidance, templates, and checklists that align with PDPA requirements, making it easier for businesses to meet their obligations.",
    },
    {
      question: "Can the DPO Toolkit be customized for our organization’s needs?",
      answer:
        "Yes, the toolkit is flexible and can be tailored to fit the specific needs of your organization, whether you’re a small business or a large enterprise.",
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
