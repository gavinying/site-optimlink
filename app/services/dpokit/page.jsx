import Link from "next/link";
import Faq from "@/components/optimlink/FaqDpokit";
import DownloadModal from "@/components/optimlink/DownloadModal";
import ProgressBar from "@/components/service-details/ProgressBar";
import Social from "@/components/service-details/Social";

export const metadata = {
  title: "DPO Toolkit | Optimlink",
};

const ServiceDpoPage = () => {
  return (
    <>
      {/*
      =============================================
      Feature Section Fifty One
      ==============================================
      */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-six mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  DPO Toolkit
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Simplifying Compliance
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>

      {/*
      =============================================
        Service Details
      ==============================================
      */}
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">PDPA</h2>
                <p className="text-lg tx-dark mb-50">
                  Under the Personal Data Protection Act 2012 (
                  <a
                    href="https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act"
                    className="text-primary underline"
                  >
                    PDPA
                  </a>
                  ), companies must establish and enforce practices and policies
                  to comply with PDPA requirements. This includes appointing at
                  least one individual as the Data Protection Officer (
                  <a
                    href="https://www.pdpc.gov.sg/overview-of-pdpa/data-protection/business-owner/data-protection-officers"
                    className="text-primary underline"
                  >
                    DPO
                  </a>
                  ) to manage these data protection responsibilities.
                </p>

                <h2 className="main-title tx-dark mb-30">Tools for DPO</h2>
                <p className="text-lg tx-dark mb-4">
                  The DPO holds significant accountability in ensuring data
                  protection compliance. To effectively meet these
                  responsibilities, the DPO needs the right tools to help manage
                  and ensure compliance with data protection regulations. Here
                  are key components that might be included:
                </p>
                <ul className="style-none list-item">
                  <li>
                    <strong>Compliance Checklist: </strong>
                    Detailed lists to ensure adherence to data protection laws
                    like GDPR, CCPA, etc.
                  </li>
                  <li>
                    <strong>Policy Templates: </strong>
                    Sample policies and procedures for data protection, data
                    breach response, data retention, and privacy notices.
                  </li>
                  <li>
                    <strong>Risk Assessment Tools: </strong>
                    Templates and guidelines for conducting Data Protection
                    Impact Assessments (DPIAs) and risk assessments.
                  </li>
                  <li>
                    <strong>Training Materials: </strong>
                    Resources for training staff on data protection principles,
                    data handling, and breach response.
                  </li>
                  <li>
                    <strong>Data Inventory Tools: </strong>
                    Tools for cataloging and mapping data processing activities
                    and data flows.
                  </li>
                  <li>
                    <strong>Incident Response Plan: </strong>A structured plan
                    for managing data breaches, including communication
                    strategies and notification procedures.
                  </li>
                  <li>
                    <strong>Audit Tools: </strong>
                    Checklists and templates for conducting internal audits of
                    data protection practices.
                  </li>
                  <li>
                    <strong>Record-Keeping Tools: </strong>
                    Systems for maintaining records of processing activities,
                    data subject requests, and compliance activities.
                  </li>
                  <li>
                    <strong>Legal Updates: </strong>
                    Information on recent changes in data protection laws and
                    regulations.
                  </li>
                  <li>
                    <strong>Communication Templates: </strong>
                    Pre-drafted templates for communicating with data subjects,
                    regulators, and stakeholders about data protection matters.
                  </li>
                  <li>
                    <strong>Vendor Management Tools: </strong>
                    Resources for assessing and managing third-party data
                    processing and ensuring they comply with data protection
                    requirements.
                  </li>
                </ul>
                <img
                  src="/images/media/img_95.jpg"
                  alt="media"
                  className="main-img-meta"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas interdum, orci at dapibus, massa ante pharetra
                  tellus. Maecenas interdum, orci at euismod dapibus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  interdum.
                </p>
                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  Any Questions find here.
                </h3>
                <Faq />
              </div>
            </div>

            {/* /.download-checklist */}
            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <div className="service-category mb-40">
                  <h4 className="tx-dark mb-15">PDPA Checklist</h4>
                  <p>Download our free PDPA compliance checklist and start implementing it today.</p>
                  <DownloadModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      =====================================================
        Fancy Short Banner Sixteen
      =====================================================
      */}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDpoPage;
