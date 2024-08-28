import React from "react";

const processSteps = [
  {
    id: 1,
    question: "Planning and Design",
    answer:
      "Define requirements, create a project plan, and design the system architecture, refining as needed through iterations.",
  },
  {
    id: 2,
    question: "Development and Testing",
    answer:
      "Develop the software in iterative cycles, continuously testing and refining to ensure quality and functionality.",
  },
  {
    id: 3,
    question: "Deployment and Operation",
    answer:
      "Incrementally deploy the software, monitor performance, and iteratively update and maintain it based on user feedback and needs.",
  },
];

const WorkProcess = () => {
  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {processSteps.map((process) => (
        <div className="accordion-item" key={process.id}>
          <div className="accordion-header" id={`heading${process.id}`}>
            <button
              className={`accordion-button ${process.id === 1 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${process.id}`}
              aria-expanded={process.id === 1 ? "true" : "false"}
              aria-controls={`collapse${process.id}`}
            >
              {process.question}
            </button>
          </div>
          <div
            id={`collapse${process.id}`}
            className={`accordion-collapse collapse ${
              process.id === 1 ? "show" : ""
            }`}
            aria-labelledby={`heading${process.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{process.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkProcess;
