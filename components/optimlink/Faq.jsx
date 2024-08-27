const Faq = () => {
  const faqData = [
    {
      question: "What is OptimLink?",
      answer:
        "OptimLink is a leading IT service provider based in Singapore, specializing in offering comprehensive IT service management and innovative solutions for small and medium enterprises (SMEs). We empower businesses to focus on their core goals by taking care of their IT needs.",
    },
    {
      question: "Who can benefit from OptimLink's services?",
      answer:
        "Our services are designed for small and medium enterprises (SMEs) as well as multinational corporations (MNCs) that seek to enhance their IT capabilities, improve efficiency, and secure their data.",
    },
    {
      question:
        "How does OptimLink ensure data security?",
      answer:
        "Data security is a top priority at OptimLink. We implement advanced security protocols, continuous monitoring, and compliance with industry standards to safeguard your data against threats and breaches.",
    },
    {
      question: "What makes OptimLink different from other IT service providers?",
      answer:
        "OptimLink stands out due to our expertise in advanced automation and artificial intelligence, our focus on delivering tailored solutions, and our commitment to helping businesses achieve their goals through optimized IT services.",
    },
    {
      question: "Where is OptimLink located?",
      answer:
        "OptimLink is based in Singapore, serving clients locally and internationally.",
    },
    {
      question: "Does OptimLink offer support after the service implementation?",
      answer:
        "Yes, OptimLink provides ongoing support and maintenance services to ensure your IT systems run smoothly and continue to meet your business needs.",
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
