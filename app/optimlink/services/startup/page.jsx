import Link from "next/link";
import Image from "next/image";

import StartupServices from "@/components/optimlink/StartupServices";
import Faq from "@/components/optimlink/FaqStartupService";
import Social from "@/components/service-details/Social";

export const metadata = {
  title: "Startup Essentials | Optimlink",
};

const ServiceStartupPage = () => {
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
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Our Service
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Startup Essentials
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <Image
          width={208}
          height={135}
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <Image
          width={110}
          height={122}
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
            <div className="col-xl-9 col-lg-8 order-lg-1" data-aos="fade-left">
              <div className="service-details-meta ps-lg-5">
                <div className="fancy-feature-thirtySeven mt-20 lg-mt-120">
                  <div className="sc-title text-uppercase">Popular for startups</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    Services Included.
                  </h2>
                  <StartupServices />
                </div>
                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  Any Questions find here.
                </h3>
                <Faq />
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <div className="service-category mb-40">
                  <h4 className="tx-dark mb-15">Services</h4>
                  <ul className="style-none">
                    <li className="current-page">
                      <a href="#">Domain Registration</a>
                    </li>
                    <li>
                      <a href="#">Business Email Setup</a>
                    </li>
                    <li>
                      <a href="#">Website Design</a>
                    </li>
                    <li>
                      <a href="#">Cross-border VPN</a>
                    </li>
                  </ul>
                </div>
                {/* /.service-category */}

                <div className="sidebar-quote mb-50">
                  <Image
                    width={28}
                    height={24}
                    src="/images/icon/icon_150.svg"
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                    Optimlink offers a complete set of services for startups
                  </p>
                  {/* <div className="name">- Gavin Ying</div> */}
                </div>
                {/* /.sidebar-quote */}
                <h4 className="tx-dark mb-15">Share it.</h4>
                <Social />
              </div>
              {/* /.service-sidebar */}
            </div>
          </div>
        </div>
      </div>
      {/* /.service-details */}
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

export default ServiceStartupPage;
