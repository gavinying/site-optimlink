const Faq = () => {
  const faqData = [
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
